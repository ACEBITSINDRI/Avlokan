const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    branch: { type: String, trim: true }
});

const registrationSchema = new mongoose.Schema({
    // Personal Details
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    whatsapp: { type: String, trim: true },
    college: { type: String, required: true, trim: true },
    branch: { type: String, required: true, trim: true },
    year: { type: String, required: true, enum: ['1st', '2nd', '3rd', '4th', 'PG'] },

    // Event Selection
    event: {
        type: String,
        required: true,
        enum: ['hackathon', 'paper-presentation', 'autocad-contest', 'civil-quiz', 'survey-hunt']
    },

    // Team Details (for Hackathon / Survey Hunt / Quiz / Paper)
    teamName: { type: String, trim: true },
    teamLeaderName: { type: String, trim: true },
    teamSize: { type: Number, min: 1, max: 4 },
    teamMembers: [teamMemberSchema],

    // Hackathon-specific
    track: {
        type: String,
        enum: ['TRK-A', 'TRK-B', 'TRK-C', 'TRK-D', 'TRK-E', '']
    },
    problemStatement: { type: String, trim: true },
    presentationUrl: { type: String, trim: true },

    // Meta
    registeredAt: { type: Date, default: Date.now },
    status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'rejected'] }
});

registrationSchema.index({ email: 1, event: 1 }, { unique: true });

module.exports = mongoose.model('Registration', registrationSchema);
