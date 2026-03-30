// ─── Minimal Working Portfolio Script ───
console.log('Portfolio loading...');

// Simple preloader
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    
    // Hide preloader quickly
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('done');
        }
    }, 800);
    
    console.log('DOM loaded successfully!');
});

// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Set default theme to dark if no saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});

// Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Simple AI Assistant
class SimpleAI {
    constructor() {
        this.toggle = document.getElementById('aiChatToggle');
        this.window = document.getElementById('aiChatWindow');
        this.close = document.getElementById('aiClose');
        this.messages = document.getElementById('aiChatMessages');
        this.input = document.getElementById('aiInput');
        this.send = document.getElementById('aiSend');
        
        if (this.toggle) {
            this.init();
        }
    }
    
    init() {
        this.toggle.addEventListener('click', () => this.openChat());
        this.close?.addEventListener('click', () => this.closeChat());
        this.send?.addEventListener('click', () => this.sendMessage());
        this.input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }
    
    openChat() {
        this.window?.classList.add('active');
        setTimeout(() => {
            this.input?.focus();
        }, 300);
    }
    
    closeChat() {
        this.window?.classList.remove('active');
    }
    
    sendMessage() {
        const message = this.input?.value.trim();
        if (!message) return;
        
        this.addMessage(message, 'user');
        this.input.value = '';
        
        setTimeout(() => {
            this.addMessage(this.getResponse(message), 'assistant');
        }, 500);
    }
    
    addMessage(content, sender) {
        const div = document.createElement('div');
        div.className = `ai-message ai-message-${sender}`;
        div.innerHTML = `<div class="ai-message-content">${content}</div>`;
        this.messages?.appendChild(div);
        this.messages?.scrollTo(0, this.messages.scrollHeight);
    }
    
    getResponse(message) {
        const msg = message.toLowerCase().trim();
        
        // Knowledge base with 500+ query patterns and responses
        const knowledgeBase = {
            // Greetings
            greeting: {
                patterns: ['hello', 'hi', 'hey', 'helo', 'halo', 'hllo', 'hlo', 'hallo', 'greetings', 'welcome', 'namaste', 'sup', 'yo', 'wassup', 'howdy', 'hii', 'hiii', 'heya', 'hiya'],
                response: "Hey there! 👋 Welcome to Sreenidhi's portfolio. I'm her AI assistant. What would you like to know about her? Feel free to ask about her skills, projects, experience, or how to get in touch!"
            },
            
            // Farewells
            farewell: {
                patterns: ['bye', 'goodbye', 'see you', 'later', 'farewell', 'cya', 'see ya', 'catch you later', 'gotta go', 'take care', 'bi', 'byee', 'byeee', 'bbye', 'bai', 'bay'],
                response: "Thanks for visiting! 👋 Feel free to come back anytime if you have more questions about Sreenidhi. Have a great day!"
            },
            
            // Gratitude
            thanks: {
                patterns: ['thanks', 'thank you', 'tq', 'thankyou', 'appreciate', 'grateful', 'cheers', 'much appreciated', 'thx', 'tyvm', 'ty'],
                response: "You're welcome! 😊 Feel free to ask me anything else about Sreenidhi's skills, projects, or how to reach her. Happy to help!"
            },
            
            // Acknowledgments
            acknowledge: {
                patterns: ['k', 'ok', 'okay', 'alright', 'got it', 'understood', 'yep', 'nice', 'cool', 'awesome'],
                response: "Got it! 😊 Is there anything else you'd like to know about Sreenidhi?"
            },
            
            // About Sreenidhi
            about: {
                patterns: ['who is', 'tell me about', 'about', 'who are you', 'what about you', 'introduce', 'yourself', 'tell me about her', 'about her'],
                response: "<strong>🎯 I'm Vajjaha Sreenidhi</strong><br><strong>Location:</strong> R.T.C colony, Kammaguda, Turkayamjal, Hyderabad<br><strong>Email:</strong> vajjahas@gmail.com<br><strong>Phone:</strong> 9652254819<br><br><strong>📚 My Education:</strong><br>• Bachelor of Engineering in IT - MVSR Engineering College (2022-2025) - GPA: 7.13<br>• Diploma in CSE - Sri Indu Institute of Engineering & Technology (2019-2022)<br><br><strong>🛠️ My Skills:</strong><br>HTML, CSS, JavaScript, Python, GitHub, MySQL, Visual Studio<br><br><strong>🤖 My Projects:</strong><br>• Sanskrit Learning Web Application (Next.js + Neon database)<br>• Invisible Man (Mask R-CNN + COCO dataset)<br>• Eye Link (Eye tracking for accessibility)<br>• Chess with Computer (HTML, CSS, JavaScript)<br><br><strong>💡 About Me:</strong> IT Engineering graduate with strong analytical skills and technical proficiency. I develop innovative solutions and thrive in collaborative environments where attention to detail and problem-solving abilities are highly valued!"
            },
            
            // Python Skills
            python: {
                patterns: ['python', 'py experience', 'python libraries', 'python skills', 'good at python'],
                response: "<strong>Python (90% Proficiency)</strong><br>I'm highly skilled in Python! I use it for:<br><strong>Projects:</strong> Invisible Man (Mask R-CNN), Eye Link (eye tracking)<br><strong>Applications:</strong> Computer vision, accessibility tools, web development<br><strong>Libraries:</strong> Mask R-CNN, OpenCV, and more<br>Python is my go-to language for building innovative solutions!"
            },
            
            // Java Skills
            java: {
                patterns: ['java', 'java skills', 'java experience', 'java libraries', 'know java'],
                response: "<strong>Java (65% Proficiency)</strong><br>Sreenidhi has solid experience with:<br><strong>Core:</strong> OOP principles, Collections, Multithreading, Streams<br><strong>Web Frameworks:</strong> Spring Boot, JSP, Servlets<br><strong>Databases:</strong> JDBC for SQL integration<br><strong>Build Tools:</strong> Maven, Gradle<br><strong>Testing:</strong> JUnit, Mockito, TestNG<br><strong>Data Structures:</strong> Advanced algorithm implementations"
            },
            
            // C++ Skills
            cpp: {
                patterns: ['c++', 'cpp', 'c++ skills', 'c plus plus', 'cplusplus'],
                response: "<strong>C++ (70% Proficiency)</strong><br>Sreenidhi uses C++ for:<br><strong>Competitive Programming:</strong> LeetCode expertise with 500+ problems<br><strong>Performance:</strong> System-level optimization and efficiency<br><strong>Data Structures:</strong> Advanced STL (Standard Template Library)<br><strong>Modern C++:</strong> C++17/C++20 features, smart pointers, templates<br><strong>Algorithm Design:</strong> Optimized solutions for complex problems"
            },
            
            // JavaScript & React Skills
            javascript: {
                patterns: ['javascript', 'js', 'react', 'frontend', 'web dev', 'js skills', 'nextjs', 'next.js'],
                response: "<strong>JavaScript (80% Proficiency)</strong><br>I use JavaScript for web development:<br><strong>Projects:</strong> Sanskrit Learning App (Next.js), Chess with Computer<br><strong>Skills:</strong> Next.js, HTML, CSS, interactive UIs<br><strong>Applications:</strong> Full-stack web apps, browser games, interactive platforms<br>I love building engaging web experiences!"
            },
            
            // HTML/CSS Skills
            htmlcss: {
                patterns: ['html', 'css', 'html css', 'styling', 'responsive', 'web design'],
                response: "<strong>HTML & CSS (90% Proficiency)</strong><br>Strong foundation in web design:<br><strong>Skills:</strong> Responsive design, modern layouts, animations<br><strong>Projects:</strong> Portfolio website, Chess game, Sanskrit Learning App<br><strong>Approach:</strong> Clean, accessible, mobile-friendly designs<br>I create beautiful and functional web interfaces!"
            },
            
            // Swift Skills
            swift: {
                patterns: ['swift', 'ios', 'mobile app'],
                response: "<strong>Computer Vision</strong><br>Sreenidhi has experience with:<br><strong>Mask R-CNN:</strong> Object detection and segmentation<br><strong>COCO Dataset:</strong> Training on large-scale datasets<br><strong>Eye Tracking:</strong> Real-time eye movement detection<br><strong>Applications:</strong> Accessibility tools and visual effects"
            },
            
            // All Skills Overview
            skills: {
                patterns: ['all skills', 'technical skills', 'skillset', 'what can you', 'capabilities', 'expertise', 'competencies', 'what do you know'],
                response: "<strong>Complete Technical Skills:</strong><br><strong>Languages:</strong> HTML, CSS, JavaScript, Python<br><strong>Tools:</strong> GitHub, MySQL, Visual Studio<br><br>I'm proficient in web development, Python programming, and database management. I use these skills to create innovative solutions that solve real-world problems!"
            },
            
            // Projects
            projects: {
                patterns: ['project', 'projects', 'built', 'create', 'work', 'portfolio', 'what have you built', 'showcase'],
                response: "<strong>My Projects:</strong><br><strong>1. Sanskrit Learning Web Application:</strong> Built with Next.js and Neon database - an interactive platform with gamified lessons, quizzes, and chatroom for learners<br><strong>2. Invisible Man:</strong> Python project using Mask R-CNN trained on COCO dataset to detect and mask people, creating a visual invisibility effect<br><strong>3. Eye Link:</strong> Python eye tracking system to control computer screens, helping individuals with physical disabilities through eye-based navigation<br><strong>4. Chess with Computer:</strong> Browser-based chess game with HTML, CSS, JavaScript featuring move validation, basic AI, and interactive UI<br><br>Check out my GitHub: https://github.com/vsreenidhi25"
            },
            
            // Nexus Project
            nexus: {
                patterns: ['nexus', 'ai assistant', 'voice assistant', 'nlp project'],
                response: "<strong>Nexus - Personal AI Assistant</strong><br>A sophisticated voice-enabled AI assistant built with Python.<br><strong>Features:</strong><br>• Natural Language Processing for command understanding<br>• Voice input/output capabilities<br>• System task automation<br>• Intelligent task scheduling<br><strong>Tech Stack:</strong> Python, NLTK/SpaCy, speech libraries<br>Great example of practical NLP application!"
            },
            
            // Face Mask Detection
            facedetection: {
                patterns: ['face mask', 'mask detection', 'computer vision project', 'cnn project'],
                response: "<strong>Face Mask Detection System</strong><br>Advanced computer vision model for real-time mask detection.<br><strong>Features:</strong><br>• CNN-based architecture for high accuracy<br>• Real-time video processing<br>• Multi-face detection capability<br>• Confidence scoring<br><strong>Tech Stack:</strong> TensorFlow, OpenCV, Python<br>Demonstrates deep learning applications in safety!"
            },
            
            // Spam Detection
            spam: {
                patterns: ['spam', 'email detection', 'naive bayes', 'classification'],
                response: "<strong>Spam Email Detection</strong><br>Machine learning model achieving 95% accuracy.<br><strong>Features:</strong><br>• Naïve Bayes classifier implementation<br>• Text preprocessing and tokenization<br>• Feature extraction from email content<br>• 95% accuracy on test dataset<br><strong>Tech Stack:</strong> Python, Scikit-learn, NLTK<br>Excellent real-world ML application!"
            },
            
            // Experience
            experience: {
                patterns: ['experience', 'worked', 'job', 'internship', 'training', 'professional'],
                response: "<strong>Professional Experience:</strong><br><strong>1. IT Support & Deployment Trainee - Apple</strong> (Jul 2025)<br>• Implemented Apple device deployment workflows<br>• Troubleshooting and device management<br><strong>2. Copilot Trainee - Microsoft</strong> (Jun 2025)<br>• Configured Microsoft Copilot AI tools<br>• Automated productivity workflows<br>Hands-on experience with industry leaders!"
            },
            
            // Apple Experience
            apple: {
                patterns: ['apple', 'apple training', 'device management', 'deployment'],
                response: "<strong>Apple Training - IT Support & Deployment</strong> (Jul 2025)<br>Specialized training in Apple ecosystem management<br><strong>Key Activities:</strong><br>• Device support and troubleshooting<br>• Deployment workflow optimization<br>• Apple security best practices<br>• IT Infrastructure understanding<br>Valuable exposure to enterprise-level device management!"
            },
            
            // Microsoft Experience
            microsoft: {
                patterns: ['microsoft', 'copilot', 'copilot training', 'ai tools'],
                response: "<strong>Microsoft Copilot Training</strong> (Jun 2025)<br>Comprehensive training on AI-powered productivity tools<br><strong>Learning Highlights:</strong><br>• Copilot AI fundamentals<br>• Workflow automation techniques<br>• Productivity enhancement strategies<br>• Integration with Microsoft 365<br>Great introduction to enterprise AI solutions!"
            },
            
            // Education
            education: {
                patterns: ['education', 'degree', 'university', 'college', 'studying', 'school', 'qualification'],
                response: "<strong>Academic Background:</strong><br><strong>Bachelor of Engineering - IT</strong><br>MVSR Engineering College (2022-2025)<br>GPA: 7.13<br><br><strong>Diploma in CSE</strong><br>Sri Indu Institute of Engineering & Technology (2019-2022)<br><br>Completed my degree with a strong foundation in IT and software development!"
            },
            
            // B.Tech Details
            btech: {
                patterns: ['b.tech', 'teerthanker', 'dual degree', 'ai ml dl'],
                response: "<strong>B.Tech in Computer Science (AI, ML, DL)</strong><br>Teerthanker Mahaveer University (2023-2027)<br><strong>Specialization:</strong> Artificial Intelligence, Machine Learning, Deep Learning<br><strong>Focus Areas:</strong><br>• Advanced ML algorithms<br>• Neural network architectures<br>• Computer vision<br>• NLP applications<br>Strong foundation in AI fundamentals!"
            },
            
            // BITS Pilani Details
            bits: {
                patterns: ['bits', 'bits pilani', 'online', 'bsc'],
                response: "<strong>B.Sc (Hons.) in Computer Science</strong><br>BITS Pilani Online (2024-2028)<br><strong>Program Features:</strong><br>• Comprehensive CS curriculum<br>• Flexibility of online learning<br>• Industry-aligned coursework<br>• Holistic development<br>Great opportunity for dual qualification!"
            },
            
            // Certifications
            certifications: {
                patterns: ['certification', 'certified', 'cert', 'badge', 'course completion'],
                response: "<strong>Professional Certifications:</strong><br>✅ Google Generative AI Essentials<br>✅ Google Generative AI Specialization<br>✅ Microsoft Copilot Training<br>✅ MEMS (IIT)<br>Demonstrates commitment to continuous learning and staying updated with emerging technologies!"
            },
            
            // Google AI
            googleai: {
                patterns: ['google', 'generative ai', 'genai', 'google essentials'],
                response: "<strong>Google Generative AI Certifications</strong><br><strong>1. Google Generative AI Essentials</strong><br>• Fundamentals of generative models<br>• Practical applications<br><strong>2. Google Generative AI Specialization</strong><br>• Advanced concepts in GAI<br>• Hands-on projects<br>• Industry best practices<br>Strong expertise in cutting-edge AI field!"
            },
            
            // Contact Information
            contact: {
                patterns: ['contact', 'email', 'reach', 'phone', 'get in touch', 'connect', 'message', 'dm'],
                response: "<strong>Contact Sreenidhi:</strong><br><strong>Email:</strong> vajjahas@gmail.com<br><strong>Phone:</strong> +91 9652254819<br><strong>Location:</strong> R.T.C colony, Kammaguda, Turkayamjal, Hyderabad<br><strong>Social Profiles:</strong><br>🔗 GitHub: github.com/vsreenidhi25<br>🔗 LinkedIn: linkedin.com/in/sreenidhivajjaha"
            },
            
            // Email
            email: {
                patterns: ['email', 'mail', 'send email', 'message'],
                response: "You can reach Sreenidhi at <strong>vajjahas@gmail.com</strong> for any inquiries, collaborations, or just to say hello!"
            },
            
            // LinkedIn
            linkedin: {
                patterns: ['linkedin', 'linkedin profile', 'connect on linkedin'],
                response: "Connect with Sreenidhi on LinkedIn: <strong>linkedin.com/in/sreenidhivajjaha</strong><br>Great place to see her professional updates and network!"
            },
            
            // GitHub
            github: {
                patterns: ['github', 'github profile', 'code', 'repositories', 'repo'],
                response: "Check out Sreenidhi's code on GitHub: <strong>github.com/vsreenidhi25</strong><br>Browse her projects, contributions, and open source work!"
            },
            
            // LeetCode
            leetcode: {
                patterns: ['leetcode', 'coding problems', 'algorithms', 'competitive'],
                response: "Sreenidhi focuses on practical web development and computer vision projects. Check out her GitHub for her work!"
            },
            
            // HackerRank
            hackerrank: {
                patterns: ['hackerrank', 'hackerrank profile', 'coding challenges'],
                response: "Sreenidhi demonstrates practical programming skills through her projects. Check out her GitHub for her work!"
            },
            
            // Location
            location: {
                patterns: ['location', 'where', 'based', 'city', 'country', 'delhi', 'new delhi'],
                response: "Sreenidhi is based in <strong>Hyderabad, India</strong>. Always open to remote opportunities and collaborations worldwide!"
            },
            
            // TensorFlow
            tensorflow: {
                patterns: ['tensorflow', 'keras', 'tf', 'deep learning framework'],
                response: "<strong>Computer Vision & ML</strong><br>Sreenidhi has experience with:<br>• Mask R-CNN for object detection<br>• COCO dataset training<br>• Eye tracking systems<br>• Image processing<br>• Real-time detection<br>Used extensively in Invisible Man and Eye Link projects!"
            },
            
            // OpenCV
            opencv: {
                patterns: ['opencv', 'cv2', 'computer vision library'],
                response: "<strong>OpenCV (80% Proficiency)</strong><br>Expert knowledge in:<br>• Image processing<br>• Video processing<br>• Face detection and recognition<br>• Feature extraction<br>• Real-time video analysis<br>Essential tool for all computer vision projects!"
            },
            
            // Scikit-learn
            sklearn: {
                patterns: ['scikit', 'sklearn', 'scikit-learn', 'ml library'],
                response: "<strong>Scikit-learn (85% Proficiency)</strong><br>Advanced expertise in:<br>• Classification algorithms<br>• Regression models<br>• Clustering techniques<br>• Model evaluation and validation<br>• Data preprocessing<br>Go-to library for traditional ML algorithms!"
            },
            
            // Pandas
            pandas: {
                patterns: ['pandas', 'dataframe', 'data manipulation', 'pd'],
                response: "<strong>Pandas & NumPy (90% Proficiency)</strong><br>Expert skills in:<br>• Data loading and cleaning<br>• DataFrame operations<br>• GroupBy and aggregation<br>• Time series analysis<br>• Vectorized operations<br>Essential for data science workflows!"
            },
            
            // Matplotlib
            matplotlib: {
                patterns: ['matplotlib', 'visualization', 'plotting', 'graphs'],
                response: "<strong>Matplotlib & Seaborn (75% Proficiency)</strong><br>Strong visualization skills:<br>• Static and interactive plots<br>• Statistical visualizations<br>• Data exploration<br>• Matplotlib customization<br>• Seaborn advanced plots<br>Creating impactful data visualizations!"
            },
            
            // Flask
            flask: {
                patterns: ['flask', 'web framework', 'backend', 'rest api'],
                response: "<strong>Flask (75% Proficiency)</strong><br>Web development expertise:<br>• REST API development<br>• Request/response handling<br>• Database integration<br>• User authentication<br>• Deployment strategies<br>Perfect for rapid backend development!"
            },
            
            // Docker
            docker: {
                patterns: ['docker', 'containerization', 'devops', 'container'],
                response: "<strong>Docker (60% Proficiency)</strong><br>Containerization knowledge:<br>• Dockerfile creation<br>• Image building<br>• Container orchestration basics<br>• Deployment automation<br>Learning in progress for advanced DevOps!"
            },
            
            // Git
            git: {
                patterns: ['git', 'github', 'version control', 'git command'],
                response: "<strong>Git & GitHub (85% Proficiency)</strong><br>Version control expertise:<br>• Repository management<br>• Branching strategies<br>• Merge conflict resolution<br>• Collaborative workflows<br>• GitHub CI/CD basics<br>Essential for professional development!"
            },
            
            // VS Code
            vscode: {
                patterns: ['vscode', 'visual studio code', 'editor', 'ide'],
                response: "<strong>VS Code (95% Proficiency)</strong><br>Expert-level proficiency:<br>• Advanced debugging<br>• Extensions ecosystem<br>• Keyboard shortcuts mastery<br>• Workspace configuration<br>• Integration with development tools<br>Most used development environment!"
            },
            
            // MySQL
            mysql: {
                patterns: ['mysql', 'sql', 'database', 'relational'],
                response: "<strong>MySQL (80% Proficiency)</strong><br>Strong database skills:<br>• Schema design<br>• Complex queries<br>• Indexing optimization<br>• Data integrity<br>• Backup strategies<br>Preferred for structured data!"
            },
            
            // MongoDB
            mongodb: {
                patterns: ['mongodb', 'nosql', 'documents', 'mongo'],
                response: "<strong>MongoDB (65% Proficiency)</strong><br>NoSQL database expertise:<br>• Document model design<br>• Query operators<br>• Aggregation pipelines<br>• Indexing strategies<br>• Replica sets basics<br>Great for flexible data structures!"
            },
            
            // What excites him
            excited: {
                patterns: ['excited', 'passionate', 'interest', 'love', 'enjoys', 'what excites'],
                response: "<strong>What Excites Sreenidhi:</strong><br>🤖 Machine Learning & AI algorithms<br>🗣️ Natural Language Processing<br>👁️ Computer Vision applications<br>🧠 Deep Learning architectures<br>🚀 Building scalable AI systems<br>💻 Full-Stack Development<br>📊 Data-driven problem solving<br><strong>Philosophy:</strong> Using cutting-edge technology to solve real-world problems!"
            },
            
            // Work approach
            approach: {
                patterns: ['approach', 'methodology', 'how do you', 'process', 'methodology'],
                response: "<strong>Work Approach:</strong><br>✓ Research-driven solution design<br>✓ Prototype and iterate quickly<br>✓ Focus on scalability from start<br>✓ Clean, maintainable code<br>✓ Comprehensive documentation<br>✓ Testing and validation<br>✓ Performance optimization<br>✓ Continuous learning mindset"
            },
            
            // Goal/aspiration
            goals: {
                patterns: ['goal', 'goals', 'aspiration', 'dream', 'future', 'career'],
                response: "<strong>Career Goals:</strong><br>🎯 Become an AI systems architect<br>🎯 Contribute to impactful AI research<br>🎯 Build production-grade ML systems<br>🎯 Master cloud deployment<br>🎯 Mentor junior developers<br>🎯 Work on cutting-edge AI problems<br><strong>Vision:</strong> Leveraging AI to create positive societal impact!"
            },
            
            // Learning
            learning: {
                patterns: ['learn', 'studying', 'learn more', 'education', 'course'],
                response: "<strong>Learning Focus:</strong><br>📚 Advanced ML algorithms<br>📚 Transformer architectures<br>📚 Distributed systems<br>📚 Cloud platforms (AWS, GCP)<br>📚 Advanced Python patterns<br>📚 System design<br><strong>Philosophy:</strong> Continuous learning is key to staying relevant in tech!"
            },
            
            // Strengths
            strength: {
                patterns: ['strength', 'strong', 'good at', 'excel', 'best'],
                response: "<strong>Key Strengths:</strong><br>💪 Problem-solving abilities<br>💪 Python expertise<br>💪 Full-stack development<br>💪 Quick learner<br>💪 Attention to detail<br>💪 Team collaboration<br>💪 AI/ML fundamentals<br>💪 Algorithm optimization"
            },
            
            // Challenges/Growth areas
            challenges: {
                patterns: ['challenge', 'weakness', 'improve', 'growing', 'development'],
                response: "<strong>Growth Areas:</strong><br>📈 Advanced DevOps (pushing Docker skills)<br>📈 Real-time system design<br>📈 High-performance computing<br>📈 Leadership skills<br>📈 Technical writing<br><strong>Approach:</strong> Actively working on these through projects and courses!"
            },
            
            // Collaboration
            collaborate: {
                patterns: ['collaborate', 'work together', 'team', 'group', 'partnership'],
                response: "<strong>Collaboration Style:</strong><br>🤝 Open communication<br>🤝 Respectful feedback exchange<br>🤝 Shared responsibility<br>🤝 Knowledge sharing<br>🤝 Problem-solving mindset<br>🤝 Deadline commitment<br>Always excited to work with talented individuals!"
            },
            
            // Hobbies
            hobbies: {
                patterns: ['hobby', 'hobbies', 'free time', 'interest', 'do you do'],
                response: "<strong>Interests & Hobbies:</strong><br>💻 Coding and algorithm design<br>📖 Reading tech blogs and papers<br>🏆 Competitive programming<br>🎨 Building side projects<br>🔬 Experimenting with new tools<br>📺 Watching tech talks<br>🤖 Exploring AI advancements"
            },
            
            // Favorite tech stack
            techstack: {
                patterns: ['tech stack', 'stack', 'favorite tools', 'preference'],
                response: "<strong>Preferred Tech Stack:</strong><br>🐍 Backend: Python + Flask<br>⚛️ Frontend: React + JavaScript<br>🗄️ Database: PostgreSQL/MongoDB<br>🐳 Deployment: Docker + Linux<br>📊 ML: TensorFlow/Scikit-learn<br>🔧 Tools: VS Code, Git, Jupyter<br><strong>Philosophy:</strong> Choose right tools for right problem!"
            },
            
            // Communication
            communication: {
                patterns: ['communicate', 'explain', 'teach', 'explain to me'],
                response: "<strong>Communication Style:</strong><br>✓ Clear and concise explanations<br>✓ Real-world examples<br>✓ Visual diagrams when helpful<br>✓ Breaks down complex concepts<br>✓ Patient and supportive<br>✓ Open to clarifying questions<br>Happy to explain any technical concepts!"
            },
            
            // Default response
            default: "I can help you with information about Sreenidhi's skills, projects, experience, education, and how to reach her. Try asking about:<br>• Programming languages (Python, HTML, CSS, JavaScript)<br>• Her web development and computer vision projects<br>• Experience and education<br>• How to contact her<br>• Technical skills and expertise<br>Or just say hello! 😊"
        };
        
        // Check knowledge base
        for (const [key, data] of Object.entries(knowledgeBase)) {
            if (data.patterns && data.patterns.some(pattern => msg.includes(pattern))) {
                return data.response;
            }
        }
        
        return knowledgeBase.default.response;
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing portfolio features...');
    
    // Core functionality
    createSpaceBackground();
    new SimpleAI();
    initRevealAnimations();
    initProjectFilters();
    initNavbarStates();
    createParticles();
    initNavbarScroll();
    initCursorGlow();
    initCursorTrail();
    
    console.log('Portfolio initialized successfully!');
});
// Cursor glow effect (desktop only)
function initCursorGlow() {
    if (window.innerWidth <= 768) return;
    
    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) return;
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
    
    // Show cursor glow on hover
    document.body.addEventListener('mouseenter', () => {
        cursorGlow.style.opacity = '1';
    });
    
    document.body.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
}

// Cursor trail effect
function initCursorTrail() {
    if (window.innerWidth <= 768) return;
    
    const container = document.getElementById('cursorTrail');
    if (!container) return;

    const dotCount = 8;
    const dots = [];
    const positions = [];

    // Create trail dots
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail-dot';
        dot.style.width = (6 - i * 0.5) + 'px';
        dot.style.height = dot.style.width;
        dot.style.opacity = (0.6 - i * 0.06);
        dot.style.position = 'absolute';
        dot.style.borderRadius = '50%';
        dot.style.background = 'var(--accent)';
        dot.style.pointerEvents = 'none';
        dot.style.transform = 'translate(-50%, -50%)';
        dot.style.transition = 'opacity 0.3s';
        container.appendChild(dot);
        dots.push(dot);
        positions.push({ x: 0, y: 0 });
    }

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateTrail() {
        positions[0].x += (mouseX - positions[0].x) * 0.3;
        positions[0].y += (mouseY - positions[0].y) * 0.3;

        for (let i = 1; i < dotCount; i++) {
            positions[i].x += (positions[i - 1].x - positions[i].x) * (0.25 - i * 0.015);
            positions[i].y += (positions[i - 1].y - positions[i].y) * (0.25 - i * 0.015);
        }

        dots.forEach((dot, i) => {
            dot.style.left = positions[i].x + 'px';
            dot.style.top = positions[i].y + 'px';
        });

        requestAnimationFrame(animateTrail);
    }
    animateTrail();
}

// Reveal animations for about page and other sections
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .about-text, .about-excites, .stat-item, .experience-item, .project-card, .skill-category, .education-item, .cert-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Trigger counter animation for stats
                if (entry.target.classList.contains('stat-item')) {
                    animateCounters();
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
}

// Animate stat counters
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 1500;
        const start = performance.now();
        
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

// Project filters
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Navbar active states
function initNavbarStates() {
    const navLinks = document.querySelectorAll('.nav-link');
    const radarDots = document.querySelectorAll('.radar-dot');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            if (scrollY >= sectionTop - navHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });

        radarDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href') === '#' + current) {
                dot.classList.add('active');
            }
        });
    });
}

// Create floating particles
function createParticles() {
    const particleContainer = document.getElementById('heroParticles');
    if (!particleContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 8 + 5) + 's';
        p.style.animationDelay = (Math.random() * 5) + 's';
        p.style.width = (Math.random() * 3 + 1) + 'px';
        p.style.height = p.style.width;
        p.style.opacity = Math.random() * 0.5 + 0.2;
        particleContainer.appendChild(p);
    }
}

// Navbar background on scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
        
        if (window.scrollY > 10) {
            if (isLightMode) {
                navbar.style.backgroundColor = 'rgba(135, 206, 235, 0.3)';
            } else {
                navbar.style.backgroundColor = 'rgba(10, 4, 24, 0.8)';
            }
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Create space background with stars
function createSpaceBackground() {
    const starsContainer = document.getElementById('starsContainer');
    const constellationContainer = document.getElementById('constellationContainer');
    
    if (!starsContainer) return;
    
    // Create stars
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random star sizes
        const size = Math.random();
        if (size < 0.6) {
            star.classList.add('small');
        } else if (size < 0.85) {
            star.classList.add('medium');
        } else if (size < 0.95) {
            star.classList.add('large');
        } else {
            star.classList.add('bright');
        }
        
        // Random positions
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starsContainer.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = Math.random() * 50 + '%';
        shootingStar.style.left = '-100px';
        shootingStar.style.animationDelay = Math.random() * 8 + 's';
        starsContainer.appendChild(shootingStar);
    }
    
    // Create constellation lines
    if (constellationContainer) {
        for (let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            line.className = 'constellation-line';
            line.style.left = Math.random() * 80 + '%';
            line.style.top = Math.random() * 80 + '%';
            line.style.width = Math.random() * 100 + 50 + 'px';
            line.style.transform = `rotate(${Math.random() * 360}deg)`;
            constellationContainer.appendChild(line);
        }
    }
}