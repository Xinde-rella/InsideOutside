let messages = []
//-------------------------------------
// SVG interactive poster with p5js
//Make Up Version
// Xinde Ren, 2022

function setup() {
 
  // drawing canvas
  //let cnv = createCanvas(windowWidth/4, windowHeight/4);
  
  // see also https://github.com/processing/p5.js/wiki/Positioning-your-canvas

  // move to sketch-holder element
  //cnv.parent('sketch-holder'); // move drawing canvas into the element we specified

    let sendButton = document.getElementById("sendButton")
    let answerElement = document.getElementById("answerElement")
    let inputText = document.getElementById("inputText")
    
    
    sendButton.onclick = sendButtonClick
        
    function sendButtonClick(){
        let text = inputText.value
        inputText.value = ""
        text = str(text)
        messages.push(text)
        
        let result = ""
        let first = true
        
        for (let word of messages){
            if (first != true) result += " <br>"
            first = false
            result += word
        }
        answerElement.innerHTML = result
    }
  
  window.addEventListener('mousemove', function(eventData){
    this.document.getElementById('mouse-coords').innerHTML = '<p>mouse x, y = ' + eventData.pageX 
      + ', ' + eventData.pageY + '</p>' +
      '<p>mouse x%, y% = ' + nf(eventData.pageX/windowWidth * 100, '',2) 
      + ', ' + nf(eventData.pageY/windowHeight * 100, '', 2) + '</p>';
  });
    
  // the element (group) we drew in our SVG
  // this is the top-most button, and it's invisible (opaque)
  let schoolButton = this.document.getElementById('lefteye2-highlight');
  let noseButton = this.document.getElementById('nose-highlight');
  let earButton = this.document.getElementById('ear-highlight');
  let starButton = this.document.getElementById('star-highlight');
  let righteyeButton = this.document.getElementById('righteye-highlight');
  
  //
  // if school is clicked with mouse, toggle highlight
  //
  schoolButton.addEventListener('click', function(eventData) {

    let schoolHighlight = select('#lefteye2'); // get svg shape below this one to change
    let strawberry = select('#strawberry-hidden')
    let strawberryHeart1 = select('#strawberryheart1')
    let strawberryHeart2 = select('#strawberryheart2')
    // toggle between 0 and 1
    if (schoolHighlight.style('fill-opacity') == '0') {

      schoolHighlight.style('fill-opacity','0.5');
        strawberry.style('visibility','hidden');
        strawberryHeart1.style('visibility','hidden');
        strawberryHeart2.style('visibility','hidden');
    } else{
      schoolHighlight.style('fill-opacity','0');
      strawberry.style('visibility','visible');
      strawberryHeart1.style('visibility','visible');
      strawberryHeart2.style('visibility','visible');
    }
  });
    
  //nose
  noseButton.addEventListener('click', function(eventData) {

    let noseHighlight = select('#nose'); 
    let redSky = select('#redsky');
    
    if (noseHighlight.style('fill-opacity') == '0') {

      noseHighlight.style('fill-opacity','0.5');
      redSky.style('visibility','hidden');
      
    } else{
      noseHighlight.style('fill-opacity','0');
      redSky.style('visibility','visible');
    }
  });
    
  //ear
  earButton.addEventListener('click', function(eventData) {

    let earHighlight = select('#ear'); 
    let bluebody = select('#bluebody');
      
    if (earHighlight.style('fill-opacity') == '0') {

      earHighlight.style('fill-opacity','0.5');
      bluebody.style('visibility','hidden');
      
    } else{
      earHighlight.style('fill-opacity','0');
      bluebody.style('visibility','visible');
    }
  });
    
  //star
  starButton.addEventListener('click', function(eventData) {

    let starHighlight = select('#star'); 
    let rabbit = select('#rabbit');
      
    if (starHighlight.style('fill-opacity') == '0') {

      starHighlight.style('fill-opacity','1');
      rabbit.style('visibility','hidden');
      
    } else{
      starHighlight.style('fill-opacity','0');
      rabbit.style('visibility','visible');
    }
  });
    
 //righteye
  righteyeButton.addEventListener('click', function(eventData) {

    let righteyeHighlight = select('#righteye'); 
    let flower = select('#flower');
    let swim = select('#swim');
    let greendish = select('#greendish');
      
    if (righteyeHighlight.style('fill-opacity') == '0') {

      righteyeHighlight.style('fill-opacity','0.5');
      flower.style('visibility','hidden');
      swim.style('visibility','hidden');
      greendish.style('visibility','hidden');
        
        
    } else{
      righteyeHighlight.style('fill-opacity','0');
      flower.style('visibility','visible');
      swim.style('visibility','visible');
      greendish.style('visibility','visible');
        
    }
  });
    
}

/**
 * 
 */
function draw() {
  //background(10);
//    console.log(hello);
    //fill(255,0,0);
    //ellipse(40, 60, 60, 70);

  // get svg shape below 'button'
  let schoolHighlight = select('#lefteye2-highlight'); 
 
  let dotVertical = 10;
  let dotHeight = 40;

}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


