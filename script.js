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

