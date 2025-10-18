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
            <p>This wiki is your guide to Wizard Life. Explore spells, classes, and survive!</p>
        </div>

        <h2>What is Wizard Life?</h2>
        <p>Wizard Life is a magical universe where wizards, witches, and magical creatures coexist in harmony. Whether you're a novice spellcaster or an old player, this wiki has something for everyone.</p>

        <h2>Quick Navigation</h2>
        <ul>
            <li><strong>Getting Started:</strong> New to wizardry? Start with our Quick Start Guide</li>
            <li><strong>Core Concepts:</strong> Learn about magic systems and spells</li>
            <li><strong>Spells:</strong> Discover 33 powerful spells with detailed descriptions</li>
            <li><strong>Resources:</strong> Browse our gallery</li>
        </ul>

        <h2>Updates</h2>
        <p>Since Wizard Life is abandoned, there will be no updates!</p>

        <h2>Support our Wiki</h2>
        <div id="kofi-widget"></div>
        `,
        onRender: function() {
        const script = document.createElement("script");
        script.src = "https://storage.ko-fi.com/cdn/widget/Widget_2.js";
        script.onload = function() {
            kofiwidget2.init('Support WL Wiki!', '#764ba2', 'V7V51MZFGO');
            kofiwidget2.draw();
        };
        document.body.appendChild(script);
        }
    },



        about: {
            title: "About Wizard Life",
            content: `
                <h2>The Story Behind Wizard Life</h2>
                <p>Wizard Life is a game by Edd_E and Rylock, made in 2017. It was abandoned in 2022, and will no longer recieve updates.</p>

                <img src="icons/logo-horizontal-transparent.png" alt="Wizard Life Banner" style="width: 100%; max-width: 600px; display: block; margin: 2rem auto;">

                <h2>New Game</h2>
                <p>Eddie and Rylock now have a new game called "Wizard West". Check it out!</p>

                <div class="info-box">
                    <h3>Note:</h3>
                    <p>This is not an official site owned by Edd_E or Rylock. It is simply a fan-made and hosted wiki.</p>
                </div>
            `
        },

        quickstart: {
            title: "Quick Start Guide",
            content: `
                <h2>Welcome, New Wizard! 🌟</h2>
                <p>This guide will help you get started on your magical journey. Follow these steps to begin your adventure in the world of Wizard Life.</p>

                <h2>Step 1: Understanding the Basics</h2>
                <p>First, you need to equip your wand:</p>
                <ul>
                    <li>Goto the bottom right of your screen.</li>
                    <li>Click on the 'inventory' button.</li>
                    <li>Open the 'Wands' tab and click on your wand.</li>
                    <li>Press equip. Congratulations! You now have your first wand in Wizard Life. </li>
                </ul>

                <h2>Step 2: Your First Spell</h2>
                <p>Some spells require you to unlock them, so you will have to start with simple spells. We recommend 'lumos'.</p>
                
                <div class="info-box">
                    <h3>Lumos (Light Spell)</h3>
                    <p><strong>Incantation:</strong> "Lumos"</p>
                    <p><strong>Effect:</strong> Creates a small orb of light at your wand tip</p>
                    <p><strong>Activation:</strong> Left click anywhere on your screen to toggle the light on/off.</p>
                </div>

                <h2>Step 3: Explore the Wiki</h2>
                <p>Use the sidebar navigation to explore different topics:</p>
                <ul>
                    <li>Learn about the <strong>Magic System</strong></li>
                    <li>Discover various <strong>Spells</strong></li>
                    <li>Browse individual <strong>Spell Pages</strong></li>
                    <li>View our <strong>List of Glitches</strong></li>
                </ul>

                <h2>Still need help?</h2>
                <p>Contact @dukidokii or @nyxises on Discord for help!</p>
            `
        },

        magic: {
            title: "Magic System",
            content: `
                <h2>Understanding Magic</h2>
                <p>Magic in Wizard Life is defined as "Patronus", or "Energy". You will have a limit of 15 Patronus at all times.</p>

                <h2>Known issues With Patronus</h2>
                
                <h3>Patronus never regenerates?</h3>
                <p>If your Patronus level never regenerates, try casting 'nox' or 'episkey' and aim at a wall or floor away from yourself.</p>

                <h3>Still stuck?</h3>
                <p>If your Patronus is under 3/15, you will need to rejoin the game. There is no other way to fix it.</p>

                <h3>Certain spells and Energy.</h3>
                <p>Some spells will break your energy, guaranteed. If you cast: 'expecto patronum', 'homenum revelio', 'rockifors', and 'avifors', then your energy will be stuck.</p>

                <div class="info-box">
                    <h3>Important Note</h3>
                    <p>When casting projectile spells, never aim to the sky. If the projectile never hits a surface, your energy will never start to regenerate. The only exception to this rule is 'periculum'.</p>
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
                
                <h3>Free Spells</h3>
                <ul>
                    <li><strong>Aguamenti:</strong> Water conjuration spell</li>
                    <li><strong>Ascendio:</strong> Propels yourself upward</li>
                    <li><strong>Ascendre:</strong> Launch your target upward</li>
                    <li><strong>Lumos:</strong> Light-producing spell</li>
                    <li><strong>Nox:</strong> Spell to turn off a light</li>
                    <li><strong>Stupefy:</strong> Stunning/Ragdoll Spell</li>
                    <li><strong>Anteoculatia:</strong> Make your target grow antlers</li>
                    <li><strong>Expecto Patronum:</strong> Summon your Patronus</li>
                    <li><strong>Orbis:</strong> Stop your target in their tracks</li>
                    <li><strong>Orchideous:</strong> Summon flowers</li>
                    <li><strong>Normalo:</strong> Return to normal size</li>
                    <li><strong>Periculum:</strong> Conjure fireworks</li>
                    <li><strong>Episkey:</strong> Heal your target</li>
                </ul>

                <h3>Paid Spells</h3>
                <ul>
                    <li><strong>Apparate:</strong> Teleportation</li>
                    <li><strong>Avada Kedavra:</strong> The Killing Curse</li>
                    <li><strong>Imperio:</strong> Mind-Control Curse</li>
                    <li><strong>Bubblify:</strong> Trap your target in a bubble</li>
                    <li><strong>Incendio:</strong> Fire conjuration spell</li>
                    <li><strong>Glacious:</strong> Freezing spell</li>
                    <li><strong>Avifors:</strong> Transform into a bird</li>
                    <li><strong>Crucio:</strong> Cause harm to your target</li>
                    <li><strong>Enlargo:</strong> Grow larger</li>
                    <li><strong>Reducio:</strong> Shrink smaller</li>
                    <li><strong>Everte Statum:</strong> Push your target away</li>
                    <li><strong>Expulso:</strong> Blasting Curse</li>
                    <li><strong>Levicorpus:</strong> Dangle your target like a pinata</li>
                    <li><strong>Presentus:</strong> Conjure a present</li>
                    <li><strong>Rockifors:</strong> Transform into a rock</li>
                    <li><strong>Sectumsempra:</strong> Conjure slashing projectiles</li>
                </ul>

                <h2>Explore Individual Spells</h2>
                <p>Use the sidebar to browse the complete collection of 33 spells, each with detailed descriptions and visual guides.</p>
            `
        },

        // Individual Spell Pages
        aguamenti: {
            title: "Aguamenti - Water Conjuration Spell",
            content: `
                <h2>Overview</h2>
                <p>Aguamenti is a charm that produces a stream of clean, drinkable water from the wand tip.</p>

                <img src="icons/aguamenti.png" alt="Aguamenti Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Conjuration</p>
                    <p><strong>Element:</strong> Water</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Aguamenti"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "aguamenti" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Creates a steady stream of water that can be used to fill containers or extinguish fires.</p>
            `
        },

        anteoculatia: {
            title: "Anteoculatia - Antler Hex",
            content: `
                <h2>Overview</h2>
                <p>Anteoculatia is a hex that temporarily causes the target to grow antlers.</p>

                <img src="icons/anteoculatia.png" alt="Anteoculatia Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Hex</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Anteoculatia"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "anteoculatia" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Temporarily causes the target to grow antlers. The effect fades naturally.</p>
            `
        },

        apparate: {
            title: "Apparate - Teleportation Spell",
            content: `
                <h2>Overview</h2>
                <p>Apparate allows a witch or wizard to instantly teleport from one location to another.</p>

                <img src="icons/apparate.png" alt="Apparate Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Transportation</p>
                    <p><strong>Element:</strong> Movement</p>
                    <p><strong>Price:</strong> 12,500 Galleons</p>
                    <p><strong>Incantation:</strong> "Apparate"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "apparate" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Instantly teleports the user to a targeted location. A valid Apparition License may be required.</p>
            `
        },

        ascendio: {
            title: "Ascendio - Levitation Spell",
            content: `
                <h2>Overview</h2>
                <p>Ascendio propels the caster or target upwards through the air.</p>

                <img src="icons/ascendio.png" alt="Ascendio Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Air/Movement</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Ascendio"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "ascendio" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Launches the caster or target upward. Often used to reach elevated areas or escape obstacles.</p>
            `
        },

        ascendre: {
            title: "Ascendre - Rising Spell",
            content: `
                <h2>Overview</h2>
                <p>Ascendre is a levitation charm that raises the target smoothly into the air.</p>

                <img src="icons/ascendre.png" alt="Ascendre Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Levitation</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Ascendre"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "ascendre" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Causes a controlled upward lift of the target, useful for reaching heights safely.</p>
            `
        },

        "avada-kedavra": {
            title: "Avada Kedavra - The Killing Curse",
            content: `
                <h2>Overview</h2>
                <p>Avada Kedavra is a forbidden curse that causes instant death to the target.</p>

                <img src="icons/avada-kedavra.png" alt="Avada Kedavra Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Curse (Forbidden)</p>
                    <p><strong>Element:</strong> Death Magic</p>
                    <p><strong>Price:</strong> 20,000 Galleons</p>
                    <p><strong>Incantation:</strong> "Avada Kedavra"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "avada kedavra" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Causes immediate death to the target. This spell is classified as an Unforgivable Curse and is illegal to use.</p>
            `
        },

        avifors: {
            title: "Avifors - Bird Transformation Spell",
            content: `
                <h2>Overview</h2>
                <p>Avifors is a transfiguration spell that turns small objects into birds.</p>

                <img src="icons/avifors.png" alt="Avifors Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Transfiguration</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Price:</strong> 4,200 Galleons</p>
                    <p><strong>Incantation:</strong> "Avifors"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "avifors" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Transforms the user into a bird.</p>
            `
        },

        bubblify: {
            title: "Bubblify - Bubble Creation Spell",
            content: `
                <h2>Overview</h2>
                <p>Bubblify creates magical bubbles that can be used for protection or decoration.</p>

                <img src="icons/bubblify.png" alt="Bubblify Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Air/Water</p>
                    <p><strong>Price:</strong> 7,500 Galleons</p>
                    <p><strong>Incantation:</strong> "Bubblify"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "bubblify" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Traps the target in a bubble.</p>
            `
        },

        crucio: {
            title: "Crucio - The Cruciatus Curse",
            content: `
                <h2>Overview</h2>
                <p>Crucio is a forbidden curse that inflicts severe pain on the target without causing physical injury.</p>

                <img src="icons/crucio.png" alt="Crucio Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Curse (Forbidden)</p>
                    <p><strong>Element:</strong> Dark Magic</p>
                    <p><strong>Price:</strong> 12,500 Galleons</p>
                    <p><strong>Incantation:</strong> "Crucio"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "crucio" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Causes the victim to experience unbearable pain. </p>
            `
        },

        "eat-slugs": {
            title: "Eat Slugs - Slug-Vomiting Curse",
            content: `
                <h2>Overview</h2>
                <p>Eat Slugs is a curse that is broken.</p>

                <img src="icons/eat-slugs.png" alt="Eat Slugs Curse" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Curse</p>
                    <p><strong>Element:</strong> Hex</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Eat Slugs"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "eat slugs" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Breaks your own wand.</p>
            `
        },

        enlargo: {
            title: "Enlargo - Enlargement Charm",
            content: `
                <h2>Overview</h2>
                <p>Enlargo is a charm that increases the physical size of the target object or creature.</p>

                <img src="icons/enlargo.png" alt="Enlargo Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Price:</strong> 9,000 Galleons</p>
                    <p><strong>Incantation:</strong> "Enlargo"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "enlargo" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Expands the target’s size proportionally. Commonly used to enlarge items or creatures temporarily. Can be reversed with Reducio.</p>
            `
        },

        episkey: {
            title: "Episkey - Minor Healing Spell",
            content: `
                <h2>Overview</h2>
                <p>Episkey is a healing charm used to mend small injuries such as cuts or bruises.</p>

                <img src="icons/episkey.png" alt="Episkey Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Healing Charm</p>
                    <p><strong>Element:</strong> Restoration</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Episkey"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "episkey" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Heals minor wounds and restores small amounts of health. Not effective on dark magic injuries.</p>
            `
        },

        "everte-statum": {
            title: "Everte Statum - Knockback Spell",
            content: `
                <h2>Overview</h2>
                <p>Everte Statum is a charm that propels the target backward with force.</p>

                <img src="icons/everte-statum.png" alt="Everte Statum Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Force</p>
                    <p><strong>Price:</strong> 1,000 Galleons</p>
                    <p><strong>Incantation:</strong> "Everte Statum"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "everte statum" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Pushes the target backward with enough strength to knock them off their feet. Commonly used in dueling.</p>
            `
        },

        "expecto-patronum": {
            title: "Expecto Patronum - Patronus Charm",
            content: `
                <h2>Overview</h2>
                <p>Expecto Patronum conjures a protective Patronus, a magical guardian made of positive energy.</p>

                <img src="icons/expecto-patronum.png" alt="Expecto Patronum Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Light/Spirit</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Expecto Patronum"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "expecto patronum" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Summons a Patronus that repels Dementors and other dark creatures. The form of the Patronus is unique to each caster.</p>
            `
        },

        expelliarmus: {
            title: "Expelliarmus - Disarming Charm",
            content: `
                <h2>Overview</h2>
                <p>Expelliarmus is a charm that disarms the target by forcing them to release whatever they are holding.</p>

                <img src="icons/expelliarmus.png" alt="Expelliarmus Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Force</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Expelliarmus"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "expelliarmus" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Disarms the target by knocking their wand or weapon from their hand. Commonly used in dueling for non-lethal defense.</p>
            `
        },

        expulso: {
            title: "Expulso - Blasting Curse",
            content: `
                <h2>Overview</h2>
                <p>Expulso is a curse that causes an explosion on contact, propelling nearby objects or entities away.</p>

                <img src="icons/expulso.png" alt="Expulso Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Curse</p>
                    <p><strong>Element:</strong> Explosive</p>
                    <p><strong>Price:</strong> 1,000 Galleons</p>
                    <p><strong>Incantation:</strong> "Expulso"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "expulso" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Generates a violent explosion at the point of impact. Useful for stun.</p>
            `
        },

        glacious: {
            title: "Glacious - Freezing Spell",
            content: `
                <h2>Overview</h2>
                <p>Glacious is a charm that freezes targets or creates ice surfaces.</p>

                <img src="icons/glacious.png" alt="Glacious Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Ice</p>
                    <p><strong>Price:</strong> 3,500 Galleons</p>
                    <p><strong>Incantation:</strong> "Glacious"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "glacious" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Freezes people.</p>
            `
        },

        "homenum-revelio": {
            title: "Homenum Revelio - Human Detection Charm",
            content: `
                <h2>Overview</h2>
                <p>Homenum Revelio detects nearby human presence, revealing concealed individuals.</p>

                <img src="icons/homenum-revelio.png" alt="Homenum Revelio Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Detection</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Homenum Revelio"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "homenum revelio" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Broken/Non-Functional</p>
            `
        },

        imperio: {
            title: "Imperio - The Imperius Curse",
            content: `
                <h2>Overview</h2>
                <p>Imperio is a forbidden curse that grants the caster full control over the target's movement.</p>

                <img src="icons/imperio.png" alt="Imperio Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Curse (Forbidden)</p>
                    <p><strong>Element:</strong> Mind Control</p>
                    <p><strong>Price:</strong> 15,000 Galleons</p>
                    <p><strong>Incantation:</strong> "Imperio"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "imperio" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Forces the target to obey the caster's commands.</p>
            `
        },

        incendio: {
            title: "Incendio - Fire-Making Spell",
            content: `
                <h2>Overview</h2>
                <p>Incendio is a charm that conjures fire from the caster's wand.</p>

                <img src="icons/incendio.png" alt="Incendio Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Fire</p>
                    <p><strong>Price:</strong> 500 Galleons</p>
                    <p><strong>Incantation:</strong> "Incendio"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "incendio" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Creates a small fire.</p>
            `
        },

        levicorpus: {
            title: "Levicorpus - Levitation Jinx",
            content: `
                <h2>Overview</h2>
                <p>Levicorpus lifts the target into the air by their ankle, suspending them upside-down.</p>

                <img src="icons/levicorpus.png" alt="Levicorpus Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Jinx</p>
                    <p><strong>Element:</strong> Levitation</p>
                    <p><strong>Price:</strong> 3,500 Galleons</p>
                    <p><strong>Incantation:</strong> "Levicorpus"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "levicorpus" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Hoists the target into the air.</p>
            `
        },

        lumos: {
            title: "Lumos - Wand Lighting Charm",
            content: `
                <h2>Overview</h2>
                <p>Lumos produces light from the tip of the caster’s wand.</p>

                <img src="icons/lumos.png" alt="Lumos Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Light</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Lumos"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "lumos" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Emits a bright light from the wand, illuminating dark areas.</p>
            `
        },

        normalo: {
            title: "Normalo - Restoration Spell",
            content: `
                <h2>Overview</h2>
                <p>Normalo reverses transformations, returning objects or beings to their original state.</p>

                <img src="icons/normalo.png" alt="Normalo Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Counter-Spell</p>
                    <p><strong>Element:</strong> Restoration</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Normalo"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "normalo" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Restores objects or creatures altered by transformation or transfiguration spells.</p>
            `
        },

        nox: {
            title: "Nox - Light-Extinguishing Charm",
            content: `
                <h2>Overview</h2>
                <p>Nox extinguishes the light produced by Lumos or similar spells.</p>

                <img src="icons/nox.png" alt="Nox Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Counter-Charm</p>
                    <p><strong>Element:</strong> Darkness</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Nox"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "nox" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Instantly turns off any light it touches.</p>
            `
        },

        orbis: {
            title: "Orbis - Stun",
            content: `
                <h2>Overview</h2>
                <p>Orbis generates a small stun effect that can trap or disorient targets.</p>

                <img src="icons/orbis.png" alt="Orbis Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Energy</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Orbis"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "orbis" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Creates a spinning force that can immobilize or push targets caught within it.</p>
            `
        },

        orchideous: {
            title: "Orchideous - Flower Conjuring Spell",
            content: `
                <h2>Overview</h2>
                <p>Orchideous conjures a bouquet of flowers from the tip of the wand.</p>

                <img src="icons/orchideous.png" alt="Orchideous Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Conjuration</p>
                    <p><strong>Element:</strong> Nature</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Orchideous"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "orchideous" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Produces a bouquet of flowers. Often used for decoration or gifting purposes.</p>
            `
        },

        periculum: {
            title: "Periculum - Red Spark Signal Spell",
            content: `
                <h2>Overview</h2>
                <p>Periculum emits red sparks that act as a visible distress or signal flare.</p>

                <img src="icons/periculum.png" alt="Periculum Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Light/Signal</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Periculum"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "periculum" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Sends red sparks high into the air for fireworks.</p>
            `
        },

        presentus: {
            title: "Presentus - Gift Wrapping Spell",
            content: `
                <h2>Overview</h2>
                <p>Presentus conjures a present, with 3 possible items.</p>

                <img src="icons/presentus.png" alt="Presentus Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Price:</strong> 3,500 Galleons</p>
                    <p><strong>Incantation:</strong> "Presentus"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "presentus" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Summons a single present.</p>
            `
        },

        reducio: {
            title: "Reducio - Shrinking Charm",
            content: `
                <h2>Overview</h2>
                <p>Reducio is a charm that decreases the size of the target object or creature.</p>

                <img src="icons/reducio.png" alt="Reducio Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Transformation</p>
                    <p><strong>Price:</strong> 2,250 Galleons</p>
                    <p><strong>Incantation:</strong> "Reducio"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "reducio" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Shrinks the targeted object or creature. Often used to reduce the effects of Enlargo.</p>
            `
        },

        rockifors: {
            title: "Rockifors - Stone Transformation Spell",
            content: `
                <h2>Overview</h2>
                <p>Rockifors is a transfiguration spell that transforms objects or creatures into solid stone.</p>

                <img src="icons/rockifors.png" alt="Rockifors Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Transfiguration</p>
                    <p><strong>Element:</strong> Earth</p>
                    <p><strong>Price:</strong> 400 Galleons</p>
                    <p><strong>Incantation:</strong> "Rockifors"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "rockifors" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Turns the user into a rock.</p>
            `
        },

        sectumsempra: {
            title: "Sectumsempra - Slashing Curse",
            content: `
                <h2>Overview</h2>
                <p>Sectumsempra is a dark curse that creates deep slashes or cuts on the target's body.</p>

                <img src="icons/sectumsempra.png" alt="Sectumsempra Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Projectile</p>
                    <p><strong>Element:</strong> Dark Magic</p>
                    <p><strong>Price:</strong> 500 Galleons</p>
                    <p><strong>Incantation:</strong> "Sectumsempra"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "sectumsempra" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Projectiles which cause no damage and cost no energy.</p>
            `
        },

        stupefy: {
            title: "Stupefy - Stunning Spell",
            content: `
                <h2>Overview</h2>
                <p>Stupefy emits a red bolt of light that stuns the target, rendering them unconscious.</p>

                <img src="icons/stupefy.png" alt="Stupefy Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> Charm</p>
                    <p><strong>Element:</strong> Force</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Stupefy"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "stupefy" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>Knocks the target over.</p>
            `
        },

        tarantallegra: {
            title: "Tarantallegra - Unknown",
            content: `
                <h2>Overview</h2>
                <p>Tarantallegra is a broken spell.</p>

                <img src="icons/tarantallegra.png" alt="Tarantallegra Spell" style="width: 100%; max-width: 500px; display: block; margin: 2rem auto; border-radius: 16px;">

                <div class="info-box">
                    <h2>Details</h2>
                    <p><strong>Type:</strong> ?</p>
                    <p><strong>Element:</strong>N/A</p>
                    <p><strong>Price:</strong> Free</p>
                    <p><strong>Incantation:</strong> "Tarantallegra"</p>
                </div>

                <h2>Usage</h2>
                <p>To use this spell, say "tarantallegra" in chat and left-click (if you own this spell).</p>

                <h2>Effect</h2>
                <p>It is a blockable projectile with a purple effect. It does nothing.</p>
            `
        },

        gallery: {
            title: "Image Gallery",
            content: `
                <h2>Wizard Life Visual Assets</h2>
                <p>Browse our collection of official logos, icons, and visual assets for Wizard Life.</p>

                <p> Currently under construction. Check back soon for updates!</p>
            `
        },

        community: {
            title: "Community",
            content: `
                <p> Currently under construction. Check back soon for updates!</p>
            `
        },

        contribute: {
            title: "Contributing to the Wiki",
            content: `
                <h2>Help Us Grow the Wizard Life Wiki</h2>
                <p>This wiki is new. Help us expand! </p>

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

                <p> - Duki // DukiDokii, Main Contributor and Owner of WL Wiki</p>
            `
        }
    }
};
