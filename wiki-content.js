// Wiki Content Structure
// Add new pages by adding entries to this object
// Each page can include HTML content with images, links, and formatting

const wikiContent = {
    navigation: [
        {
            section: "Getting Started",
            pages: [
                { id: "home", title: "Home", icon: "🏠" },
                { id: "about", title: "About Wizard Life", icon: "✨" },
                { id: "quickstart", title: "Quick Start Guide", icon: "🚀" }
            ]
        },
        {
            section: "Core Concepts",
            pages: [
                { id: "magic", title: "Magic System", icon: "🔮" },
                { id: "spells", title: "Spells & Incantations", icon: "📖" },
                { id: "potions", title: "Potion Brewing", icon: "🧪" }
            ]
        },
        {
            section: "Resources",
            pages: [
                { id: "gallery", title: "Image Gallery", icon: "🖼️" },
                { id: "community", title: "Community", icon: "👥" },
                { id: "contribute", title: "Contributing", icon: "✏️" }
            ]
        }
    ],

    pages: {
        home: {
            title: "Welcome to Wizard Life Wiki",
            content: `
                <div class="info-box">
                    <h3>🎉 Welcome, Aspiring Wizard!</h3>
                    <p>This wiki is your comprehensive guide to the mystical world of Wizard Life. Explore spells, potions, magical creatures, and more!</p>
                </div>

                <h2>What is Wizard Life?</h2>
                <p>Wizard Life is a magical universe where wizards, witches, and magical creatures coexist in harmony. Whether you're a novice spellcaster or a seasoned sorcerer, this wiki has something for everyone.</p>

                <div class="image-gallery">
                    <div class="gallery-item">
                        <img src="icons/logo-square-transparent.png" alt="Wizard Life Logo">
                        <div class="gallery-caption">Official Logo</div>
                    </div>
                    <div class="gallery-item">
                        <img src="icons/icon-transparent.png" alt="Wizard Icon">
                        <div class="gallery-caption">Wizard Icon</div>
                    </div>
                </div>

                <h2>Quick Navigation</h2>
                <ul>
                    <li><strong>Getting Started:</strong> New to wizardry? Start with our Quick Start Guide</li>
                    <li><strong>Core Concepts:</strong> Learn about magic systems, spells, and potions</li>
                    <li><strong>Resources:</strong> Browse our gallery and connect with the community</li>
                </ul>

                <h2>Latest Updates</h2>
                <p>Stay tuned for the latest magical discoveries and community contributions!</p>
            `
        },

        about: {
            title: "About Wizard Life",
            content: `
                <h2>The Story Behind Wizard Life</h2>
                <p>Wizard Life began as a passion project to create a comprehensive magical universe that combines traditional wizardry with modern storytelling.</p>

                <img src="icons/logo-horizontal-transparent.png" alt="Wizard Life Banner" style="width: 100%; max-width: 600px; display: block; margin: 2rem auto;">

                <h2>Our Mission</h2>
                <p>Our mission is to create an immersive, collaborative magical world where creativity knows no bounds. We believe in:</p>
                <ul>
                    <li>📚 <strong>Knowledge Sharing:</strong> Making magical wisdom accessible to all</li>
                    <li>🤝 <strong>Community:</strong> Building a welcoming space for all magic enthusiasts</li>
                    <li>✨ <strong>Creativity:</strong> Encouraging original magical content and ideas</li>
                    <li>🌍 <strong>Inclusivity:</strong> Welcoming wizards from all backgrounds and traditions</li>
                </ul>

                <h2>Our Vision</h2>
                <p>We envision Wizard Life as the premier destination for magical knowledge, connecting practitioners and enthusiasts from around the world.</p>

                <div class="info-box">
                    <h3>Join Our Journey</h3>
                    <p>Wizard Life is constantly evolving. Every wizard has unique knowledge to share, and we encourage everyone to contribute to our growing repository of magical wisdom.</p>
                </div>
            `
        },

        quickstart: {
            title: "Quick Start Guide",
            content: `
                <h2>Welcome, New Wizard! 🌟</h2>
                <p>This guide will help you get started on your magical journey. Follow these steps to begin your adventure in the world of Wizard Life.</p>

                <h2>Step 1: Understanding the Basics</h2>
                <p>Before diving into advanced magic, it's essential to understand the fundamental principles:</p>
                <ul>
                    <li>Magic flows through all living things</li>
                    <li>Intent and focus are key to successful spellcasting</li>
                    <li>Every wizard has a unique magical signature</li>
                    <li>Practice and patience lead to mastery</li>
                </ul>

                <h2>Step 2: Your First Spell</h2>
                <p>We recommend starting with simple illumination spells. These are safe for beginners and help develop magical control.</p>
                
                <div class="info-box">
                    <h3>Lumos (Light Spell)</h3>
                    <p><strong>Incantation:</strong> "Lumos"</p>
                    <p><strong>Effect:</strong> Creates a small orb of light at your wand tip</p>
                    <p><strong>Tip:</strong> Focus on the feeling of warmth and light as you cast</p>
                </div>

                <h2>Step 3: Explore the Wiki</h2>
                <p>Use the sidebar navigation to explore different topics:</p>
                <ul>
                    <li>Learn about the <strong>Magic System</strong></li>
                    <li>Discover various <strong>Spells & Incantations</strong></li>
                    <li>Master <strong>Potion Brewing</strong></li>
                    <li>View our <strong>Image Gallery</strong></li>
                </ul>

                <h2>Step 4: Join the Community</h2>
                <p>Connect with fellow wizards, share your experiences, and learn from others. The magical community is welcoming and always ready to help newcomers!</p>
            `
        },

        magic: {
            title: "Magic System",
            content: `
                <h2>Understanding Magic</h2>
                <p>Magic in Wizard Life is a complex and beautiful system that governs all supernatural phenomena. Understanding its fundamentals is crucial for any practitioner.</p>

                <h2>The Three Pillars of Magic</h2>
                
                <h3>1. Intent 🎯</h3>
                <p>Intent is the driving force behind all magic. Your thoughts, emotions, and desires shape the magical energy you channel. Clear intent leads to powerful, precise results.</p>

                <h3>2. Energy ⚡</h3>
                <p>Magical energy flows through all living things and can be drawn from the environment, personal reserves, or external sources like crystals and ley lines.</p>

                <h3>3. Knowledge 📚</h3>
                <p>Understanding the principles of magic, proper techniques, and the consequences of your actions is essential for safe and effective spellcasting.</p>

                <div class="info-box">
                    <h3>Important Note</h3>
                    <p>Magic is neither inherently good nor evil. It is a tool, and like any tool, its morality depends on how it is used. Always consider the consequences of your magical actions.</p>
                </div>

                <h2>Types of Magic</h2>
                <ul>
                    <li><strong>Elemental Magic:</strong> Control over fire, water, earth, and air</li>
                    <li><strong>Healing Magic:</strong> Restoration and recovery spells</li>
                    <li><strong>Transformation Magic:</strong> Changing the form or properties of objects</li>
                    <li><strong>Divination:</strong> Seeing the past, present, or potential futures</li>
                    <li><strong>Enchantment:</strong> Imbuing objects with magical properties</li>
                    <li><strong>Summoning:</strong> Calling forth creatures or objects</li>
                </ul>

                <h2>Magical Development</h2>
                <p>Magical ability grows with practice, study, and experience. Every wizard's journey is unique, and there's no "correct" path to mastery.</p>
            `
        },

        spells: {
            title: "Spells & Incantations",
            content: `
                <h2>The Art of Spellcasting</h2>
                <p>Spells are structured magical formulas that produce specific, repeatable effects. Mastering spellcasting requires practice, precision, and understanding.</p>

                <h2>Beginner Spells</h2>
                
                <h3>Lumos (Light)</h3>
                <p><strong>Difficulty:</strong> Beginner ⭐</p>
                <p><strong>Effect:</strong> Creates a sphere of light</p>
                <p><strong>Usage:</strong> Point your wand and speak "Lumos" with clear intent</p>

                <h3>Nox (Extinguish)</h3>
                <p><strong>Difficulty:</strong> Beginner ⭐</p>
                <p><strong>Effect:</strong> Extinguishes magical light</p>
                <p><strong>Usage:</strong> Counter-spell to Lumos, speak "Nox"</p>

                <h3>Reparo (Repair)</h3>
                <p><strong>Difficulty:</strong> Beginner ⭐⭐</p>
                <p><strong>Effect:</strong> Mends broken objects</p>
                <p><strong>Usage:</strong> Focus on the object's original state while casting</p>

                <h2>Intermediate Spells</h2>
                
                <h3>Protego (Shield)</h3>
                <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                <p><strong>Effect:</strong> Creates a magical barrier</p>
                <p><strong>Usage:</strong> Visualize a protective barrier forming before you</p>

                <h3>Accio (Summoning)</h3>
                <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                <p><strong>Effect:</strong> Summons an object to your hand</p>
                <p><strong>Usage:</strong> Say "Accio" followed by the object name</p>

                <div class="info-box">
                    <h3>Spellcasting Tips</h3>
                    <ul>
                        <li>Always practice in a safe, controlled environment</li>
                        <li>Speak incantations clearly and with confidence</li>
                        <li>Maintain focus throughout the entire casting</li>
                        <li>Never attempt spells beyond your current skill level</li>
                    </ul>
                </div>

                <h2>Advanced Spells</h2>
                <p>Advanced spells require years of practice and should only be attempted by experienced wizards. These spells often involve complex wand movements, multiple incantations, or significant magical energy.</p>
            `
        },

        potions: {
            title: "Potion Brewing",
            content: `
                <h2>The Science and Art of Potions</h2>
                <p>Potion brewing combines magical theory with precise technique. Unlike spellcasting, potions allow wizards to store magical effects for later use.</p>

                <h2>Essential Equipment</h2>
                <ul>
                    <li>🔥 Cauldron (copper, brass, or silver for different effects)</li>
                    <li>🥄 Stirring rod (preferably wooden or glass)</li>
                    <li>⚖️ Precise scales for measuring ingredients</li>
                    <li>🌡️ Temperature control system</li>
                    <li>🧪 Storage vials and containers</li>
                    <li>📖 Recipe book for reference</li>
                </ul>

                <h2>Basic Potions</h2>

                <h3>Healing Draught</h3>
                <p><strong>Difficulty:</strong> Beginner ⭐</p>
                <p><strong>Effect:</strong> Accelerates natural healing</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    <li>3 drops of dittany essence</li>
                    <li>1 cup spring water</li>
                    <li>2 sprigs of mint</li>
                    <li>1 teaspoon honey</li>
                </ul>
                <p><strong>Instructions:</strong> Simmer water, add mint, steep for 5 minutes, strain, add dittany and honey while stirring clockwise.</p>

                <h3>Energy Tonic</h3>
                <p><strong>Difficulty:</strong> Beginner ⭐⭐</p>
                <p><strong>Effect:</strong> Restores magical energy</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    <li>1 cup chamomile tea</li>
                    <li>5 crushed moonstone crystals</li>
                    <li>2 drops lavender oil</li>
                    <li>1 pinch of salt</li>
                </ul>

                <div class="info-box">
                    <h3>⚠️ Safety First</h3>
                    <p>Always test new potions in small doses. Never mix potions unless you're certain of the interaction. Some ingredient combinations can be dangerous!</p>
                </div>

                <h2>Advanced Brewing Techniques</h2>
                <p>As you progress, you'll learn about:</p>
                <ul>
                    <li>Lunar phase timing for maximum potency</li>
                    <li>Ingredient substitution and adaptation</li>
                    <li>Creating your own original recipes</li>
                    <li>Preservation and storage methods</li>
                </ul>
            `
        },

        gallery: {
            title: "Image Gallery",
            content: `
                <h2>Wizard Life Visual Assets</h2>
                <p>Browse our collection of official logos, icons, and visual assets for Wizard Life.</p>

                <div class="image-gallery">
                    <div class="gallery-item">
                        <img src="icons/logo-horizontal-transparent.png" alt="Horizontal Logo">
                        <div class="gallery-caption">Horizontal Logo (Transparent)</div>
                    </div>
                    <div class="gallery-item">
                        <img src="icons/logo-horizontal-bw.png" alt="Horizontal Logo BW">
                        <div class="gallery-caption">Horizontal Logo (B&W)</div>
                    </div>
                    <div class="gallery-item">
                        <img src="icons/logo-square-transparent.png" alt="Square Logo">
                        <div class="gallery-caption">Square Logo (Transparent)</div>
                    </div>
                    <div class="gallery-item">
                        <img src="icons/logo-square-bw.png" alt="Square Logo BW">
                        <div class="gallery-caption">Square Logo (B&W)</div>
                    </div>
                    <div class="gallery-item">
                        <img src="icons/icon-transparent.png" alt="Icon">
                        <div class="gallery-caption">Wizard Icon</div>
                    </div>
                    <div class="gallery-item">
                        <img src="icons/icon.png" alt="Icon Solid">
                        <div class="gallery-caption">Wizard Icon (Solid)</div>
                    </div>
                </div>

                <h2>Usage Guidelines</h2>
                <p>These assets are part of the Wizard Life brand. Feel free to use them in your magical projects and community contributions!</p>

                <h3>Logo Variations</h3>
                <ul>
                    <li><strong>Transparent backgrounds:</strong> Best for overlaying on colored backgrounds</li>
                    <li><strong>Black & White versions:</strong> Ideal for print materials and simple designs</li>
                    <li><strong>Horizontal layouts:</strong> Perfect for headers and banners</li>
                    <li><strong>Square layouts:</strong> Great for social media profiles and avatars</li>
                </ul>

                <div class="info-box">
                    <h3>Need More Images?</h3>
                    <p>This gallery will expand as the community grows. Check back regularly for new magical artwork and visual resources!</p>
                </div>
            `
        },

        community: {
            title: "Community",
            content: `
                <h2>Join the Wizard Life Community</h2>
                <p>Wizard Life is more than just a wiki—it's a thriving community of magic enthusiasts, creative storytellers, and passionate wizards from around the world.</p>

                <h2>Ways to Connect</h2>
                
                <h3>📱 Social Media</h3>
                <p>Follow us on social media for updates, magical tips, and community highlights:</p>
                <ul>
                    <li>Discord Server (Coming Soon)</li>
                    <li>Reddit Community (Coming Soon)</li>
                    <li>Twitter/X Updates (Coming Soon)</li>
                </ul>

                <h3>💬 Discussion Forums</h3>
                <p>Engage in discussions about:</p>
                <ul>
                    <li>Spell theory and magical mechanics</li>
                    <li>Potion recipes and brewing techniques</li>
                    <li>Character development and storytelling</li>
                    <li>World-building and lore expansion</li>
                </ul>

                <h3>🎨 Creative Contributions</h3>
                <p>Share your magical creations:</p>
                <ul>
                    <li>Original spell designs</li>
                    <li>Potion recipes</li>
                    <li>Artwork and illustrations</li>
                    <li>Stories and character backgrounds</li>
                </ul>

                <div class="info-box">
                    <h3>Community Guidelines</h3>
                    <p>We strive to maintain a welcoming, inclusive environment. Be respectful, supportive, and open-minded. All wizards are welcome here!</p>
                </div>

                <h2>Events & Activities</h2>
                <p>Stay tuned for:</p>
                <ul>
                    <li>Monthly magical challenges</li>
                    <li>Community spell-crafting contests</li>
                    <li>Virtual wizard gatherings</li>
                    <li>Collaborative world-building projects</li>
                </ul>
            `
        },

        contribute: {
            title: "Contributing to the Wiki",
            content: `
                <h2>Help Us Grow the Wizard Life Wiki</h2>
                <p>This wiki thrives on community contributions. Whether you're a seasoned wizard or just starting your magical journey, your knowledge and creativity are valuable!</p>

                <h2>How to Contribute</h2>

                <h3>1. Adding New Pages</h3>
                <p>To add a new page to the wiki, you'll need to edit the <code>wiki-content.js</code> file:</p>
                <ul>
                    <li>Add a new page entry to the <code>navigation</code> array</li>
                    <li>Create the page content in the <code>pages</code> object</li>
                    <li>Use HTML for formatting (headings, paragraphs, lists, images)</li>
                </ul>

                <h3>2. Editing Existing Content</h3>
                <p>Found something that needs improvement? You can:</p>
                <ul>
                    <li>Fix typos and grammatical errors</li>
                    <li>Add more detailed explanations</li>
                    <li>Include additional examples</li>
                    <li>Update outdated information</li>
                </ul>

                <h3>3. Adding Images</h3>
                <p>Place new images in the <code>icons/</code> folder or create a new folder for specific content. Reference images using relative paths:</p>
                <code>&lt;img src="icons/your-image.png" alt="Description"&gt;</code>

                <div class="info-box">
                    <h3>Content Guidelines</h3>
                    <ul>
                        <li>Keep content clear and accessible to all skill levels</li>
                        <li>Use proper grammar and spelling</li>
                        <li>Include examples and practical applications</li>
                        <li>Credit sources when applicable</li>
                        <li>Be creative but maintain consistency with existing lore</li>
                    </ul>
                </div>

                <h2>Technical Details</h2>
                <p>The wiki is built with:</p>
                <ul>
                    <li><strong>HTML/CSS/JavaScript:</strong> Pure static site, no frameworks required</li>
                    <li><strong>GitHub Pages:</strong> Free hosting with automatic deployments</li>
                    <li><strong>Modular Structure:</strong> Easy to maintain and expand</li>
                </ul>

                <h3>File Structure</h3>
                <pre><code>wizard-life-wiki/
├── index.html          (Main page structure)
├── styles.css          (All styling)
├── script.js           (Functionality)
├── wiki-content.js     (Content and navigation)
├── icons/              (Images and assets)
└── CNAME               (GitHub Pages domain)</code></pre>

                <h2>Submit Your Contributions</h2>
                <p>Ready to contribute? You can:</p>
                <ul>
                    <li>Fork the repository on GitHub</li>
                    <li>Make your changes</li>
                    <li>Submit a pull request</li>
                    <li>Await review from the community</li>
                </ul>

                <p>Thank you for helping make Wizard Life Wiki an amazing resource for all!</p>
            `
        }
    }
};
