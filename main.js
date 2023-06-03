function preload() {

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(360,240);
    video.hide()
}
function startGame(){
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet Model Is Loaded!');
}
function draw() {
    image(video, 0, 0, 360,240);
	game()
}


