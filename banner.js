document.addEventListener('DOMContentLoaded', function() {
    // Funktion, um den Banner anzuzeigen
    function showBanner() {
        document.getElementById('banner').style.display = 'block';
    }

    // Funktion, um zum Portfolio zu navigieren
    function goToPortfolio() {
        window.location.href = '#header'; // Hier den entsprechenden Anker deines Portfolios einfügen
    }

    // Warte, bis die Seite geladen ist, und zeige dann den Banner an
    window.onload = function() {
        showBanner();
    };

    // Hier wird Typed.js initialisiert
    var options = {
        strings: ["Willkommen auf meinem Portfolio."],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        startDelay: 500,
    };
    
    var typed = new Typed('#typed-text', options);
});
