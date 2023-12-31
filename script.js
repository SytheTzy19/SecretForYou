// This is the script.js file

// Get the music element by its id
var music = document.getElementById("music");

// Add an event listener to play a sound when the music starts
music.addEventListener("play", function() {
 // Create a new audio object
 var sound = new Audio();
 
 // Set the source to a sound effect URL
 sound.src = "https://www.bing.com/sound.mp3";
 
 // Play the sound
 sound.play();
});

// Get all the images by their class name
var images = document.getElementsByClassName("image");

// Loop through each image
for (var i = 0; i < images.length; i++) {
 // Add an event listener to each image
 images[i].addEventListener("click", function() {
   // Get the message from the next sibling element, which is the <p> tag
   var message = this.nextElementSibling.textContent;

   // Get the modal element by its id
   var modal = document.getElementById("modal");

   // Get the modal content element by its class name
   var modalContent = document.getElementsByClassName("modal-content")[0];

   // Get the close button element by its id
   var close = document.getElementById("close");

   // Get the message element by its id
   var messageElement = document.getElementById("message");

   // Set the message element's text to the message
   messageElement.textContent = message;

   // Display the modal element
   modal.style.display = "block";

   // Add an event listener to the close button
   close.addEventListener("click", function() {
     // Hide the modal element
     modal.style.display = "none";
   });

   // Add an event listener to the window
   window.addEventListener("click", function(event) {
     // If the user clicks outside the modal content, hide the modal element
     if (event.target == modal) {
       modal.style.display = "none";
     }
   });
 });
}
function createBalloon() {
    var balloon = document.createElement('div');
    balloon.className = 'balloon';
    
    var rope = document.createElement('div');
    rope.className = 'rope';
    
    balloon.appendChild(rope); // Add the rope to the balloon
    
    // Randomly generate the size and color of the balloon
    var size = Math.random() * 60;
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Randomly generate the starting position of the balloon
    balloon.style.bottom = '0px';
    balloon.style.left = Math.random() * window.innerWidth + 'px';
    
    document.body.appendChild(balloon);
    
    // Remove the balloon after 4 seconds
    setTimeout(function() {
        document.body.removeChild(balloon);
    }, 4000);
}

// Create a new balloon every 300 milliseconds
setInterval(createBalloon, 300);
