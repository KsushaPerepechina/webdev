// Get the container element
let btnContainer = document.getElementById("menu");

// Get all buttons with class="btn" inside the container
let buttons = btnContainer.getElementsByClassName("el");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}