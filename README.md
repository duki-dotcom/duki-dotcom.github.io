# Wizard Life Wiki

## Overview
A modern static wiki website for Wizard Life featuring glassmorphism UI, smooth animations, and aesthetic design. Built with pure HTML, CSS, and JavaScript - optimized for GitHub Pages deployment.

## Project Structure
```
wizard-life-wiki/
├── index.html          # Main HTML structure with layered backgrounds
├── styles.css          # Glass UI design with animations and effects
├── script.js           # Navigation, search, and scroll-triggered animations
├── wiki-content.js     # Modular content structure
├── icons/              # Logo and image assets
│   ├── logo-horizontal-transparent.png
│   ├── logo-horizontal-bw.png
│   ├── logo-square-transparent.png
│   ├── logo-square-bw.png
│   ├── icon-transparent.png
│   └── icon.png
└── CNAME              # www.wizardlife.online
```

## Technology Stack
- **Pure Static Site**: HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: No frameworks or build tools required
- **GitHub Pages Ready**: All files are static with relative paths
- **Modern Glass UI**: Glassmorphism with backdrop-filter effects
- **Smooth Animations**: CSS keyframes and IntersectionObserver
- **Responsive Design**: Mobile-friendly with collapsible sidebar

## Design Features

### Glassmorphism UI
- Frosted glass panels throughout with backdrop-filter blur
- Layered transparency for depth
- Subtle borders and shadows for elevation
- Glass cards with hover effects

### Beautiful Animations
- Fade-in and slide-in animations on page load
- Scroll-triggered animations with IntersectionObserver
- Smooth page transitions
- Floating elements with CSS keyframes
- Particle effects on load
- Hover transformations on interactive elements

### Visual Effects
- Animated gradient backgrounds
- Dark theme with purple/pink accent colors
- Rotating gradient overlays
- Pulsing glow effects
- Mouse parallax on hero sections
- Smooth color transitions

### Color Scheme
- Primary: #667eea to #764ba2 (Purple gradient)
- Accent: #f093fb to #f5576c (Pink gradient)
- Background: Dark theme (#1a1a2e)
- Glass effects: Semi-transparent whites with blur

## Features

### Navigation System
- Glass sidebar with backdrop blur
- Icon-based navigation with smooth transitions
- Active page highlighting with gradient
- Mobile-responsive hamburger menu
- Parallax scroll effect

### Search Functionality
- Real-time search across all pages
- Animated search placeholder
- Debounced input for performance
- Glass-styled search results

### Content Areas
- Hero headers with gradient overlays
- Glass content cards with blur effects
- Image galleries with hover animations
- Info boxes with floating effects
- Code blocks with glass styling
- Responsive images with shadow effects

### Current Pages
1. **Getting Started**
   - Home (Welcome with gallery)
   - About Wizard Life
   - Quick Start Guide

2. **Core Concepts**
   - Magic System
   - Spells & Incantations

3. **Spells** (33 Individual Spell Pages)
   - Aguamenti, Anteoculatia, Apparate, Ascendio, Ascendre
   - Avada Kedavra, Avifors, Bubblify, Crucio, Eat Slugs
   - Enlargo, Episkey, Everte Statum, Expecto Patronum, Expelliarmus
   - Expulso, Glacious, Homenum Revelio, Imperio, Incendio
   - Levicorpus, Lumos, Normalo, Nox, Orbis
   - Orchideous, Periculum, Presentus, Reducio, Rockifors
   - Sectumsempra, Stupefy, Tarantallegra
   - Each spell page includes description, spell details, effects, and image placeholder

4. **Resources**
   - Image Gallery (showcasing all logos)
   - Community
   - Contributing

## How to Add New Content

### Adding a New Page
Edit `wiki-content.js`:

1. **Add to Navigation** (around line 3):
```javascript
{
    section: "Your Section",
    pages: [
        { id: "newpage", title: "New Page", icon: "🆕" }
    ]
}
```

2. **Add Page Content** (around line 40):
```javascript
newpage: {
    title: "Your Page Title",
    content: `
        <h2>Section Heading</h2>
        <p>Your content here...</p>
        
        <div class="info-box">
            <h3>Important Info</h3>
            <p>This will have glass effect and floating animation</p>
        </div>
        
        <div class="image-gallery">
            <div class="gallery-item">
                <img src="icons/image.png" alt="Image">
                <div class="gallery-caption">Caption</div>
            </div>
        </div>
    `
}
```

### Adding Images
1. Place images in the `icons/` folder
2. Reference with relative path: `icons/your-image.png`
3. Use gallery structure for multi-image displays
4. Images automatically get hover effects and shadows

## Local Development (Replit)
- Uses Python's built-in HTTP server on port 5000
- Runs on 0.0.0.0 for Replit proxy compatibility
- Auto-restart configured via workflow
- Cache disabled for instant updates

## GitHub Pages Deployment
1. Push all files to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. CNAME file configures custom domain automatically
5. Site will be live at www.wizardlife.online

All animations and effects work perfectly on GitHub Pages with no build process required.

## Browser Support
- Modern browsers with backdrop-filter support (Chrome, Firefox, Safari, Edge)
- Graceful fallbacks for older browsers
- Mobile responsive (breakpoint at 768px)
- Reduced motion support via prefers-reduced-motion

## Performance Optimizations
- CSS-based animations (no JavaScript timers)
- IntersectionObserver for scroll triggers
- Debounced search input
- Optimized image loading
- Will-change hints for GPU acceleration
- No memory leaks on page transitions

## Animation Classes
- `.glass-panel` - Main glass effect with backdrop blur
- `.glass-card` - Smaller glass cards with hover
- `.frosted-card` - Alternative glass style
- `.info-box` - Gradient box with floating animation
- `.gallery-item` - Image card with stagger animation
- `.animate-in` - Scroll-triggered fade-in effect

## Recent Changes
- 2025-10-17: Enhanced glass UI with more prominent frosted effects (rgba backgrounds, backdrop-filter blur)
- 2025-10-17: Removed constant logo floating animation, added hover scale effect only
- 2025-10-17: Added 33 individual spell pages with detailed content and image placeholders
- 2025-10-17: Removed Potion Brewing page from navigation and content
- 2025-10-17: Complete aesthetic redesign with glass UI
- 2025-10-17: Added CSS animations and scroll triggers
- 2025-10-17: Implemented glassmorphism throughout
- 2025-10-17: Added particle effects and parallax
- 2025-10-17: Optimized performance (removed timer leaks)
- 2025-10-17: Enhanced mobile responsiveness
