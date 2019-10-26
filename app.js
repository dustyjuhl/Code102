function setup() {
    createCanvas(640, 480);
}

function draw() {
    noStroke();
    fill(0,255,0);
    rect(320,240,20,20);

    fill(255,0,0);
    circle(500,100,20);

    stroke(0,0,0);
    strokeWeight(2);
    line(0,40,640,40);
}

//Declare a function
function day1AM() {
    console.log("Hello world");
    var firstName = "Dusty";
    var lastName = "Juhl";
    var age = 42;
    var address = "1600 NW Ridge Rd";
    var city = "Ankeny";
    var state = "IA";
    var zipCode = "50023";
    console.log (typeof(hasTattoos));
    var likesPizza = true;
    var hasTattoos = false;
}

//Call a function
day1AM();