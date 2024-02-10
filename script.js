document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = '<h1>Happy Valentines Day Emma<3!</h1>';
});

document.getElementById('noBtn').addEventListener('click', function(e) {
    const safeMargin = 50; // Margin to keep away from text
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const textHeight = document.querySelector('.valentine-container').offsetHeight;
    
    // Calculate safe areas, excluding an area around the text
    const maxX = viewportWidth - e.target.offsetWidth - safeMargin;
    const maxY = viewportHeight - e.target.offsetHeight - safeMargin - textHeight;
    
    // Ensure button stays in a visible, non-text area
    const newX = Math.random() * maxX;
    const newY = Math.random() * (maxY - textHeight) + textHeight;

    e.target.style.position = 'fixed';
    e.target.style.left = `${newX}px`;
    e.target.style.top = `${newY}px`;
});

document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    // Set an initial position if desired, e.g., bottom right corner
    noBtn.style.left = `${window.innerWidth - noBtn.offsetWidth - 20}px`; // 20px from the right edge
    noBtn.style.top = `${window.innerHeight - noBtn.offsetHeight - 20}px`; // 20px from the bottom edge
});
