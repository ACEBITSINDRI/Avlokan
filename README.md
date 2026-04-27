# AVLOKAN 2026

Official website for **AVLOKAN 2026** — the annual technical fest organised by ACE (Association of Civil Engineers), Department of Civil Engineering, BIT Sindri, Dhanbad.

🔗 **Live:** [avlokan.acebits.in](https://avlokan.acebits.in/)

---

## What is AVLOKAN?

AVLOKAN is a 2-day inter-college technical fest that brings together engineering students for hands-on competitions, hackathons, and technical challenges focused on civil engineering and innovation.

### Events
- **Mega Hackathon** — 12-hour coding sprint across 5 tracks (44 problem statements)
- **Paper Presentation** — Research paper presentations judged by faculty & industry experts
- **AutoCAD Drafting Contest** — Timed drafting challenge
- **Civil Engineering Quiz** — Multi-round quiz competition
- **Survey Treasure Hunt** — Campus-wide survey instrument based treasure hunt

---

## Tech Stack

**Frontend:** HTML, CSS, JavaScript (vanilla)  
**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas  
**File Uploads:** Cloudinary + Multer  
**Hosting:** GitHub Pages (frontend), Render (backend)

---

## Project Structure

```
├── frontend/
│   ├── index.html          # Main website
│   ├── gallery.html        # Full gallery page
│   ├── css/styles.css       # All styles
│   ├── js/script.js         # Main JS (countdown, forms, tabs)
│   ├── js/gallery-app.js    # Gallery page logic
│   └── assets/              # Images, logos, PDFs
│
├── backend/
│   ├── server.js            # Express server
│   ├── models/              # Mongoose schemas
│   └── .env                 # Environment variables (not committed)
│
└── .github/workflows/       # GitHub Pages deployment
```

---

## Running Locally

**Backend:**
```bash
cd backend
npm install
node server.js
```
Runs on `localhost:3000`. Needs a `.env` file with MongoDB URI and Cloudinary keys.

**Frontend:**
```bash
cd frontend
npx serve .
```
Opens on `localhost:8080` (or any static server).

---

## Team

Built & maintained by **ACE, BIT Sindri** — Department of Civil Engineering.

---

*AVLOKAN — "to observe, to discover, to innovate."*
