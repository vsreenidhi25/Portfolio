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
        const msg = message.toLowerCase();
        
        if (msg.includes('who') || msg.includes('about')) {
            return "I'm Siddharth's AI assistant! He's an AI Engineering student specializing in Machine Learning, NLP, and Computer Vision.";
        }
        
        if (msg.includes('project')) {
            return "Siddharth has built impressive AI projects including Nexus AI Assistant, Face Mask Detection system, and Spam Email Detection with 95% accuracy!";
        }
        
        if (msg.includes('skill')) {
            return "His technical skills include Python (90%), TensorFlow (80%), React (70%), and many other AI/ML technologies.";
        }
        
        if (msg.includes('contact')) {
            return "You can reach Siddharth at ssid050804@gmail.com or connect on LinkedIn, GitHub, LeetCode, and HackerRank!";
        }
        
        return "I can tell you about Siddharth's projects, skills, education, and experience. What would you like to know?";
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