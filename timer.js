// Setează data finală (ora exactă până la care va fi numărat)
const countdownDate = new Date().setHours(new Date().getHours() + 1, 0, 0, 0); // Ora curentă + 1 oră

// Updatează timerul la fiecare secundă
const x = setInterval(function() {

    // Obține data și timpul curent
    const now = new Date().getTime();
    
    // Calculează diferența de timp
    const distance = countdownDate - now;
    
    // Calculează zile, ore, minute și secunde
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Afișează timpul rămas în elementul timer
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;

    // Dacă timerul expiră, ascunde timerul și afișează site-ul
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("siteContent").style.display = "block";
    }

}, 1000);
