// Show Kleenday while October 27 is occurring anywhere (UTC+14 to UTC-12).
// The yellow Kleenday page uses Neru; other pages use Defoko for this link.
(() => {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;

    const isList = nav.tagName === 'UL';
    const item = document.createElement(isList ? 'li' : 'span');
    const link = document.createElement('a');
    link.className = isList ? '' : 'nav-item';
    link.href = '/kleenday';
    const icon = document.createElement('img');
    icon.src = document.body.classList.contains('theme-kleenday')
        ? '/assets/neru.webp'
        : '/assets/defoko.png';
    icon.alt = '';
    icon.width = 30;
    icon.height = 30;
    icon.style.objectFit = 'contain';
    if (isList) icon.style.marginRight = '6px';
    link.append(icon, document.createTextNode('Kleenday'));
    item.append(link);

    function update() {
        const now = new Date();
        const year = now.getUTCFullYear();
        const start = Date.UTC(year, 9, 26, 10);
        const end = Date.UTC(year, 9, 28, 12);
        if (now.getTime() >= start && now.getTime() < end) {
            if (!item.isConnected) nav.append(item);
        } else {
            item.remove();
        }
    }
    update();
    setInterval(update, 1000);
    document.addEventListener('visibilitychange', update);
})();
