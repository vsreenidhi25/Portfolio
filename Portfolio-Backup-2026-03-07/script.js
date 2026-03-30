// ─── Preloader ───
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('done');
    }, 800);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll Offset for Fixed Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// ─── Scroll Progress Bar ───
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// ─── Back to Top Button ───
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── Cursor Glow (desktop only) ───
const cursorGlow = document.getElementById('cursorGlow');
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// ─── Typing Effect ───
const typingText = document.getElementById('typingText');
const phrases = [
    'AI Engineering Student',
    'Machine Learning Enthusiast',
    'Computer Vision Explorer',
    'Full-Stack Developer',
    'Deep Learning Researcher'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = phrases[phraseIndex];
    if (isDeleting) {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000; // pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}
typeEffect();

// ─── Floating Particles ───
const particleContainer = document.getElementById('heroParticles');
function createParticles() {
    for (let i = 0; i < 30; i++) {
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
createParticles();

// ─── Animated Stat Counters ───
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 1500;
        const start = performance.now();
        
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

// ─── Reveal on Scroll ───
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Trigger counter animation when stats come into view
            if (entry.target.classList.contains('stat-item')) {
                animateCounters();
            }
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .experience-item, .project-card, .skill-category, .education-item, .cert-card, .stat-item').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const style = getComputedStyle(document.documentElement);
    if (window.scrollY > 10) {
        navbar.style.backgroundColor = style.getPropertyValue('--navbar-bg-scroll').trim();
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.backgroundColor = style.getPropertyValue('--navbar-bg').trim();
        navbar.style.boxShadow = 'none';
    }
});

// Detect if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('.particle').forEach(p => p.remove());
}

// Add active state to navbar links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const navHeight = document.querySelector('.navbar').offsetHeight;
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
});

// Keyboard accessibility for buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.setAttribute('role', 'button');
});

console.log('Portfolio website loaded successfully');

// ─── Card Spotlight Effect ───
function initSpotlightCards() {
    const cards = document.querySelectorAll('.experience-item, .project-card, .skill-category, .education-item, .cert-card, .stat-item');
    cards.forEach(card => {
        const spotlight = document.createElement('div');
        spotlight.className = 'card-spotlight';
        card.style.position = 'relative';
        card.appendChild(spotlight);

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            spotlight.style.background = `radial-gradient(250px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.08), transparent 70%)`;
        });

        card.addEventListener('mouseleave', () => {
            spotlight.style.background = 'none';
        });
    });
}
initSpotlightCards();

// ─── 3D Tilt Effect on Cards ───
function initTiltCards() {
    if (window.innerWidth <= 768) return;
    const cards = document.querySelectorAll('.project-card, .stat-item');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const tiltX = (y - 0.5) * -6;
            const tiltY = (x - 0.5) * 6;
            card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
            card.style.transition = 'transform 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });
}
initTiltCards();

// ─── Magnetic Hover on Buttons ───
function initMagneticButtons() {
    if (window.innerWidth <= 768) return;
    document.querySelectorAll('.cta-button, .hero-social a').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
            btn.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
        });

        btn.addEventListener('mouseenter', () => {
            btn.style.transition = 'transform 0.1s ease';
        });
    });
}
initMagneticButtons();

// ─── Staggered Reveal for Grid Items ───
function initStaggeredReveal() {
    const grids = document.querySelectorAll('.skills-grid, .certifications-grid, .education-content, .about-stats');
    grids.forEach(grid => {
        const children = grid.children;
        Array.from(children).forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.08}s`;
        });
    });
}
initStaggeredReveal();

// Project Filter
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

// ─── Hero Text Scramble Effect ───
function initTextScramble() {
    const el = document.querySelector('[data-scramble]');
    if (!el) return;
    const chars = '!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const originalHTML = el.innerHTML;
    // Extract just text nodes for scramble (preserve the span)
    const accentSpan = el.querySelector('.hero-title-accent');
    const firstName = 'Vajjaha';
    const lastName = accentSpan ? accentSpan.textContent : 'Sreenidhi';

    let frame = 0;
    const totalFrames = 30;

    function scrambleText(text, progress) {
        return text.split('').map((char, i) => {
            if (char === ' ') return ' ';
            const threshold = progress * text.length;
            if (i < threshold) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
    }

    function animate() {
        const progress = frame / totalFrames;
        const scrambledFirst = scrambleText(firstName, progress);
        const scrambledLast = scrambleText(lastName, progress);
        el.innerHTML = scrambledFirst + '<br><span class="hero-title-accent">' + scrambledLast + '</span>';
        frame++;
        if (frame <= totalFrames) {
            requestAnimationFrame(animate);
        } else {
            el.innerHTML = originalHTML;
        }
    }

    // Trigger after preloader
    setTimeout(animate, 900);
}
initTextScramble();

// ─── Glitch Text Data Attribute ───
document.querySelectorAll('.glitch-text').forEach(el => {
    el.setAttribute('data-text', el.textContent);
});

// ─── Cursor Trail Effect ───
function initCursorTrail() {
    if (window.innerWidth <= 768) return;
    const container = document.getElementById('cursorTrail');
    if (!container) return;

    const dotCount = 8;
    const dots = [];
    const positions = [];

    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail-dot';
        dot.style.width = (6 - i * 0.5) + 'px';
        dot.style.height = dot.style.width;
        dot.style.opacity = (0.6 - i * 0.06);
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
initCursorTrail();

// ─── Hero Parallax on Scroll ───
function initHeroParallax() {
    const aurora = document.querySelector('.aurora');
    const particles = document.getElementById('heroParticles');
    const mesh = document.querySelector('.hero-mesh');
    const heroSection = document.querySelector('.hero');

    if (!heroSection) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        if (scrollY > heroHeight) return;

        const rate = scrollY * 0.3;
        if (aurora) aurora.style.transform = 'translateY(' + (rate * 0.5) + 'px)';
        if (particles) particles.style.transform = 'translateY(' + (rate * 0.3) + 'px)';
        if (mesh) mesh.style.transform = 'translateY(' + (rate * 0.2) + 'px) scale(' + (1 + scrollY * 0.0002) + ')';
    }, { passive: true });
}
initHeroParallax();

// ─── Enhanced Navbar Logo Animation on Scroll ───
const logo = document.querySelector('.logo');
if (logo) {
    const originalText = logo.textContent;
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 200 && lastScroll <= 200) {
            logo.style.transform = 'scale(0.9)';
            logo.style.transition = 'transform 0.3s ease';
        } else if (scrollY <= 200 && lastScroll > 200) {
            logo.style.transform = 'scale(1)';
        }
        lastScroll = scrollY;
    }, { passive: true });
}
