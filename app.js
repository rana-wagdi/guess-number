
button=document.getElementsByTagName('button')

button.addEventListener('click', play);

function play() {
    var audio = document.getElementById('audio');
    audio.play();
}