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
    // console.log("Hello world");
    var firstName = "Dusty";
    var lastName = "Juhl";
    var age = 42;
    var heightInInches = 69;
    var address = "1600 NW Ridge Rd";
    var city = "Ankeny";
    var state = "IA";
    var zipCode = "50023";
    var likesPizza = true;
    // console.log(typeof(likesPizza));
    var hasTattoos = false;
    // console.log(typeof(hasTattoos));
    console.log(age);
    age = age + 1;
    console.log(age);
    age++;
    console.log(age);
    age += 1;
    console.log(age);
    age /= 5;
    console.log(age);
    console.log(firstName + " " + lastName);
    console.log(firstName + " " + lastName + " is " + age + " years old.")
    console.log("Do you like pizza? " + likesPizza);
    var fullName = firstName + " " + lastName;
    console.log(fullName);
    var feet = Math.floor(heightInInches / 12);
    console.log(feet);
    var inches = heightInInches % 12;
    console.log(fullName + " is " + feet + " feet " + inches + " inches tall.");
    print("Hello World");
    var convertedTemp = f2c(212);
    print(convertedTemp);
}

//Call a function
day1AM();

function print(input) {
    console.log(input);
}

//Convert Fahrenheit to Celsius
//Input: temperature in Fahrenheit
function f2c(tempF) {
    return((tempF - 32) * 5 / 9);
}