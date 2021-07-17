function inst(){
    window.location="instructions.html";
}

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:120
    });

    camera=document.getElementById("camera");

    Webcam.attach("#camera")

    function take_snapshot(){
        Webcam.snap(function(data_url){
    document.getElementById("img_result").innerHTML='<img id="captured_img" src="'+data_url+'">'
        });
    }

    console.log("ml5 version:",ml5.version)
     
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/63kKwjJsT/model.json",modelLoaded)
