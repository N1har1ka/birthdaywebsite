
window.addEventListener("load", function () {
    let audio = document.getElementById("bg-music");
    audio.muted = false; // Unmute after page loads
    audio.play().catch(error => console.log("Autoplay blocked:", error));
});
document.getElementById("play-button").addEventListener("click", function () {
    let audio = document.getElementById("bg-music");
    audio.muted = false;  // Unmute the audio if it was muted before
    audio.play().catch(error => console.log("Autoplay blocked:", error));  // Play the audio when the button is clicked
});
let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");



let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},2500);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)
