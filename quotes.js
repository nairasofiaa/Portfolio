// JavaScript-Code (script.js)
document.addEventListener("DOMContentLoaded", function () {
    const quoteContainer = document.getElementById("quote-container");

    // API-Endpoint für zufällige Zitate
    const apiUrl = "https://api.quotable.io/random";

    // Fetch-Anfrage an die API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Daten verarbeiten und Zitat anzeigen
            const quoteText = data.content;
            const quoteAuthor = data.author;

            const quoteMarkup = `<blockquote>${quoteText}</blockquote><p>${quoteAuthor}</p>`;
            quoteContainer.innerHTML = quoteMarkup;
        })
        .catch(error => {
            console.error("Fehler beim Abrufen der Zitate:", error);
            quoteContainer.innerHTML = "Fehler beim Laden der Zitate.";
        });
});

jQuery(document).ready(function($) {
    $('.rating .star').hover(function() {
      $(this).addClass('to_rate');
      $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to_rate');
      $(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no_to_rate');
    }).mouseout(function() {
      $(this).parent().find('.star').removeClass('to_rate');
      $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate');
    }).click(function() {
      $(this).removeClass('to_rate').addClass('rated');
      $(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
      $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');
      /*Save your rate*/
      /*TODO*/
    });
  });
  
  