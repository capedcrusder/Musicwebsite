console.log("Welcome to Audia");

//Initialize the Variables
let songIndex = 0;
let audioElement  = new Audio('295.mp3');
let masterPlay = document.getWElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Raatan Lambiyan", filePath:"Songs/Raatan Lambiyan.mp3", coverPath: "Covers/raatan cover.jpg" },
    {songName: "Love Me Like You Do", filePath:"Songs/Love Me Like You Do.mp3", coverPath: "Covers/love me cover.png" },
    {songName: "Agar Tum Sath Ho", filePath:"Songs/Agar tum sath ho.mp3", coverPath: "Covers/agartmsathho.jpg" },
    {songName: "Tu Aake Dekh Le", filePath:"Songs/Tu aake dekh le.mp3", coverPath: "Covers/tu aake cover.jpg" },
    {songName: "Kesariya", filePath:"Songs/Kesariya.mp3", coverPath: "Covers/kesariyacover.jpg" },
    {songName: "295", filePath:"Songs/295.mp3", coverPath: "Covers/295 cover.jpg" },
    {songName: "Alone", filePath:"Songs/Alone.mp3", coverPath: "Covers/alonecover.jpg " },
]

let a   = new Audio('295.mp3');
// audio Element.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
// LISTEN TO EVENTS
audioElement.addEventListener('timeupdate', ()=>{
// Update Seekbar 
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})