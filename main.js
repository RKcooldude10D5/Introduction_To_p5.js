function preload() {}
    
    function setup() {
        canvas=createCanvas(600, 480);
        canvas.position(110, 250)
        video=createCapture(VIDEO);
        video.hide();
        tint_colour="";
    }
    
    function draw() {
        image(video, 0, 0, 600, 480);
        tint(tint_colour);
    }
    function take_snapshot(){
        save('Seargent_Pepper_s_Lonely_Hearts.png');
    }
    function filter_tint(){
        tint_colour=document.getElementById("input_colour").value;
    }