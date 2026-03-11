# Portfolio Website - Apple Style Design

A modern, minimalist portfolio website inspired by Apple's design principles. Built with pure HTML, CSS, and JavaScript.

## Features

✨ **Apple-Inspired Design**
- Clean, minimalist aesthetic
- Smooth animations and transitions
- Modern typography using system fonts
- Responsive gradient accents

🎨 **Design Elements**
- Fixed navigation with blur effect
- Hero section with animated gradient blobs
- Project showcase with hover effects
- Skills grid with interactive badges
- Contact section with CTA buttons
- Mobile-responsive layout

⚡ **Performance**
- Lightweight (no framework dependencies)
- Fast loading and smooth interactions
- Optimized animations
- Accessibility-focused

📱 **Responsive**
- Desktop-first design
- Tablet optimization
- Mobile-friendly hamburger menu
- Flexible grid layouts

## File Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive features
├── README.md           # This file
└── assets/             # (Optional) For images and media
    └── [add images here]
```

## Quick Start

### Option 1: Open Directly in Browser
1. Simply double-click `index.html` to open in your default browser
2. Or right-click → Open with → Your preferred browser

### Option 2: Use a Local Server (Recommended)
For better development experience with live reload:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (live-server)
npx live-server

# Using Node.js (with auto-reload)
npm install -g serve
serve
```

Then open `http://localhost:8000` in your browser.

## Customization Guide

### 1. Update Personal Information

#### Navigation & Branding
In `index.html`, change:
```html
<div class="logo">Portfolio</div>
```

#### Hero Section
Update the main heading and subtitle:
```html
<h1 class="hero-title">Crafting Digital Excellence</h1>
<p class="hero-subtitle">Innovative solutions with minimalist design principles</p>
```

#### About Section
Replace the placeholder text with your experience:
```html
<p>I'm a full-stack developer with a passion for clean code...</p>
```

Update your stats:
```html
<div class="stat">
    <h3>5+</h3>
    <p>Years of Experience</p>
</div>
```

### 2. Add Your Projects

Replace the three placeholder projects with your actual projects. For each project:

```html
<article class="project-card">
    <div class="project-image project-image-1"></div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project and technologies used.</p>
        <div class="project-tags">
            <span class="tag">Technology1</span>
            <span class="tag">Technology2</span>
        </div>
    </div>
</article>
```

### 3. Customize Skills

Update the skill categories and badges:
```html
<div class="skill-category">
    <h4>Frontend</h4>
    <div class="skill-items">
        <span class="skill-badge">React</span>
        <span class="skill-badge">TypeScript</span>
        <!-- Add your skills -->
    </div>
</div>
```

### 4. Update Contact Information

Change the email in the contact section:
```html
<a href="mailto:your.email@example.com" class="cta-button primary">Get in Touch</a>
```

Update social links:
```html
<a href="https://github.com/yourprofile" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
<a href="https://twitter.com/yourprofile" target="_blank">Twitter</a>
```

### 5. Add Project Images

To add images to project cards:

1. Create an `assets/images/` folder
2. Add your project images
3. Modify the CSS to use background images:

```css
.project-image-1 {
    background: url('assets/images/project1.jpg') center/cover;
}

.project-image-2 {
    background: url('assets/images/project2.jpg') center/cover;
}

.project-image-3 {
    background: url('assets/images/project3.jpg') center/cover;
}
```

### 6. Customize Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #000000;           /* Main color */
    --secondary: #ffffff;         /* Background */
    --accent: #0071e3;            /* Highlight color */
    --accent-light: #f5f5f7;      /* Light background */
    --text-primary: #1d1d1d;      /* Main text */
    --text-secondary: #666666;    /* Secondary text */
}
```

### 7. Update Footer

Change copyright and links in the footer:
```html
<p>&copy; 2026 Your Name. Your tagline.</p>
```

## Customization Tips

### Typography
- Change font sizes by modifying the `clamp()` values in CSS
- Apple uses: -apple-system, BlinkMacSystemFont, 'Segoe UI' system fonts

### Spacing
- Use `--spacing-unit` variable for consistent spacing
- Current value: `1rem` (16px)

### Animation Speed
- Modify transition values (e.g., `transition: all 0.3s ease`)
- Change to your preference (0.2s = faster, 0.5s = slower)

### Gradients
Add custom gradients to the blob animations:
```css
.blob-1 {
    background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%);
}
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: All modern browsers

## Performance Optimizations

✅ Already implemented:
- No external dependencies
- Minimal CSS/JS
- Hardware-accelerated animations
- Lazy loading ready
- Mobile-first responsive design

## Accessibility Features

✅ Included:
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion preferences respected
- Color contrast meets WCAG standards

## Mobile Optimization

The site includes:
- Responsive hamburger menu
- Mobile-friendly typography
- Touch-friendly button sizes
- Optimized spacing for small screens

## Deploy Your Portfolio

### Option 1: GitHub Pages (Free)
1. Create a GitHub repo named `username.github.io`
2. Push your files to `main` branch
3. Visit `https://username.github.io`

### Option 2: Netlify (Free)
1. Connect your GitHub repo
2. Set build command: (leave empty)
3. Set publish directory: `/` (root)
4. Deploy!

### Option 3: Vercel (Free)
1. Import your GitHub repo
2. Deploy with default settings

### Option 4: Traditional Hosting
Upload the three files (`index.html`, `styles.css`, `script.js`) to any web hosting service.

## SEO Optimization

Update in `index.html`:
```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your professional summary">
```

## Next Steps

1. ✏️ Customize all text with your information
2. 🖼️ Add your project screenshots/images
3. 🎨 Adjust colors to match your brand
4. 🔗 Update all social media and contact links
5. 📱 Test on mobile devices
6. 🚀 Deploy to your chosen platform

## Tips for Great Results

- Keep descriptions concise (Apple style)
- Use high-quality project images
- Ensure consistent branding across colors
- Test on multiple devices
- Update portfolio regularly with new projects
- Optimize images for web (use tools like TinyPNG)

## License

This template is free to use and modify for personal use.

---

**Built with ❤️ - Modern, Clean, Apple-Inspired Design**
