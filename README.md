# EduMate.AI – Your Academic Buddy + Smart Voice Assistant

### 👨‍💻 Team Members: Danyal Ali, Amit gupta, Aman Pal
### 🏫 College: Noida Institute of Engineering and Technology
### 📧 Email: anosvoldiagod2@gmail.com  
### 📅 Submission Date: 30th May 2025

---

## 🚀 Abstract

**EduMate.AI** is a powerful, web-based platform that simplifies college academics and empowers students with intelligent career guidance. It combines two key components:

1. **Smart Academic Assistant**: A voice/chat-based assistant that uses LLMs (like GPT/Gemini) to assess student interests and skills and generate personalized career roadmaps with curated learning resources.

2. **Student Portal**: A unified platform offering semester-wise notes, PYQs (Previous Year Questions), curated video lectures, important questions, and productivity tools like resume builders and PDF utilities.

---

## 💡 Problem Statement

First-year college students often lack centralized, reliable, and accessible academic content. Additionally, they struggle with making informed career decisions due to the absence of personalized guidance. Existing platforms are either fragmented or lack the intelligence to adapt to individual student needs.

---

## 🎯 Our Solution

| Module              | Features |
|---------------------|----------|
| 🎙 **Web Assistant** | - Accepts voice/text via browser  
                       - Personalized career recommendations  
                       - Generates skill-based learning roadmaps  
                       - Suggests curated learning resources using LLMs |
| 🌐 **Student Portal** | - Browse/upload semester-wise notes and PYQs  
                        - Resume builder with exportable templates  
                        - PDF converter and merger tools  
                        - Curated video lectures subject-wise |
| 📥 **Content Sourcing** | - Automated scraping from open repositories (e.g., DSpace, GitHub)  
                          - Community uploads with admin review system |

---

## 🧰 Tech Stack

### 🔹 Web Platform
- **Frontend**: React.js + Tailwind CSS  
- **Backend**: Node.js (Express)  
- **Database**: MongoDB Atlas  
- **Storage**: Firebase / Cloudinary  
- **Resume Builder**: `react-pdf` custom templates  
- **Web Scraping**: Cheerio, Axios, Puppeteer  
- **Automation**: `node-cron` for scheduled scraping

### 🔹 Voice Assistant & NLP
- **Voice I/O**: Web Speech API  
- **AI Integration**: OpenAI GPT / Google Gemini  
- **Real-time**: Socket.IO for frontend-backend communication  
- **Voice UI**: `react-speech-recognition` for voice input integration  
- *(Optional)* Intent Parsing: Rasa NLU / Dialogflow

---

## 📌 Innovation & Uniqueness

- 🧠 Combines smart, personalized career guidance with centralized academic resources  
- 🔍 Uses LLMs for context-aware suggestions and personalized learning paths  
- 🛠 Built-in resume builder and PDF tools  
- 🧑‍🎓 Community-contributed, course-specific content with moderation  
- 🌐 Fully web-based and installation-free – accessible from any browser

---

## 🗂 Feasibility

- ✅ Scalable microservices architecture  
- ✅ Legal/ethical scraping from public academic repositories  
- ✅ Initial focus on high-demand courses (B.Tech, BCA, BSc, MBA)  
- ✅ AI assistant operates fully via browser with cloud APIs

---

## 🛠 Implementation Phases

### ✅ Phase 1 – Core MVP (Hackathon Scope)
- Web portal with notes & PYQs per semester  
- Basic resume builder  
- Voice assistant (Web Speech API)  
- AI integration with OpenAI/Gemini for career guidance  
- Automated web scraping for academic content

### 🚀 Phase 2 – Stretch Goals
- Subject-wise video lectures  
- Community uploads with admin moderation  
- Enhanced resume builder templates  
- Add PDF utilities (converter, merger)

### 📈 Phase 3 – Scaling & UX Enhancements
- Real-time chat alongside voice  
- Visualized personalized career roadmap  
- Course and content expansion  
- Backend optimization and UI polishing

---

## 🧪 Run Instructions

1. Clone the repo  
   ```bash
   git clone https://github.com/anos0216/edumate-ai.git
   cd edumate-ai
   npm install
   add Gemini API Key
   npm run dev
  
