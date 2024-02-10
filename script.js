document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = '<h1>Yay! You are my Valentine!</h1><p>Here\'s why you\'re amazing:</p>'; // Add more content or redirect
});

document.getElementById('noBtn').addEventListener('mouseover', function(e) {
    const maxX = window.innerWidth - e.target.offsetWidth;
    const maxY = window.innerHeight - e.target.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    e.target.style.transform = `translate(${newX}px, ${newY}px)`;
});
