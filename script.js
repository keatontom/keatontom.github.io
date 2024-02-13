document.addEventListener('DOMContentLoaded', (event) => {
    const noBtn = document.getElementById('noBtn');
    noBtn.style.transition = 'all 0.5s'; // Apply transition on page load
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start; height: 100vh; text-align: center;">
            <h1>Happy Valentines Day Emma <3!</h1>
            <p>Your special message goes here.</p>
        </div>
    `;
});

document.getElementById('noBtn').addEventListener('mouseover', function(e) {
    e.target.style.position = 'absolute'; // Apply absolute positioning on hover
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    e.target.style.left = x + 'px';
    e.target.style.top = y + 'px';
});