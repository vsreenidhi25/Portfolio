# Portfolio Customization Guide

This guide helps you personalize your Apple-style portfolio website with your actual information.

## Step 1: Basic Information

### Edit `index.html` - Replace These Sections:

#### A. Navigation Bar Logo
```html
<!-- Current -->
<div class="logo">Portfolio</div>

<!-- Change to -->
<div class="logo">Your Name</div>
```

#### B. Hero Section (Main Headline)
```html
<!-- Current -->
<h1 class="hero-title">Crafting Digital Excellence</h1>
<p class="hero-subtitle">Innovative solutions with minimalist design principles</p>

<!-- Change to -->
<h1 class="hero-title">Your Professional Title / Headline</h1>
<p class="hero-subtitle">Your professional tagline or brief description</p>
```

Example from a Software Engineer:
```html
<h1 class="hero-title">Full-Stack Developer & Designer</h1>
<p class="hero-subtitle">Building beautiful, scalable web experiences</p>
```

#### C. About Section
```html
<!-- Current -->
<p>I'm a full-stack developer with a passion for clean code and intuitive design...</p>
<p>With expertise in modern web technologies and a design-first approach...</p>

<!-- Change to: Write 2-3 sentences about yourself -->
<p>I'm [Your Title] with [X] years of experience in [Your Field]...</p>
<p>I specialize in [Your Specialties] and love working on [Types of Projects]...</p>
```

#### D. About Section Stats
```html
<!-- Update these numbers to your actual achievements -->
<div class="stat">
    <h3>5+</h3>
    <p>Years of Experience</p>
</div>
<div class="stat">
    <h3>50+</h3>
    <p>Projects Completed</p>
</div>
<div class="stat">
    <h3>100%</h3>
    <p>Client Satisfaction</p>
</div>
```

## Step 2: Projects Section

Replace the three dummy projects with your actual work:

```html
<article class="project-card">
    <div class="project-image project-image-1"></div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Brief description of what the project does, challenge solved, and results achieved.</p>
        <div class="project-tags">
            <span class="tag">Technology Used</span>
            <span class="tag">Framework</span>
            <span class="tag">Category</span>
        </div>
    </div>
</article>
```

### Example Project Card:
```html
<article class="project-card">
    <div class="project-image project-image-1"></div>
    <div class="project-content">
        <h3>E-Commerce Platform Redesign</h3>
        <p>Led complete redesign of mobile shopping experience, increasing conversion rate by 35% through improved UX and performance optimization.</p>
        <div class="project-tags">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">UI/UX Design</span>
        </div>
    </div>
</article>
```

### Tips for Project Descriptions:
- Start with the action (Built, Designed, Optimized, etc.)
- Include the impact (increased X%, reduced time by Y, etc.)
- Keep it to 1-2 sentences max
- Focus on what you learned or how you contributed

## Step 3: Skills Section

Update each skill category with your actual skills:

```html
<div class="skill-category">
    <h4>Frontend</h4>
    <div class="skill-items">
        <span class="skill-badge">Your Skill 1</span>
        <span class="skill-badge">Your Skill 2</span>
        <span class="skill-badge">Your Skill 3</span>
    </div>
</div>
```

### Example Complete Skills Section:

**Frontend:** React, Vue.js, TypeScript, Tailwind CSS, Next.js, JavaScript
**Backend:** Python, Node.js, Django, PostgreSQL, MongoDB, REST APIs
**Tools:** Git, Docker, AWS, Figma, VS Code, Firebase
**Specialties:** Performance Optimization, Responsive Design, UI/UX, Accessibility

## Step 4: Contact Section

### Update Email
```html
<!-- Current -->
<a href="mailto:your.email@example.com" class="cta-button primary">Get in Touch</a>

<!-- Change to -->
<a href="mailto:myemail@gmail.com" class="cta-button primary">Get in Touch</a>
```

### Update Social Links
```html
<!-- Update these with your actual profiles -->
<a href="https://github.com/yourprofile" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
<a href="https://twitter.com/yourprofile" target="_blank">Twitter</a>
```

## Step 5: Footer

### Update Copyright
```html
<!-- Current -->
<p>&copy; 2026 Your Portfolio. Crafted with precision.</p>

<!-- Change to -->
<p>&copy; 2026 Your Name. Building awesome things.</p>
```

## Step 6: Add Project Images

### Method 1: Using Background Images (Recommended)
1. Create a folder: `Portfolio/assets/images/`
2. Add your project images (jpg, png)
3. Update CSS in `styles.css`:

```css
.project-image-1 {
    background: url('assets/images/project1.jpg') center/cover;
    background-color: #667eea; /* fallback color */
}

.project-image-2 {
    background: url('assets/images/project2.jpg') center/cover;
    background-color: #f093fb;
}

.project-image-3 {
    background: url('assets/images/project3.jpg') center/cover;
    background-color: #4facfe;
}
```

### Method 2: Keep Gradient Backgrounds
The current gradient backgrounds work great without images. You can customize them:

```css
.project-image-1 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Step 7: Customize Colors (Optional)

Edit `styles.css` to match your brand:

```css
:root {
    --primary: #000000;              /* Main text color */
    --secondary: #ffffff;            /* Background */
    --accent: #0071e3;               /* Button and link highlight */
    --accent-light: #f5f5f7;         /* Light background */
    --text-primary: #1d1d1d;         /* Main text */
    --text-secondary: #666666;       /* Secondary text */
    --border-light: #e5e5e7;         /* Borders */
}
```

### Popular Apple-Inspired Color Schemes:

**Option 1: Blue Accent (Apple default)**
```css
--accent: #0071e3;
```

**Option 2: Purple Accent**
```css
--accent: #a855f7;
```

**Option 3: Orange Accent**
```css
--accent: #f97316;
```

**Option 4: Teal Accent**
```css
--accent: #06b6d4;
```

## Step 8: Update Page Title & Meta Tags

Edit the `<head>` section in `index.html`:

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Portfolio of [Your Name], [Your Title]. Specializing in [Your Skills].">
<meta name="keywords" content="portfolio, web developer, designer, [your keywords]">
<meta name="author" content="Your Name">
```

## Content Checklist

- [ ] Updated name/logo in navigation
- [ ] Updated hero title and subtitle
- [ ] Wrote compelling about section
- [ ] Updated personal stats (years, projects, etc.)
- [ ] Added 3 actual projects with descriptions
- [ ] Listed all relevant skills
- [ ] Updated email address
- [ ] Updated social media links
- [ ] Updated footer with correct name/year
- [ ] (Optional) Added project images
- [ ] (Optional) Customized color scheme
- [ ] Tested on mobile device
- [ ] Ready to deploy!

## Tips for Writing Great Content

### Hero Tagline
- Keep it short and impactful
- Show what you do or your specialty
- Make it memorable
- Apple examples: "Think Different", "One more thing..."

### About Section
- Be authentic and personal
- Show passion for what you do
- Mention key achievements
- Keep it 2-3 sentences max

### Project Descriptions
- Action verb at start (Built, Designed, Led, etc.)
- What was the challenge?
- What was the solution?
- What was the impact/result?

### Skills
- List only skills you're actually proficient with
- Group by category for clarity
- Order by proficiency (most skilled first)

## Getting Help

If you need help finding your resume information:
1. Open your resume PDF
2. Identify: Job title, key accomplishments, tools used
3. Extract: Your biggest wins and metrics
4. Gather: URLs for projects and social profiles
5. Collect: 3-5 best projects to showcase

---

**Your portfolio is ready! Customize it, and let your work speak for itself.** ✨

