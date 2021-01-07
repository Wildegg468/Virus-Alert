


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
 
  
  if(keyDown("i"))
  {
   fill("white");
   textSize(40);
   text("Ha! its a prank!",width/2-143,height/2);
   text("-Manthan :)",width/2-143,height/2+50);

  }else{
 fill("red");
 textSize(35);
 text("Google has detected a virus in your device",width/2-350,height/2-250);

  fill("red");
  textSize(50);  
  text("Alert!",width/2+100,height/2);

  fill("red");
  textSize(15);
  text("Please do not close this tab",width/2+100, height/2+25);
  
  fill("white");
  textSize(20);  
  text("There are many types of viruses",width/2-300,height/2-200+30);
  text("The most common ones are:",width/2-300,height/2-175+30)
  text("Spyware,malware,trojen horse,self replicators and worms",width/2-300,height/2-150+30);
  text("The one on your device is likely a self replicator",width/2-300,height/2-125+30);
  text("These types of viruses duplicate themselves",width/2-300,height/2-100+30);
  text("In your device slowing its overall performance",width/2-300,height/2-75+30);
  text("By default these files are hidden so you cant",width/2-300,height/2-50+30);
  text("Directly delete them",width/2-300,height/2-25+30);
  text("The best thing you can do right now",width/2-300,height/2+30);
  text("Is call us Immediately at",width/2-300,height/2+25+30);
  text("91+ 9076130108",width/2-300,height/2+50+30);
  }
}