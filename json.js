var prediction1 = "";
var prediction2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}


console.log("ml5version",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ozC5IvI4x/model.json',moduelloaded);

function moduelloaded()
{
    console.log("moduelloaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "first prediction is" + prediction1;
    speak_data_2 = "and the second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}