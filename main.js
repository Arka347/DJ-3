song = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
function preload(){
    song = loadSound("harry_potter.mp3");
}
function setup(){
    canvas =  createCanvas(600, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded() {
    console.log('PoseNet is initialised');
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotposes(){
    if(results.length > 0){
      console.log(results);
      leftwristx = results[0].label.pose.leftwrist.x;
      leftwristy = results[0].label.pose.leftwrist.y;
      console.log("leftwristx = " + leftwristx + "leftwristy = " + leftwristy);
      rightwristx = results[0].label.pose.rightwrist.x;
      rightwristx = results[0].label.pose.rightwrist.y;
      console.log("rightwristx = "+ rightwristx +"rightwristy = " + rightwristy);
    }
}
