document.addEventListener('DOMContentLoaded', (event) => {
    const noBtn = document.getElementById('noBtn');
    noBtn.style.position = 'absolute';
    noBtn.style.transition = 'all 0.5s'; // Apply transition on page load
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = '<h1>Happy Valentines Day Emma <3!</h1>'; // Add more content or redirect
    
});

document.getElementById('noBtn').addEventListener('mouseover', function(e) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    e.target.style.left = x + 'px';
    e.target.style.top = y + 'px';
});