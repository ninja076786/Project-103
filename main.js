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
    function modelLoaded(){
        console.log("Model Has Loaded!")
         }
    function analyze_image(){
        img = document.getElementById("captured_img");

        classifier.classify(img, got_result);
    }

    function got_result(error, results){
       if(error){
           console.error(error);
       }else{
       console.log(results);
       document.getElementById(object_name).innerHTML=results[0].label
       document.getElementById(acurracy).innerHTML=results[0].confidence.toFixed(3)
       }
    }
