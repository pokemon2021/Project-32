const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg)
        

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.json()
    // write code slice the datetime
var datetime = responseJSON.datetime
hour = datetime.slice(11,13)


    // add conditions to change the background images from sunrise to sunset

if(hour >= 4 && hour <= 6 ){
    bg = "sunrise1.png"
}
if(hour >= 6 && hour <= 8 ){
    bg = "sunrise2.png"
}
if(hour >= 8 && hour <= 10 ){
    bg = "sunrise3.png"
}
if(hour >= 10 && hour <= 12 ){
    bg = "sunrise4.png"
}
if(hour >= 12 && hour <= 13 ){
    bg = "sunrise5.png"
}
if(hour >= 13 && hour <= 15 ){
    bg = "sunrise6.png"
}
if(hour >= 15 && hour <= 17 ){
    bg = "sunset7.png"
}if(hour >= 17 && hour <= 18 ){
    bg = "sunset8.png"
}
if(hour >= 18 && hour <= 20 ){
    bg = "sunset9.png"
}
if(hour >= 20 && hour <= 23 ){
    bg = "sunset10.png"
}
if(hour >= 23 && hour <= 0 ){
    bg = "sunset11.png"
}
if(hour == 0 && hour <= 3 ){
    bg = "sunset12.png"
}
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)

}
