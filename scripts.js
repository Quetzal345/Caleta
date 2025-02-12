document.addEventListener("scroll", function () {
    const backgroundSection = document.querySelector(".background-section");
    const backgroundText = document.querySelector(".background-text");
    
    let scrollPosition = window.scrollY;
    let activationPoint = window.innerHeight * 0.6;

    if (scrollPosition > activationPoint) {
        backgroundSection.style.opacity = "1";
        backgroundSection.style.backgroundImage = "url('Caleta7.jpg')";
        backgroundSection.style.backgroundSize = "cover";
        backgroundSection.style.backgroundPosition = "center";
        backgroundText.style.opacity = "1";
        backgroundText.style.transform = "translate(-50%, -50%) scale(1)";
    } else {
        backgroundSection.style.opacity = "0";
        backgroundSection.style.backgroundImage = "none";
        backgroundText.style.opacity = "0";
        backgroundText.style.transform = "translate(-50%, -50%) scale(0.9)";
    }
});

document.getElementById('brand').addEventListener('click', function(e) {
    e.preventDefault();
    createEmojiEffect('🌴');
    createEmojiEffect('🌊');
    createEmojiEffect('☀️');
});

function createEmojiEffect(emoji) {
    const emojiElement = document.createElement('div');
    emojiElement.className = 'emoji-effect';
    emojiElement.textContent = emoji;
    emojiElement.style.left = `${Math.random() * 90 + 5}%`;
    emojiElement.style.top = `${Math.random() * 20 + 10}%`;
    document.body.appendChild(emojiElement);
    
    setTimeout(() => emojiElement.remove(), 3000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});