const initialVolume = 0.1;
let audio;
let isPlaying = false;

function startPlayback() {
    audio = new Audio('assets/bgm.mp3');
    audio.volume = initialVolume;
    audio.loop = true;
    audio.play();
    isPlaying = true;
    const enterScreen = document.getElementById('enter-screen');
    let opacity = 1;

    const fadeOutInterval = setInterval(() => {
        opacity -= 0.07;
        enterScreen.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeOutInterval);
            enterScreen.style.display = 'none';
            document.getElementById('play-pause-btn').style.display = 'block';
        }
    }, 15);  // How fast it fade's out
}


function togglePlayPause() {
    const playPauseIcon = document.getElementById('play-pause-icon');
    if (!audio) return;
    if (isPlaying) {
        audio.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    } else {
        audio.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
}

function setVolume(value) {
    if (audio) {
        audio.volume = value;
    }
}
