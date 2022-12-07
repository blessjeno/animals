function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5soundClassifier('https://teachablemachine.withgoogle.com/models/q5VMArKZJ/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    console.log('Got Result');
}