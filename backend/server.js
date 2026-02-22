require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const os = require('os');
const Registration = require('./models/Registration');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Multer setup for file upload (memory storage)
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max (Cloudinary free plan limit)
    fileFilter: (req, file, cb) => {
        const allowed = [
            'application/pdf',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/zip'
        ];
        if (allowed.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only PDF, PPT, PPTX, and ZIP files are allowed.'), false);
        }
    }
});

// Cloudinary configuration
cloudinary.config({
    cloud_name: 'dethhxmyj',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected — AVLOKAN database'))
    .catch(err => {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
    });

// ─── Routes ───────────────────────────────────────────

// POST /api/upload-presentation — Upload PPT to Cloudinary
app.post('/api/upload-presentation', upload.single('presentation'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded.' });
        }

        // Write buffer to a temp file for chunked upload
        const tmpPath = path.join(os.tmpdir(), `avlokan_${Date.now()}_${req.file.originalname.replace(/[^a-zA-Z0-9.]/g, '_')}`);
        fs.writeFileSync(tmpPath, req.file.buffer);

        // Upload to Cloudinary with chunked upload (bypasses 10MB single-upload limit)
        const result = await cloudinary.uploader.upload(tmpPath, {
            resource_type: 'raw',
            folder: 'avlokan-2026/presentations',
            public_id: `ppt_${Date.now()}_${req.file.originalname.replace(/[^a-zA-Z0-9.]/g, '_')}`,
            timeout: 120000,
            chunk_size: 6000000 // 6MB chunks for large files
        });

        // Clean up temp file
        fs.unlinkSync(tmpPath);

        res.json({
            success: true,
            url: result.secure_url,
            public_id: result.public_id,
            message: 'Presentation uploaded successfully!'
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ success: false, message: 'Upload failed: ' + error.message });
    }
});

// POST /api/register — New registration
app.post('/api/register', async (req, res) => {
    try {
        const { fullName, email, phone, whatsapp, college, branch, year, event,
            teamName, teamLeaderName, teamSize, teamMembers, track, problemStatement, presentationUrl } = req.body;

        // Validate required fields
        if (!fullName || !email || !phone || !college || !branch || !year || !event) {
            return res.status(400).json({ success: false, message: 'All required fields must be filled.' });
        }

        // Validate team events
        if (['hackathon', 'survey-hunt'].includes(event)) {
            if (!teamName || !teamSize) {
                return res.status(400).json({ success: false, message: 'Team name and size are required for this event.' });
            }
        }

        // Check duplicate
        const existing = await Registration.findOne({ email, event });
        if (existing) {
            return res.status(409).json({ success: false, message: 'You have already registered for this event.' });
        }

        const registration = new Registration({
            fullName, email, phone, whatsapp, college, branch, year, event,
            teamName, teamLeaderName, teamSize, teamMembers, track, problemStatement, presentationUrl
        });

        await registration.save();

        res.status(201).json({
            success: true,
            message: 'Registration successful! You will receive a confirmation email soon.',
            registrationId: registration._id
        });
    } catch (error) {
        console.error('Registration error:', error);
        if (error.code === 11000) {
            return res.status(409).json({ success: false, message: 'Duplicate registration detected.' });
        }
        res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
    }
});

// GET /api/registrations — List all (admin)
app.get('/api/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find().sort({ registeredAt: -1 });
        res.json({ success: true, count: registrations.length, data: registrations });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// GET /api/stats — Registration counts
app.get('/api/stats', async (req, res) => {
    try {
        const total = await Registration.countDocuments();
        const byEvent = await Registration.aggregate([
            { $group: { _id: '$event', count: { $sum: 1 } } }
        ]);
        res.json({ success: true, total, byEvent });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.listen(PORT, () => {
    console.log(`🚀 AVLOKAN Backend running on http://localhost:${PORT}`);
});
