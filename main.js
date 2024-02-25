//main.js
function myFunction(){
    var name = prompt("Please enter your company's name:");

    if (name !== null && name !== "") {
        document.getElementById("output").innerText = "Hello, " + name + "!";
    } else {
        document.getElementById("output").innerText = "You didn't enter a name.";
    }
}
function enlargeImage() {
    var enlargedImage = document.getElementById("enlarged-image");
    enlargedImage.style.display = "block";
}

function shrinkImage() {
    var enlargedImage = document.getElementById("enlarged-image");
    enlargedImage.style.display = "none";
}