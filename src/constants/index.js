const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 700, suffix: "+", label: "Coding Problems" },
  { value: 1600, suffix: "+", label: "LeetCode Rating" },
  { value: 3, suffix: "+", label: "AI & Full-Stack Projects" },
  { value: 8, suffix: "", label: "CGPA at NIT Jamshedpur" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "C++ Programmer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Programmer",
    imgPath: "/images/logos/c++logo.png",
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Relational and NoSQL databases",
    imgPath: "/images/9b79372f-608f-4e8c-a0d9-299915acba94.jpg",
  },
  {
    name: "Git and GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Faizal is an exceptionally driven developer. His work on AeroHealth showcased deep understanding of real-time technologies, medical data privacy, and RAG systems.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "AeroHealth — AI Healthcare Platform",
    link: "https://aerohealth-1.onrender.com",
    responsibilities: [
      "Built a full-stack telemedicine platform for Bengaluru aggregating real-time doctor fees and diagnostic prices via Puppeteer scraping.",
      "Engineered a RAG-based symptom triage system (Gemini + Pinecone) that dynamically interviews patients and recommends specialists.",
      "Designed and implemented a real-time communication layer (WebRTC signaling via Socket.IO) powering video/voice calls and chat.",
      "Built Gemini-powered medical report analysis and handwritten prescription parsing, with a secure doctor-onboarding pipeline.",
    ],
  },
  {
    review: "Faizal's technical execution of CodeBytes, from integrating the Judge0 API to implementing real-time AI code analysis, was flawless and highly performant.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "CodeBytes — Coding Platform",
    link: "https://codebytes-local-1.onrender.com",
    responsibilities: [
      "Built a competitive programming platform with a Monaco Editor workspace and a diff-comparison modal for code submissions.",
      "Engineered an AI Code Analyzer (Gemini) delivering structured feedback on time/space complexity and alternative algorithms.",
      "Built a execution engine integrating Judge0 API for multi-language execution, validating code against test cases.",
      "Developed discussion hub, video tutorial system, admin panel for managing challenges, and user profile dashboard.",
    ],
  },
  {
    review: "With WebGen AI, Faizal proved his ability to build complex, user-facing SaaS systems. The AI site builder integration is seamless.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "WebGen AI — SaaS Website Builder",
    link: "https://webgen-ai-1.onrender.com",
    responsibilities: [
      "Built a full-stack SaaS platform enabling users to generate, preview, and edit web apps in real-time via text prompts.",
      "Integrated OpenRouter API to route requests to multiple LLM providers, building an in-browser IDE with Monaco Editor.",
      "Engineered authentication using Firebase (Google OAuth 2.0) and JWT, with a credit-based billing system via Razorpay.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Faizal. He was able to take our complex project requirements for the healthcare platform and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Faizal was a fantastic experience. He transformed our concepts into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Faizal was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. If you're seeking to elevate your brand, Faizal is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Faizal was a pleasure to work with. He turned our outdated platform into a fresh, intuitive application that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Faizal’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our site, and our overall platform engagement has significantly increased since the launch.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Faizal was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/ali_faiz_o_o/",
  },
  {
    name: "github",
    imgPath: "/images/logos/favpng_648edb76a793c4602dc9e21f743e30c2.png",
    link: "https://github.com/FAIZAL-XLR8",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/muhammad-faizal-ali-30981630b/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
