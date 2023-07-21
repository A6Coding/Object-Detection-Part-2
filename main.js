img = "";
status = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model has Loaded!");
    status = true;
    objectDetector.detect(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill('#000000');
    text("Dog", 38, 75);
    noFill();
    stroke('#000000');
    rect(30, 60, 450, 350);

    fill('#000000');
    text("Cat", 320, 120);
    noFill();
    stroke('#000000');
    rect(300, 90, 270, 320);
}