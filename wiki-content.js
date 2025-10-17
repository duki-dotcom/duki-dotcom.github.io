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
                { id: "spells", title: "Spells & Incantations", icon: "📖" }
            ]
        },
        {
            section: "Spells",
            pages: [
                { id: "aguamenti", title: "Aguamenti", icon: "💧" },
                { id: "anteoculatia", title: "Anteoculatia", icon: "👓" },
                { id: "apparate", title: "Apparate", icon: "⚡" },
                { id: "ascendio", title: "Ascendio", icon: "⬆️" },
                { id: "ascendre", title: "Ascendre", icon: "🔺" },
                { id: "avada-kedavra", title: "Avada Kedavra", icon: "💀" },
                { id: "avifors", title: "Avifors", icon: "🦅" },
                { id: "bubblify", title: "Bubblify", icon: "🫧" },
                { id: "crucio", title: "Crucio", icon: "⚡" },
                { id: "eat-slugs", title: "Eat Slugs", icon: "🐌" },
                { id: "enlargo", title: "Enlargo", icon: "📏" },
                { id: "episkey", title: "Episkey", icon: "🩹" },
                { id: "everte-statum", title: "Everte Statum", icon: "💫" },
                { id: "expecto-patronum", title: "Expecto Patronum", icon: "🦌" },
                { id: "expelliarmus", title: "Expelliarmus", icon: "🪄" },
                { id: "expulso", title: "Expulso", icon: "💥" },
                { id: "glacious", title: "Glacious", icon: "❄️" },
                { id: "homenum-revelio", title: "Homenum Revelio", icon: "👤" },
                { id: "imperio", title: "Imperio", icon: "🎭" },
                { id: "incendio", title: "Incendio", icon: "🔥" },
                { id: "levicorpus", title: "Levicorpus", icon: "🔼" },
                { id: "lumos", title: "Lumos", icon: "💡" },
                { id: "normalo", title: "Normalo", icon: "↩️" },
                { id: "nox", title: "Nox", icon: "🌑" },
                { id: "orbis", title: "Orbis", icon: "🌀" },
                { id: "orchideous", title: "Orchideous", icon: "🌸" },
                { id: "periculum", title: "Periculum", icon: "🔴" },
                { id: "presentus", title: "Presentus", icon: "🎁" },
                { id: "reducio", title: "Reducio", icon: "📉" },
                { id: "rockifors", title: "Rockifors", icon: "🪨" },
                { id: "sectumsempra", title: "Sectumsempra", icon: "⚔️" },
                { id: "stupefy", title: "Stupefy", icon: "✨" },
                { id: "tarantallegra", title: "Tarantallegra", icon: "💃" }
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
                    <p>This wiki is your comprehensive guide to the mystical world of Wizard Life. Explore spells, magical creatures, and more!</p>
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
                    <li><strong>Core Concepts:</strong> Learn about magic systems and spells</li>
                    <li><strong>Spells:</strong> Discover 33 powerful spells with detailed descriptions</li>
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
                    <li>Browse individual <strong>Spell Pages</strong></li>
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

                <h2>Spell Categories</h2>
                
                <h3>Elemental Spells</h3>
                <ul>
                    <li><strong>Aguamenti:</strong> Water conjuration spell</li>
                    <li><strong>Incendio:</strong> Fire-making spell</li>
                    <li><strong>Glacious:</strong> Ice and freezing spell</li>
                </ul>

                <h3>Combat & Defense</h3>
                <ul>
                    <li><strong>Expelliarmus:</strong> Disarming spell</li>
                    <li><strong>Protego:</strong> Shield charm</li>
                    <li><strong>Stupefy:</strong> Stunning spell</li>
                    <li><strong>Expulso:</strong> Blasting curse</li>
                </ul>

                <h3>Utility Spells</h3>
                <ul>
                    <li><strong>Lumos:</strong> Light-producing spell</li>
                    <li><strong>Nox:</strong> Counter-spell to Lumos</li>
                    <li><strong>Ascendio:</strong> Propels upward</li>
                    <li><strong>Apparate:</strong> Teleportation</li>
                </ul>

                <div class="info-box">
                    <h3>Spellcasting Tips</h3>
                    <ul>
                        <li>Always practice in a safe, controlled environment</li>
                        <li>Speak incantations clearly and with confidence</li>
                        <li>Maintain focus throughout the entire casting</li>
                        <li>Never attempt spells beyond your current skill level</li>
                    </ul>
                </div>

                <h2>Explore Individual Spells</h2>
                <p>Use the sidebar to browse our complete collection of 33 spells, each with detailed descriptions and visual guides.</p>
            `
        },

        // Individual Spell Pages
        aguamenti: {
            title: "Aguamenti - Water Conjuration Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Aguamenti is a charm that conjures a jet of clean, drinkable water from the tip of the caster's wand.</p>

                <img src="icons/aguamenti.png" alt="Aguamenti Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Conjuration</p>
                    <p><strong>Element:</strong> Water</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "Ah-gwah-MEN-tee"</p>
                </div>

                <h2>Effect</h2>
                <p>This spell produces a controllable stream of water that can be used for drinking, extinguishing fires, or creating obstacles. The amount of water produced depends on the caster's concentration and magical strength.</p>

                <h2>Usage</h2>
                <ul>
                    <li>Point wand at desired target location</li>
                    <li>Focus on the image of flowing water</li>
                    <li>Speak incantation clearly</li>
                    <li>Control flow with wand movement</li>
                </ul>

                <h2>Applications</h2>
                <p>Commonly used for firefighting, providing drinking water in emergencies, and various practical applications in daily wizard life.</p>
            `
        },

        anteoculatia: {
            title: "Anteoculatia - Eye Growth Hex",
            content: `
                <h2>Spell Overview</h2>
                <p>Anteoculatia is a hex that causes the target to grow antlers.</p>

                <img src="icons/anteoculatia.png" alt="Anteoculatia Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Hex</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Difficulty:</strong> Advanced ⭐⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "An-tee-oh-cue-LAY-sha"</p>
                </div>

                <h2>Effect</h2>
                <p>When successfully cast, the target sprouts antlers from their head. The effect is temporary and can be reversed with appropriate counter-charms.</p>

                <h2>Warning</h2>
                <p>This spell should only be used in appropriate circumstances and never maliciously. Improper use may result in disciplinary action.</p>
            `
        },

        apparate: {
            title: "Apparate - Teleportation",
            content: `
                <h2>Spell Overview</h2>
                <p>Apparition is a magical form of teleportation that allows a wizard to instantly travel from one location to another.</p>

                <img src="icons/apparate.png" alt="Apparate Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Transportation</p>
                    <p><strong>Element:</strong> Space-Time</p>
                    <p><strong>Difficulty:</strong> Master ⭐⭐⭐⭐⭐</p>
                    <p><strong>Requirements:</strong> License required</p>
                </div>

                <h2>The Three D's</h2>
                <ul>
                    <li><strong>Destination:</strong> Fix your mind firmly on your desired location</li>
                    <li><strong>Determination:</strong> Strong, deliberate intent to reach the destination</li>
                    <li><strong>Deliberation:</strong> Move deliberately through space</li>
                </ul>

                <h2>Risks</h2>
                <p>Improper apparition can result in splinching—leaving parts of oneself behind. This is why a license is required before attempting apparition.</p>
            `
        },

        ascendio: {
            title: "Ascendio - Levitation Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Ascendio is a charm that propels the caster or target high into the air.</p>

                <img src="icons/ascendio.png" alt="Ascendio Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Air/Movement</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "ah-SEN-dee-oh"</p>
                </div>

                <h2>Effect</h2>
                <p>Launches the target upward with considerable force. Commonly used to escape danger, reach high places, or propel oneself out of water.</p>

                <h2>Safety Precautions</h2>
                <p>Always ensure a safe landing is possible before casting. Consider using in combination with cushioning charms.</p>
            `
        },

        ascendre: {
            title: "Ascendre - Rising Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Ascendre is a levitation charm that causes objects or people to rise gently.</p>

                <img src="icons/ascendre.png" alt="Ascendre Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Levitation</p>
                    <p><strong>Difficulty:</strong> Beginner ⭐⭐</p>
                    <p><strong>Incantation:</strong> "ah-SEN-dreh"</p>
                </div>

                <h2>Effect</h2>
                <p>A gentler version of Ascendio, this spell causes gradual upward movement with more control.</p>

                <h2>Applications</h2>
                <p>Useful for moving objects to high shelves, retrieving items from trees, or creating floating displays.</p>
            `
        },

        "avada-kedavra": {
            title: "Avada Kedavra - The Killing Curse",
            content: `
                <h2>Spell Overview</h2>
                <p>Avada Kedavra is one of the three Unforgivable Curses. It causes instant death to the victim.</p>

                <img src="icons/avada-kedavra.png" alt="Avada Kedavra" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>⚠️ UNFORGIVABLE CURSE</h3>
                    <p><strong>Type:</strong> Curse (Forbidden)</p>
                    <p><strong>Element:</strong> Death Magic</p>
                    <p><strong>Difficulty:</strong> Dark Magic</p>
                    <p><strong>Legal Status:</strong> ILLEGAL - Use results in life sentence</p>
                </div>

                <h2>Warning</h2>
                <p>This curse is strictly forbidden. Use of this spell on another human being is punishable by a life sentence in Azkaban. There is no counter-curse or means of blocking it except for sacrificial protection.</p>

                <h2>Historical Note</h2>
                <p>This spell leaves no physical mark and the only known survivor is Harry Potter, protected by his mother's sacrifice.</p>
            `
        },

        avifors: {
            title: "Avifors - Bird Transformation",
            content: `
                <h2>Spell Overview</h2>
                <p>Avifors is a transfiguration spell that transforms small objects or creatures into birds.</p>

                <img src="icons/avifors.png" alt="Avifors Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Transfiguration</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "AH-vee-fors"</p>
                </div>

                <h2>Effect</h2>
                <p>Transforms the target into a small bird. The type of bird varies based on the original object and the caster's visualization.</p>

                <h2>Duration</h2>
                <p>The transformation is temporary unless maintained by concentration or made permanent through advanced techniques.</p>
            `
        },

        bubblify: {
            title: "Bubblify - Bubble Creation Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Bubblify creates protective or decorative magical bubbles.</p>

                <img src="icons/bubblify.png" alt="Bubblify Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Air/Water</p>
                    <p><strong>Difficulty:</strong> Beginner ⭐</p>
                    <p><strong>Incantation:</strong> "BUH-blih-fy"</p>
                </div>

                <h2>Effect</h2>
                <p>Creates magical bubbles that can be used for entertainment, communication, or light protection. The bubbles are iridescent and can carry small objects or messages.</p>

                <h2>Variations</h2>
                <p>Advanced practitioners can create larger, more durable bubbles capable of underwater breathing or short-distance flight.</p>
            `
        },

        crucio: {
            title: "Crucio - The Cruciatus Curse",
            content: `
                <h2>Spell Overview</h2>
                <p>Crucio is one of the three Unforgivable Curses. It inflicts excruciating pain on the victim.</p>

                <img src="icons/crucio.png" alt="Crucio Curse" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>⚠️ UNFORGIVABLE CURSE</h3>
                    <p><strong>Type:</strong> Curse (Forbidden)</p>
                    <p><strong>Element:</strong> Dark Magic</p>
                    <p><strong>Difficulty:</strong> Dark Magic</p>
                    <p><strong>Legal Status:</strong> ILLEGAL - Use results in life sentence</p>
                </div>

                <h2>Warning</h2>
                <p>This curse is strictly forbidden. It causes unbearable pain and prolonged exposure can cause permanent mental damage or insanity.</p>

                <h2>Defense</h2>
                <p>Strong mental fortitude and Occlumency can provide some resistance, though the curse itself has no direct counter.</p>
            `
        },

        "eat-slugs": {
            title: "Eat Slugs - Slug-Vomiting Curse",
            content: `
                <h2>Spell Overview</h2>
                <p>A curse that causes the victim to belch up slugs.</p>

                <img src="icons/eat-slugs.png" alt="Eat Slugs Curse" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Curse</p>
                    <p><strong>Element:</strong> Hex</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "Eat Slugs!"</p>
                </div>

                <h2>Effect</h2>
                <p>Causes the target to vomit live slugs. The effect lasts several hours and is extremely unpleasant but not permanently harmful.</p>

                <h2>Counter</h2>
                <p>The effect must run its course, though certain healing potions can reduce the duration.</p>
            `
        },

        enlargo: {
            title: "Enlargo - Enlargement Charm",
            content: `
                <h2>Spell Overview</h2>
                <p>Enlargo causes the target object or creature to increase in size.</p>

                <img src="icons/enlargo.png" alt="Enlargo Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "en-LAR-go"</p>
                </div>

                <h2>Effect</h2>
                <p>Increases the physical size of the target. The degree of enlargement depends on the caster's power and intent.</p>

                <h2>Reversal</h2>
                <p>Can be reversed with the Reducio spell.</p>
            `
        },

        episkey: {
            title: "Episkey - Healing Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Episkey is a healing charm used to mend minor injuries like broken noses or split lips.</p>

                <img src="icons/episkey.png" alt="Episkey Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Healing Charm</p>
                    <p><strong>Element:</strong> Restoration</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "ee-PIS-key"</p>
                </div>

                <h2>Effect</h2>
                <p>Instantly heals minor injuries such as broken bones, cuts, and bruises. Does not work on major injuries or dark magic wounds.</p>

                <h2>Limitations</h2>
                <p>Not effective against cursed injuries or serious wounds. For major injuries, seek a qualified Healer.</p>
            `
        },

        "everte-statum": {
            title: "Everte Statum - Knockback Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>A spell that throws the target backward with force.</p>

                <img src="icons/everte-statum.png" alt="Everte Statum Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Force</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "ee-VER-tay stah-TUM"</p>
                </div>

                <h2>Effect</h2>
                <p>Propels the target backward with considerable force, often knocking them off their feet.</p>

                <h2>Usage</h2>
                <p>Commonly used in dueling to create distance from an opponent.</p>
            `
        },

        "expecto-patronum": {
            title: "Expecto Patronum - Patronus Charm",
            content: `
                <h2>Spell Overview</h2>
                <p>One of the most powerful defensive charms, the Patronus Charm conjures a guardian made of positive energy.</p>

                <img src="icons/expecto-patronum.png" alt="Expecto Patronum" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm (Advanced)</p>
                    <p><strong>Element:</strong> Light/Spirit</p>
                    <p><strong>Difficulty:</strong> Master ⭐⭐⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "eks-PEK-toh pah-TRO-num"</p>
                </div>

                <h2>Effect</h2>
                <p>Summons a Patronus, a silvery-white guardian that takes the form of an animal unique to each caster. The Patronus can repel Dementors, Lethifolds, and other dark creatures.</p>

                <h2>Casting Requirements</h2>
                <p>Requires focusing on the happiest memory you possess. The strength of the memory directly affects the power of the Patronus.</p>

                <h2>Forms</h2>
                <ul>
                    <li><strong>Incorporeal:</strong> A shield of silver light</li>
                    <li><strong>Corporeal:</strong> A fully formed animal guardian</li>
                </ul>
            `
        },

        expelliarmus: {
            title: "Expelliarmus - Disarming Charm",
            content: `
                <h2>Spell Overview</h2>
                <p>The Disarming Charm forces the target to release whatever they're holding, typically their wand.</p>

                <img src="icons/expelliarmus.png" alt="Expelliarmus Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Force</p>
                    <p><strong>Difficulty:</strong> Beginner ⭐⭐</p>
                    <p><strong>Incantation:</strong> "eks-pel-ee-AR-mus"</p>
                </div>

                <h2>Effect</h2>
                <p>Disarms the opponent by knocking their wand (or other held object) from their grasp. At higher power levels, it can also knock the target backward.</p>

                <h2>Applications</h2>
                <p>One of the most useful defensive spells in dueling. Non-lethal and highly effective.</p>
            `
        },

        expulso: {
            title: "Expulso - Blasting Curse",
            content: `
                <h2>Spell Overview</h2>
                <p>A curse that causes objects to explode with considerable force.</p>

                <img src="icons/expulso.png" alt="Expulso Curse" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Curse</p>
                    <p><strong>Element:</strong> Explosive</p>
                    <p><strong>Difficulty:</strong> Advanced ⭐⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "eks-PUL-so"</p>
                </div>

                <h2>Effect</h2>
                <p>Causes the target to explode violently. Can be used on objects to clear obstacles or in combat situations.</p>

                <h2>Safety Warning</h2>
                <p>Use with extreme caution. Collateral damage is likely.</p>
            `
        },

        glacious: {
            title: "Glacious - Freezing Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Glacious creates ice and freezes objects or enemies.</p>

                <img src="icons/glacious.png" alt="Glacious Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Ice</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "GLAY-shee-us"</p>
                </div>

                <h2>Effect</h2>
                <p>Freezes targets in ice or creates barriers of ice. Can also extinguish flames and cool heated objects.</p>

                <h2>Applications</h2>
                <p>Useful for combat, creating obstacles, preserving items, or cooling environments.</p>
            `
        },

        "homenum-revelio": {
            title: "Homenum Revelio - Human Detection Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>A charm that reveals the presence of humans in the vicinity.</p>

                <img src="icons/homenum-revelio.png" alt="Homenum Revelio" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Detection</p>
                    <p><strong>Difficulty:</strong> Advanced ⭐⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "HOM-eh-num reh-VEL-ee-oh"</p>
                </div>

                <h2>Effect</h2>
                <p>Detects human presence within a certain radius, even those hidden by invisibility cloaks or other concealment methods.</p>

                <h2>Limitations</h2>
                <p>Does not work on non-human creatures or magical beings.</p>
            `
        },

        imperio: {
            title: "Imperio - The Imperius Curse",
            content: `
                <h2>Spell Overview</h2>
                <p>One of the three Unforgivable Curses that allows total control over another person.</p>

                <img src="icons/imperio.png" alt="Imperio Curse" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>⚠️ UNFORGIVABLE CURSE</h3>
                    <p><strong>Type:</strong> Curse (Forbidden)</p>
                    <p><strong>Element:</strong> Mind Control</p>
                    <p><strong>Difficulty:</strong> Dark Magic</p>
                    <p><strong>Legal Status:</strong> ILLEGAL - Use results in life sentence</p>
                </div>

                <h2>Warning</h2>
                <p>This curse is strictly forbidden. It allows complete control over the victim, who retains consciousness but cannot resist commands.</p>

                <h2>Resistance</h2>
                <p>Strong-willed individuals can learn to resist the Imperius Curse through practice and mental discipline.</p>
            `
        },

        incendio: {
            title: "Incendio - Fire-Making Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Incendio is a charm that produces fire from the wand tip.</p>

                <img src="icons/incendio.png" alt="Incendio Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Fire</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "in-SEN-dee-oh"</p>
                </div>

                <h2>Effect</h2>
                <p>Creates fire that can be used for warmth, light, or as a weapon. The intensity of the flames depends on the caster's power and intent.</p>

                <h2>Safety</h2>
                <p>Exercise caution when using fire spells. Always be aware of surroundings and flammable materials.</p>
            `
        },

        levicorpus: {
            title: "Levicorpus - Levitation Jinx",
            content: `
                <h2>Spell Overview</h2>
                <p>A jinx that hoists the target into the air by their ankle.</p>

                <img src="icons/levicorpus.png" alt="Levicorpus Jinx" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Jinx</p>
                    <p><strong>Element:</strong> Levitation</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "leh-vee-COR-pus" (can be non-verbal)</p>
                </div>

                <h2>Effect</h2>
                <p>Dangles the victim upside-down in mid-air by their ankle. Humiliating but not permanently harmful.</p>

                <h2>Counter</h2>
                <p>Use Liberacorpus to release the victim.</p>
            `
        },

        lumos: {
            title: "Lumos - Light Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>One of the most basic and useful spells, Lumos creates light at the tip of the wand.</p>

                <img src="icons/lumos.png" alt="Lumos Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Light</p>
                    <p><strong>Difficulty:</strong> Beginner ⭐</p>
                    <p><strong>Incantation:</strong> "LOO-mos"</p>
                </div>

                <h2>Effect</h2>
                <p>Creates a beam of light from the wand tip, useful for navigation in darkness or reading in low light.</p>

                <h2>Variations</h2>
                <ul>
                    <li><strong>Lumos Maxima:</strong> Creates a much brighter light that can be sent away from the wand</li>
                    <li><strong>Lumos Solem:</strong> Creates sunlight-like illumination</li>
                </ul>
            `
        },

        normalo: {
            title: "Normalo - Restoration Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Returns objects or people to their normal state after transformation.</p>

                <img src="icons/normalo.png" alt="Normalo Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Counter-Spell</p>
                    <p><strong>Element:</strong> Restoration</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "nor-MAH-lo"</p>
                </div>

                <h2>Effect</h2>
                <p>Reverses the effects of transformation spells, returning the target to its original form.</p>

                <h2>Applications</h2>
                <p>Essential counter-spell for reversing transfigurations and enlargement/reduction charms.</p>
            `
        },

        nox: {
            title: "Nox - Light Extinguishing Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>The counter-charm to Lumos, Nox extinguishes the light from the wand.</p>

                <img src="icons/nox.png" alt="Nox Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Counter-Charm</p>
                    <p><strong>Element:</strong> Darkness</p>
                    <p><strong>Difficulty:</strong> Beginner ⭐</p>
                    <p><strong>Incantation:</strong> "NOKS"</p>
                </div>

                <h2>Effect</h2>
                <p>Instantly extinguishes the light created by Lumos or similar light-producing spells.</p>

                <h2>Usage</h2>
                <p>Simply point the wand and speak the incantation. The light will immediately disappear.</p>
            `
        },

        orbis: {
            title: "Orbis - Spiral Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Creates a spiral of magical energy that can trap or disorient targets.</p>

                <img src="icons/orbis.png" alt="Orbis Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Energy</p>
                    <p><strong>Difficulty:</strong> Advanced ⭐⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "OR-bis"</p>
                </div>

                <h2>Effect</h2>
                <p>Creates a spiraling vortex of magical energy that can trap objects or enemies in a spinning motion.</p>

                <h2>Applications</h2>
                <p>Used in combat to disorient opponents or create barriers.</p>
            `
        },

        orchideous: {
            title: "Orchideous - Flower Conjuration",
            content: `
                <h2>Spell Overview</h2>
                <p>A charm that conjures a bouquet of flowers from the wand tip.</p>

                <img src="icons/orchideous.png" alt="Orchideous Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Conjuration</p>
                    <p><strong>Element:</strong> Nature</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "or-KID-ee-us"</p>
                </div>

                <h2>Effect</h2>
                <p>Produces a beautiful bouquet of flowers, typically orchids. Often used for romantic gestures or celebrations.</p>

                <h2>Variations</h2>
                <p>Advanced casters can specify the type and color of flowers conjured.</p>
            `
        },

        periculum: {
            title: "Periculum - Red Sparks",
            content: `
                <h2>Spell Overview</h2>
                <p>Sends up red sparks as a distress signal.</p>

                <img src="icons/periculum.png" alt="Periculum Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Light/Signal</p>
                    <p><strong>Difficulty:</strong> Beginner ⭐⭐</p>
                    <p><strong>Incantation:</strong> "peh-RI-cue-lum"</p>
                </div>

                <h2>Effect</h2>
                <p>Shoots red sparks high into the air as a danger or distress signal visible from great distances.</p>

                <h2>Usage</h2>
                <p>Commonly used when lost, injured, or in need of immediate assistance.</p>
            `
        },

        presentus: {
            title: "Presentus - Gift Wrapping Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>Magically wraps and presents objects as gifts.</p>

                <img src="icons/presentus.png" alt="Presentus Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Difficulty:</strong> Beginner ⭐</p>
                    <p><strong>Incantation:</strong> "preh-ZEN-tus"</p>
                </div>

                <h2>Effect</h2>
                <p>Instantly wraps objects in decorative paper and ribbons, perfect for gift-giving occasions.</p>

                <h2>Customization</h2>
                <p>The wrapping paper's design can be influenced by the caster's imagination.</p>
            `
        },

        reducio: {
            title: "Reducio - Shrinking Charm",
            content: `
                <h2>Spell Overview</h2>
                <p>The counter-charm to Enlargo, Reducio shrinks the target object or creature.</p>

                <img src="icons/reducio.png" alt="Reducio Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "reh-DOO-see-oh"</p>
                </div>

                <h2>Effect</h2>
                <p>Decreases the physical size of the target. Degree of reduction depends on caster's power.</p>

                <h2>Applications</h2>
                <p>Useful for transporting large objects, storing items, or tactical advantages in various situations.</p>
            `
        },

        rockifors: {
            title: "Rockifors - Stone Transformation",
            content: `
                <h2>Spell Overview</h2>
                <p>Transforms objects or creatures into stone or rock.</p>

                <img src="icons/rockifors.png" alt="Rockifors Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Transfiguration</p>
                    <p><strong>Element:</strong> Earth</p>
                    <p><strong>Difficulty:</strong> Advanced ⭐⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "ROCK-ih-fors"</p>
                </div>

                <h2>Effect</h2>
                <p>Transmutes the target into solid rock or stone. Can be used on objects or living creatures.</p>

                <h2>Reversal</h2>
                <p>Requires advanced counter-transfiguration spells to reverse on living subjects.</p>
            `
        },

        sectumsempra: {
            title: "Sectumsempra - Slashing Curse",
            content: `
                <h2>Spell Overview</h2>
                <p>A dark curse that creates deep, invisible cuts on the target as if slashed by an invisible sword.</p>

                <img src="icons/sectumsempra.png" alt="Sectumsempra Curse" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Dark Curse</p>
                    <p><strong>Element:</strong> Dark Magic</p>
                    <p><strong>Difficulty:</strong> Advanced ⭐⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "sec-tum-SEM-pra"</p>
                </div>

                <h2>Warning</h2>
                <p>Extremely dangerous curse created by Severus Snape. Causes severe lacerations that are difficult to heal. Use only in dire emergencies.</p>

                <h2>Healing</h2>
                <p>Requires specific counter-curses and healing spells. Standard healing magic is insufficient.</p>
            `
        },

        stupefy: {
            title: "Stupefy - Stunning Spell",
            content: `
                <h2>Spell Overview</h2>
                <p>One of the most commonly used defensive spells, Stupefy renders the target unconscious.</p>

                <img src="icons/stupefy.png" alt="Stupefy Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Force</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "STOO-puh-fye"</p>
                </div>

                <h2>Effect</h2>
                <p>Knocks the target unconscious with a bolt of red light. Effect duration depends on the caster's power and the target's resistance.</p>

                <h2>Reversal</h2>
                <p>Can be countered with Rennervate or will wear off naturally after a period of time.</p>
            `
        },

        tarantallegra: {
            title: "Tarantallegra - Dancing Jinx",
            content: `
                <h2>Spell Overview</h2>
                <p>A jinx that forces the target's legs to dance uncontrollably.</p>

                <img src="icons/tarantallegra.png" alt="Tarantallegra Jinx" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h3>Spell Details</h3>
                    <p><strong>Type:</strong> Jinx</p>
                    <p><strong>Element:</strong> Control</p>
                    <p><strong>Difficulty:</strong> Intermediate ⭐⭐⭐</p>
                    <p><strong>Incantation:</strong> "tah-ron-tah-LEG-rah"</p>
                </div>

                <h2>Effect</h2>
                <p>Causes the victim's legs to perform a frantic, uncontrollable dance. Often used as a prank or to distract opponents.</p>

                <h2>Counter</h2>
                <p>The effect wears off after a short time or can be ended with appropriate counter-jinxes.</p>
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
                    <li>Character development and storytelling</li>
                    <li>World-building and lore expansion</li>
                    <li>Magical combat tactics</li>
                </ul>

                <h3>🎨 Creative Contributions</h3>
                <p>Share your magical creations:</p>
                <ul>
                    <li>Original spell designs</li>
                    <li>Artwork and illustrations</li>
                    <li>Stories and character backgrounds</li>
                    <li>Fan theories and lore</li>
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
                <p>Place new images in the <code>icons/</code> folder and reference them in your content:</p>
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
