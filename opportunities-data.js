// =============================================================================
// EduBridge — Master Curated Opportunity Data Model & Storage Layer
// =============================================================================
// Consistent, stable dataset and data layer shared across all EduBridge pages:
// - index.html (Featured items)
// - scholarships.html (Scholarships & Grants)
// - internships.html (Engineering & Tech Internships)
// - hackathons.html (Coding Competitions & CTFs)
// - learn.html (Courses & Certifications)
// - dashboard.html (Saved Opportunities Hub)
// =============================================================================

export const SCHOLARSHIP_ITEMS = [
  {
    id: "sch-01",
    type: "scholarship",
    title: "National Merit STEM Assistance Grant 2026",
    provider: "Department of Higher Education (Demo)",
    organization: "Department of Higher Education (Demo)",
    category: "Merit-Based",
    highlight: "₹50,000 / year",
    reward: "₹50,000 / academic year",
    educationLevel: "Undergraduate (B.Tech / B.E. / B.Sc)",
    eligibility: "Min. 80% aggregate in 12th Board; Family income below ₹6 LPA",
    location: "All India (Accredited Technical Institutions)",
    mode: "Online Application",
    duration: "Academic Year 2026–27",
    deadline: "Demo deadline: Nov 30, 2026",
    description: "Targeted at top-performing students admitted to accredited technical institutions. Supports tuition fee coverage and textbook stipends for students maintaining exemplary grade point averages.",
    overview: "Targeted at top-performing students admitted to accredited technical institutions. Supports tuition fee coverage and textbook stipends for students maintaining exemplary grade point averages.",
    documentsNeeded: "12th marksheets, family income certificate, college admission receipt, Aadhaar verification.",
    applicationUrl: "https://scholarships.gov.in/",
    destinationUrl: "scholarships.html",
    isDemo: true
  },
  {
    id: "sch-02",
    type: "scholarship",
    title: "Pragati Scholarship for Girls in Technical Education",
    provider: "All India Council for Technical Education (AICTE Demo)",
    organization: "All India Council for Technical Education (AICTE Demo)",
    category: "Women in STEM",
    highlight: "₹50,000 / year",
    reward: "₹50,000 / year + Tuition support",
    educationLevel: "1st Year B.Tech / Diploma in Engineering",
    eligibility: "Admitted to 1st year degree program; max two girls per family; family income < ₹8 LPA",
    location: "All India (AICTE Approved Colleges)",
    mode: "Online Application",
    duration: "Entire Course Duration (Up to 4 Years)",
    deadline: "Demo deadline: Dec 15, 2026",
    description: "National flagship initiative aimed at empowering young women to further technical careers in computing, electronics, and mechanical engineering with direct bank transfer stipends.",
    overview: "National flagship initiative aimed at empowering young women to further technical careers in computing, electronics, and mechanical engineering with direct bank transfer stipends.",
    documentsNeeded: "Aadhaar card, tuition receipt, bonafide certificate from college head, family income affidavit.",
    applicationUrl: "https://www.aicte-india.org/",
    destinationUrl: "scholarships.html",
    isDemo: true
  },
  {
    id: "sch-03",
    type: "scholarship",
    title: "Reliance Foundation Undergraduate Scholarship",
    provider: "Reliance Corporate Foundation (Demo)",
    organization: "Reliance Corporate Foundation (Demo)",
    category: "Corporate",
    highlight: "Up to ₹2,00,000 grant",
    reward: "Up to ₹2,00,000 total grant over degree duration",
    educationLevel: "1st Year Full-time Undergraduates",
    eligibility: "Enrolled in 1st year regular degree; Aptitude test score + household income < ₹15 LPA",
    location: "Pan-India",
    mode: "Online Aptitude & Interview",
    duration: "Full Degree Duration",
    deadline: "Demo deadline: Oct 28, 2026",
    description: "Supports meritorious Indian undergraduate students across engineering, sciences, and mathematics, paired with professional leadership webinars and alumni networking.",
    overview: "Supports meritorious Indian undergraduate students across engineering, sciences, and mathematics, paired with professional leadership webinars and alumni networking.",
    documentsNeeded: "12th standard marksheets, college bonafide letter, proof of family income.",
    applicationUrl: "https://www.reliancefoundation.org/",
    destinationUrl: "scholarships.html",
    isDemo: true
  },
  {
    id: "sch-04",
    type: "scholarship",
    title: "Tata Trust Medical & Engineering Grant",
    provider: "Sir Ratan Tata Trust (Demo)",
    organization: "Sir Ratan Tata Trust (Demo)",
    category: "Need-Based",
    highlight: "Up to 80% tuition fees",
    reward: "Up to 80% tuition fees coverage",
    educationLevel: "2nd Year onwards B.Tech / M.Tech Students",
    eligibility: "Minimum 7.0 CGPA; Family annual income capped at ₹4.5 LPA; Indian citizen",
    location: "India",
    mode: "Online Application & Document Verification",
    duration: "Renewable Annually",
    deadline: "Demo deadline: Jan 15, 2027",
    description: "Philanthropic financial grant prioritizing economically vulnerable engineering students who have established exceptional second-year academic consistency.",
    overview: "Philanthropic financial grant prioritizing economically vulnerable engineering students who have established exceptional second-year academic consistency.",
    documentsNeeded: "Previous year marksheets, latest fee structure breakdown, electricity bills, income certificate.",
    applicationUrl: "https://www.tatatrusts.org/",
    destinationUrl: "scholarships.html",
    isDemo: true
  },
  {
    id: "sch-05",
    type: "scholarship",
    title: "Vidyasaarathi Engineering Excellence Fund",
    provider: "ACC & JSW Corporate Partner Foundation (Demo)",
    organization: "ACC & JSW Corporate Partner Foundation (Demo)",
    category: "Corporate",
    highlight: "₹40,000 / year",
    reward: "₹40,000 / academic year",
    educationLevel: "2nd & 3rd Year B.Tech (Core & CS Streams)",
    eligibility: "Minimum 7.5 CGPA in previous semesters; annual family income < ₹5 LPA",
    location: "India",
    mode: "Online Portal",
    duration: "Single Academic Year",
    deadline: "Demo deadline: Nov 10, 2026",
    description: "Corporate social responsibility grant encouraging students maintaining strong academic records despite economic hurdles, with priority for students near manufacturing regions.",
    overview: "Corporate social responsibility grant encouraging students maintaining strong academic records despite economic hurdles, with priority for students near manufacturing regions.",
    documentsNeeded: "Previous semester grade cards, income affidavit, college bonafide certificate, bank passbook.",
    applicationUrl: "https://www.vidyasaarathi.co.in/",
    destinationUrl: "scholarships.html",
    isDemo: true
  },
  {
    id: "sch-06",
    type: "scholarship",
    title: "Central Sector Higher Education Scholarship",
    provider: "Ministry of Education (Demo)",
    organization: "Ministry of Education (Demo)",
    category: "Government",
    highlight: "₹12,000 to ₹20,000 / yr",
    reward: "₹12,000 to ₹20,000 / year",
    educationLevel: "Graduate & Postgraduate Degree Students",
    eligibility: "Top 20th percentile in Class 12 board examinations; annual family income < ₹4.5 LPA",
    location: "All India",
    mode: "National Scholarship Portal",
    duration: "5 Years (Integrated)",
    deadline: "Demo deadline: Dec 31, 2026",
    description: "Distributed on 50:50 ratio between boys and girls admitted to professional degree courses throughout India, aimed at covering basic living expenses.",
    overview: "Distributed on 50:50 ratio between boys and girls admitted to professional degree courses throughout India, aimed at covering basic living expenses.",
    documentsNeeded: "Class 12 verification, national scholarship portal registration ID, income certification.",
    applicationUrl: "https://scholarships.gov.in/",
    destinationUrl: "scholarships.html",
    isDemo: true
  },
  {
    id: "sch-07",
    type: "scholarship",
    title: "Sitaram Jindal Technical Welfare Assistance",
    provider: "Sitaram Jindal Foundation (Demo)",
    organization: "Sitaram Jindal Foundation (Demo)",
    category: "Need-Based",
    highlight: "₹3,200 / month stipend",
    reward: "₹3,200 / month hostel & study stipend",
    educationLevel: "B.Tech / B.E. / B.Arch Students",
    eligibility: "Boys: 65% aggregate; Girls: 60% aggregate; Family income < ₹4 LPA",
    location: "All India",
    mode: "Postal / Online Verification",
    duration: "Entire Duration of Study",
    deadline: "Demo deadline: Rolling Applications (Demo)",
    description: "Philanthropic non-governmental trust offering continuous monthly allowances to needy engineering students to offset hostel fees and educational materials.",
    overview: "Philanthropic non-governmental trust offering continuous monthly allowances to needy engineering students to offset hostel fees and educational materials.",
    documentsNeeded: "Application annexure, income certificate by Tahsildar, marksheet photocopies.",
    applicationUrl: "https://www.sitaramjindalfoundation.org/",
    destinationUrl: "scholarships.html",
    isDemo: true
  },
  {
    id: "sch-08",
    type: "scholarship",
    title: "Athena Future Women in Technology Fellowship",
    provider: "Athena Tech Alliance (Demo)",
    organization: "Athena Tech Alliance (Demo)",
    category: "Women in STEM",
    highlight: "₹75,000 + Mentorship",
    reward: "₹75,000 Fellowship + 1-on-1 Senior Tech Mentorship",
    educationLevel: "3rd & 4th Year B.Tech Women",
    eligibility: "Demonstrated interest in open source, AI, or systems engineering; CGPA 8.0+",
    location: "Remote Fellowship",
    mode: "Portfolio & Technical Review",
    duration: "6 Months Fellowship",
    deadline: "Demo deadline: Jan 30, 2027",
    description: "Designed to accelerate the transition of exceptional female engineering undergraduates into tech leadership and research positions with direct grant and mentorship support.",
    overview: "Designed to accelerate the transition of exceptional female engineering undergraduates into tech leadership and research positions with direct grant and mentorship support.",
    documentsNeeded: "GitHub portfolio / project link, resume, statement of purpose, transcript.",
    applicationUrl: "https://github.com/",
    destinationUrl: "scholarships.html",
    isDemo: true
  }
];

export const INTERNSHIP_ITEMS = [
  {
    id: "int-01",
    type: "internship",
    title: "Frontend Engineering Intern (Design Systems)",
    provider: "Krypton Web Technologies (Demo)",
    organization: "Krypton Web Technologies (Demo)",
    category: "Software Engineering",
    highlight: "₹25,000 / month",
    stipend: "₹25,000 / month",
    workMode: "Remote",
    mode: "Remote",
    location: "Remote (All India)",
    duration: "3 Months (Summer)",
    deadline: "Demo deadline: Nov 25, 2026",
    eligibility: "Students pursuing B.Tech/B.E. in CS/IT/ECE with strong web fundamentals",
    requirements: "HTML5, CSS3, Modern JavaScript (ES6+), component design mindset, Git.",
    description: "Collaborate with senior designers and engineers to implement reusable UI patterns, ensure WCAG accessibility compliance, and build responsive web interfaces.",
    overview: "Collaborate with senior designers and engineers to implement reusable UI patterns, ensure WCAG accessibility compliance, and build responsive web interfaces.",
    responsibilities: "Convert Figma prototypes into performant HTML/CSS, write unit component tests, optimize asset delivery.",
    applicationUrl: "https://internshala.com/",
    destinationUrl: "internships.html",
    isDemo: true
  },
  {
    id: "int-02",
    type: "internship",
    title: "Backend Cloud Systems Intern",
    provider: "Veritas Cloud Labs (Demo)",
    organization: "Veritas Cloud Labs (Demo)",
    category: "Software Engineering",
    highlight: "₹30,000 / month",
    stipend: "₹30,000 / month",
    workMode: "Hybrid",
    mode: "Hybrid",
    location: "Bengaluru, Karnataka (Hybrid)",
    duration: "6 Months",
    deadline: "Demo deadline: Dec 01, 2026",
    eligibility: "3rd & 4th Year B.Tech / M.Tech CS Students",
    requirements: "Python / Go, PostgreSQL, Docker container basics, RESTful APIs.",
    description: "Design and maintain high-throughput microservices, implement distributed caching mechanisms, and write automated integration tests for cloud infrastructure.",
    overview: "Design and maintain high-throughput microservices, implement distributed caching mechanisms, and write automated integration tests for cloud infrastructure.",
    responsibilities: "Build REST endpoints, profile database query latencies, assist with Kubernetes deployments.",
    applicationUrl: "https://angel.co/",
    destinationUrl: "internships.html",
    isDemo: true
  },
  {
    id: "int-03",
    type: "internship",
    title: "Machine Learning Research Intern",
    provider: "DeepCore Intelligence Labs (Demo)",
    organization: "DeepCore Intelligence Labs (Demo)",
    category: "Artificial Intelligence",
    highlight: "₹35,000 / month",
    stipend: "₹35,000 / month",
    workMode: "Remote",
    mode: "Remote",
    location: "Remote (Pan-India)",
    duration: "4 Months",
    deadline: "Demo deadline: Dec 10, 2026",
    eligibility: "Undergraduates & Postgraduates with completed linear algebra and ML coursework",
    requirements: "PyTorch / TensorFlow, NumPy, Pandas, strong foundational probability.",
    description: "Evaluate novel transformer architectures, perform model quantization for edge deployment, and curate benchmark datasets for vision and language models.",
    overview: "Evaluate novel transformer architectures, perform model quantization for edge deployment, and curate benchmark datasets for vision and language models.",
    responsibilities: "Reproduce academic ML papers, run ablation studies on GPUs, summarize empirical metrics.",
    applicationUrl: "https://huggingface.co/",
    destinationUrl: "internships.html",
    isDemo: true
  },
  {
    id: "int-04",
    type: "internship",
    title: "Mobile App Developer Intern (Android / iOS)",
    provider: "FinEdge Payments Network (Demo)",
    organization: "FinEdge Payments Network (Demo)",
    category: "Mobile Development",
    highlight: "₹22,000 / month",
    stipend: "₹22,000 / month",
    workMode: "Onsite",
    mode: "Onsite",
    location: "Hyderabad, Telangana (Onsite)",
    duration: "3 Months",
    deadline: "Demo deadline: Dec 20, 2026",
    eligibility: "B.Tech Students with at least 1 completed mobile application portfolio project",
    requirements: "Kotlin, Jetpack Compose, Room database, Git version control.",
    description: "Join an agile engineering squad building smooth mobile onboarding flows and real-time offline-first payment verification modules.",
    overview: "Join an agile engineering squad building smooth mobile onboarding flows and real-time offline-first payment verification modules.",
    responsibilities: "Implement MVVM architecture, integrate REST APIs, profile app startup latency on lower-end devices.",
    applicationUrl: "https://internshala.com/",
    destinationUrl: "internships.html",
    isDemo: true
  },
  {
    id: "int-05",
    type: "internship",
    title: "Embedded Systems & IoT Hardware Intern",
    provider: "Voltaic Robotics & Embedded (Demo)",
    organization: "Voltaic Robotics & Embedded (Demo)",
    category: "Hardware & IoT",
    highlight: "₹20,000 / month",
    stipend: "₹20,000 / month",
    workMode: "Onsite",
    mode: "Onsite",
    location: "Pune, Maharashtra (Onsite Lab)",
    duration: "6 Months",
    deadline: "Demo deadline: Jan 05, 2027",
    eligibility: "B.Tech / B.E. in Electronics (ECE), Electrical (EEE), or Mechatronics",
    requirements: "Embedded C/C++, ESP32 / STM32 microcontroller firmware, UART/I2C/SPI protocols.",
    description: "Work directly in hardware prototype labs testing sensor telemetry, debugging firmware timing issues with oscilloscopes, and designing PCB schematics.",
    overview: "Work directly in hardware prototype labs testing sensor telemetry, debugging firmware timing issues with oscilloscopes, and designing PCB schematics.",
    responsibilities: "Write peripheral device drivers, test battery efficiency under deep sleep, calibrate analog sensor inputs.",
    applicationUrl: "https://www.linkedin.com/",
    destinationUrl: "internships.html",
    isDemo: true
  },
  {
    id: "int-06",
    type: "internship",
    title: "Cybersecurity Analyst Intern",
    provider: "Aegis Cyber Defense Group (Demo)",
    organization: "Aegis Cyber Defense Group (Demo)",
    category: "Cybersecurity",
    highlight: "₹24,000 / month",
    stipend: "₹24,000 / month",
    workMode: "Hybrid",
    mode: "Hybrid",
    location: "Gurugram, NCR (Hybrid)",
    duration: "4 Months",
    deadline: "Demo deadline: Dec 18, 2026",
    eligibility: "Students with hands-on CTF experience or foundational security coursework",
    requirements: "Network fundamentals (TCP/IP), Linux shell scripting, Wireshark, Burp Suite basics.",
    description: "Assist security operations team with vulnerability triage, log analysis, threat intelligence correlation, and simulated red-team phishing simulations.",
    overview: "Assist security operations team with vulnerability triage, log analysis, threat intelligence correlation, and simulated red-team phishing simulations.",
    responsibilities: "Review web app penetration reports, verify patch effectiveness, update internal security baselines.",
    applicationUrl: "https://www.cybrary.it/",
    destinationUrl: "internships.html",
    isDemo: true
  },
  {
    id: "int-07",
    type: "internship",
    title: "Full Stack Web Developer Intern",
    provider: "OpenScale Technologies (Demo)",
    organization: "OpenScale Technologies (Demo)",
    category: "Software Engineering",
    highlight: "₹28,000 / month",
    stipend: "₹28,000 / month",
    workMode: "Remote",
    mode: "Remote",
    location: "Remote (Pan-India)",
    duration: "3 Months",
    deadline: "Demo deadline: Jan 10, 2027",
    eligibility: "Open to 2nd, 3rd & 4th Year engineering students with public GitHub repos",
    requirements: "TypeScript, Node.js, Express/Fastify, SQL databases, responsive CSS.",
    description: "Build customer-facing portal features end-to-end, from database migrations and authentication endpoints to polished frontend interaction states.",
    overview: "Build customer-facing portal features end-to-end, from database migrations and authentication endpoints to polished frontend interaction states.",
    responsibilities: "Write reusable full-stack features, maintain API documentation, review pull requests with senior mentors.",
    applicationUrl: "https://github.com/",
    destinationUrl: "internships.html",
    isDemo: true
  },
  {
    id: "int-08",
    type: "internship",
    title: "Data Analytics & BI Engineering Intern",
    provider: "MetricsPulse Analytics (Demo)",
    organization: "MetricsPulse Analytics (Demo)",
    category: "Data Science",
    highlight: "₹22,000 / month",
    stipend: "₹22,000 / month",
    workMode: "Remote",
    mode: "Remote",
    location: "Remote (All India)",
    duration: "3 Months",
    deadline: "Demo deadline: Dec 30, 2026",
    eligibility: "Engineering or Mathematics students with proficiency in SQL and data visualization",
    requirements: "Advanced SQL queries, Tableau or Power BI, Python (Pandas/Matplotlib).",
    description: "Analyze product metrics, build recurring reporting dashboards, and extract actionable insights for engineering leadership to guide feature priorities.",
    overview: "Analyze product metrics, build recurring reporting dashboards, and extract actionable insights for engineering leadership to guide feature priorities.",
    responsibilities: "Write optimized SQL queries on warehouse data, maintain automated daily reports, build KPI charts.",
    applicationUrl: "https://www.kaggle.com/",
    destinationUrl: "internships.html",
    isDemo: true
  }
];

export const HACKATHON_ITEMS = [
  {
    id: "hck-01",
    type: "hackathon",
    title: "Smart Cities & Urban AI Hackathon 2026",
    provider: "National Innovation Council (Demo)",
    organization: "National Innovation Council (Demo)",
    category: "AI & ML",
    highlight: "₹1,50,000 Prize Pool",
    prizePool: "₹1,50,000 Total Prizes",
    mode: "Online",
    teamSize: "2 – 4 Members",
    theme: "AI Computer Vision, Traffic Routing, Green Infrastructure",
    location: "Online / Virtual",
    duration: "48 Hours Sprint",
    deadline: "Demo deadline: Dec 5, 2026",
    eligibility: "Open to all enrolled undergraduate and graduate college students",
    description: "A 48-hour online hackathon challenging student engineers to build intelligent solutions for municipal waste reduction, smart traffic signals, and citizen safety.",
    overview: "A 48-hour online hackathon challenging student engineers to build intelligent solutions for municipal waste reduction, smart traffic signals, and citizen safety.",
    perks: "Top 3 teams receive incubation mentorship + AWS Cloud Credits worth $2,000.",
    applicationUrl: "https://devfolio.co/",
    destinationUrl: "hackathons.html",
    isDemo: true
  },
  {
    id: "hck-02",
    type: "hackathon",
    title: "FinTech Revolution Hackathon 2026",
    provider: "Open Banking Alliance (Demo)",
    organization: "Open Banking Alliance (Demo)",
    category: "FinTech",
    highlight: "₹2,00,000 Prize Pool",
    prizePool: "₹2,00,000 Cash Prizes",
    mode: "Online",
    teamSize: "1 – 4 Members",
    theme: "UPI 2.0 Integrations, Micro-Credit Scoring, Fraud Detection",
    location: "Online / Virtual",
    duration: "36 Hours Sprint",
    deadline: "Demo deadline: Nov 28, 2026",
    eligibility: "College students with interests in financial algorithms and secure payments",
    description: "Create financial inclusion applications utilizing open banking sandboxes and simulate zero-fraud transaction flows for unbanked micro-enterprises.",
    overview: "Create financial inclusion applications utilizing open banking sandboxes and simulate zero-fraud transaction flows for unbanked micro-enterprises.",
    perks: "Fast-track interview rounds for fintech summer engineering internships.",
    applicationUrl: "https://unstop.com/",
    destinationUrl: "hackathons.html",
    isDemo: true
  },
  {
    id: "hck-03",
    type: "hackathon",
    title: "Healthcare & MedTech Innovation Sprint",
    provider: "HealthBridge Biomedical Forum (Demo)",
    organization: "HealthBridge Biomedical Forum (Demo)",
    category: "Healthcare",
    highlight: "₹1,20,000 + Incubation",
    prizePool: "₹1,20,000 + Incubation Support",
    mode: "In-Person",
    teamSize: "2 – 4 Members",
    theme: "Telemedicine Triage, Edge Diagnostics, Hospital Beds Management",
    location: "Bengaluru, Karnataka",
    duration: "2 Days (Weekend)",
    deadline: "Demo deadline: Dec 14, 2026",
    eligibility: "Multidisciplinary student teams (Engineering + BioTech/Medical)",
    description: "Bring software and hardware prototypes to improve patient diagnostic access in primary healthcare centers and rural telemedicine dispensaries.",
    overview: "Bring software and hardware prototypes to improve patient diagnostic access in primary healthcare centers and rural telemedicine dispensaries.",
    perks: "Direct grant grants and hardware component kits provided by title sponsors.",
    applicationUrl: "https://devfolio.co/",
    destinationUrl: "hackathons.html",
    isDemo: true
  },
  {
    id: "hck-04",
    type: "hackathon",
    title: "GreenTech & Climate Resilience Hackathon",
    provider: "EcoFutures Foundation (Demo)",
    organization: "EcoFutures Foundation (Demo)",
    category: "Sustainability",
    highlight: "₹1,00,000 Cash Grants",
    prizePool: "₹1,00,000 Cash Grants",
    mode: "Online",
    teamSize: "2 – 5 Members",
    theme: "Solar Microgrid Balancing, Carbon Footprint API, Crop Yield Prediction",
    location: "Online / Virtual",
    duration: "3 Days",
    deadline: "Demo deadline: Dec 22, 2026",
    eligibility: "All undergraduate & diploma engineering students in India",
    description: "Tackle pressing climate challenges by building sensor telemetry pipelines, predictive weather crop analyzers, and carbon tracking web applications.",
    overview: "Tackle pressing climate challenges by building sensor telemetry pipelines, predictive weather crop analyzers, and carbon tracking web applications.",
    perks: "Presentation showcase before venture sustainability funds.",
    applicationUrl: "https://unstop.com/",
    destinationUrl: "hackathons.html",
    isDemo: true
  },
  {
    id: "hck-05",
    type: "hackathon",
    title: "National Cyber Defense CTF & Hackathon",
    provider: "CyberShield Security Initiative (Demo)",
    organization: "CyberShield Security Initiative (Demo)",
    category: "Cybersecurity",
    highlight: "₹1,75,000 Cash Pool",
    prizePool: "₹1,75,000 Cash Pool",
    mode: "Online",
    teamSize: "1 – 3 Members",
    theme: "Reverse Engineering, Web Exploit Defense, Cryptography Challenges",
    location: "Online Platform",
    duration: "24 Hours Non-stop",
    deadline: "Demo deadline: Nov 20, 2026",
    eligibility: "Open to individual students and collegiate security clubs",
    description: "A fast-paced Jeopardy-style Capture The Flag event followed by a 12-hour defensive tooling buildathon to automate security auditing.",
    overview: "A fast-paced Jeopardy-style Capture The Flag event followed by a 12-hour defensive tooling buildathon to automate security auditing.",
    perks: "Certification vouchers (CompTIA Security+ / CEH practice bundles).",
    applicationUrl: "https://ctftime.org/",
    destinationUrl: "hackathons.html",
    isDemo: true
  },
  {
    id: "hck-06",
    type: "hackathon",
    title: "Blockchain & Web3 Decentralized Hackathon",
    provider: "OpenLedger Developer Guild (Demo)",
    organization: "OpenLedger Developer Guild (Demo)",
    category: "Web3",
    highlight: "₹2,50,000 Bounty Pool",
    prizePool: "₹2,50,000 Bounty Pool",
    mode: "Online",
    teamSize: "1 – 4 Members",
    theme: "Decentralized Identity, Smart Contracts, Supply Chain Transparency",
    location: "Online / Discord",
    duration: "5 Days Asynchronous",
    deadline: "Demo deadline: Dec 28, 2026",
    eligibility: "College developers with Solidity, Rust, or decentralized protocol interest",
    description: "Build decentralized applications that solve authentic supply chain tracing or decentralized student credential verification without central gatekeepers.",
    overview: "Build decentralized applications that solve authentic supply chain tracing or decentralized student credential verification without central gatekeepers.",
    perks: "Ecosystem grant opportunities up to $5,000 for winning MVPs.",
    applicationUrl: "https://ethglobal.com/",
    destinationUrl: "hackathons.html",
    isDemo: true
  },
  {
    id: "hck-07",
    type: "hackathon",
    title: "Robotics & Autonomous Systems Challenge",
    provider: "Apex Mechatronics Institute (Demo)",
    organization: "Apex Mechatronics Institute (Demo)",
    category: "Hardware",
    highlight: "₹1,80,000 Prizes",
    prizePool: "₹1,80,000 Prizes",
    mode: "In-Person",
    teamSize: "3 – 5 Members",
    theme: "Autonomous Line Followers, Drone Obstacle Avoidance, ROS Sim",
    location: "Chennai, Tamil Nadu",
    duration: "36 Hours Onsite",
    deadline: "Demo deadline: Dec 12, 2026",
    eligibility: "Engineering students with hardware/ROS robotics team affiliation",
    description: "Compete in live obstacle arenas with custom robotic rovers and simulation environments using Robot Operating System (ROS) and OpenCV.",
    overview: "Compete in live obstacle arenas with custom robotic rovers and simulation environments using Robot Operating System (ROS) and OpenCV.",
    perks: "Prototype funding grant opportunity for teams demonstrating working MVPs.",
    applicationUrl: "https://unstop.com/",
    destinationUrl: "hackathons.html",
    isDemo: true
  },
  {
    id: "hck-08",
    type: "hackathon",
    title: "CodeForBharat Public Infrastructure Sprint",
    provider: "ImpactFoundry (Demo)",
    organization: "ImpactFoundry (Demo)",
    category: "Social Impact",
    highlight: "₹1,00,000 + Incubation",
    prizePool: "₹1,00,000 Cash + Incubation",
    mode: "Online",
    teamSize: "2 – 5 Members",
    theme: "Digital Literacy, Accessible Education for Differently-Abled",
    location: "Online / Virtual",
    duration: "48 Hours",
    deadline: "Demo deadline: Jan 05, 2027",
    eligibility: "Any enrolled student passionate about civic tech and accessibility",
    description: "Creating screen-reader friendly educational portals, speech-to-text converters for Indian regional languages, and offline classroom hubs for rural students.",
    overview: "Creating screen-reader friendly educational portals, speech-to-text converters for Indian regional languages, and offline classroom hubs for rural students.",
    perks: "Featured showcase at the National Social Innovation Summit.",
    applicationUrl: "https://devfolio.co/",
    destinationUrl: "hackathons.html",
    isDemo: true
  }
];

export const COURSE_ITEMS = [
  {
    id: "lrn-01",
    type: "course",
    title: "Google Cloud Associate Cloud Engineer Prep Pathway",
    provider: "Google Cloud Training (Demo)",
    organization: "Google Cloud Training (Demo)",
    category: "Cloud",
    highlight: "Free Access Pathway",
    pricing: "Free Access Pathway",
    level: "Intermediate",
    duration: "6 Weeks (Self-paced)",
    mode: "Online",
    location: "Online / Self-Paced",
    deadline: "Rolling Access (Demo)",
    eligibility: "Undergraduate students with foundational computer networking & Linux basics",
    skillsTaught: "Compute Engine, IAM Security, VPC Networking, Cloud Storage",
    description: "Hands-on labs and architectural training for designing scalable, resilient enterprise infrastructure on Google Cloud Platform with verified exam vouchers.",
    overview: "Hands-on labs and architectural training for designing scalable, resilient enterprise infrastructure on Google Cloud Platform with verified exam vouchers.",
    deliverable: "Google Cloud Skills Boost Completion Badges & Practice Exam Access.",
    applicationUrl: "https://cloud.google.com/learn",
    destinationUrl: "learn.html",
    isDemo: true
  },
  {
    id: "lrn-02",
    type: "course",
    title: "Full-Stack React & Next.js Modern Web Bootcamp",
    provider: "Meta & OpenJS Foundation Partner (Demo)",
    organization: "Meta & OpenJS Foundation Partner (Demo)",
    category: "Web Development",
    highlight: "Free Student Audit",
    pricing: "Free Student Audit",
    level: "Beginner to Intermediate",
    duration: "8 Weeks",
    mode: "Online",
    location: "Online / Self-Paced",
    deadline: "Rolling Access (Demo)",
    eligibility: "Familiarity with basic JavaScript, HTML, and CSS",
    skillsTaught: "React 19 Hooks, Next.js App Router, Tailwind CSS, REST APIs",
    description: "Build production-ready, accessible web applications from scratch, deploying with SSR, optimistic UI updates, and robust state management.",
    overview: "Build production-ready, accessible web applications from scratch, deploying with SSR, optimistic UI updates, and robust state management.",
    deliverable: "4 Portfolio Projects deployed live + Course Completion Certificate.",
    applicationUrl: "https://nextjs.org/learn",
    destinationUrl: "learn.html",
    isDemo: true
  },
  {
    id: "lrn-03",
    type: "course",
    title: "Applied Machine Learning with TensorFlow & Python",
    provider: "Stanford Online & DeepLearning.AI Partner (Demo)",
    organization: "Stanford Online & DeepLearning.AI Partner (Demo)",
    category: "Artificial Intelligence",
    highlight: "Free Audit Available",
    pricing: "Free Audit Available",
    level: "Intermediate",
    duration: "10 Weeks",
    mode: "Online",
    location: "Online / Self-Paced",
    deadline: "Demo cohort starts: Dec 1, 2026",
    eligibility: "Prior Python programming and multivariable calculus familiarity",
    skillsTaught: "Supervised Learning, Neural Networks, Model Tuning, Scikit-Learn",
    description: "Deep dive into real-world machine learning algorithms, model regularization, error analysis, and building neural nets for classification and prediction.",
    overview: "Deep dive into real-world machine learning algorithms, model regularization, error analysis, and building neural nets for classification and prediction.",
    deliverable: "Capstone ML Model evaluated on unseen test benchmark.",
    applicationUrl: "https://www.coursera.org/",
    destinationUrl: "learn.html",
    isDemo: true
  },
  {
    id: "lrn-04",
    type: "course",
    title: "AWS Certified Solutions Architect Associate Track",
    provider: "AWS Educate Academy (Demo)",
    organization: "AWS Educate Academy (Demo)",
    category: "Cloud",
    highlight: "Free Student Tier",
    pricing: "Free Student Tier",
    level: "Intermediate",
    duration: "8 Weeks",
    mode: "Online",
    location: "Online / Self-Paced",
    deadline: "Rolling Access (Demo)",
    eligibility: "College students with basic systems understanding",
    skillsTaught: "AWS EC2, S3, RDS, Lambda Serverless, CloudFormation Infrastructure",
    description: "Learn how to architect cost-effective, decoupled, and fault-tolerant cloud backends according to the AWS Well-Architected Framework.",
    overview: "Learn how to architect cost-effective, decoupled, and fault-tolerant cloud backends according to the AWS Well-Architected Framework.",
    deliverable: "AWS Educate Digital Credentials & 50% Exam Voucher Eligibility.",
    applicationUrl: "https://aws.amazon.com/education/awseducate/",
    destinationUrl: "learn.html",
    isDemo: true
  },
  {
    id: "lrn-05",
    type: "course",
    title: "Kubernetes & Docker Container Mastery",
    provider: "Cloud Native Computing Foundation (CNCF Demo)",
    organization: "Cloud Native Computing Foundation (CNCF Demo)",
    category: "DevOps",
    highlight: "Free Open Syllabus",
    pricing: "Free Open Syllabus",
    level: "Advanced",
    duration: "5 Weeks",
    mode: "Online",
    location: "Online / Self-Paced",
    deadline: "Rolling Access (Demo)",
    eligibility: "Working familiarity with Linux CLI and web backend architectures",
    skillsTaught: "Dockerfile multi-stage builds, Pods, Services, Ingress, Helm",
    description: "Master modern containerization workflows and Kubernetes orchestration principles used by high-scale software engineering companies worldwide.",
    overview: "Master modern containerization workflows and Kubernetes orchestration principles used by high-scale software engineering companies worldwide.",
    deliverable: "Hands-on Cluster Deployment Assessment + Verifiable CNCF Badge.",
    applicationUrl: "https://www.cncf.io/training/",
    destinationUrl: "learn.html",
    isDemo: true
  },
  {
    id: "lrn-06",
    type: "course",
    title: "Data Structures, Algorithms & Competitive Programming",
    provider: "IIT Kharagpur & NPTEL Initiative (Demo)",
    organization: "IIT Kharagpur & NPTEL Initiative (Demo)",
    category: "Computer Science",
    highlight: "Free Government Course",
    pricing: "Free Government Course",
    level: "All Levels",
    duration: "12 Weeks",
    mode: "Online",
    location: "Online / Weekly Modules",
    deadline: "Demo enrollment ends: Dec 20, 2026",
    eligibility: "Open to all undergraduate students in science and engineering",
    skillsTaught: "Asymptotic Analysis, Trees, Dynamic Programming, Graphs, Bit Manipulation",
    description: "Rigorous academic curriculum designed by premier engineering faculty to build unbeatable problem-solving intuition for coding interviews.",
    overview: "Rigorous academic curriculum designed by premier engineering faculty to build unbeatable problem-solving intuition for coding interviews.",
    deliverable: "Proctored Exam Certificate Recognized by Ministry of Education.",
    applicationUrl: "https://nptel.ac.in/",
    destinationUrl: "learn.html",
    isDemo: true
  },
  {
    id: "lrn-07",
    type: "course",
    title: "Flutter Mobile App Development Mastery",
    provider: "Google Developers Group Community (Demo)",
    organization: "Google Developers Group Community (Demo)",
    category: "Mobile",
    highlight: "Free Community Track",
    pricing: "Free Community Track",
    level: "Beginner",
    duration: "6 Weeks",
    mode: "Online",
    location: "Online / Self-Paced",
    deadline: "Rolling Access (Demo)",
    eligibility: "Basic object-oriented programming knowledge in any language",
    skillsTaught: "Dart 3.x, Flutter Widgets, Provider State Management, Firebase Mobile SDK",
    description: "Build natively compiled iOS and Android applications from a single codebase with beautiful fluid UI, offline caching, and responsive layouts.",
    overview: "Build natively compiled iOS and Android applications from a single codebase with beautiful fluid UI, offline caching, and responsive layouts.",
    deliverable: "Cross-platform app published on GitHub with automated CI/CD.",
    applicationUrl: "https://flutter.dev/learn",
    destinationUrl: "learn.html",
    isDemo: true
  },
  {
    id: "lrn-08",
    type: "course",
    title: "Ethical Hacking & Web Penetration Testing Essentials",
    provider: "CyberSec Initiative India (Demo)",
    organization: "CyberSec Initiative India (Demo)",
    category: "Security",
    highlight: "Free Student Audit",
    pricing: "Free Student Audit",
    level: "Intermediate",
    duration: "6 Weeks",
    mode: "Online",
    location: "Online / Self-Paced",
    deadline: "Rolling Access (Demo)",
    eligibility: "Understanding of web architectures, HTTP methods, and browser security models",
    skillsTaught: "OWASP Top 10, Port Scanning, Burp Suite, XSS/SQLi Defense",
    description: "Understand security from an adversarial viewpoint. Discover how vulnerabilities arise in modern web applications and how to write secure defensive code.",
    overview: "Understand security from an adversarial viewpoint. Discover how vulnerabilities arise in modern web applications and how to write secure defensive code.",
    deliverable: "Practical Lab Assessment Completion Certificate.",
    applicationUrl: "https://owasp.org/",
    destinationUrl: "learn.html",
    isDemo: true
  }
];

// Combine all 32 curated records into a unified master array
export const ALL_OPPORTUNITIES = [
  ...SCHOLARSHIP_ITEMS,
  ...INTERNSHIP_ITEMS,
  ...HACKATHON_ITEMS,
  ...COURSE_ITEMS
];

// Top 8 featured opportunities on the homepage (2 from each domain)
export const FEATURED_OPPORTUNITIES = [
  SCHOLARSHIP_ITEMS[0], // sch-01
  INTERNSHIP_ITEMS[0],  // int-01
  HACKATHON_ITEMS[0],   // hck-01
  COURSE_ITEMS[0],      // lrn-01
  SCHOLARSHIP_ITEMS[1], // sch-02
  INTERNSHIP_ITEMS[1],  // int-02
  HACKATHON_ITEMS[1],   // hck-02
  COURSE_ITEMS[1]       // lrn-02
];

/**
 * Finds an opportunity by ID across all categories.
 */
export function getOpportunityById(id) {
  if (!id) return null;
  return ALL_OPPORTUNITIES.find(item => item.id === id) || null;
}

/**
 * Normalizes an opportunity record to guarantee all standard fields exist.
 */
export function normalizeOpportunity(raw) {
  if (!raw) return null;
  const canonical = getOpportunityById(raw.id) || {};
  return {
    id: raw.id || canonical.id || "opp-" + Math.random().toString(36).substr(2, 9),
    type: raw.type || canonical.type || "scholarship",
    title: raw.title || canonical.title || "Opportunity Details",
    provider: raw.provider || canonical.provider || raw.organization || canonical.organization || "EduBridge Provider",
    organization: raw.organization || canonical.organization || raw.provider || canonical.provider || "EduBridge Provider",
    category: raw.category || canonical.category || "General",
    description: raw.description || canonical.description || raw.overview || canonical.overview || "No description provided.",
    overview: raw.overview || canonical.overview || raw.description || canonical.description || "No description provided.",
    highlight: raw.highlight || canonical.highlight || raw.reward || raw.stipend || raw.prizePool || raw.pricing || "Opportunity Benefit",
    reward: raw.reward || canonical.reward || null,
    stipend: raw.stipend || canonical.stipend || null,
    prizePool: raw.prizePool || canonical.prizePool || null,
    pricing: raw.pricing || canonical.pricing || null,
    eligibility: raw.eligibility || canonical.eligibility || "Eligible for college undergraduates",
    educationLevel: raw.educationLevel || canonical.educationLevel || "Undergraduate / Graduate",
    location: raw.location || canonical.location || "India / Remote",
    mode: raw.mode || canonical.mode || raw.workMode || canonical.workMode || "Online",
    workMode: raw.workMode || canonical.workMode || raw.mode || canonical.mode || "Online",
    duration: raw.duration || canonical.duration || "Self-Paced / Stated Period",
    deadline: raw.deadline || canonical.deadline || "Open for submissions",
    applicationUrl: raw.applicationUrl || canonical.applicationUrl || "https://edubridge.org",
    destinationUrl: raw.destinationUrl || canonical.destinationUrl || "scholarships.html",
    requirements: raw.requirements || canonical.requirements || raw.documentsNeeded || raw.skillsTaught || "Standard college verification",
    documentsNeeded: raw.documentsNeeded || canonical.documentsNeeded || raw.requirements || null,
    skillsTaught: raw.skillsTaught || canonical.skillsTaught || null,
    perks: raw.perks || canonical.perks || null,
    deliverable: raw.deliverable || canonical.deliverable || null,
    isDemo: true,
    savedAt: raw.savedAt || new Date().toISOString()
  };
}

/**
 * Universal safe localStorage helper for saved opportunities with user scoping.
 */
export function getSavedOpportunities(user) {
  const key = user && user.uid ? `edubridge_saved_items_${user.uid}` : 'edubridge_saved_items';
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(item => normalizeOpportunity(item)).filter(Boolean);
  } catch (err) {
    console.warn("Storage read error:", err);
    return [];
  }
}

/**
 * Saves a list of opportunities safely to user-scoped storage.
 */
export function setSavedOpportunities(user, items) {
  const key = user && user.uid ? `edubridge_saved_items_${user.uid}` : 'edubridge_saved_items';
  try {
    const cleanList = (items || []).map(i => normalizeOpportunity(i)).filter(Boolean);
    localStorage.setItem(key, JSON.stringify(cleanList));
    return true;
  } catch (err) {
    console.error("Storage write error (possible full or blocked storage):", err);
    return false;
  }
}

/**
 * Toggles bookmark state for an opportunity by ID.
 * Returns { saved: boolean, item: Object, count: number }
 */
export function toggleBookmarkOpportunity(user, oppId) {
  let list = getSavedOpportunities(user);
  const existingIdx = list.findIndex(i => i.id === oppId);
  let saved = false;
  let targetItem = null;

  if (existingIdx > -1) {
    targetItem = list[existingIdx];
    list.splice(existingIdx, 1);
    saved = false;
  } else {
    const found = getOpportunityById(oppId);
    if (found) {
      targetItem = normalizeOpportunity(found);
      list.push(targetItem);
      saved = true;
    }
  }

  setSavedOpportunities(user, list);
  return { saved, item: targetItem, count: list.length };
}

// =============================================================================
// Application Tracker Storage & Status Management (Priority 3)
// =============================================================================
export const TRACKER_STATUSES = ['Interested', 'Preparing', 'Applied', 'Completed'];

/**
 * Returns user-scoped application tracking map: { [oppId]: { status: string, updatedAt: string } }
 */
export function getApplicationTracker(user) {
  const key = user && user.uid ? `edubridge_applications_${user.uid}` : 'edubridge_applications';
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return parsed;
  } catch (err) {
    console.warn("Tracker storage read error:", err);
    return {};
  }
}

/**
 * Gets application tracking status for a specific opportunity.
 * Defaults to 'Interested' if saved in bookmarks, or null if not tracked.
 */
export function getApplicationStatus(user, oppId) {
  if (!oppId) return 'Interested';
  const tracker = getApplicationTracker(user);
  if (tracker[oppId] && TRACKER_STATUSES.includes(tracker[oppId].status)) {
    return tracker[oppId].status;
  }
  const saved = getSavedOpportunities(user);
  const isSaved = saved.some(item => item.id === oppId);
  return isSaved ? 'Interested' : null;
}

/**
 * Updates application tracking status for an opportunity.
 * Validates status against TRACKER_STATUSES.
 * Automatically synchronizes with user-scoped saved bookmarks.
 */
export function setApplicationStatus(user, oppId, status) {
  if (!oppId || !TRACKER_STATUSES.includes(status)) return false;
  const key = user && user.uid ? `edubridge_applications_${user.uid}` : 'edubridge_applications';
  try {
    const tracker = getApplicationTracker(user);
    tracker[oppId] = {
      status: status,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(key, JSON.stringify(tracker));

    // Ensure tracked opportunity is also present in saved list for quick access
    let savedList = getSavedOpportunities(user);
    const existing = savedList.find(i => i.id === oppId);
    if (!existing) {
      const opp = getOpportunityById(oppId);
      if (opp) {
        const normalized = normalizeOpportunity(opp);
        normalized.applicationStatus = status;
        savedList.push(normalized);
        setSavedOpportunities(user, savedList);
      }
    } else {
      existing.applicationStatus = status;
      setSavedOpportunities(user, savedList);
    }
    return true;
  } catch (err) {
    console.error("Tracker write error:", err);
    return false;
  }
}

// =============================================================================
// Eligibility Matcher Engine (Priority 2)
// =============================================================================
/**
 * Evaluates student eligibility for an opportunity based on actual criteria.
 * Does not invent criteria or guarantee admission.
 * Identifies missing criteria when data is not published.
 */
export function evaluateEligibility(item, profile) {
  if (!item) {
    return {
      status: 'unspecified',
      label: 'Criteria Not Specified',
      badgeClass: 'badge-unspecified',
      isMatch: false,
      missingInfo: true,
      reasons: ['Opportunity record not found.'],
      criteriaText: 'Not available.'
    };
  }

  const eligibilityText = (item.eligibility || '').trim();
  const educationLevel = (item.educationLevel || '').trim();

  // If both eligibility and educationLevel are missing or generic placeholders
  if (!eligibilityText && !educationLevel) {
    return {
      status: 'unspecified',
      label: 'Criteria Missing',
      badgeClass: 'badge-unspecified',
      isMatch: false,
      missingInfo: true,
      reasons: ['The host organization has not published explicit academic or year eligibility criteria.'],
      criteriaText: 'Official eligibility criteria not published in current listing.'
    };
  }

  const pYear = (profile && profile.year || '').toLowerCase();
  const pDegree = (profile && profile.degree || '').toLowerCase();
  const pInterests = (profile && profile.interests || []).map(i => (i || '').toLowerCase());

  const combinedCriteria = (educationLevel + ' ' + eligibilityText).toLowerCase();
  const reasons = [];
  let score = 0;
  let yearMismatch = false;

  // Academic Year criteria detection
  const mentionsFirstYear = /1st year|first year|freshman/.test(combinedCriteria);
  const mentionsSecondYear = /2nd year|second year|sophomore/.test(combinedCriteria);
  const mentionsThirdYear = /3rd year|third year|junior|pre-final/.test(combinedCriteria);
  const mentionsFinalYear = /4th year|final year|senior/.test(combinedCriteria);
  const mentionsUndergrad = /undergraduate|b\.tech|b\.e|college students|degree students|diploma/.test(combinedCriteria);
  const mentionsOpenAll = /open to all|all college students|any degree|all students/.test(combinedCriteria);

  const studentIsFirst = /1st|freshman/.test(pYear);
  const studentIsSecond = /2nd|sophomore/.test(pYear);
  const studentIsThird = /3rd|junior/.test(pYear);
  const studentIsFourth = /4th|senior|final/.test(pYear);

  if (mentionsOpenAll) {
    reasons.push('Open to all registered college students.');
    score += 2;
  } else if (mentionsUndergrad && (studentIsFirst || studentIsSecond || studentIsThird || studentIsFourth || /b\.tech|undergrad/i.test(pDegree))) {
    reasons.push(`Aligns with undergraduate engineering students (${profile && profile.degree ? profile.degree : 'Undergraduate'}).`);
    score += 2;
  }

  if (mentionsFirstYear && studentIsFirst) {
    reasons.push('Matches stated 1st year / freshman eligibility criterion.');
    score += 3;
  } else if (mentionsFirstYear && !mentionsSecondYear && !mentionsThirdYear && !mentionsFinalYear && (studentIsThird || studentIsFourth)) {
    reasons.push('Listing prioritizes 1st year students; verify with provider whether upperclassmen may apply.');
    yearMismatch = true;
  }

  if ((mentionsThirdYear || mentionsFinalYear) && (studentIsThird || studentIsFourth)) {
    reasons.push('Matches pre-final / final year qualification requirement.');
    score += 3;
  } else if ((mentionsThirdYear || mentionsFinalYear) && !mentionsFirstYear && studentIsFirst) {
    reasons.push('Listing prioritizes 3rd / 4th year students; verify with provider.');
    yearMismatch = true;
  }

  // Interest area alignment
  const itemCategory = (item.category || '').toLowerCase();
  const matchedInterest = pInterests.find(interest =>
    interest && (itemCategory.includes(interest) || interest.includes(itemCategory) || (item.title || '').toLowerCase().includes(interest))
  );
  if (matchedInterest) {
    reasons.push(`Aligns with your profile technical interest in ${matchedInterest}.`);
    score += 1;
  }

  let status = 'review';
  let label = 'Review Criteria';
  let badgeClass = 'badge-review';
  let isMatch = false;

  if (yearMismatch) {
    status = 'review';
    label = 'Year Mismatch / Review';
    badgeClass = 'badge-warning';
    isMatch = false;
  } else if (score >= 2) {
    status = 'likely';
    label = 'Likely Eligible';
    badgeClass = 'badge-success';
    isMatch = true;
  } else {
    status = 'potential';
    label = 'Review Stated Criteria';
    badgeClass = 'badge-info';
    isMatch = true;
  }

  return {
    status,
    label,
    badgeClass,
    isMatch,
    missingInfo: false,
    score,
    reasons: reasons.length > 0 ? reasons : ['Review stated requirements before applying.'],
    criteriaText: eligibilityText || educationLevel,
    disclaimer: 'Preliminary match based on profile details. Admission/selection is not guaranteed; please verify official criteria.'
  };
}

// =============================================================================
// Upcoming Deadlines Engine (Priority 4)
// =============================================================================
/**
 * Extracts and sorts opportunities by deadline (sample dates for demonstration).
 */
export function getUpcomingDeadlines(items = null, limit = 5) {
  const pool = items && items.length > 0 ? items : ALL_OPPORTUNITIES;
  const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  
  const parsedItems = pool.map(item => {
    const rawDateStr = item.deadline || '';
    const match = rawDateStr.match(/([A-Za-z]{3})\s+(\d{1,2})(?:[–-]\d{1,2})?,\s+(\d{4})/);
    let parsedDate = null;
    if (match) {
      const monthIndex = monthNames.indexOf(match[1].toLowerCase());
      if (monthIndex > -1) {
        parsedDate = new Date(parseInt(match[3], 10), monthIndex, parseInt(match[2], 10));
      }
    }
    return {
      opportunity: item,
      deadlineText: item.deadline,
      date: parsedDate,
      timestamp: parsedDate ? parsedDate.getTime() : Infinity
    };
  });

  parsedItems.sort((a, b) => a.timestamp - b.timestamp);
  return parsedItems.slice(0, limit);
}

/**
 * Universal search and filter matcher.
 * Tests title, provider/organization, description/overview, and category/domain.
 */
export function matchesSearchAndCategory(item, keyword, categoryFilter) {
  if (!item) return false;

  // 1. Category / Track Filter
  let matchesCategory = true;
  if (categoryFilter && categoryFilter !== 'all') {
    const filterLower = categoryFilter.toLowerCase();
    if (filterLower === 'remote' || filterLower === 'hybrid' || filterLower === 'onsite') {
      matchesCategory = (item.mode || item.workMode || '').toLowerCase() === filterLower;
    } else if (filterLower === 'online' || filterLower === 'in-person') {
      matchesCategory = (item.mode || '').toLowerCase() === filterLower;
    } else if (filterLower === 'free') {
      matchesCategory = (item.pricing || item.highlight || '').toLowerCase().includes('free');
    } else {
      matchesCategory = (item.category || '').toLowerCase() === filterLower;
    }
  }

  if (!matchesCategory) return false;

  // 2. Keyword Search
  if (!keyword || !keyword.trim()) return true;

  const q = keyword.toLowerCase().trim();
  const title = (item.title || '').toLowerCase();
  const provider = (item.provider || item.organization || '').toLowerCase();
  const description = (item.description || item.overview || '').toLowerCase();
  const category = (item.category || '').toLowerCase();
  const eligibility = (item.eligibility || '').toLowerCase();
  const skills = (item.skillsTaught || item.requirements || item.theme || '').toLowerCase();

  return title.includes(q) ||
         provider.includes(q) ||
         description.includes(q) ||
         category.includes(q) ||
         eligibility.includes(q) ||
         skills.includes(q);
}

/**
 * Renders consistent modal details HTML for any opportunity.
 * Supports optional student profile for eligibility checking, tracker status,
 * application readiness checklist, sharing, comparing, and demo reporting.
 */
export function renderOpportunityModalContent(item, userProfile = null, currentStatus = null, currentUser = null) {
  if (!item) return '<p>Opportunity details not found.</p>';

  const statusVal = currentStatus || 'Interested';
  const eligibility = evaluateEligibility(item, userProfile);
  const isInCompare = isInComparison(currentUser, item.id);

  let benefitLabel = 'Benefit:';
  let benefitVal = item.highlight || 'Opportunity Benefit';
  if (item.type === 'scholarship') {
    benefitLabel = 'Grant Award:';
    benefitVal = item.reward || item.highlight || 'Financial Grant';
  } else if (item.type === 'internship') {
    benefitLabel = 'Monthly Stipend:';
    benefitVal = item.stipend || item.highlight || 'Stipend Provided';
  } else if (item.type === 'hackathon') {
    benefitLabel = 'Prize Pool:';
    benefitVal = item.prizePool || item.highlight || 'Cash & Credits';
  } else if (item.type === 'course') {
    benefitLabel = 'Tuition / Access:';
    benefitVal = item.pricing || item.highlight || 'Free Access';
  }

  let extraSpecs = '';
  if (item.documentsNeeded) {
    extraSpecs = `
      <div>
        <h4 style="font-size: 13px; font-weight: 700; margin-bottom: 4px; color: var(--text-primary, #1c231f);">Required Documentation (Guidance):</h4>
        <p style="font-size: 12.5px; color: var(--text-secondary, #4f5d54); line-height: 1.5;">${item.documentsNeeded}</p>
      </div>
    `;
  } else if (item.requirements || item.responsibilities) {
    extraSpecs = `
      <div>
        <h4 style="font-size: 13px; font-weight: 700; margin-bottom: 4px; color: var(--text-primary, #1c231f);">Prerequisites & Responsibilities:</h4>
        <p style="font-size: 12.5px; color: var(--text-secondary, #4f5d54); line-height: 1.5;">${item.requirements || ''} ${item.responsibilities ? '<br><strong>Role Scope:</strong> ' + item.responsibilities : ''}</p>
      </div>
    `;
  } else if (item.skillsTaught || item.deliverable) {
    extraSpecs = `
      <div>
        <h4 style="font-size: 13px; font-weight: 700; margin-bottom: 4px; color: var(--text-primary, #1c231f);">Key Skills & Credential:</h4>
        <p style="font-size: 12.5px; color: var(--text-secondary, #4f5d54); line-height: 1.5;">${item.skillsTaught || ''} ${item.deliverable ? '<br><strong>Recognition:</strong> ' + item.deliverable : ''}</p>
      </div>
    `;
  } else if (item.theme || item.perks) {
    extraSpecs = `
      <div>
        <h4 style="font-size: 13px; font-weight: 700; margin-bottom: 4px; color: var(--text-primary, #1c231f);">Focus Theme & Participant Perks:</h4>
        <p style="font-size: 12.5px; color: var(--text-secondary, #4f5d54); line-height: 1.5;">${item.theme || ''} ${item.perks ? '<br><strong>Incentives:</strong> ' + item.perks : ''}</p>
      </div>
    `;
  }

  let eligibilityBadgeStyle = 'background: #dcfce7; color: #15803d; border: 1px solid #bbf7d0;';
  if (eligibility.status === 'review') {
    eligibilityBadgeStyle = 'background: #fef3c7; color: #b45309; border: 1px solid #fde68a;';
  } else if (eligibility.status === 'unspecified') {
    eligibilityBadgeStyle = 'background: #f3f4f6; color: #4b5563; border: 1px solid #e5e7eb;';
  }

  // Generate Feature 1: Readiness Checklist Section
  const checklistHTML = renderChecklistSectionHTML(item, currentUser);

  return `
    <div>
      <div style="font-size: 12px; color: var(--secondary, #587965); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
        ${item.type.toUpperCase()} &bull; ${item.provider || item.organization}
      </div>
      <p style="margin-top: 8px; line-height: 1.6; color: var(--text-secondary, #4f5d54); font-size: 13.5px;">
        ${item.description || item.overview}
      </p>
    </div>

    <!-- Quick Action Toolbar: Share, Compare, Report (Features 3, 4, 5) -->
    <div class="modal-feature-toolbar" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #ffffff; border: 1px solid var(--border, #e2ddd4); border-radius: 8px; padding: 10px 14px;">
      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
        <!-- Feature 3: Share Button -->
        <button type="button" class="btn btn-outline btn-sm modal-share-btn" data-opp-id="${item.id}" style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; padding: 6px 12px; cursor: pointer;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          <span>Share</span>
        </button>

        <!-- Feature 5: Compare Toggle Button -->
        <button type="button" class="btn btn-outline btn-sm modal-compare-btn ${isInCompare ? 'active' : ''}" data-opp-id="${item.id}" style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; padding: 6px 12px; cursor: pointer; ${isInCompare ? 'background: var(--primary, #153e2e); color: #ffffff;' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <path d="M18 20V10M12 20V4M6 20v-6"></path>
          </svg>
          <span class="modal-compare-text">${isInCompare ? 'Comparing (Selected)' : 'Add to Compare'}</span>
        </button>
      </div>

      <!-- Feature 4: Report Action Trigger -->
      <div>
        <button type="button" class="modal-report-toggle-btn" data-opp-id="${item.id}" style="background: none; border: none; font-size: 12px; font-weight: 600; color: #b91c1c; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; padding: 4px 6px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" y1="22" x2="4" y2="15"></line>
          </svg>
          <span>Report Opportunity</span>
        </button>
      </div>
    </div>

    <!-- Feature 4: Collapsible Report Form Container -->
    <div id="reportSection_${item.id}" class="modal-report-box" style="display: none; background: #fffbfb; border: 1px solid #fecaca; border-radius: 8px; padding: 14px;">
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px; color: #991b1b; font-weight: 700; font-size: 13px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>Report Incorrect or Outdated Opportunity</span>
      </div>
      <p style="font-size: 11.5px; color: #7f1d1d; line-height: 1.4; margin-bottom: 12px; background: #fef2f2; padding: 6px 10px; border-radius: 4px; border-left: 3px solid #ef4444;">
        <strong>Demo / Static Mode Notice:</strong> EduBridge runs client-side without an external moderation server. Reports are recorded locally in your browser storage for evaluation and will not be transmitted externally.
      </p>
      <div style="margin-bottom: 10px;">
        <label for="reportReasonSelect_${item.id}" style="display: block; font-size: 12px; font-weight: 700; color: var(--text-primary, #1c231f); margin-bottom: 4px;">
          Reason for report <span style="color: #b91c1c;">*</span>
        </label>
        <select id="reportReasonSelect_${item.id}" class="report-reason-select" style="width: 100%; height: 34px; padding: 0 10px; border-radius: 6px; border: 1px solid var(--border, #e2ddd4); background: #ffffff; font-size: 12.5px; color: var(--text-primary, #1c231f);">
          <option value="">Select a reason...</option>
          <option value="Expired deadline">Expired deadline</option>
          <option value="Incorrect eligibility information">Incorrect eligibility information</option>
          <option value="Broken application link">Broken application link</option>
          <option value="Incorrect or misleading details">Incorrect or misleading details</option>
          <option value="Suspicious opportunity">Suspicious opportunity</option>
          <option value="Other">Other</option>
        </select>
        <div id="reportReasonError_${item.id}" style="display: none; color: #b91c1c; font-size: 11.5px; margin-top: 4px; font-weight: 600;">Please select a reason before submitting.</div>
      </div>
      <div style="margin-bottom: 12px;">
        <label for="reportDetailsInput_${item.id}" style="display: block; font-size: 12px; font-weight: 700; color: var(--text-primary, #1c231f); margin-bottom: 4px;">
          Additional context (optional)
        </label>
        <textarea id="reportDetailsInput_${item.id}" rows="2" placeholder="Briefly specify what appears outdated or incorrect..." style="width: 100%; padding: 8px 10px; border-radius: 6px; border: 1px solid var(--border, #e2ddd4); font-size: 12.5px; resize: vertical; box-sizing: border-box; font-family: inherit;"></textarea>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <button type="button" class="btn btn-primary btn-sm modal-report-submit-btn" data-opp-id="${item.id}" style="background: #b91c1c; border-color: #b91c1c; font-size: 12px; padding: 6px 12px;">
          Submit Report
        </button>
        <button type="button" class="btn btn-outline btn-sm modal-report-cancel-btn" data-opp-id="${item.id}" style="font-size: 12px; padding: 6px 12px;">
          Cancel
        </button>
      </div>
    </div>

    <!-- Application Tracker Controls inside Modal -->
    <div class="modal-tracker-box" style="background: #ffffff; border: 1px solid var(--border, #e2ddd4); border-radius: 8px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="color: var(--primary, #153e2e);">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
        <span style="font-size: 13px; font-weight: 700; color: var(--text-primary, #1c231f);">Application Tracker Stage:</span>
      </div>
      <div style="display: flex; align-items: center; gap: 6px;">
        <select class="modal-status-select" data-opp-id="${item.id}" style="height: 32px; padding: 0 10px; border-radius: 6px; border: 1px solid var(--border, #e2ddd4); background: var(--bg-body, #f8f6f0); font-size: 13px; font-weight: 600; color: var(--primary, #153e2e); cursor: pointer;">
          <option value="Interested" ${statusVal === 'Interested' ? 'selected' : ''}>Interested</option>
          <option value="Preparing" ${statusVal === 'Preparing' ? 'selected' : ''}>Preparing</option>
          <option value="Applied" ${statusVal === 'Applied' ? 'selected' : ''}>Applied</option>
          <option value="Completed" ${statusVal === 'Completed' ? 'selected' : ''}>Completed</option>
        </select>
      </div>
    </div>

    <!-- Feature 1: Application Readiness Checklist -->
    ${checklistHTML}

    <!-- Opportunity Core Specifications -->
    <div style="background: var(--bg-subtle, #f0ece1); padding: 14px; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; font-size: 13px;">
      <div><strong>${benefitLabel}</strong> <span style="color: var(--primary, #153e2e); font-weight: 700;">${benefitVal}</span></div>
      <div><strong>Domain / Category:</strong> ${item.category || 'General'}</div>
      <div><strong>Eligibility:</strong> ${item.eligibility || 'College Students'}</div>
      <div><strong>Mode & Location:</strong> ${item.mode || 'Online'} &bull; ${item.location || 'Pan-India'}</div>
      <div><strong>Duration:</strong> ${item.duration || 'Flexible'}</div>
      <div><strong>Deadline / Schedule:</strong> <span style="color: #b45309; font-weight: 600;">${item.deadline || 'Open'}</span></div>
    </div>

    <!-- Eligibility Assessment Box -->
    <div class="modal-eligibility-box" style="background: #ffffff; border: 1px solid var(--border, #e2ddd4); border-radius: 8px; padding: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
        <span style="font-size: 13px; font-weight: 700; color: var(--text-primary, #1c231f); display: flex; align-items: center; gap: 6px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15" style="color: var(--secondary, #587965);">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          Eligibility Assessment
        </span>
        <span style="font-size: 11.5px; font-weight: 700; padding: 3px 8px; border-radius: 9999px; ${eligibilityBadgeStyle}">
          ${eligibility.label}
        </span>
      </div>
      <ul style="padding-left: 18px; margin: 6px 0; font-size: 12.5px; color: var(--text-secondary, #4f5d54); line-height: 1.5;">
        ${eligibility.reasons.map(r => `<li>${r}</li>`).join('')}
      </ul>
      <div style="font-size: 11px; color: var(--text-muted, #7d8b82); font-style: italic; margin-top: 6px; border-top: 1px dashed var(--border-light, #ece8df); padding-top: 6px;">
        ${eligibility.missingInfo ? 'Notice: Provider has not published explicit criteria.' : 'Preliminary match based on profile details. Admission/selection is not guaranteed; verify official terms with provider.'}
      </div>
    </div>

    ${extraSpecs}

    <div style="padding: 10px 14px; background: #fff8e7; border-left: 3px solid #c59b27; border-radius: 4px; font-size: 12px; color: #7a5000; line-height: 1.5;">
      <strong>Educational Demo Notice:</strong> This opportunity listing is prepared for student discovery and interface preview. All official registrations should be verified directly through host or state portals.
    </div>
  `;
}

// =============================================================================
// Feature 1: Application Readiness Checklist
// =============================================================================

/**
 * Returns dynamic preparation tasks according to opportunity category and specs.
 */
export function getDefaultChecklistTasks(item) {
  if (!item) return [];

  const tasks = [
    { id: 'task_eligibility', label: 'Review eligibility requirements and academic criteria' },
    { id: 'task_deadline', label: `Confirm application closing schedule (${item.deadline || 'Closing date'})` }
  ];

  if (item.type === 'scholarship') {
    tasks.push({
      id: 'task_docs',
      label: item.documentsNeeded ? `Gather required documents: ${item.documentsNeeded}` : 'Prepare academic marksheets, identification, and income certificates'
    });
    tasks.push({ id: 'task_bonafide', label: 'Request bonafide certificate or academic verification from department' });
    tasks.push({ id: 'task_portal', label: 'Review portal application guidelines and submission terms' });
  } else if (item.type === 'internship') {
    tasks.push({ id: 'task_resume', label: 'Tailor technical resume / CV for this role' });
    tasks.push({ id: 'task_portfolio', label: 'Prepare GitHub portfolio or live demo project links' });
    tasks.push({ id: 'task_sop', label: 'Draft concise statement of purpose or tailored cover note' });
    if (item.requirements) {
      tasks.push({ id: 'task_prereq', label: `Review prerequisites: ${item.requirements}` });
    }
    tasks.push({ id: 'task_instructions', label: 'Review application instructions and verify portal details' });
  } else if (item.type === 'hackathon') {
    tasks.push({ id: 'task_theme', label: `Analyze problem themes and rules (${item.theme || 'Contest Scope'})` });
    tasks.push({ id: 'task_team', label: 'Confirm team registration or establish individual submission profile' });
    tasks.push({ id: 'task_ideation', label: 'Draft initial solution architecture, tech stack, and API choices' });
    tasks.push({ id: 'task_repo', label: 'Initialize codebase repository and demo presentation draft' });
  } else if (item.type === 'course') {
    tasks.push({ id: 'task_syllabus', label: 'Review syllabus, module prerequisites, and estimated completion time' });
    tasks.push({ id: 'task_enroll', label: 'Complete enrollment or course audit on host learning portal' });
    tasks.push({ id: 'task_schedule', label: 'Block dedicated weekly study hours on your study calendar' });
    tasks.push({ id: 'task_tools', label: 'Install and configure required coding tools, compilers, or environments' });
  } else {
    tasks.push({ id: 'task_resume', label: 'Prepare updated resume and academic credentials' });
    tasks.push({ id: 'task_docs', label: 'Assemble required supporting documentation' });
    tasks.push({ id: 'task_instructions', label: 'Review application instructions and verify portal details' });
  }

  return tasks;
}

/**
 * Gets user-scoped checklist state for a specific opportunity: { [taskId]: boolean }
 */
export function getChecklistState(user, oppId) {
  if (!oppId) return {};
  const userScope = user && user.uid ? user.uid : 'guest';
  const key = `edubridge_checklist_${userScope}_${oppId}`;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return (parsed && typeof parsed === 'object') ? parsed : {};
  } catch (err) {
    console.warn("Checklist read error:", err);
    return {};
  }
}

/**
 * Saves a single checklist task state for an opportunity and user.
 */
export function saveChecklistItem(user, oppId, taskId, isChecked) {
  if (!oppId || !taskId) return false;
  const userScope = user && user.uid ? user.uid : 'guest';
  const key = `edubridge_checklist_${userScope}_${oppId}`;
  try {
    const state = getChecklistState(user, oppId);
    state[taskId] = !!isChecked;
    localStorage.setItem(key, JSON.stringify(state));
    return true;
  } catch (err) {
    console.error("Checklist write error:", err);
    return false;
  }
}

/**
 * Resets all checklist progress for a specific opportunity.
 */
export function resetChecklistState(user, oppId) {
  if (!oppId) return false;
  const userScope = user && user.uid ? user.uid : 'guest';
  const key = `edubridge_checklist_${userScope}_${oppId}`;
  try {
    localStorage.removeItem(key);
    return true;
  } catch (err) {
    console.error("Checklist reset error:", err);
    return false;
  }
}

/**
 * Renders HTML markup for the readiness checklist section.
 */
export function renderChecklistSectionHTML(item, user) {
  const tasks = getDefaultChecklistTasks(item);
  const state = getChecklistState(user, item.id);
  const completedCount = tasks.filter(t => !!state[t.id]).length;
  const totalCount = tasks.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return `
    <div class="modal-checklist-card" id="checklistContainer_${item.id}" style="background: #ffffff; border: 1px solid var(--border, #e2ddd4); border-radius: 8px; padding: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
        <span style="font-size: 13px; font-weight: 700; color: var(--text-primary, #1c231f); display: flex; align-items: center; gap: 6px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="color: var(--primary, #153e2e);">
            <path d="M9 11l3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
          Application Readiness Checklist
        </span>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span id="checklistCountBadge_${item.id}" style="font-size: 12px; font-weight: 700; color: var(--primary, #153e2e); background: var(--secondary-soft, #eaf2ed); padding: 2px 8px; border-radius: 12px;">
            ${completedCount} of ${totalCount} completed (${percentage}%)
          </span>
          <button type="button" class="checklist-reset-btn" data-opp-id="${item.id}" title="Reset checklist progress for this opportunity" style="background: none; border: 1px solid var(--border, #e2ddd4); font-size: 11px; font-weight: 600; color: var(--text-muted, #7d8b82); padding: 2px 7px; border-radius: 4px; cursor: pointer; transition: all 0.2s ease;">
            Reset
          </button>
        </div>
      </div>

      <!-- Visual Progress Bar -->
      <div style="background: #e9ecef; border-radius: 9999px; height: 6px; width: 100%; overflow: hidden; margin-bottom: 12px;">
        <div id="checklistProgressBar_${item.id}" style="height: 100%; background: #22c55e; width: ${percentage}%; transition: width 0.3s ease; border-radius: 9999px;"></div>
      </div>

      <!-- Checklist Task List -->
      <div class="checklist-tasks" style="display: flex; flex-direction: column; gap: 8px;">
        ${tasks.map(t => {
          const isDone = !!state[t.id];
          return `
            <label style="display: flex; align-items: flex-start; gap: 8px; font-size: 12.5px; color: ${isDone ? 'var(--text-muted, #7d8b82)' : 'var(--text-primary, #1c231f)'}; cursor: pointer; line-height: 1.4; user-select: none;">
              <input type="checkbox" class="checklist-task-checkbox" data-opp-id="${item.id}" data-task-id="${t.id}" ${isDone ? 'checked' : ''} style="margin-top: 2px; accent-color: var(--primary, #153e2e); cursor: pointer; width: 15px; height: 15px; flex-shrink: 0;">
              <span class="checklist-task-text" style="${isDone ? 'text-decoration: line-through;' : ''}">${t.label}</span>
            </label>
          `;
        }).join('')}
      </div>
      <div style="font-size: 11px; color: var(--text-muted, #7d8b82); margin-top: 10px; border-top: 1px dashed var(--border-light, #ece8df); padding-top: 6px;">
        Checklist progress is saved per-opportunity to your account and does not modify your current application stage.
      </div>
    </div>
  `;
}

// =============================================================================
// Feature 3: Share an Opportunity
// =============================================================================

/**
 * Generates a resilient, shareable URL for an opportunity that works on
 * GitHub Pages (subdirectories), custom domains, and local preview servers.
 */
export function getOpportunityShareUrl(item) {
  if (!item) return window.location.href;
  const targetPage = item.destinationUrl || (
    item.type === 'scholarship' ? 'scholarships.html' :
    item.type === 'internship' ? 'internships.html' :
    item.type === 'hackathon' ? 'hackathons.html' :
    item.type === 'course' ? 'learn.html' : 'index.html'
  );

  try {
    // new URL with window.location.href properly preserves subdirectory base paths on GitHub Pages
    const url = new URL(`${targetPage}?id=${encodeURIComponent(item.id)}`, window.location.href);
    return url.href;
  } catch (err) {
    const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    return `${window.location.origin}${basePath}${targetPage}?id=${encodeURIComponent(item.id)}`;
  }
}

/**
 * Triggers native Web Share API or falls back to clipboard copy.
 * Returns { success: boolean, method: string, message: string }
 */
export async function shareOpportunity(item, showToast = null) {
  if (!item) return { success: false, message: 'Invalid opportunity' };

  const shareUrl = getOpportunityShareUrl(item);
  const shareTitle = `EduBridge: ${item.title}`;
  const shareText = `Explore "${item.title}" by ${item.provider || item.organization} on EduBridge:`;

  // 1. Try Web Share API (mobile devices / modern browsers)
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl
      });
      if (typeof showToast === 'function') {
        showToast('Opportunity link shared successfully!');
      }
      return { success: true, method: 'web-share', message: 'Shared successfully' };
    } catch (err) {
      if (err.name === 'AbortError') {
        return { success: false, method: 'aborted', message: 'Share canceled by user' };
      }
      // Non-abort error: proceed to clipboard fallback
      console.warn("Web Share failed, falling back to clipboard:", err);
    }
  }

  // 2. Clipboard Fallback
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(shareUrl);
      if (typeof showToast === 'function') {
        showToast('Link copied to clipboard!');
      }
      return { success: true, method: 'clipboard', message: 'Link copied to clipboard' };
    } else {
      // Legacy document.execCommand fallback
      const tempInput = document.createElement('textarea');
      tempInput.value = shareUrl;
      tempInput.style.position = 'fixed';
      tempInput.style.left = '-9999px';
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      if (typeof showToast === 'function') {
        showToast('Link copied to clipboard!');
      }
      return { success: true, method: 'clipboard-legacy', message: 'Link copied to clipboard' };
    }
  } catch (clipErr) {
    console.error("Clipboard write error:", clipErr);
    if (typeof showToast === 'function') {
      showToast('Could not copy automatically. Link: ' + shareUrl);
    }
    return { success: false, method: 'failed', message: 'Clipboard access denied' };
  }
}

// =============================================================================
// Feature 4: Report an Opportunity
// =============================================================================

/**
 * Retrieves reports saved in browser storage for current user.
 */
export function getReports(user) {
  const userScope = user && user.uid ? user.uid : 'guest';
  const key = `edubridge_reports_${userScope}`;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn("Reports read error:", err);
    return [];
  }
}

/**
 * Saves a user-submitted opportunity report to local storage (Demo Mode).
 * Validates required reason and records timestamp.
 */
export function submitReport(user, oppId, reason, details = '') {
  if (!oppId || !reason || !reason.trim()) {
    return { success: false, message: 'Please select a valid report reason.' };
  }

  const opp = getOpportunityById(oppId);
  const userScope = user && user.uid ? user.uid : 'guest';
  const key = `edubridge_reports_${userScope}`;

  try {
    const reports = getReports(user);
    const newReport = {
      id: `rep_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      oppId: oppId,
      oppTitle: opp ? opp.title : `Opportunity #${oppId}`,
      reason: reason.trim(),
      details: details.trim(),
      submittedAt: new Date().toISOString(),
      isDemo: true
    };
    reports.push(newReport);
    localStorage.setItem(key, JSON.stringify(reports));

    return {
      success: true,
      message: 'Report recorded in local browser storage (Demo Mode). Thank you for helping keep listings accurate!',
      report: newReport
    };
  } catch (err) {
    console.error("Report write error:", err);
    return { success: false, message: 'Could not save report to local storage.' };
  }
}

// =============================================================================
// Feature 5: Opportunity Comparison
// =============================================================================

export const MAX_COMPARE_ITEMS = 3;

/**
 * Returns array of opportunity IDs currently in comparison list: string[]
 */
export function getComparisonList(user) {
  const userScope = user && user.uid ? user.uid : 'guest';
  const key = `edubridge_compare_${userScope}`;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_COMPARE_ITEMS) : [];
  } catch (err) {
    console.warn("Comparison list read error:", err);
    return [];
  }
}

/**
 * Checks if an opportunity ID is in comparison.
 */
export function isInComparison(user, oppId) {
  if (!oppId) return false;
  const list = getComparisonList(user);
  return list.includes(oppId);
}

/**
 * Adds an opportunity to comparison (Max 3 items, no duplicates).
 */
export function addToComparison(user, oppId) {
  if (!oppId) return { success: false, reason: 'invalid_id' };
  const list = getComparisonList(user);

  if (list.includes(oppId)) {
    return { success: false, reason: 'already_present', list };
  }

  if (list.length >= MAX_COMPARE_ITEMS) {
    return { success: false, reason: 'limit_reached', list, max: MAX_COMPARE_ITEMS };
  }

  list.push(oppId);
  const userScope = user && user.uid ? user.uid : 'guest';
  const key = `edubridge_compare_${userScope}`;
  try {
    localStorage.setItem(key, JSON.stringify(list));
    return { success: true, list };
  } catch (err) {
    console.error("Comparison write error:", err);
    return { success: false, reason: 'storage_error', list };
  }
}

/**
 * Removes an opportunity from comparison list.
 */
export function removeFromComparison(user, oppId) {
  if (!oppId) return { success: false };
  let list = getComparisonList(user);
  list = list.filter(id => id !== oppId);

  const userScope = user && user.uid ? user.uid : 'guest';
  const key = `edubridge_compare_${userScope}`;
  try {
    localStorage.setItem(key, JSON.stringify(list));
    return { success: true, list };
  } catch (err) {
    console.error("Comparison write error:", err);
    return { success: false, list };
  }
}

/**
 * Clears all opportunities from comparison list.
 */
export function clearComparison(user) {
  const userScope = user && user.uid ? user.uid : 'guest';
  const key = `edubridge_compare_${userScope}`;
  try {
    localStorage.setItem(key, JSON.stringify([]));
    return { success: true, list: [] };
  } catch (err) {
    console.error("Comparison clear error:", err);
    return { success: false, list: [] };
  }
}

/**
 * Renders rich side-by-side comparison table comparing up to 3 opportunities across:
 * - Opportunity name & provider
 * - Type / category
 * - Organization
 * - Deadline
 * - Location or mode
 * - Education level and eligibility
 * - Benefits or stipend
 * - Student's profile eligibility assessment
 * - Application link / action
 */
export function renderComparisonModalHTML(user, userProfile = null) {
  const compareIds = getComparisonList(user);
  const compareItems = compareIds.map(id => getOpportunityById(id)).filter(Boolean);

  if (compareItems.length === 0) {
    return `
      <div style="text-align: center; padding: 40px 20px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" width="48" height="48" style="margin: 0 auto 14px; color: var(--text-muted, #7d8b82);">
          <path d="M18 20V10M12 20V4M6 20v-6"></path>
        </svg>
        <h3 style="font-size: 1.2rem; color: var(--text-primary, #1c231f); margin-bottom: 8px;">No opportunities selected for comparison</h3>
        <p style="font-size: 13.5px; color: var(--text-secondary, #4f5d54); max-width: 440px; margin: 0 auto 18px;">
          Browse our scholarships, internships, hackathons, or courses and click the <strong>Compare</strong> button on any card or detail modal to evaluate them side by side.
        </p>
      </div>
    `;
  }

  const emptySlotsCount = Math.max(0, MAX_COMPARE_ITEMS - compareItems.length);
  let emptyHeaders = '';
  let emptyTds = '';
  for (let i = 0; i < emptySlotsCount; i++) {
    emptyHeaders += `
      <th style="padding: 12px 14px; background: #faf9f5; border-bottom: 2px solid var(--border, #e2ddd4); border-left: 1px dashed var(--border, #e2ddd4); vertical-align: middle; text-align: center; color: var(--text-muted, #7d8b82); font-weight: 500; font-size: 12px;">
        <em>Empty Comparison Slot<br><span style="font-size: 11px;">(Add another opportunity)</span></em>
      </th>
    `;
    emptyTds += `
      <td style="padding: 10px 14px; border-bottom: 1px solid var(--border, #e2ddd4); border-left: 1px dashed var(--border, #e2ddd4); background: #faf9f5; text-align: center; color: var(--text-muted, #7d8b82); font-size: 11.5px;">
        &mdash;
      </td>
    `;
  }

  return `
    <div style="margin-bottom: 12px; font-size: 13px; color: var(--text-secondary, #4f5d54); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
      <span>Comparing <strong>${compareItems.length}</strong> of <strong>${MAX_COMPARE_ITEMS}</strong> opportunities</span>
      <span style="font-size: 11.5px; color: var(--text-muted, #7d8b82);">Scroll horizontally if viewed on smaller screens</span>
    </div>

    <div class="comparison-table-wrapper" style="overflow-x: auto; -webkit-overflow-scrolling: touch; border: 1px solid var(--border, #e2ddd4); border-radius: 8px; background: #ffffff;">
      <table class="comparison-table" style="width: 100%; min-width: 680px; border-collapse: separate; border-spacing: 0; font-size: 13px; text-align: left;">
        <thead>
          <tr>
            <th style="width: 170px; min-width: 150px; padding: 12px 14px; background: var(--bg-subtle, #f0ece1); border-bottom: 2px solid var(--border, #e2ddd4); font-weight: 700; color: var(--text-primary, #1c231f); position: sticky; left: 0; z-index: 2;">
              Criteria
            </th>
            ${compareItems.map(item => `
              <th style="padding: 12px 14px; background: #ffffff; border-bottom: 2px solid var(--border, #e2ddd4); border-left: 1px solid var(--border, #e2ddd4); vertical-align: top; min-width: 220px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                  <div>
                    <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--secondary, #587965); letter-spacing: 0.05em;">${item.type.toUpperCase()}</span>
                    <div style="font-weight: 700; font-size: 13.5px; color: var(--text-primary, #1c231f); margin-top: 2px; line-height: 1.3;">${item.title}</div>
                    <div style="font-size: 12px; color: var(--text-secondary, #4f5d54); margin-top: 2px;">${item.provider || item.organization || 'Not specified'}</div>
                  </div>
                  <button type="button" class="comparison-remove-item-btn" data-opp-id="${item.id}" title="Remove from comparison" aria-label="Remove ${item.title} from comparison" style="background: #fef2f2; border: 1px solid #fee2e2; color: #b91c1c; border-radius: 4px; padding: 2px 6px; cursor: pointer; font-size: 12px; font-weight: 700;">
                    &times;
                  </button>
                </div>
              </th>
            `).join('')}
            ${emptyHeaders}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px 14px; font-weight: 600; background: var(--bg-subtle, #f0ece1); border-bottom: 1px solid var(--border, #e2ddd4); position: sticky; left: 0; z-index: 1;">Category / Track</td>
            ${compareItems.map(item => `<td style="padding: 10px 14px; border-bottom: 1px solid var(--border, #e2ddd4); border-left: 1px solid var(--border, #e2ddd4);">${item.category || 'Not specified'}</td>`).join('')}
            ${emptyTds}
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: 600; background: var(--bg-subtle, #f0ece1); border-bottom: 1px solid var(--border, #e2ddd4); position: sticky; left: 0; z-index: 1;">Host Organization</td>
            ${compareItems.map(item => `<td style="padding: 10px 14px; border-bottom: 1px solid var(--border, #e2ddd4); border-left: 1px solid var(--border, #e2ddd4);">${item.organization || item.provider || 'Not specified'}</td>`).join('')}
            ${emptyTds}
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: 600; background: var(--bg-subtle, #f0ece1); border-bottom: 1px solid var(--border, #e2ddd4); position: sticky; left: 0; z-index: 1;">Deadline</td>
            ${compareItems.map(item => `<td style="padding: 10px 14px; border-bottom: 1px solid var(--border, #e2ddd4); border-left: 1px solid var(--border, #e2ddd4); color: #b45309; font-weight: 600;">${item.deadline || 'Not specified'}</td>`).join('')}
            ${emptyTds}
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: 600; background: var(--bg-subtle, #f0ece1); border-bottom: 1px solid var(--border, #e2ddd4); position: sticky; left: 0; z-index: 1;">Location & Mode</td>
            ${compareItems.map(item => `<td style="padding: 10px 14px; border-bottom: 1px solid var(--border, #e2ddd4); border-left: 1px solid var(--border, #e2ddd4);">${item.mode || 'Online'} &bull; ${item.location || 'Not specified'}</td>`).join('')}
            ${emptyTds}
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: 600; background: var(--bg-subtle, #f0ece1); border-bottom: 1px solid var(--border, #e2ddd4); position: sticky; left: 0; z-index: 1;">Level & Eligibility</td>
            ${compareItems.map(item => `<td style="padding: 10px 14px; border-bottom: 1px solid var(--border, #e2ddd4); border-left: 1px solid var(--border, #e2ddd4); line-height: 1.4;">${item.educationLevel ? '<strong>Level:</strong> ' + item.educationLevel + '<br>' : ''}${item.eligibility ? '<strong>Eligibility:</strong> ' + item.eligibility : 'Not specified'}</td>`).join('')}
            ${emptyTds}
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: 600; background: var(--bg-subtle, #f0ece1); border-bottom: 1px solid var(--border, #e2ddd4); position: sticky; left: 0; z-index: 1;">Benefit / Stipend</td>
            ${compareItems.map(item => {
              const val = item.reward || item.stipend || item.prizePool || item.pricing || item.highlight || 'Not specified';
              return `<td style="padding: 10px 14px; border-bottom: 1px solid var(--border, #e2ddd4); border-left: 1px solid var(--border, #e2ddd4); font-weight: 700; color: var(--primary, #153e2e);">${val}</td>`;
            }).join('')}
            ${emptyTds}
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: 600; background: var(--bg-subtle, #f0ece1); border-bottom: 1px solid var(--border, #e2ddd4); position: sticky; left: 0; z-index: 1;">Eligibility Assessment</td>
            ${compareItems.map(item => {
              const el = evaluateEligibility(item, userProfile);
              let badgeStyle = 'background: #dcfce7; color: #15803d; border: 1px solid #bbf7d0;';
              if (el.status === 'review') badgeStyle = 'background: #fef3c7; color: #b45309; border: 1px solid #fde68a;';
              else if (el.status === 'unspecified') badgeStyle = 'background: #f3f4f6; color: #4b5563; border: 1px solid #e5e7eb;';
              return `
                <td style="padding: 10px 14px; border-bottom: 1px solid var(--border, #e2ddd4); border-left: 1px solid var(--border, #e2ddd4);">
                  <span style="display: inline-block; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 9999px; ${badgeStyle} margin-bottom: 4px;">
                    ${el.label}
                  </span>
                  <div style="font-size: 11.5px; color: var(--text-secondary, #4f5d54); line-height: 1.4;">
                    ${el.reasons[0] || 'Review terms with host'}
                  </div>
                </td>
              `;
            }).join('')}
            ${emptyTds}
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: 600; background: var(--bg-subtle, #f0ece1); border-bottom: 1px solid var(--border, #e2ddd4); position: sticky; left: 0; z-index: 1;">Direct Action</td>
            ${compareItems.map(item => `
              <td style="padding: 10px 14px; border-bottom: 1px solid var(--border, #e2ddd4); border-left: 1px solid var(--border, #e2ddd4);">
                <div style="display: flex; flex-direction: column; gap: 6px;">
                  ${item.applicationUrl ? `<a href="${item.applicationUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="font-size: 12px; text-align: center; padding: 5px 10px;">Apply / Visit Site</a>` : ''}
                  <button type="button" class="btn btn-outline btn-sm comparison-open-detail-btn" data-opp-id="${item.id}" style="font-size: 12px; padding: 5px 10px;">View Full Details</button>
                </div>
              </td>
            `).join('')}
            ${emptyTds}
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

/**
 * Renders floating bottom tray markup showing current compare selection.
 */
export function renderComparisonTrayHTML(user) {
  const compareIds = getComparisonList(user);
  const compareItems = compareIds.map(id => getOpportunityById(id)).filter(Boolean);

  if (compareItems.length === 0) return '';

  return `
    <div class="tray-inner" style="background: #153e2e; color: #ffffff; border-radius: 12px; padding: 10px 18px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; border: 1px solid rgba(255,255,255,0.2);">
      <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: 13.5px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="color: #b8e0ce;">
            <path d="M18 20V10M12 20V4M6 20v-6"></path>
          </svg>
          <span>Compare (${compareItems.length}/${MAX_COMPARE_ITEMS})</span>
        </div>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${compareItems.map(item => `
            <div style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 9999px; padding: 3px 10px; font-size: 11.5px; display: inline-flex; align-items: center; gap: 6px; color: #ffffff;">
              <span style="max-width: 140px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.title}</span>
              <button type="button" class="tray-chip-remove" data-opp-id="${item.id}" title="Remove ${item.title}" aria-label="Remove ${item.title}" style="background: none; border: none; color: #ffffff; cursor: pointer; font-size: 14px; font-weight: bold; padding: 0 2px; line-height: 1;">&times;</button>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <button type="button" id="trayCompareNowBtn" class="btn btn-primary btn-sm" style="background: #ffffff; color: #153e2e; font-weight: 700; border: none; padding: 6px 14px; font-size: 12.5px; border-radius: 6px; cursor: pointer;">
          Compare Now
        </button>
        <button type="button" id="trayClearBtn" class="btn btn-outline btn-sm" style="color: #f1f8f4; border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.08); padding: 6px 10px; font-size: 12.5px; border-radius: 6px; cursor: pointer;">
          Clear
        </button>
      </div>
    </div>
  `;
}

// =============================================================================
// Unified Global Feature Engine (Features 1, 3, 4, 5)
// =============================================================================

/**
 * Initializes and binds all 4 new features across any discovery page:
 * - Application Readiness Checklist interactivity
 * - Opportunity Sharing (Web Share + clipboard fallback)
 * - Opportunity Reporting (modal form + local storage)
 * - Opportunity Comparison (floating bar + responsive modal)
 */
export function initEduBridgeGlobalFeatures(options = {}) {
  const currentUser = options.currentUser || null;
  const showToast = options.showToast || function(msg) { console.log(msg); };
  const onOpenDetailModal = options.onOpenDetailModal || function(id) { console.log('Open details:', id); };
  const userProfile = options.userProfile || null;

  // 1. Inject Styles
  if (!document.getElementById('edubridge-feature-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'edubridge-feature-styles';
    styleEl.textContent = `
      /* Shared Opportunity Details & Comparison Modal Scrollability */
      .modal-backdrop {
        position: fixed !important;
        inset: 0 !important;
        background: rgba(15, 35, 25, 0.55) !important;
        backdrop-filter: blur(4px) !important;
        z-index: 2500 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 16px !important;
        overflow-x: hidden !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        overscroll-behavior: contain !important;
      }
      .modal-backdrop:not(.active) {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
      .modal-backdrop.active {
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
      }
      .modal-box {
        background: var(--bg-surface, #ffffff) !important;
        border-radius: var(--radius-lg, 12px) !important;
        max-width: 620px !important;
        width: 100% !important;
        max-height: 90vh !important;
        max-height: 90dvh !important;
        display: flex !important;
        flex-direction: column !important;
        border: 1px solid var(--border, #e2ddd4) !important;
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1) !important;
        overflow: hidden !important;
        position: relative !important;
        margin: auto !important;
      }
      #edubridgeComparisonModal .modal-box {
        max-width: 960px !important;
        width: 95% !important;
      }
      .modal-header {
        padding: 18px 24px !important;
        border-bottom: 1px solid var(--border-light, #ede8df) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        background: var(--bg-subtle, #f0ece1) !important;
        flex-shrink: 0 !important;
        position: sticky !important;
        top: 0 !important;
        z-index: 10 !important;
      }
      .modal-body {
        padding: 24px !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 16px !important;
        font-size: 14px !important;
        flex: 1 1 auto !important;
        min-height: 0 !important;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        -webkit-overflow-scrolling: touch !important;
        overscroll-behavior: contain !important;
        scrollbar-width: thin;
        scrollbar-color: rgba(21, 62, 46, 0.25) transparent;
      }
      .modal-body:focus {
        outline: none;
      }
      .modal-body::-webkit-scrollbar {
        width: 6px;
      }
      .modal-body::-webkit-scrollbar-track {
        background: transparent;
      }
      .modal-body::-webkit-scrollbar-thumb {
        background: rgba(21, 62, 46, 0.25);
        border-radius: 4px;
      }
      .modal-body::-webkit-scrollbar-thumb:hover {
        background: rgba(21, 62, 46, 0.45);
      }
      .modal-footer {
        padding: 16px 24px !important;
        border-top: 1px solid var(--border-light, #ede8df) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: flex-end !important;
        gap: 10px !important;
        flex-shrink: 0 !important;
        background: var(--bg-surface, #ffffff) !important;
        flex-wrap: wrap !important;
        position: sticky !important;
        bottom: 0 !important;
        z-index: 10 !important;
      }
      #modalCloseBtn, .comparison-modal-close-btn {
        background: none;
        border: none;
        color: var(--text-muted, #7d8b82);
        cursor: pointer;
        padding: 4px;
        line-height: 1;
        font-size: 24px;
        border-radius: 4px;
        transition: color 0.15s ease, background-color 0.15s ease;
      }
      #modalCloseBtn:hover, .comparison-modal-close-btn:hover {
        color: var(--text-primary, #1c231f);
        background-color: rgba(0, 0, 0, 0.05);
      }

      .edubridge-comparison-tray {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1050;
        width: 92%;
        max-width: 820px;
        animation: traySlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes traySlideUp {
        from { opacity: 0; transform: translate(-50%, 20px); }
        to { opacity: 1; transform: translate(-50%, 0); }
      }
      .compare-opp-btn.active, .modal-compare-btn.active {
        background: var(--primary, #153e2e) !important;
        color: #ffffff !important;
        border-color: var(--primary, #153e2e) !important;
      }
      .modal-report-box {
        animation: reportSlideDown 0.2s ease-out;
      }
      @keyframes reportSlideDown {
        from { opacity: 0; transform: translateY(-6px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .comparison-table tr:hover td {
        background: #faf8f5 !important;
      }
      @media (max-width: 640px) {
        .modal-box {
          max-height: 92vh !important;
          max-height: 92dvh !important;
          width: 96% !important;
        }
        .modal-header {
          padding: 14px 18px !important;
        }
        .modal-body {
          padding: 16px 18px !important;
          gap: 14px !important;
        }
        .modal-footer {
          padding: 12px 18px !important;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }

  // 2. Ensure Comparison Tray DOM Container
  let trayContainer = document.getElementById('edubridgeComparisonTray');
  if (!trayContainer) {
    trayContainer = document.createElement('div');
    trayContainer.id = 'edubridgeComparisonTray';
    trayContainer.className = 'edubridge-comparison-tray';
    document.body.appendChild(trayContainer);
  }

  // 3. Ensure Comparison Modal DOM Container
  let compModal = document.getElementById('edubridgeComparisonModal');
  if (!compModal) {
    compModal = document.createElement('div');
    compModal.id = 'edubridgeComparisonModal';
    compModal.className = 'modal-backdrop';
    compModal.setAttribute('aria-hidden', 'true');
    compModal.setAttribute('role', 'dialog');
    compModal.setAttribute('aria-modal', 'true');
    compModal.innerHTML = `
      <div class="modal-box" style="max-width: 960px; width: 95%;">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20" style="color: var(--primary, #153e2e);">
              <path d="M18 20V10M12 20V4M6 20v-6"></path>
            </svg>
            <h3 style="font-size: 1.18rem; font-weight: 700; color: var(--text-primary, #1c231f);">Compare Opportunities</h3>
          </div>
          <button type="button" class="comparison-modal-close-btn" aria-label="Close comparison dialog" style="font-size: 24px; line-height: 1; color: var(--text-muted, #7d8b82); cursor: pointer; padding: 4px; background: none; border: none;">&times;</button>
        </div>
        <div class="modal-body comparison-modal-body" style="padding: 16px 20px;">
          <!-- Dynamically Injected -->
        </div>
        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <button type="button" class="btn btn-outline btn-sm comparison-clear-all-btn" style="color: #b91c1c; border-color: #fee2e2; background: #fef2f2;">Clear All</button>
          <button type="button" class="btn btn-primary btn-sm comparison-modal-close-btn">Done</button>
        </div>
      </div>
    `;
    document.body.appendChild(compModal);
  }

  function updateComparisonTrayUI() {
    const list = getComparisonList(currentUser);
    if (list.length > 0) {
      trayContainer.innerHTML = renderComparisonTrayHTML(currentUser);
      trayContainer.style.display = 'block';
    } else {
      trayContainer.innerHTML = '';
      trayContainer.style.display = 'none';
    }

    // Synchronize card compare buttons on active page
    document.querySelectorAll('.compare-opp-btn').forEach(btn => {
      const oppId = btn.getAttribute('data-id');
      const isComparing = list.includes(oppId);
      if (isComparing) {
        btn.classList.add('active');
        const textSpan = btn.querySelector('span');
        if (textSpan) textSpan.textContent = 'Comparing';
      } else {
        btn.classList.remove('active');
        const textSpan = btn.querySelector('span');
        if (textSpan) textSpan.textContent = 'Compare';
      }
    });
  }

  function openComparisonModal() {
    const modalBody = compModal.querySelector('.comparison-modal-body');
    if (modalBody) {
      modalBody.innerHTML = renderComparisonModalHTML(currentUser, userProfile);
      modalBody.scrollTop = 0;
    }
    compModal.classList.add('active');
    compModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeComparisonModal() {
    compModal.classList.remove('active');
    compModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && compModal && compModal.classList.contains('active')) {
      closeComparisonModal();
    }
  });

  // Initial tray state
  updateComparisonTrayUI();

  // Wire delegated event handlers on document
  document.addEventListener('click', function(e) {
    // 1. Share button on card
    const shareCardBtn = e.target.closest('.share-opp-btn');
    if (shareCardBtn) {
      e.preventDefault();
      const oppId = shareCardBtn.getAttribute('data-id');
      const item = getOpportunityById(oppId);
      if (item) shareOpportunity(item, showToast);
      return;
    }

    // 2. Compare button on card
    const compareCardBtn = e.target.closest('.compare-opp-btn');
    if (compareCardBtn) {
      e.preventDefault();
      const oppId = compareCardBtn.getAttribute('data-id');
      const item = getOpportunityById(oppId);
      if (!item) return;

      const isComparing = isInComparison(currentUser, oppId);
      if (isComparing) {
        removeFromComparison(currentUser, oppId);
        showToast(`Removed "${item.title.substring(0, 24)}..." from comparison`);
      } else {
        const res = addToComparison(currentUser, oppId);
        if (!res.success && res.reason === 'limit_reached') {
          showToast(`Maximum ${MAX_COMPARE_ITEMS} opportunities can be compared at once. Please remove an item first.`);
          return;
        } else {
          showToast(`Added to comparison (${res.list.length}/${MAX_COMPARE_ITEMS})`);
        }
      }
      updateComparisonTrayUI();
      return;
    }

    // 3. Tray Compare Now button
    if (e.target.closest('#trayCompareNowBtn')) {
      e.preventDefault();
      openComparisonModal();
      return;
    }

    // 4. Tray Clear button or Modal Clear All button
    if (e.target.closest('#trayClearBtn') || e.target.closest('.comparison-clear-all-btn')) {
      e.preventDefault();
      clearComparison(currentUser);
      showToast('Comparison list cleared');
      updateComparisonTrayUI();
      const modalBody = compModal.querySelector('.comparison-modal-body');
      if (modalBody) modalBody.innerHTML = renderComparisonModalHTML(currentUser, userProfile);
      closeComparisonModal();
      return;
    }

    // 5. Tray chip remove button
    const trayChipRemoveBtn = e.target.closest('.tray-chip-remove');
    if (trayChipRemoveBtn) {
      e.preventDefault();
      const oppId = trayChipRemoveBtn.getAttribute('data-opp-id');
      removeFromComparison(currentUser, oppId);
      showToast('Removed from comparison');
      updateComparisonTrayUI();
      return;
    }

    // 6. Comparison modal close
    if (e.target.closest('.comparison-modal-close-btn') || e.target === compModal) {
      e.preventDefault();
      closeComparisonModal();
      return;
    }

    // 7. Remove item from comparison table
    const compTableRemoveBtn = e.target.closest('.comparison-remove-item-btn');
    if (compTableRemoveBtn) {
      e.preventDefault();
      const oppId = compTableRemoveBtn.getAttribute('data-opp-id');
      removeFromComparison(currentUser, oppId);
      showToast('Removed from comparison');
      updateComparisonTrayUI();
      const modalBody = compModal.querySelector('.comparison-modal-body');
      if (modalBody) modalBody.innerHTML = renderComparisonModalHTML(currentUser, userProfile);
      return;
    }

    // 8. View details from comparison table
    const compDetailBtn = e.target.closest('.comparison-open-detail-btn');
    if (compDetailBtn) {
      e.preventDefault();
      const oppId = compDetailBtn.getAttribute('data-opp-id');
      closeComparisonModal();
      onOpenDetailModal(oppId);
      return;
    }

    // 9. Modal Share button
    const modalShareBtn = e.target.closest('.modal-share-btn');
    if (modalShareBtn) {
      e.preventDefault();
      const oppId = modalShareBtn.getAttribute('data-opp-id');
      const item = getOpportunityById(oppId);
      if (item) shareOpportunity(item, showToast);
      return;
    }

    // 10. Modal Compare button
    const modalCompBtn = e.target.closest('.modal-compare-btn');
    if (modalCompBtn) {
      e.preventDefault();
      const oppId = modalCompBtn.getAttribute('data-opp-id');
      const item = getOpportunityById(oppId);
      if (!item) return;

      const isComparing = isInComparison(currentUser, oppId);
      if (isComparing) {
        removeFromComparison(currentUser, oppId);
        modalCompBtn.classList.remove('active');
        modalCompBtn.style.background = '';
        modalCompBtn.style.color = '';
        const txt = modalCompBtn.querySelector('.modal-compare-text');
        if (txt) txt.textContent = 'Add to Compare';
        showToast('Removed from comparison');
      } else {
        const res = addToComparison(currentUser, oppId);
        if (!res.success && res.reason === 'limit_reached') {
          showToast(`Maximum ${MAX_COMPARE_ITEMS} opportunities can be compared at once. Please remove an item first.`);
          return;
        } else {
          modalCompBtn.classList.add('active');
          modalCompBtn.style.background = 'var(--primary, #153e2e)';
          modalCompBtn.style.color = '#ffffff';
          const txt = modalCompBtn.querySelector('.modal-compare-text');
          if (txt) txt.textContent = 'Comparing (Selected)';
          showToast(`Added to comparison (${res.list.length}/${MAX_COMPARE_ITEMS})`);
        }
      }
      updateComparisonTrayUI();
      return;
    }

    // 11. Modal Report toggle button
    const reportToggleBtn = e.target.closest('.modal-report-toggle-btn');
    if (reportToggleBtn) {
      e.preventDefault();
      const oppId = reportToggleBtn.getAttribute('data-opp-id');
      const section = document.getElementById(`reportSection_${oppId}`);
      if (section) {
        const isHidden = section.style.display === 'none';
        section.style.display = isHidden ? 'block' : 'none';
      }
      return;
    }

    // 12. Modal Report cancel button
    const reportCancelBtn = e.target.closest('.modal-report-cancel-btn');
    if (reportCancelBtn) {
      e.preventDefault();
      const oppId = reportCancelBtn.getAttribute('data-opp-id');
      const section = document.getElementById(`reportSection_${oppId}`);
      if (section) section.style.display = 'none';
      return;
    }

    // 13. Modal Report submit button
    const reportSubmitBtn = e.target.closest('.modal-report-submit-btn');
    if (reportSubmitBtn) {
      e.preventDefault();
      const oppId = reportSubmitBtn.getAttribute('data-opp-id');
      const reasonSelect = document.getElementById(`reportReasonSelect_${oppId}`);
      const errorDiv = document.getElementById(`reportReasonError_${oppId}`);
      const detailsInput = document.getElementById(`reportDetailsInput_${oppId}`);

      const reasonVal = reasonSelect ? reasonSelect.value.trim() : '';
      if (!reasonVal) {
        if (errorDiv) errorDiv.style.display = 'block';
        return;
      }
      if (errorDiv) errorDiv.style.display = 'none';

      const detailsVal = detailsInput ? detailsInput.value : '';
      const result = submitReport(currentUser, oppId, reasonVal, detailsVal);

      if (result.success) {
        const section = document.getElementById(`reportSection_${oppId}`);
        if (section) {
          section.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px; color: #15803d; font-size: 13px; font-weight: 700;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Report Recorded Locally (Demo Mode)</span>
            </div>
            <p style="font-size: 12px; color: var(--text-secondary, #4f5d54); margin-top: 4px; line-height: 1.4;">
              Thank you for helping keep EduBridge listings accurate. Your report for "${reasonVal}" has been saved in local browser storage for review.
            </p>
          `;
        }
        showToast('Report saved in local storage (Demo Mode)');
      } else {
        showToast(result.message || 'Error submitting report');
      }
      return;
    }

    // 14. Checklist Reset Button
    const checklistResetBtn = e.target.closest('.checklist-reset-btn');
    if (checklistResetBtn) {
      e.preventDefault();
      const oppId = checklistResetBtn.getAttribute('data-opp-id');
      resetChecklistState(currentUser, oppId);

      // Uncheck checkboxes in current modal
      const container = document.getElementById(`checklistContainer_${oppId}`);
      if (container) {
        container.querySelectorAll('.checklist-task-checkbox').forEach(cb => {
          cb.checked = false;
        });
        container.querySelectorAll('.checklist-task-text').forEach(span => {
          span.style.textDecoration = 'none';
        });
        const badge = document.getElementById(`checklistCountBadge_${oppId}`);
        const tasks = getDefaultChecklistTasks(getOpportunityById(oppId));
        if (badge) badge.textContent = `0 of ${tasks.length} completed (0%)`;
        const bar = document.getElementById(`checklistProgressBar_${oppId}`);
        if (bar) bar.style.width = '0%';
      }
      showToast('Checklist reset for this opportunity');
      return;
    }
  });

  // Wire checklist checkbox change
  document.addEventListener('change', function(e) {
    const cb = e.target.closest('.checklist-task-checkbox');
    if (cb) {
      const oppId = cb.getAttribute('data-opp-id');
      const taskId = cb.getAttribute('data-task-id');
      const isChecked = cb.checked;

      saveChecklistItem(currentUser, oppId, taskId, isChecked);

      // Update text style
      const label = cb.closest('label');
      if (label) {
        const textSpan = label.querySelector('.checklist-task-text');
        if (textSpan) {
          textSpan.style.textDecoration = isChecked ? 'line-through' : 'none';
        }
      }

      // Re-evaluate counts
      const container = document.getElementById(`checklistContainer_${oppId}`);
      if (container) {
        const allCheckboxes = container.querySelectorAll('.checklist-task-checkbox');
        const completed = Array.from(allCheckboxes).filter(c => c.checked).length;
        const total = allCheckboxes.length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

        const badge = document.getElementById(`checklistCountBadge_${oppId}`);
        if (badge) badge.textContent = `${completed} of ${total} completed (${pct}%)`;

        const bar = document.getElementById(`checklistProgressBar_${oppId}`);
        if (bar) bar.style.width = `${pct}%`;
      }
    }
  });

  return {
    updateComparisonTrayUI,
    openComparisonModal,
    closeComparisonModal
  };
}


