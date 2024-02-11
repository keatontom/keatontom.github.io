document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = '<h1>Happy Valentines Day Emma <3!</h1>'; // Add more content or redirect
    
});

document.getElementById('noBtn').addEventListener('mouseover', function(e) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    e.target.style.transition = 'all 0.3s ease-in-out'; // This will make the button glide
    e.target.style.transform = `translate(${x}px, ${y}px)`; // This will move the button to the new position
});