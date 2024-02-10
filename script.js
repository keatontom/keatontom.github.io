document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = '<h1>Yay! You are my Valentine!</h1><p>Here\'s why you\'re amazing:</p>'; // Add more content or redirect
});

document.getElementById('noBtn').addEventListener('mouseover', function(e) {
    const button = e.target;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});
