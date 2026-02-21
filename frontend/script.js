/* ============================================
   AVLOKAN 2026 — JavaScript
   ============================================ */

// ========== PROBLEM STATEMENTS DATA ==========
const problemStatements = {
    trkA: [
        { id: "P1", title: "Innovative Cooling Solution for Parked Vehicles in Hot Climates", type: "Hardware / Software", desc: "Design a sustainable, green-energy-based solution that actively maintains interior temperature of a parked vehicle at ~25°C, regardless of external heat. Must use renewable energy, be compact and retrofit-friendly.", constraints: ["Must operate in direct sunlight & high ambient temps", "Compliant with regulatory norms", "Use renewable energy sources (solar, thermoelectric, passive cooling)", "Compact, vehicle-compatible, retrofit-friendly"] },
        { id: "P2", title: "Passenger Comfort Modeling in an Automotive Suspension System", type: "Simulation / Software", desc: "Establish and validate a mathematical model that accurately represents passenger comfort parameters within a defined suspension system under real-time driving conditions." },
        { id: "P5", title: "Standardised Battery Swapping Station for All EVs", type: "Hardware / Software", desc: "Design a standardised, user-friendly battery swapping station supporting all EV types. Integrate with fuel station infrastructure, include battery management, comply with regulations, and offer quick swapping with digital payment." },
        { id: "P7", title: "On-Road Dynamic Automobile Pantograph Mechanism", type: "Hardware / Simulation", desc: "Develop a framework for powering EVs from external overhead power lines via a vehicle-mounted vertical pole with roller — adapted from train pantographs. Include mechanical design and simulation analysis." },
        { id: "P8", title: "Open Road Frequency — Car-to-Car Communication", type: "Hardware / Software", desc: "Design a real-time, localised communication system between vehicles inspired by aviation shared frequencies. Define protocol (voice, text, alerts), ensure distraction-free interface, prioritise by urgency." },
        { id: "P9", title: "CAE Analysis of Automotive Systems with ECU & Virtual Conditions", type: "Simulation / Software", desc: "Integrate CAD models with ECU software for dynamic CAE/CFD analysis under virtual operating conditions. Focus on thermal analysis for electric and hybrid vehicle designs." },
        { id: "P31", title: "High-Fidelity Stiffness Prediction in Stamped Panels Using AI/ML", type: "Software / Simulation", desc: "Develop a scalable AI/ML solution that predicts stiffness and deformation behaviour of stamped components based on geometric shape and applied load, replacing time-intensive CAE simulations." },
        { id: "P39", title: "AI-Driven Urban Mobility Optimisation for Smart Cities", type: "Software / Platform", desc: "Develop an intelligent real-time urban mobility management solution using AI, ML, and IoT to analyse traffic, identify congestion hotspots, and dynamically optimise signal timings and routing." }
    ],
    trkB: [
        { id: "P4", title: "Enhancing Energy Density of EV Batteries", type: "Hardware / Research", desc: "Explore innovative approaches to increase EV battery energy density for extended range without compromising safety, cost, or manufacturability. Consider battery chemistry, cell architecture, and thermal management." },
        { id: "P6", title: "Fire Suppression Device for EV Battery Safety", type: "Hardware Prototype", desc: "Design a compact device for EVs that detects abnormal temperature rise in battery packs and automatically releases stored CO₂ to suppress fire. Must be reliable, cost-effective, and compatible with various EVs." },
        { id: "P12", title: "Sustainability Rating Framework for Construction Products", type: "Software / Framework", desc: "Develop a structured process for deriving sustainability ratings for construction products using life cycle assessment methodologies considering material composition, design, and manufacturing." },
        { id: "P14", title: "AI-Based Alarm Tracking for Wind Turbines", type: "Software / AI Tool", desc: "Develop an AI tool that automates tracking and resolution of wind turbine alarms using DMAIC methodology, root cause analysis, and actionable recommendations." },
        { id: "P15", title: "GenAI-Based Fault Detection in Solar Farms", type: "Software / AI Tool", desc: "Build a GenAI-powered solution for detecting faults in solar panels using real-time monitoring, automated data collection, and advanced image analysis with predictive maintenance." },
        { id: "P38", title: "Super-Capacitor Hybrid Energy Storage for Lighting", type: "Hardware / Prototype", desc: "Design a supercapacitor or hybrid energy storage system combining rapid charge/discharge with high energy density for lighting applications — improving efficiency, reliability, and sustainability." },
        { id: "P40", title: "Model-Based Design for Two Isolated Vibrating Systems", type: "Simulation / Software", desc: "Develop a multibody dynamic simulation framework to predict vibration behaviour of two isolated systems within a shared enclosure using line body techniques." },
        { id: "P44", title: "AI-Based Mobile Blade Balancing for Large Wind Turbines", type: "Hardware / AI", desc: "Design an AI-based, cost-effective, agile mobile blade balancing solution for 10 MW+ wind turbine blades where CG deviation causes instability and premature damage." }
    ],
    trkC: [
        { id: "P3", title: "AI-Driven NDT Inspection of Automotive Composites", type: "Hardware / Software", desc: "Develop an AI-enabled non-destructive evaluation system using ultrasound, X-ray, and thermography to detect micro-damages in composites. Include FMEA, lifecycle assessment, and residual life estimation." },
        { id: "P10", title: "Autonomous Drones: Edge AI Surveillance for Construction Sites", type: "Hardware / Software", desc: "Design an autonomous drone with Edge AI for real-time surveillance on construction sites. Demonstrate onboard video processing, object detection, and decision-making without cloud dependency." },
        { id: "P11", title: "AI-Powered Safety & Predictive Maintenance for Construction Equipment", type: "Software / App", desc: "Develop an AI-powered web/mobile app integrating operator health monitoring and predictive maintenance for construction equipment using ML and wearable data." },
        { id: "P21", title: "Search Bot for CAD Drawing & Model Retrieval", type: "Software / AI Tool", desc: "Develop a search bot for intelligent retrieval of CAD drawings from large engineering databases interpreting keywords, specs, shapes, and model components." },
        { id: "P24", title: "AI & Computer Vision-Based NDT for Industrial Materials", type: "Software / AI Model", desc: "Develop an AI model using computer vision to automatically detect and annotate defects in NDT images — identifying crack locations, depths, and types across materials." },
        { id: "P32", title: "Automated Validation of Flow Instrument Installation in 3D Models", type: "Software / Simulation", desc: "Develop an intelligent solution to analyse 3D piping models, validate flow instrument installations, and verify compliance with design standards using AI or rule-based logic." },
        { id: "P36", title: "Flexible Robotic Arm for Adaptive Industrial Operations", type: "Hardware / Robotics", desc: "Design a flexible robotic arm with adaptive gripping, reserve power for safe release during failures, automatic homing, and modular design for easy integration." },
        { id: "P37", title: "Self-Driving Pathological Lab: Robotic Medical Testing", type: "Hardware / Robotics", desc: "Design a mobile robotic system for pathology labs — Cobot on AMR with vision system, modular grippers, and LIMS integration meeting medical compliance standards." }
    ],
    trkD: [
        { id: "P19", title: "Chambered Full-Body Walkthrough Diagnostic Tool", type: "Hardware / Software", desc: "Design a non-invasive diagnostic walkthrough chamber for complete health check-up — monitoring CNS, cardiovascular, renal, skeletal, and other systems passively." },
        { id: "P20", title: "Smart Toilet for Automated Health Analysis", type: "Hardware / Software", desc: "Develop a smart toilet with integrated sensors for automatic urine and biological sample collection, analysis, and cloud-based diagnostic data storage." },
        { id: "P25", title: "Autonomous Networks for 5G Digital Twins", type: "Software / Simulation", desc: "Develop a digital twin for autonomous 5G network management supporting interoperability, performance monitoring, and predictive maintenance, adaptable toward 6G." },
        { id: "P26", title: "AI-Driven Workforce Digital Twin for Manufacturing", type: "Software / Platform", desc: "Design a Workforce Digital Twin platform using IoT and wearable signals to predict optimal deployment based on skills, fatigue, production needs, and compliance." },
        { id: "P27", title: "AI-Powered Drawing & Datasheet Conversion", type: "Software / AI Tool", desc: "Develop an AI/GenAI cloud solution converting engineering drawings from any format (including handwritten) into native formats in under 120 seconds." },
        { id: "P28", title: "AI-Driven BOM Converter (eBOM → mBOM)", type: "Software / AI Tool", desc: "Design an AI-powered converter that transforms engineering BOM into manufacturing BOM, incorporating manufacturing details and optimising production workflows." },
        { id: "P34", title: "Wi-Fi Sensing for Home Monitoring & Surveillance", type: "Hardware / Software", desc: "Design a Wi-Fi sensing solution using signal disruptions to detect presence and activity for intrusion detection, smart lighting, and elder care — without cameras." },
        { id: "P35", title: "LiveSpeak: AI-Based Live Event Captioning", type: "Software / Embedded", desc: "Develop a real-time speech-to-text solution for live events with high accuracy and low latency, exploring both cloud and Edge AI approaches." },
        { id: "P29", title: "AI-Powered Video Localisation Across Languages", type: "Software / AI Tool", desc: "Design an AI solution processing large video files for multi-language localisation — automating transcription, translation, and audio dubbing with contextual accuracy." },
        { id: "P43", title: "Real-Time Healthcare Monitoring & AI Solutions", type: "Hardware / Software", desc: "Design an AI-powered wearable for real-time vital sign tracking, early issue detection, remote clinician dashboard, and urgency-based care prioritisation for rural deployment." }
    ],
    trkE: [
        { id: "P13", title: "Intelligent Rubrics-Based Evaluator for Flowcharts & Algorithms", type: "Software / AI Tool", desc: "Develop an evaluation system for flowcharts, algorithms, and pseudocode against rubrics — parsing .docx/.pdf/.png files with detailed feedback and LMS integration." },
        { id: "P16", title: "Automated Wiring Diagram Generation Using GenAI", type: "Software / AI Tool", desc: "Develop a GenAI solution that auto-generates electrical wiring diagrams from panel drawings using image recognition and schematic generation." },
        { id: "P17", title: "Automating Material Selection Using GenAI", type: "Software / AI Tool", desc: "Develop a GenAI assistant for automated material selection — analysing requirements, matching global standards, simulating behaviour, and prioritising sustainable options." },
        { id: "P18", title: "Automating COTS Part Sizing & Selection Using GenAI", type: "Software / AI Tool", desc: "Develop a GenAI solution for automated COTS part sizing and selection considering load capacity, space constraints, material quality, cost, and sustainability." },
        { id: "P22", title: "AI-Driven Testing Framework for OTT & Digital TV", type: "Software / AI Tool", desc: "Develop an AI testing framework for OTT platforms with auto-generated test cases, self-healing scripts, visual testing via deep learning, and CI/CD integration." },
        { id: "P23", title: "Middleware for Non-Agentic to Agentic AI Enhancement", type: "Software / AI Tool", desc: "Build a reasoning-driven middleware that analyses solution documentation and recommends enhancements to convert conventional systems into agentic AI frameworks." },
        { id: "P30", title: "Agentless Endpoint Protection", type: "Software / Cybersecurity", desc: "Design a strategic agentless endpoint protection solution enhancing visibility and threat response across physical devices, complementing agent-based tools." },
        { id: "P33", title: "AI-Enabled Agile Automated Threat Modelling", type: "Software / Cybersecurity", desc: "Design an AI-powered, agentic, modular threat modelling framework for engineering cybersecurity — interactive, agile, and adaptive to new threat vectors in real time." },
        { id: "P41", title: "Enhancing Cybersecurity Resilience Using AI", type: "Software / Cybersecurity", desc: "Develop an AI/ML cybersecurity framework for real-time threat detection, 50%+ faster detection, automated incident response, and behavioural analytics training platform." },
        { id: "P42", title: "SmartOps AI — Autonomous Incident Resolution Engine", type: "Software / AI Tool", desc: "Build an intelligent automated solution that detects, analyses, and resolves DevOps incidents across hybrid multi-cloud infrastructures with minimal human involvement." }
    ]
};

// ========== RENDER PROBLEM STATEMENTS ==========
function renderPS() {
    Object.keys(problemStatements).forEach(track => {
        const list = document.getElementById('psList' + track.charAt(3));
        if (!list) return;
        list.innerHTML = problemStatements[track].map(ps => `
      <div class="ps-item">
        <div class="ps-header" onclick="togglePS(this)">
          <span class="ps-id">${ps.id}</span>
          <span class="ps-title-text">${ps.title}</span>
          <span class="ps-type">${ps.type}</span>
          <span class="ps-toggle">▾</span>
        </div>
        <div class="ps-body">
          <div class="ps-body-inner">
            <h5>Problem Statement</h5>
            <p>${ps.desc}</p>
            ${ps.constraints ? `<h5>Constraints & Considerations</h5><ul>${ps.constraints.map(c => `<li>${c}</li>`).join('')}</ul>` : ''}
          </div>
        </div>
      </div>
    `).join('');
    });
}

function togglePS(header) {
    const item = header.parentElement;
    const body = item.querySelector('.ps-body');
    const isOpen = item.classList.contains('open');

    // Close all in same list
    item.parentElement.querySelectorAll('.ps-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.ps-body').style.maxHeight = null;
    });

    if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
    }
}

// ========== TRACK TABS ==========
document.querySelectorAll('.track-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.track-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.track-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.track).classList.add('active');
    });
});

// ========== COUNTDOWN TIMER ==========
function updateCountdown() {
    // Set your event date here
    const eventDate = new Date('2026-03-15T09:00:00+05:30').getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById('cd-days').textContent = '🔥';
        document.getElementById('cd-hours').textContent = 'NOW';
        document.getElementById('cd-mins').textContent = '🔥';
        document.getElementById('cd-secs').textContent = '!!';
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

// ========== MOBILE MENU ==========
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ========== SCROLL REVEAL ANIMATIONS ==========
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// ========== ACTIVE NAV LINK HIGHLIGHT ==========
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    renderPS();
});
