console.log("welcome");

let audioElement = new Audio("/2.mp3"); 
let MasterPlay = document.getElementById("MasterPlay");
let Gif= document.getElementById("GIF");


MasterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Gif.style.opacity="1";
    }
    else{
        audioElement.pause();
        Gif.style.opacity="0";
    }
})