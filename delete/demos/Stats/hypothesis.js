//Staticsts Demo for Hypothesis testing
//=======================================
//Author: Nikesh Bajaj (nikkeshbajaj@gmail.com)
//Date: 23/10/2022
//http://nikeshbajaj.in/
//shared on ::
//https://nikeshbajaj.github.io/teaching/demos/Stats/hypothesis
//(c)nikeshbajaj
//License:: Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)


let Mues = []
let Sigmas = []
let Scales = []
let P, S1, S2;

//let P1_MEANS =[];
//let P1_MEANS_loc =[];
let x0, y0, r,alphax, ix;

let Px, S1x,S2x;
let Psampl=false;
let G1sampl=false;
let G2sampl=false;
let jitter=0;
let n=5;
let T=1;
let overlay=300;
let NN=200;
let sd_rang=5;
let p_alpha=0.05;
let palpha_choose;
let ppass=0;
let pfail=0;

function setup() {
  //createCanvas(1024, 800);
  createCanvas(1024+300, 800);
  width=width-overlay;
  //createCanvas(displayWidth, displayHeight);
  stroke(255);
  noLoop();
  //y = height * 0.5;
  for(let i=0;i<3;i++){
    if (i==0){
      SD = createSlider(0.1, 4, 1.1,0.1);
      AM = createSlider(1, 2000,300,30);
    }else{
      SD = createSlider(0.1, 4, 1,0.1);
      AM = createSlider(1, 2000,200,30);
    }
    SD.style('width', '100px');
    if (i>1){
      MEAN = createSlider(-5, 5,-1,0.25);
    }else{
      MEAN = createSlider(-5, 5, i,0.25);}
    MEAN.style('width', '100px');

    AM.style('width', '100px');

    if (i==0){
    SD.position(width/2, 10);
    MEAN.position(width/2,40);
    AM.position(width/2, 70);

  }else if (i==2) {
    SD.position(10, 10);
    MEAN.position(10, 40);
    AM.position(10, 70);
  }else if (i==1) {
    //MEAN.set(-1);
    SD.position(width-100, 10);
    MEAN.position(width-100, 40);
    AM.position(width-100, 70);
  }
  else {
    SD.position(10, 10);
    MEAN.position(10, 40);
    AM.position(10, 70);
  }

    MEAN.input(redraw);
    SD.input(redraw);
    AM.input(redraw);

    Mues.push(MEAN);
    Sigmas.push(SD);
    Scales.push(AM);
  }




  let Bn_x = 30;
   buttonP = createButton('Sample ~ P');
   buttonP.mousePressed(PSampler);
   buttonP.size(150, 40);
   buttonP.position(width+Bn_x, 10);
   buttonP.style("font-family", "Comic Sans MS");
   buttonP.style("font-size", "20px");


   buttonS1 = createButton('Sample ~ G1');
   buttonS1.mousePressed(G1Sampler);
   buttonS1.size(150, 40);
   buttonS1.position(width+Bn_x, 60);
   buttonS1.style("font-family", "Comic Sans MS");
   buttonS1.style("font-size", "20px");


   buttonS2 = createButton('Sample ~ G2');
   buttonS2.mousePressed(G2Sampler);
   buttonS2.size(160, 40);
   buttonS2.position(width+Bn_x, 60*2-10);
   buttonS2.style("font-family", "Comic Sans MS");
   buttonS2.style("font-size", "20px");


   buttonS12 = createButton('Sample ~ (G1,G2)');
   buttonS12.mousePressed(G12Sampler);
   buttonS12.size(180, 40);
   buttonS12.position(width+Bn_x, 60*3-10);
   buttonS12.style("font-family", "Comic Sans MS");
   buttonS12.style("font-size", "20px");

   buttonPS12 = createButton('Sample ~ (P,G1,G2)');
   buttonPS12.mousePressed(PG12Sampler);
   buttonPS12.size(200, 40);
   buttonPS12.position(width+Bn_x, 60*4-20);
   buttonPS12.style("font-family", "Comic Sans MS");
   buttonPS12.style("font-size", "20px");




  Px = new MEANSObj();
  S1x = new MEANSObj();
  S2x = new MEANSObj();
  button1 = createButton('clear');
  button1.mousePressed(clearMeans);
  button1.size(150, 40);
  button1.position(width+Bn_x, 45+60*4);
  button1.style("font-family", "Comic Sans MS");
  button1.style("font-size", "20px");


  checkboxP = createCheckbox(' Population', true);
  checkboxS1 = createCheckbox(' Group 1', true);
  checkboxS2 = createCheckbox(' Group 2', true);
  checkboxHide = createCheckbox('Hide True curve', false);
  checkboxHide.changed(hidetoggle)

  checkboxP.position(width-170, 150);
  checkboxS1.position(width-170, 180);
  checkboxS2.position(width-170, 210);
  checkboxHide.position(width-170, 250);

  checkboxP.style("font-size", "25px");
  checkboxS1.style("font-size", "25px");
  checkboxS2.style("font-size", "25px");
  checkboxHide.style("font-size", "15px");
  //checkboxP.changed(myCheckedEvent);
  const box1 = checkboxP.elt.getElementsByTagName('input')[0];
  box1.style.transform = 'scale(2)';
  const box2 = checkboxS1.elt.getElementsByTagName('input')[0];
  box2.style.transform = 'scale(2)';
  const box3 = checkboxS2.elt.getElementsByTagName('input')[0];
  box3.style.transform = 'scale(2)';

input = createInput('5');
input.position(width+60+Bn_x, 10+60*5.4);
input.size(35, 35);
input.style("font-size", "20px");
//input.value='5';
n = int(input.value());

inputT = createInput('1');
inputT.position(width+200+Bn_x, 10+60*5.4);
inputT.size(35, 35);
inputT.style("font-size", "20px");
T = int(inputT.value());

palpha_choose = createRadio();
palpha_choose.position(2, height-80);
// palpha_choose.style("width", "300px");
palpha_choose.size(60);
palpha_choose.option('0.01');
palpha_choose.option('0.05');
palpha_choose.option('0.001');
palpha_choose.selected('0.05');
// palpha_choose.changed(clear_trials());

}

function draw() {
  background(127);
  dwargrid(50,50);
  textSize(10);
  fill(0);
  stroke(0,0,0,20);
  strokeWeight(1);
  //text('@nikeshbajaj',50,height/2-10)
  text("NikB",width+overlay-50,20)
  strokeWeight(0);
  textAlign(CENTER, CENTER);
  textSize(38);
  //stroke(0,255,0,20);
  fill(0);
  text("V2.1",width+overlay-50,50)
  //fill(0);
  textSize(32);
  stroke(0,0,0,20);
  text('N=',width+60, 60*6)
  n = int(input.value());

  text('T=',width+200, 60*6)
  T = int(inputT.value());

  //text(int(n),width-50, 60*7)
  textSize(25);
  for (let i=0;i<Mues.length;i++){
      if (i==1){
        text('μ', Mues[i].x -20, Mues[i].y+10); //Sigmas
        text('σ', Sigmas[i].x -20, Sigmas[i].y+10);
        text('s', Scales[i].x -20, Scales[i].y+10);
      }else{
        text('μ', Mues[i].x + 20 + Mues[i].width, Mues[i].y+10);
        text('σ', Sigmas[i].x + 20 + Sigmas[i].width, Sigmas[i].y+10);
        text('s', Scales[i].x + 20 + Scales[i].width, Scales[i].y+10);
      }
  }
  


  let v
  if (checkboxP.checked()){
    P = new NormSampler(mu=Mues[0].value(),sigma=Sigmas[0].value(),scaley= Scales[0].value(),
                       N=NN,sd_rang=sd_rang,colorx=[0,0,0]);
    //P.getSamples(n=5);
    if (!checkboxHide.checked()){
    P.plotCurve(height/2)
    }
    //P.plotSamples(Ylevel=height/2)

    if (Psampl){
      P.getSamples(n=n);
      if (!checkboxHide.checked()){
      P.plotSamples(Ylevel=height/2);
      }
      P.plotSamples_X(Ylevel=height/2+40,r=[20,20],alphax=100);
      //P.plotSamples_Y(Ylevel=height/2 + height/4, Xlevel=width+50,r=[10,10],alphax=180)
    }
    if (P.Sx.length>0){
      //v = (5+Px.getLength()/4)
      Px.add(P.mapXtoI(P.sample_mean),random(-jitter, jitter),P.get1ProbOf(P.sample_mean));
    }
  }

  if (checkboxS1.checked()){
    S1 = new NormSampler(mu=Mues[2].value(),sigma=Sigmas[2].value(),scaley= Scales[2].value(),
                       N=NN,sd_rang=sd_rang,colorx=[0,255,0]);
    //S1.getSamples(n=5);
    if (!checkboxHide.checked()){
    S1.plotCurve(height/2);
    }
    //S1.plotSamples(Ylevel=height/2);

    if (G1sampl){
      S1.getSamples(n=n);
      if (!checkboxHide.checked()){
      S1.plotSamples(Ylevel=height/2);
      }
      S1.plotSamples_X(Ylevel=height/2+40,r=[20,20],alphax=100)
    }

    if (S1.Sx.length>0){
      //v = (5+S1x.getLength()/4)
      S1x.add(S1.mapXtoI(S1.sample_mean),random(-jitter, jitter),S1.get1ProbOf(S1.sample_mean));

    }
  }


  if (checkboxS2.checked()){
  S2 = new NormSampler(mu=Mues[1].value(),sigma=Sigmas[1].value(),scaley= Scales[1].value(),
                     N=NN,sd_rang=sd_rang,colorx=[0,0,255]);
  //S2.getSamples(n=5);
  if (!checkboxHide.checked()){
  S2.plotCurve(height/2)
  }
  //S2.plotSamples(Ylevel=height/2)
  if (G2sampl){
    S2.getSamples(n=n);
    if (!checkboxHide.checked()){
    S2.plotSamples(Ylevel=height/2);
    }
    S2.plotSamples_X(Ylevel=height/2+40,r=[20,20],alphax=100)
  }
  if (S2.Sx.length>0){
    v = (5+S2x.getLength()/4)
    S2x.add(S2.mapXtoI(S2.sample_mean),random(-jitter, jitter),S2.get1ProbOf(S2.sample_mean));
    }
  }

  PlotPoints(Px.x,Px.y,x0=0,y0=height/2+150,r=[2,20],colorx=P.color,100,Marker='rect');
  PlotPoints(S1x.x,S1x.y,x0=0,y0=height/2+200,r=[2,20],colorx=S1.color,100,Marker='rect');
  PlotPoints(S2x.x,S2x.y,x0=0,y0=height/2+250,r=[2,20],colorx=S2.color,100,Marker='rect');

  strokeWeight(0);
  stroke(0);
  textAlign(CENTER, CENTER);
  textSize(25);
  let meanplot = false;
  if (Px.x.length>0) {
    fill(P.color[0],P.color[1],P.color[2]);
    //noFill();
    text('P ',50, height/2+150);
    meanplot = true;
  }
  if (S1x.x.length>0){
    fill(S1.color[0],S1.color[1],S1.color[2]);
    text('G1',50, height/2+200);
    meanplot = true;
  }
  if (S2x.x.length>0){
    fill(S2.color[0],S2.color[1],S2.color[2]);
    text('G2',50, height/2+250);
    meanplot = true;
  }



  P.plotSamples_Y(Ylevel=height-100,Xlevel=width+90,r=[20,20],alphax=60)
  S1.plotSamples_Y(Ylevel=height-100,Xlevel=width+140,r=[20,20],alphax=60)
  S2.plotSamples_Y(Ylevel=height-100,Xlevel=width+190,r=[20,20],alphax=60)
  strokeWeight(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  push();
  let angle1 = radians(270);
  //translate(100, 180);
  rotate(angle1);
  // Draw the letter to the screen
  text("values", -(height/2+150), (width+20));
  textSize(25);
  if (meanplot){
  text('means',-(height/2+200), 18);}
  //line(0, 0, 150, 0);
  //line(-(width+200), -height, -width+200,  -height/2);
  textSize(45);
  text("Statistics", -width/5, (width+270));
  textSize(20);
  textStyle(ITALIC);
  text("©nikeshbajaj", -width/2 - 100, (width+280));
  textStyle(NORMAL);
  pop();
  stroke(0,0,0);
  strokeWeight(2);
  setLineDash([5,5])
  line(width+38, height/2, width+38,  height);        //blue sidelines
  line(width-210, height-100, width+220,  height-100);
  setLineDash([1,1])

  textSize(15);
  fill(0);
  stroke(0,0,0);
  strokeWeight(1);
  //text('@nikeshbajaj',50,height/2-10)
  // text('@nikeshbajaj',50,height-90)
  text('alpha',35, height-94); 

  let a = float(palpha_choose.value());
  if (a!=p_alpha){
    console.log('alpha changed');
    console.log(p_alpha);
    clear_trials();
    p_alpha = a;
  }
  let pval_tstat = ttest(S1,S2);

  // text(pval_tstat[0],150,height-50);
  // text(pval_tstat[1],150,height-10);
  


}


function redraw_curves(){
  background(127);
  dwargrid(50,50);
  textSize(10);
  fill(0);
  stroke(0,0,0,20);
  strokeWeight(1);
  //text('@nikeshbajaj',50,height/2-10)
  text("NikB",width+overlay-50,20)
  strokeWeight(0);
  textAlign(CENTER, CENTER);
  textSize(38);
  //stroke(0,255,0,20);
  fill(0);
  text("V2.1",width+overlay-50,50)
  //fill(0);
  textSize(32);
  stroke(0,0,0,20);
  text('N=',width+60, 60*6)
  n = int(input.value());

  text('T=',width+200, 60*6)
  T = int(inputT.value());

  //text(int(n),width-50, 60*7)
  textSize(25);
  for (let i=0;i<Mues.length;i++){
      if (i==1){
        text('μ', Mues[i].x -20, Mues[i].y+10); //Sigmas
        text('σ', Sigmas[i].x -20, Sigmas[i].y+10);
        text('s', Scales[i].x -20, Scales[i].y+10);
      }else{
        text('μ', Mues[i].x + 20 + Mues[i].width, Mues[i].y+10);
        text('σ', Sigmas[i].x + 20 + Sigmas[i].width, Sigmas[i].y+10);
        text('s', Scales[i].x + 20 + Scales[i].width, Scales[i].y+10);
      }
  }
  let v
  if (checkboxP.checked()){
    if (!checkboxHide.checked()){
    P.plotCurve(height/2);
    P.plotSamples(Ylevel=height/2);
    }
    P.plotSamples_X(Ylevel=height/2+40,r=[20,20],alphax=100);
    if (P.Sx.length>0){
      Px.add(P.mapXtoI(P.sample_mean),random(-jitter, jitter),P.get1ProbOf(P.sample_mean));
    }
  }

  if (checkboxS1.checked()){
    if (!checkboxHide.checked()){
    S1.plotCurve(height/2);
    S1.plotSamples(Ylevel=height/2);
    }
    S1.plotSamples_X(Ylevel=height/2+40,r=[20,20],alphax=100);
    if (S1.Sx.length>0){
      S1x.add(S1.mapXtoI(S1.sample_mean),random(-jitter, jitter),S1.get1ProbOf(S1.sample_mean));

    }
  }

  if (checkboxS2.checked()){
    if (!checkboxHide.checked()){
      S2.plotCurve(height/2);
      S2.plotSamples(Ylevel=height/2);
      }
    S2.plotSamples_X(Ylevel=height/2+40,r=[20,20],alphax=100);
    if (S2.Sx.length>0){
      v = (5+S2x.getLength()/4)
      S2x.add(S2.mapXtoI(S2.sample_mean),random(-jitter, jitter),S2.get1ProbOf(S2.sample_mean));
      }
  }



  PlotPoints(Px.x,Px.y,x0=0,y0=height/2+150,r=[2,20],colorx=P.color,100,Marker='rect');
  PlotPoints(S1x.x,S1x.y,x0=0,y0=height/2+200,r=[2,20],colorx=S1.color,100,Marker='rect');
  PlotPoints(S2x.x,S2x.y,x0=0,y0=height/2+250,r=[2,20],colorx=S2.color,100,Marker='rect');

  strokeWeight(0);
  stroke(0);
  textAlign(CENTER, CENTER);
  textSize(25);
  let meanplot = false;
  if (Px.x.length>0) {
    fill(P.color[0],P.color[1],P.color[2]);
    //noFill();
    text('P ',50, height/2+150);
    meanplot = true;
  }
  if (S1x.x.length>0){
    fill(S1.color[0],S1.color[1],S1.color[2]);
    text('G1',50, height/2+200);
    meanplot = true;
  }
  if (S2x.x.length>0){
    fill(S2.color[0],S2.color[1],S2.color[2]);
    text('G2',50, height/2+250);
    meanplot = true;
  }



  P.plotSamples_Y(Ylevel=height-100,Xlevel=width+90,r=[20,20],alphax=60)
  S1.plotSamples_Y(Ylevel=height-100,Xlevel=width+140,r=[20,20],alphax=60)
  S2.plotSamples_Y(Ylevel=height-100,Xlevel=width+190,r=[20,20],alphax=60)

  strokeWeight(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  push();
  let angle1 = radians(270);
  //translate(100, 180);
  rotate(angle1);
  // Draw the letter to the screen
  text("values", -(height/2+150), (width+20));
  textSize(25);
  if (meanplot){
  text('means',-(height/2+200), 18);}
  //line(0, 0, 150, 0);
  //line(-(width+200), -height, -width+200,  -height/2);
  textSize(45);
  text("Statistics", -width/5, (width+270));
  pop();
  stroke(0,0,0);
  strokeWeight(2);
  setLineDash([5,5])
  line(width+38, height/2, width+38,  height);        //blue sidelines
  line(width-210, height-100, width+220,  height-100);
  setLineDash([1,1])

  textSize(15);
  fill(0);
  stroke(0,0,0);
  strokeWeight(1);
  //text('@nikeshbajaj',50,height/2-10)
  // text('@nikeshbajaj',50,height-90)
  text('alpha',35, height-94); 

  let a = float(palpha_choose.value());
  if (a!=p_alpha){
    console.log('alpha changed');
    console.log(p_alpha);
    clear_trials();
    p_alpha = a;
  }
  // let = pval_tstat = ttest(S1,S2)
}




function hidetoggle(){
  redraw_curves();

  // if (checkboxP.checked()){
  //   if (!checkboxHide.checked()){
  //     P.plotCurve(height/2)
  //     }
  //   }

  // if (checkboxS1.checked()){
  //   if (!checkboxHide.checked()){
  //     S1.plotCurve(height/2)
  //     }
  //   }

  
  
  // if (checkboxS2.checked()){
  // if (!checkboxHide.checked()){
  //   S2.plotCurve(height/2)
  //   }
  // }



}

function ttest(S1,S2){
  let pvalue = -1;
  let tstats = -1;

  console.log('G1')
  // for (let x in S1.Sx) {
  //   console.log(x);
  // }
  for (let i = 0; i < S1.Sx.length; i++) {
    console.log(S1.Sx[i]);
  }


  console.log('G2')
  // for (let x in S2.Sx) {
  //   console.log(x);
  // }

  for (let i = 0; i < S2.Sx.length; i++) {
    console.log(S2.Sx[i]);
  }

  if (S1.Sx.length>0){
    if (S2.Sx.length>0){
      var s1s2_samples = []
      // console.log('G1_G2');
      for (let i = 0; i < S1.Sx.length; i++){
        s1s2_samples.push({G1x:S1.Sx[i],G2x:S2.Sx[i]})
        console.log({G1x:S1.Sx[i],G2x:S2.Sx[i]});
      }

      var testVars = { G1x: 'metric', G2x: 'metric'};
      var stats = new Statistics(s1s2_samples, testVars);
      var results = stats.studentsTTestTwoSamples('G1x', 'G2x', { dependent: false });
      pvalue = Math.round((results['pTwoSided'] + Number.EPSILON) * 10000) / 10000;
      tstats = Math.round((results['tStatistic'] + Number.EPSILON) * 10000) / 10000;
      if (pvalue<p_alpha){
        ppass +=1;
      }else{
        pfail+=1
      }
      console.log('pvalue');
      console.log(pvalue,tstats);  
      

      //line(width+38, height/2, width+38,  height);        //blue sidelines
      //line(width+20, height-100, width+220,  height-100);
      strokeWeight(0);
      textAlign(LEFT);
      text('Between G1 and G2',width+70,height-85);
      textSize(20);
      text('p-value = ',width+60,height-60);
      text('t-stats   = ',width+60,height-30);
      textAlign(RIGHT);
      text(pvalue,width+220,height-60);
      text(tstats,width+220,height-30);
      textSize(15);


    }
    
    let totaltests = ppass+pfail
    let ppass_per = Math.round((float(ppass/totaltests)) * 1000) / 1000;
    let fpass_per = Math.round((float(pfail/totaltests)) * 1000) / 1000;


    let w = 275
    stroke(100,5,5);
    strokeWeight(2);
    // setLineDash([5,5])
    line(w-113, height-100, w-113,  height-1);
    line(w-163, height-100, w-163,  height-1);
    line(w-210, height-50, w-60,  height-50);
    line(w-210, height-100, w-60,  height-100);
    // line(width-200, height-30, width-30,  height-30);
    setLineDash([1,1])
    
    strokeWeight(0);
    textAlign(RIGHT,CENTER);
    textSize(18);
    

    text('Pass',w-168,height-120);
    text('Fail',w-125,height-120);
    text('Total',w-70,height-120);

    // text('Pass',110,height-120);
    // text('Fail',110+(168-125),height-120);
    // text('Total',110+(168-70),height-120);

    textAlign(CENTER,CENTER);
    textSize(16);
    text(ppass_per,w-185,height-65);
    text(fpass_per,w-135,height-65);
    text(ppass,w-185,height-25);
    text(pfail,w-135,height-25);
    text(totaltests,w-90,height-25);
    textSize(15);
    
  }

  return [pvalue,tstats]

}

function PSampler(){
  //P.getSamples(n=5);
  //P.plotSamples(Ylevel=height/2)
  Psampl=true;
  if (T>0){
    for (let i = 0; i < T; i++) {
    redraw();
    }
  }
  Psampl=false;
}

function G1Sampler(){
  //S1.getSamples(n=5);
  //S1.plotSamples(Ylevel=height/2)
  G1sampl=true;
  if (T>0){
    for (let i = 0; i < T; i++) {
    redraw();
    }
  }
  // redraw();
  G1sampl=false;
}

function G2Sampler(){
  //S2.getSamples(n=5);
  //S2.plotSamples(Ylevel=height/2)
  G2sampl=true;
  if (T>0){
    for (let i = 0; i < T; i++) {
    redraw();
    }
  }
  // redraw();
  G2sampl=false;
}

function G12Sampler(){
  G1sampl=true;
  G2sampl=true;
  if (T>0){
    for (let i = 0; i < T; i++) {
    redraw();
    }
  }
  // redraw();
  G1sampl=false;
  G2sampl=false;
}

function PG12Sampler(){
  Psampl=true;
  G1sampl=true;
  G2sampl=true;
  if (T>0){
    for (let i = 0; i < T; i++) {
    redraw();
    }
  }
  // redraw();
  G1sampl=false;
  G2sampl=false;
  Psampl=false;
}


function clear_trials(){
  ppass=0;
  pfail=0;
}

function clearMeans(){
  Px.clear();
  S1x.clear();
  S2x.clear();
  clear_trials()
  redraw();
}


class MEANSObj{
  constructor(){
  this.x =[];
  this.y =[];
  this.px =[];
}
  add(x,y,px){
    this.x.push(x);
    this.y.push(y);
    this.px.push(px);

  }
  getLength(){
    return this.x.length;
  }
  clear(){
    this.x =[];
    this.y =[];
    this.px =[];
  }

}

function getConstArray(L,val){
  let x = [];
  for (let i=0; i<L;i++){
    x.push(val);
  }
  return x;
}

class NormSampler{
  constructor(mu,sigma,scaley=1,N=100,sd_rang=5,colorx=[0,0,0]){
    this.mu = mu;
    this.sigma = sigma;
    this.scaley = scaley;
    this.sd_rang = sd_rang;
    this.N = N;
    this.Y = [];
    this.X = [];
    this.IX = [];
    this.genCurve();
    this.n=5;
    this.Sx = [];
    this.Sy = [];
    this.Six = [];
    this.color = colorx;
    this.sample_means;
    this.sample_sd;
  }
  get1ProbOf(x){
    //let XY =[];
    let px = exp(-0.5*pow(float(x-this.mu)/float(this.sigma),2));
    px *= 1/(this.sigma*sqrt(2*PI));
    //let ix = map(x, 0, this.N, 10, width-10);
    return px
  }
  mapXtoI(x){
    ix = map(x, -this.sd_rang, this.sd_rang, 10, width-10);
    return ix
  }
  genCurve(){
  for (let i = 0; i < this.N; i++) {
    let x = map(i, 0, this.N, -this.sd_rang, this.sd_rang);
    let ix = map(i, 0, this.N, 10, width-10);
    let yx = exp(-0.5*pow(float(x-this.mu)/float(this.sigma),2));
    yx *= 1/(this.sigma*sqrt(2*PI));
    this.Y.push(yx*this.scaley);
    this.X.push(x);
    this.IX.push(ix);
  }
  }
  clip_value(x){
    if (x<-this.sd_rang){
      x = -this.sd_rang;
    }else{ if(x>this.sd_rang){x = this.sd_rang;}
    }
    return x
  }
  getSamples(n=5){
    this.Sx = [];
    this.Sy = [];
    this.Six = [];
    this.sample_mean = 0;
    for (let i = 0; i < n; i++) {
       let xi = randomGaussian(this.mu,this.sigma);
       //console.log(xi)
       xi = this.clip_value(xi);

       this.sample_mean +=xi;
       //console.log(xi)
       let px = this.get1ProbOf(xi);
       let ix = map(xi, -this.sd_rang, this.sd_rang, 10, width-10);
       this.Sx.push(xi);
       this.Sy.push(px*this.scaley);
       this.Six.push(ix);
       //console.log(' ')
     }

    this.sample_mean = this.sample_mean/n;

    this.sample_sd = 0;
    for (let i = 0; i < n; i++) {
      this.sample_sd += pow(this.sample_mean-this.Sx[i],2)
    }

    // for (let x in this.Sx) { this.sample_sd += pow(this.sample_mean-x,2)}

    this.sample_sd = sqrt(this.sample_sd/(n-1));

    this.sample_se = this.sample_sd/(sqrt(n));

    // console.log('MEAN');
    // console.log(this.sample_mean);
    // console.log('SD');
    // console.log(this.sample_sd);
    // console.log('SE');
    // console.log(this.sample_se);
  }
  plotCurve(Ylevel){
    //PlotXY(x,y,x0=0,y0=height/2,yx=1,color=(0,0,0))
    //PlotXY(this.IX,this.Y,0,Ylevel,Amp,colorx=this.color);
    //PlotXY(x,y,x0=0,y0=height/2,yx=1,colorx=[0,250,0])
    stroke(this.color[0],this.color[1],this.color[2]);
    strokeWeight(2);
    //setLineDash([5, 5]);
    line(this.mapXtoI(this.mu), 0,this.mapXtoI(this.mu), height);
    //setLineDash([1, 1]);
    PlotLine(this.IX,this.Y, x0=0, y0=Ylevel,colorx=this.color);
  }

  plotSamples(Ylevel=height/2,r=[10,10],alphax=180){
    PlotPoints(this.Six,this.Sy,x0=0,y0=Ylevel,r=r,colorx=this.color,alphax=alphax);

  }

  plotSamples_X(Ylevel=height/2,r=[10,10],alphax=180){
    let sy = getConstArray(this.Sy.length,0)
    let syi = getConstArray(this.Sy.length,0)
    //PlotPoints(this.Six,sy,x0=0,y0=Ylevel,r=r,colorx=this.color,alphax=alphax);
    PlotPointsV2(this.Six,syi,x0=0,y0=Ylevel,r=r,colorx=this.color,alphax=alphax);
  }
  plotSamples_Y(Ylevel=height/2 + height/4,Xlevel=width+50,r=[10,10],alphax=180){
    let w = Xlevel;
    let sy = getConstArray(this.Sy.length,w)
    let sx = [];
    for (let i=0;i<this.Sx.length;i++){
      //sx = map(x,P.r)
      let ix = map(this.Sx[i], -this.sd_rang, this.sd_rang, 0, 300);
      sx.push(ix);
    }
    PlotPoints(sy,sx,x0=0,y0=Ylevel,r=r,colorx=this.color,alphax=alphax);
    let sx_m = map(this.sample_mean, -this.sd_rang, this.sd_rang, 0, 300);
    PlotPoints([sy[0]],[sx_m],x0=0,y0=Ylevel,r=[r[0]*2,1],colorx=this.color,alphax=250,Marker='rect');


  }
}

function PlotXY(x,y,x0=0,y0=height/2,yx=1,colorx=[0,250,0]){
  stroke(colorx[0],colorx[1],colorx[2]);
  //console.log(colorx);
  //stroke(0,255,0);
  strokeWeight(5);
 // draw lines
  let px = x[0]-x0;
  let py = y[0]*yx-y0;
  for(let i=1; i < y.length; i++){
    let xi = x[i]-x0
    let yi = y[i]*yx-y0
    line(px, -py, xi, -yi);
  	//store the last position
    px = xi;
    py = yi;
  }
}


function PlotLine(x,y,x0=0,y0=height/2,colorx=[0,250,0]){
  stroke(colorx[0],colorx[1],colorx[2]);
  //console.log(colorx);
  //stroke(0,255,0);
  strokeWeight(5);
 // draw lines
  let px = x[0]-x0;
  let py = y[0]-y0;
  for(let i=1; i < y.length; i++){
    let xi = x[i]-x0
    let yi = y[i]-y0
    line(px, -py, xi, -yi);
  	//store the last position
    px = xi;
    py = yi;
  }
}


function PlotPoints(x,y,x0=0,y0=height/2,r=[10,10],colorx=[0,250,0],alphax=180,Marker='ellp'){
  stroke(colorx[0],colorx[1],colorx[2],alphax);
  fill(colorx[0],colorx[1],colorx[2],alphax);
  strokeWeight(5);
  for(let i=0; i < y.length; i++){
    let xi = x[i]-x0
    let yi = y[i]-y0
    if (Marker=='rect'){
    rectMode(CENTER)
    rect(xi,-yi,r[0],r[1]);
  }else{
    ellipse(xi,-yi,r[0],r[1]);
  }

  }
}

function PlotPointsV2(x,y,x0=0,y0=height/2,r=[10,10],colorx=[0,250,0],alphax=180,Marker='ellp'){
  stroke(colorx[0],colorx[1],colorx[2],alphax);
  fill(colorx[0],colorx[1],colorx[2],alphax);
  strokeWeight(5);
  for(let i=0; i < y.length; i++){
    let xi = x[i]-x0
    let yi = y[i]-y0
    if (Marker=='rect'){
    rectMode(CENTER)
    rect(xi,-yi,r[0],r[1]);
  }else{
    strokeWeight(5);
    ellipse(xi,-yi,r[0],r[1]);
    noFill();
    strokeWeight(4);
    ellipse(xi,-yi+20,r[0]/1.1,r[1]*1.3);
    fill(colorx[0],colorx[1],colorx[2],alphax);
    //strokeWeight(5);
    //ellipse(xi,-yi+20,r[0]/1.1,r[1]*1.5);
    let hand = 20
    line(xi, -yi+10, xi+hand, -yi+20-hand)
    line(xi, -yi+10, xi-hand, -yi+20-hand)
    line(xi, -yi+30, xi+hand, -yi+20+hand)
    line(xi, -yi+30, xi-hand, -yi+20+hand)
  }

  }
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}
function dwargrid(xd,yd){
  stroke(255);
  strokeWeight(0.5);
  let x1 = 0; x2= width +overlay;
  let y1 = 0; y2= height;
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
  let xi = width/2; yi = height/2;
  while (yi < height) {line(x1, yi, x2, yi); yi = yi + yd;}
  while (xi < width+overlay) {line(xi, y1, xi, y2);  xi = xi+xd;}
  xi = width/2; yi = height/2;
  while (yi>0) {line(x1, yi, x2, yi); yi = yi - yd;}
  while (xi>0) {line(xi, y1, xi, y2); xi = xi - xd;}
  stroke(50,0,50);
  strokeWeight(5);
  setLineDash([10,10])
  line(width+10, 0, width+10, height/2);
  line(width+10, height/2, width+overlay, height/2);
  setLineDash([1,1])
}

// function mousePressed() {
//   redraw();
// }
