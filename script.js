// Wiki Navigation and Functionality with Animations
(function() {
    'use strict';

    // DOM Elements
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const navContent = document.getElementById('navContent');
    const mainContent = document.getElementById('mainContent');
    const pageTitle = document.getElementById('pageTitle');
    const contentBody = document.getElementById('contentBody');
    const searchInput = document.getElementById('searchInput');

    // State
    let currentPage = 'home';
    let searchIndex = [];
    let observerInitialized = false;

    // Initialize Wiki
    function init() {
        buildNavigation();
        buildSearchIndex();
        setupEventListeners();
        loadPageFromURL();
        window.addEventListener('hashchange', loadPageFromURL);
        setupAnimationObserver();
    }

    // Setup Intersection Observer for scroll animations
    function setupAnimationObserver() {
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);

            // Observe all animatable elements
            const observeElements = () => {
                const elements = contentBody.querySelectorAll('.info-box, .gallery-item, img, h2, h3');
                elements.forEach(el => {
                    if (!el.classList.contains('animate-in')) {
                        observer.observe(el);
                    }
                });
            };

            // Initial observation
            setTimeout(observeElements, 100);

            // Re-observe on page change
            window.addEventListener('pageLoaded', observeElements);
        }
    }

    // Build Navigation Menu
    function buildNavigation() {
        let navHTML = '';
        
        wikiContent.navigation.forEach(section => {
            navHTML += `<div class="nav-section">`;
            navHTML += `<div class="nav-section-title">${section.section}</div>`;
            
            section.pages.forEach(page => {
                const isActive = page.id === currentPage ? 'active' : '';
                navHTML += `
                    <div class="nav-item ${isActive}" data-page="${page.id}">
                        <span class="nav-icon">${page.icon}</span>
                        <span>${page.title}</span>
                    </div>
                `;
            });
            
            navHTML += `</div>`;
        });
        
        navContent.innerHTML = navHTML;
        
        // Add click listeners to navigation items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                const pageId = this.getAttribute('data-page');
                navigateToPage(pageId);
            });
        });

        // Add parallax effect to sidebar
        setupSidebarParallax();
    }

    // Sidebar parallax effect
    function setupSidebarParallax() {
        if (window.innerWidth > 768) {
            sidebar.addEventListener('scroll', () => {
                const scrolled = sidebar.scrollTop;
                const navSections = sidebar.querySelectorAll('.nav-section');
                navSections.forEach((section, index) => {
                    const speed = 0.05 * (index + 1);
                    section.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        }
    }

    // Build Search Index
    function buildSearchIndex() {
        searchIndex = [];
        
        Object.keys(wikiContent.pages).forEach(pageId => {
            const page = wikiContent.pages[pageId];
            const textContent = page.content.replace(/<[^>]*>/g, ' ').toLowerCase();
            
            searchIndex.push({
                id: pageId,
                title: page.title,
                content: textContent
            });
        });
    }

    // Setup Event Listeners
    function setupEventListeners() {
        // Toggle sidebar on mobile
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                // Add animation class
                if (sidebar.classList.contains('active')) {
                    sidebar.style.animation = 'slideInLeft 0.5s ease-out';
                }
            });
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                }
            }
        });

        // Search functionality with debounce
        searchInput.addEventListener('input', debounce(handleSearch, 300));

        // Add mouse move parallax effect
        setupMouseParallax();

        // Add typing animation to search placeholder
        animateSearchPlaceholder();
    }

    // Mouse parallax effect for hero sections
    function setupMouseParallax() {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) / 50;
            const moveY = (e.clientY - window.innerHeight / 2) / 50;
            
            const header = document.querySelector('.content-header');
            if (header) {
                header.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    }

    // Animated search placeholder
    function animateSearchPlaceholder() {
        const placeholders = [
            'Search wiki...',
            'Find spells...',
            'Discover potions...',
            'Explore magic...'
        ];
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % placeholders.length;
            searchInput.placeholder = placeholders[currentIndex];
        }, 3000);
    }

    // Navigate to Page
    function navigateToPage(pageId) {
        if (!wikiContent.pages[pageId]) {
            console.error(`Page not found: ${pageId}`);
            return;
        }

        // Add fade out animation
        contentBody.style.opacity = '0';
        contentBody.style.transform = 'translateY(20px)';

        setTimeout(() => {
            currentPage = pageId;
            window.location.hash = pageId;
            
            // Update active state in navigation
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-page') === pageId) {
                    item.classList.add('active');
                    // Scroll item into view in sidebar
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });

            // Load page content
            loadPage(pageId);

            // Fade in animation
            setTimeout(() => {
                contentBody.style.opacity = '1';
                contentBody.style.transform = 'translateY(0)';
            }, 50);

            // Close sidebar on mobile after navigation
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Trigger custom event for animations
            window.dispatchEvent(new Event('pageLoaded'));
        }, 300);
    }

    // Load Page Content
    function loadPage(pageId) {
        const page = wikiContent.pages[pageId];
        
        if (!page) {
            pageTitle.textContent = 'Page Not Found';
            contentBody.innerHTML = '<p>Sorry, this page does not exist.</p>';
            return;
        }

        pageTitle.textContent = page.title;
        contentBody.innerHTML = page.content;
        
        // Add smooth scroll to internal links
        contentBody.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                navigateToPage(targetId);
            });
        });

        // Add loading animation to images
        contentBody.querySelectorAll('img').forEach(img => {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.6s ease-out';
                this.style.opacity = '1';
            });
        });

        // Add hover effect to gallery items
        contentBody.querySelectorAll('.gallery-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02) rotateZ(2deg)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
            });
        });

        // Add floating animation to info boxes
        contentBody.querySelectorAll('.info-box').forEach(box => {
            let floatDirection = 1;
            setInterval(() => {
                const currentTransform = box.style.transform || 'translateY(0px)';
                const currentY = parseFloat(currentTransform.match(/-?\d+/) || 0);
                floatDirection = currentY > 5 ? -1 : currentY < -5 ? 1 : floatDirection;
                box.style.transform = `translateY(${currentY + floatDirection}px)`;
            }, 50);
        });
    }

    // Load Page from URL Hash
    function loadPageFromURL() {
        const hash = window.location.hash.substring(1);
        const pageId = hash || 'home';
        
        if (wikiContent.pages[pageId]) {
            navigateToPage(pageId);
        } else {
            navigateToPage('home');
        }
    }

    // Search Handler
    function handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === '') {
            // Reset navigation with animation
            navContent.style.opacity = '0';
            setTimeout(() => {
                buildNavigation();
                navContent.style.opacity = '1';
            }, 200);
            return;
        }

        // Search through pages
        const results = searchIndex.filter(page => 
            page.title.toLowerCase().includes(query) || 
            page.content.includes(query)
        );

        displaySearchResults(results, query);
    }

    // Display Search Results
    function displaySearchResults(results, query) {
        navContent.style.opacity = '0';
        
        setTimeout(() => {
            if (results.length === 0) {
                navContent.innerHTML = `
                    <div class="no-results">
                        <h3>✨ No results found</h3>
                        <p>Try searching for something else</p>
                    </div>
                `;
                navContent.style.opacity = '1';
                return;
            }

            let resultsHTML = '<div class="nav-section">';
            resultsHTML += `<div class="nav-section-title">🔍 Search Results (${results.length})</div>`;
            
            results.forEach((result, index) => {
                resultsHTML += `
                    <div class="nav-item" data-page="${result.id}" style="animation-delay: ${index * 0.05}s">
                        <span class="nav-icon">📄</span>
                        <span>${result.title}</span>
                    </div>
                `;
            });
            
            resultsHTML += '</div>';
            navContent.innerHTML = resultsHTML;
            
            // Re-attach click listeners
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', function() {
                    const pageId = this.getAttribute('data-page');
                    navigateToPage(pageId);
                    searchInput.value = '';
                    navContent.style.opacity = '0';
                    setTimeout(() => {
                        buildNavigation();
                        navContent.style.opacity = '1';
                    }, 200);
                });
            });
            
            navContent.style.opacity = '1';
        }, 200);
    }

    // Debounce Helper
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Add CSS for smooth transitions
    contentBody.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
    navContent.style.transition = 'opacity 0.3s ease-out';

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Add particle effect on page load
    createParticles();
    
    function createParticles() {
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'];
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: fixed;
                    width: ${Math.random() * 4 + 2}px;
                    height: ${Math.random() * 4 + 2}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    opacity: ${Math.random() * 0.5 + 0.3};
                    animation: particleFloat ${Math.random() * 3 + 2}s ease-in-out infinite;
                `;
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 5000);
            }, i * 100);
        }
    }

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0%, 100% {
                transform: translate(0, 0) scale(1);
            }
            50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5);
            }
        }
    `;
    document.head.appendChild(style);
})();
