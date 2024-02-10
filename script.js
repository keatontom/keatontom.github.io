document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = '<h1>Yay! You are my Valentine!</h1><p>Here\'s why you\'re amazing:</p>'; // Add more content or redirect
});

document.getElementById('noBtn').addEventListener('mouseover', function(e) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    e.target.style.position = 'absolute';
    e.target.style.left = x + 'px';
    e.target.style.top = y + 'px';
});
