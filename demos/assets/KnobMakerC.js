// Basic Knob function is used from Miles DeCoster - codeforartists.com
// Edidted accroding to need
//--------------------------
// MakeKnobC function to create rotating knobs which return different number ranges
// The C version does not use external graphics.
// The knobs are drawn with p5js and you can set a color value for the knob and the text
// The knob colors can be individually programmed to very according to any parameters you want,
// - for instance you could adjust the color brightness of a knob based on its setting

// These are the 11 parameters that need to be passed to the MakeKnob function:

// knobColor - use a word in quotes "red" or rgb value in brackets [255,0,0] or rgba [0,255,255,100]
// diameter - Set knob size in pixels. Integer
// locx, locy - Set the location on the canvas horizontal and vertical pixel coordinates.
// lowNum, hiNum - Set the range of values returned. Floating point numbers are ok.
// defaultNum - Sets the default value of the knob. DO NOT set a frequency knob to 0. Amplitude can be 0.
// numPlaces - Refers to the displayed value below the knob. Sets the number of decimal places to display.
//  - Does not affect the actual value returned which is a float.
// labelText - the text to display below the knob. example: "Frequency"
// textColor - sets the color of the label and display value text;
//  - use a color word in quotes "cyan" or rgb or rgba value in brackets [255,0,0] [200,150,100,150]
// textPt - enter a number (ie. 18) for the size of the type - sets return value and label text size

// NOTES:
// To retrieve the current value use instanceName.knobValue. This is how you access the returned value
// and use it to actually do something.
// Example: myfreq = freqKnob.knobValue; osc.freq(myfreq);
// Each instance of a knob also needs to be attached to mouse actions with the active and inactive methods:
// example:
// function mousePressed() {
//    instancename.active();
// }
// function mouseReleased() {
//    instancename.inactive();
// }

function MakeKnobC(knobColor, diameter, locx, locy, lowNum, hiNum, defaultNum, numPlaces, labelText, textColor, textPt) {
  this.pos = createVector(0,0);
  this.pos.x = locx;
  this.pos.y = locy;
  this.lowNum = lowNum;
  this.hiNum = hiNum;
  this.rotateMe = map(defaultNum, lowNum, hiNum, 0, -280);
  this.currentRot = map(defaultNum, lowNum, hiNum, 0, -280);
  this.radius = diameter;
  this.knobValue = defaultNum;
  this.displayValue=0;
  this.isClickedOn = false;
  this.mouseOver = false;
  this.myY=mouseY;
  this.label=labelText;
  this.numPlaces = numPlaces;
  this.knobColor = knobColor;
  this.knobColor_active = knobColor;
  this.textColor = textColor;
  this.textPt = textPt;
  this.D=300;

  // the update function will be called in the main program draw function
  this.update = function() {

    push(); // store the coordinate matrix ------------------------------------
    fill(255);
    // move the origin to the pivot point
    translate(this.pos.x, this.pos.y);

    // rotate the grid around the pivot point by a
    // number of degrees based on drag on button


    if (dist(this.pos.x, this.pos.y, mouseX, mouseY) < this.radius/2) {
      this.mouseOver = true;
    } else {
      this.mouseOver = false;
    }
    if (mouseIsPressed && this.isClickedOn) {
      this.rotateMe=this.currentRot+map(mouseY, this.myY, this.D, 0, this.D);
      this.rotateMe=int(this.rotateMe);
      if (this.rotateMe <  -this.D) { this.rotateMe = -this.D; }
      if (this.rotateMe > 0) { this.rotateMe = 0; }
      rotate(radians(-this.rotateMe));   // change degrees to radians
    } else {
      rotate(radians(-this.rotateMe));
    }

    if (!mouseIsPressed ) {
      this.currentRot=this.rotateMe;
      this.isClickedOn = false;
    }

    // stroke(0);
    // fill(200);
    // strokeWeight(50);
    // line(0,0,-21,this.radius/2-38);
    strokeWeight(1)

    // now we actually draw the knob to the screen ----------------------------
    fill(200);
    ellipse(0, 0, this.radius, this.radius);
    fill(this.knobColor);
    ellipse(0, 0, this.radius-5, this.radius-5);
    fill(100);
    ellipse(0,0,this.radius/2,this.radius/2);


    fill(180);
    ellipse(0,0,(this.radius/2)-5,(this.radius/2)-5);
    fill(255);
    ellipse(-26, this.radius* 0.3, this.radius/10,this.radius/10);
    // fill(0);
    // stroke(0);
    // strokeWeight(3);
    // line(0,0,-21,this.radius/2-38);
    strokeWeight(1);
    // fill(0,0,0,100);
    // arc(0,0,140,140,radians(this.rotateMe+40),radians(this.rotateMe+40+80));

    pop(); // restore coordinate matrix

    rotate(0);
    fill(255);
   // add the display value and label
    textAlign(CENTER);
    this.knobValue=map(this.rotateMe, -this.D, 0, hiNum, lowNum);
    //textSize(this.textPt);
    //fill(this.textColor);
    //text(""+ nfc(this.knobValue, numPlaces), this.pos.x, this.pos.y+this.radius/2+this.textPt*1.5);
    //text(this.label, this.pos.x, this.pos.y+this.radius/2+this.textPt*2.8);
    // text(""+ nfc(this.knobValue, numPlaces), this.pos.x, this.pos.y);

    if (this.mouseOver || this.isClickedOn) { pointerCursor = true; }
    // fill(0,0,0,100);
    // fill(0,0,0,100);
    // ellipse(this.pos.x, this.pos.y,100,10);
    // arc(this.pos.x, this.pos.y,150,150,radians(40),radians(120));
    fill(50,50,50,200);
    arc(this.pos.x, this.pos.y,this.radius,this.radius,radians(60),radians(120),PIE);
    fill(180);
    ellipse(this.pos.x, this.pos.y,(this.radius/2)-5,(this.radius/2)-5);

    textSize(this.textPt);
    fill(this.textColor);
    text(""+ nfc(this.knobValue, numPlaces), this.pos.x, this.pos.y+this.textPt*0.5);
  }; // end update


    // the update function will be called in the main program draw function
    this.updateValue = function(val) {
      this.active();
      this.knobColor = this.knobColor_active;
      push(); // store the coordinate matrix ------------------------------------
      fill(255);
      // move the origin to the pivot point
      translate(this.pos.x, this.pos.y);

      // rotate the grid around the pivot point by a
      // number of degrees based on drag on button
      // map(val, 0, 1, 0, 280);

      // if (mouseIsPressed && this.isClickedOn) {
      //   this.rotateMe=this.currentRot+map(mouseY, this.myY, 280, 0, 280);
      //   this.rotateMe=int(this.rotateMe);
      //   if (this.rotateMe <  -280) { this.rotateMe = -280; }
      //   if (this.rotateMe > 0) { this.rotateMe = 0; }
      //   rotate(radians(-this.rotateMe));   // change degrees to radians
      // } else {
      //   rotate(radians(-this.rotateMe));
      // }

      this.rotateMe=int(map(val, 1, 0, -this.D,0));
      //if (this.rotateMe <  -280) { this.rotateMe = -280; }
      //if (this.rotateMe > 0) { this.rotateMe = 0; }
      rotate(radians(this.rotateMe));
      this.currentRot=this.rotateMe;

      // if (!mouseIsPressed ) {
      //   this.currentRot=this.rotateMe;
      //   this.isClickedOn = false;
      // }
      // now we actually draw the knob to the screen ----------------------------
      fill(200);
      ellipse(0, 0, this.radius, this.radius);
      fill(this.knobColor);
      //fill('red');
      ellipse(0, 0, this.radius-5, this.radius-5);
      fill(100);
      ellipse(0,0,this.radius/2,this.radius/2);
      fill(180);
      ellipse(0,0,(this.radius/2)-5,(this.radius/2)-5);
      fill(255);
      ellipse(-26, this.radius* 0.3, this.radius/10,this.radius/10);
      // fill(0);
      // stroke(0);
      // strokeWeight(5);
      // line(0,0,0,this.radius/2);
      pop(); // restore coordinate matrix


      rotate(0);
      // fill(255);
     // add the display value and label
      // textAlign(CENTER);
      //this.knobValue=map(this.rotateMe, -280, 0, hiNum, lowNum);
      this.knobValue=val;
      // textSize(this.textPt);
      // fill(this.textColor);
      // text(""+ nfc(this.knobValue, numPlaces), this.pos.x, this.pos.y+this.radius/2+this.textPt*1.5);
      // text(this.label, this.pos.x, this.pos.y+this.radius/2+this.textPt*2.8);
      // if (this.mouseOver || this.isClickedOn) { pointerCursor = true; }
    }; // end update

  this.active = function() {

    if (this.mouseOver){
      this.isClickedOn = true;
      this.myY=mouseY;
      cursor('pointer');
      this.knobColor = this.knobColor_active;
    } else {
      this.isClickedOn = false;
    }
  }

  this.inactive = function() {
    this.currentRot=this.rotateMe;
    this.isClickedOn = false;
    cursor('default');
    this.knobColor='gray';
  }

} // end KnobMakerC
