# Wizard Life Wiki

## Overview
A modern, aesthetically pleasing static wiki website for Wizard Life. Built with pure HTML, CSS, and JavaScript - optimized for GitHub Pages deployment.

## Project Structure
```
wizard-life-wiki/
├── index.html          # Main HTML structure with sidebar and content areas
├── styles.css          # Complete styling with responsive design
├── script.js           # Navigation, search, and interactive functionality
├── wiki-content.js     # Modular content structure (easy to add pages)
├── server.py           # Python dev server (Replit only, not needed for GitHub Pages)
├── icons/              # Logo and image assets
│   ├── logo-horizontal-transparent.png
│   ├── logo-horizontal-bw.png
│   ├── logo-square-transparent.png
│   ├── logo-square-bw.png
│   ├── icon-transparent.png
│   └── icon.png
└── CNAME              # GitHub Pages custom domain (www.wizardlife.online)
```

## Technology Stack
- **Pure Static Site**: HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: No frameworks or build tools required
- **GitHub Pages Ready**: All files are static with relative paths
- **Responsive Design**: Mobile-friendly with collapsible sidebar
- **Client-Side Routing**: Hash-based navigation for SPA-like experience

## Features
### Navigation System
- Organized sidebar with collapsible sections
- Icon-based navigation items
- Active page highlighting
- Mobile-responsive hamburger menu

### Search Functionality
- Real-time search across all pages
- Debounced input for performance
- Search results display in sidebar

### Content Areas
- Main content area with structured typography
- Image galleries with grid layout
- Info boxes with gradient styling
- Code block styling
- Responsive images

### Current Pages
1. **Getting Started**
   - Home
   - About Wizard Life
   - Quick Start Guide

2. **Core Concepts**
   - Magic System
   - Spells & Incantations
   - Potion Brewing

3. **Resources**
   - Image Gallery
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
        
        <img src="icons/your-image.png" alt="Description">
        
        <div class="image-gallery">
            <div class="gallery-item">
                <img src="icons/image1.png" alt="Image 1">
                <div class="gallery-caption">Caption</div>
            </div>
        </div>
    `
}
```

### Adding Images
1. Place images in the `icons/` folder
2. Reference with relative path: `icons/your-image.png`
3. Use appropriate HTML structure (see existing pages for examples)

## Local Development (Replit)
- Uses Python's built-in HTTP server on port 5000
- Runs on 0.0.0.0 for Replit proxy compatibility
- Auto-restart configured via workflow

## GitHub Pages Deployment
1. Push all files to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. CNAME file configures custom domain automatically
5. Site will be live at www.wizardlife.online

## Design Features
- **Color Scheme**: Purple gradient accents (#667eea to #764ba2)
- **Typography**: System font stack for native feel
- **Shadows**: Subtle elevation for depth
- **Borders**: Soft rounded corners throughout
- **Hover States**: Smooth transitions on interactive elements

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (breakpoint at 768px)
- No Internet Explorer support needed

## Recent Changes
- 2025-10-17: Complete redesign as modular wiki system
- 2025-10-17: Added 8 sample pages with varied content
- 2025-10-17: Implemented search functionality
- 2025-10-17: Added image gallery system
- 2025-10-17: Responsive mobile design with hamburger menu
