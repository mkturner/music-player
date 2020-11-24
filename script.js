// Grab elements from page
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Check if playing
let isPlaying = false;

// Play music
function playSong() {
  // set isPlaying to true
  isPLaying = true;
  // Change icon & title to pause
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause music
function pauseSong() {
  // set isPLaying to false
  isPlaying = false;
  // Change icon & title back to play
  // Change icon & title to pause
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

//  Play / Pause event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
