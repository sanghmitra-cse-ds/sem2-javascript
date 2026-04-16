var originalHeading = "Welcome to JavaScript Lab";
var originalBg = "#ffffff";
var currentFontSize = 26;
var bgColors = ["#ffffff", "#f28b82", "#00c9a7", "#aecbfa", "#fdcfe8"];
var bgIndex = 0;

function changeHeading() {
    var input = document.getElementById("headingInput").value.trim();
    if (input === "") {
        alert("Please enter text in the input field.");
        return;
    }
    document.getElementById("mainHeading").textContent = input;
}

function changeBackground() {
    bgIndex = (bgIndex + 1) % bgColors.length;
    document.getElementById("mainContainer").style.backgroundColor = bgColors[bgIndex];
    document.body.style.backgroundColor = bgColors[bgIndex];
}

function increaseFontSize() {
    currentFontSize += 4;
    document.getElementById("mainHeading").style.fontSize = currentFontSize + "px";
}

function toggleParagraph() {
    var para = document.getElementById("sampleParagraph");
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}

function resetPage() {
    document.getElementById("mainHeading").textContent = originalHeading;
    document.getElementById("mainHeading").style.fontSize = "26px";
    document.getElementById("headingInput").value = "";
    document.getElementById("mainContainer").style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#f0f4f8";
    document.getElementById("sampleParagraph").style.display = "block";
    currentFontSize = 26;
    bgIndex = 0;
}
