document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "response.html"; // Redirect to response page
});

document.getElementById("noButton").addEventListener("click", function() {
    moveButton();
});

function moveButton() {
    var button = document.getElementById("noButton");
    var container = document.getElementById("container");

    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;

    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

    var maxX = containerWidth - buttonWidth;
    var maxY = containerHeight - buttonHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    button.style.left = newX + "px";
    button.style.top = newY + "px";
}