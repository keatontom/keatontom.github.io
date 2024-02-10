document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = '<h1>Yay! You are my Valentine!</h1><p>Here\'s why you\'re amazing:</p>'; // Add more content or redirect
});

document.getElementById('noBtn').addEventListener('mouseover', function(e) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = e.target.offsetWidth;
    const buttonHeight = e.target.offsetHeight;

    // Calculate max position for the button to ensure it stays visible
    const maxX = viewportWidth - buttonWidth;
    const maxY = viewportHeight - buttonHeight;

    // Generate a random position within the bounds
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Apply the new position
    e.target.style.position = 'fixed'; // Use 'fixed' to position relative to the viewport
    e.target.style.left = `${newX}px`;
    e.target.style.top = `${newY}px`;
});
