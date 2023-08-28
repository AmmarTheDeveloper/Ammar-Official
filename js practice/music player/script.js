
let masterPlay = document.querySelector('.masterplay');
let progressBar = document.querySelector('.progressbar input');
let playIcon = masterPlay.querySelector('i');
let gif = document.getElementById('gif');
let forward = document.querySelector('.forward');
let backward = document.querySelector('.backward');
let songItems = document.querySelectorAll('.music');
let playBtns = document.querySelectorAll('.playbtn');
let audioName = document.querySelector('.song-title span');
let audioIndex = 0;

var audioElement = new Audio();
audioElement.src = 'song/arshad.ogg';
audioElement.id = "audio-" + 0;

let audios = [
    { songName: "arshad hsc imp mcq", filePath: "song/arshad.ogg", coverPath: "images/music-icon.png" },
    { songName: "Naat 1", filePath: "song/naat1.mp3", coverPath: "images/music-icon.png" },
    { songName: "Naat 2", filePath: "song/naat2.mp3", coverPath: "images/music-icon.png" },
    { songName: "Naat 3", filePath: "song/naat3.mp3", coverPath: "images/music-icon.png" },
    { songName: "Naat 4", filePath: "song/naat1.mp3", coverPath: "images/music-icon.png" },
    { songName: "Naat 5", filePath: "song/naat2.mp3", coverPath: "images/music-icon.png" },
    { songName: "Naat 6", filePath: "song/naat3.mp3", coverPath: "images/music-icon.png" },
    { songName: "Naat 7", filePath: "song/naat1.mp3", coverPath: "images/music-icon.png" },
    { songName: "Naat 8 ", filePath: "song/naat2.mp3", coverPath: "images/music-icon.png" }
];

audios.forEach(( audio , i)=>{

    audios[i].duration = (new Audio(audios[i].filePath)).duration ;

})

songItems.forEach((song, i) => {

    song.id = i;
    song.querySelector('img').src = audios[i].coverPath;
    song.querySelector('.title span').innerText = audios[i].songName;
    let path = audios[i].filePath;
    let min = song.querySelector('.min');
    let audio = new Audio(path.toString());
    
    audio.onloadedmetadata = ()=>{
        let audio_dur = ((Math.floor (audio.duration) ) / 60 ).toFixed(2);
        let minute = audio_dur.slice(0 , audio_dur.indexOf('.'));
        let second = audio_dur.slice(audio_dur.indexOf('.') + 1);
        let duration = minute + ":" + second;
        min.innerText = duration;
    }

})


masterPlay.onclick = () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        gif.style.opacity = '1';
        let audioId = audioElement.id;
        
        makeAllplays();

        songItems.forEach(song=>{
            if(song.id == parseInt(audioId.slice(6 , 7))){
                    song.querySelector('i').classList.remove('fa-circle-play');
                    song.querySelector('i').classList.add('fa-circle-pause');
            }
        })

    } else {

        audioElement.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        gif.style.opacity = '0';
        makeAllplays();
    }
}


const makeAllplays = () => {
    playBtns.forEach(element => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

playBtns.forEach((btn, i) => {
    btn.onclick = () => {
        makeAllplays()
        progressBar.value = 0;
        btn.classList.remove('fa-circle-play');
        btn.classList.add('fa-circle-pause');
        audioElement.pause();
        audioElement = new Audio();
        audioElement.src = audios[i].filePath;
        audioElement.id = `audio-${i}`;
        audioIndex = i;
        audioName.innerText = audios[i].songName;
        window.location.assign("#progressbar");
        masterPlay.click();
        audioElement.play();
    }
})


forward.onclick = () => {
    if (audioIndex == audios.length - 1) {
        audioIndex = audios.length - 1;
    } else {
        audioIndex += 1;
    }
    document.getElementById(`${audioIndex}`).querySelector('i').click();


}

backward.onclick = () => {
    if (audioIndex == 0) {
        audioIndex = 0;
    } else {
        audioIndex -= 1;
    }
    document.getElementById(`${audioIndex}`).querySelector('i').click();
}

audioElement.addEventListener('timeupdate' , function update(){
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});


progressBar.oninput = ()=>{
    {
        audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
        audioElement.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }
}

audioElement.addEventListener('ended' , ()=>{

    audioElement.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    gif.style.opacity = '0';
    makeAllplays();

})
