const colorButton = document.getElementById('color-button');

colorButton.addEventListener("click", () => {
    // Generate a random hex color dynamically
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    // Apply directly to the inline style property
    document.body.style.backgroundColor = randomColor;
});
