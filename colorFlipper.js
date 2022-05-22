console.log("test");
let page = document.getElementById("body");
console.log(page);
let colors = ["#00FFFF", "blue", "black", "white", "lightblue", "purple", "orange", "pink", "red"];

function changeBackground() {
    i = Math.floor(Math.random() * 10);
    page.style.background = colors[i];
    console.log(i);
}