// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0;
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const pacArray = [
  ['./PacManimages/PacMan1.png', './PacManimages/PacMan2.png'],
  ['./PacManimages/PacMan3.png', './PacManimages/PacMan4.png'],
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0;

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  pageWidth = window.innerWidth;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, null);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
// TODO: Add a Javascript setInterval() method that will call the Run() function above every 200 milliseconds. Note: in the video, Dr. Williams uses the setTimeout() method, but here we are going to use a slightly different
 setInterval(Run, 200)
// method called setInterval(), so that you can have practice using this method.
// Inside of the Run() function you will also have to add an extra argument "pageWidth", which is declared on line 4 when you call the checkPageBounds() function below. 

// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  pageWidth = window.innerWidth;
  if(direction===0 && pos + imgWidth >pageWidth){direction = 1};
  if(direction===1 && pos < 0){direction = 0};
  // TODO: Complete this to reverse direction upon hitting screen edge
  //
  return direction;
}

var timer = window.setInterval(moveGhost, 600);
      
        function moveGhost(){
            let img = document.getElementById('ghost');
            let imgWidth = img.width;
            pageWidth = window.innerWidth;
            focus = (focus + 1) % 2;
            direction = checkPageBounds(direction, imgWidth, pos, null);
             if (direction) {
              pos -= 20;
              img.style.left = pos - 220 + 'px';
            } else {
              pos += 20;
              img.style.left = pos + 220 + 'px';
            }
            
          }        
//Please do not change
module.exports = checkPageBounds;
