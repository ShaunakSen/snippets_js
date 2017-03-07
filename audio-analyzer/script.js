var analyser, canvas, ctx;

window.onload = function () {

    // Creating the canvas

    canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    setWebAudio()
};


function setWebAudio() {
    var audio = document.createElement('audio');
    audio.src = 'track1.mp3';
    audio.controls = 'true';
    document.body.appendChild(audio);
    audio.style.width = window.innerHeight + 'px';

    var audioContext = new AudioContext();
    analyser = audioContext.createAnalyser();
    var source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    audio.play();

}