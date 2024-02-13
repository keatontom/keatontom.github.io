document.addEventListener('DOMContentLoaded', (event) => {
    const noBtn = document.getElementById('noBtn');
    noBtn.style.transition = 'all 0.5s'; // Apply transition on page load
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.body.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; height: 100vh; text-align: center; font-family: 'Great Vibes', cursive;">
            <div style="display: flex; flex-direction: column; align-items: center;">
                <img src="/home/keaton/Downloads/IMG_0808.jpeg" alt="Left Image Top" style="width: 100%; max-width: 800px; height: auto;">
                <img src="/home/keaton/Downloads/DSCN1038.jpeg" alt="Left Image Middle" style="width: 100%; max-width: 800px; height: auto;">
                <img src="/home/keaton/Downloads/DSCN1744.jpeg" alt="Left Image Bottom" style="width: 100%; max-width: 800px; height: auto;">
            </div>
            <div style="display: flex; flex-direction: column; align-items: center;">
                <h1>Happy Valentines Day Emma <3!</h1>
                <p>Hi Emma! Happy Valentines Day! I'm so happy that you are my valentine now. I love and miss you
                so much and am so excited that we get to spend time together soon. Our trip is going to be so much fun
                and I am so excited to be able spend my reading week with you.</p>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center;">
                <img src="/home/keaton/Downloads/DSCN1979.jpeg" alt="Right Image Top" style="width: 100%; max-width: 800px; height: auto;">
                <img src="/home/keaton/Downloads/FullSizeRender.jpeg" alt="Right Image Middle" style="width: 100%; max-width: 800px; height: auto;">
                <img src="/home/keaton/Downloads/DSCN2102.jpeg" alt="Right Image Bottom" style="width: 100%; max-width: 800px; height: auto;">
            </div>
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