// Wiki Navigation and Functionality
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

    // Initialize Wiki
    function init() {
        buildNavigation();
        buildSearchIndex();
        setupEventListeners();
        loadPageFromURL();
        window.addEventListener('hashchange', loadPageFromURL);
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

        // Search functionality
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }

    // Navigate to Page
    function navigateToPage(pageId) {
        if (!wikiContent.pages[pageId]) {
            console.error(`Page not found: ${pageId}`);
            return;
        }

        currentPage = pageId;
        window.location.hash = pageId;
        
        // Update active state in navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-page') === pageId) {
                item.classList.add('active');
            }
        });

        // Load page content
        loadPage(pageId);

        // Close sidebar on mobile after navigation
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
            // Reset navigation
            buildNavigation();
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
        if (results.length === 0) {
            navContent.innerHTML = `
                <div class="no-results">
                    <h3>No results found</h3>
                    <p>Try searching for something else</p>
                </div>
            `;
            return;
        }

        let resultsHTML = '<div class="nav-section">';
        resultsHTML += `<div class="nav-section-title">Search Results (${results.length})</div>`;
        
        results.forEach(result => {
            resultsHTML += `
                <div class="nav-item" data-page="${result.id}">
                    <span class="nav-icon">🔍</span>
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
                buildNavigation();
            });
        });
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

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
