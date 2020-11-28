// Grab elements from page
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressBarContainer = document.getElementById('progress-bar-container');
const progressBar = document.getElementById('progress-bar');
const songPos = document.getElementById('current-time');
const songLength = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next'); 

// Music
const songs = [
    {
        name: 'demo-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto',
    },
    {
        name: 'demo-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto',
    },
    {
        name: 'demo-3',
        displayName: 'Goodnight Disco Queen',
        artist: 'Jacinto',
    },
    {
        name: 'demo-4',
        displayName: 'Front Row (Remix)',
        artist: 'Metric ft. Jacinto',
    },
]

// what song is currently playing
let songIndex = 0;

// Check if playing
let isPlaying = false;

// Play music
function playSong() {
  // set isPlaying to true
  isPlaying = true;
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
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Update Progress Bar & Time
function updateProgressBar(e) {
  const { duration, currentTime } = e.srcElement;
  // Use currentTime and duration properties to update progressBar
  const showProgress = (part, whole) => {
    // find percentage and pass as string to 'width' css property
    progressPercent = (part / whole) * 100;
    progressBar.style.width = `${progressPercent}%`;
  };
  isPlaying ? showProgress(currentTime, duration) : console.log('no');
  // update time elements
  const durationMinutes = Math.floor(duration / 60);
  let durationSecs = Math.floor(duration % 60);
  if (durationSecs < 10) {
    durationSecs = '0' + durationSecs;
  }
  // show song length in ui
  if (durationSecs) {
    songLength.textContent = `${durationMinutes}:${durationSecs}`;
  }
}

//  'Play / Pause' event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// 'Previous' event listener
prevBtn.addEventListener('click', prevSong);

// 'Next' event listener
nextBtn.addEventListener('click', nextSong);

// Song time event listener
music.addEventListener('timeupdate', updateProgressBar);

// Next Song
function nextSong() {
  /*
        Overflow protection, if on last song
        nextSong will wrap back to first
    */
  songIndex = songIndex == 3 ? 0 : ++songIndex;
  loadSong(songs[songIndex]);
  console.log(`next to ${songIndex}`);
  playSong();
}

// Previous Song
function prevSong() {
  /*
        Overflow protection, if on first song
        nextSong will wrap back to last
    */
  songIndex = songIndex == 0 ? 3 : --songIndex;
  loadSong(songs[songIndex]);
  console.log(`back to ${songIndex}`);
  playSong();
}

// Update DOM on song change
function loadSong(song) {
    title.textContent = song.displayName;
    image.src = `img/${song.name}.jpg`;
    music.src = `music/${song.name}.mp3`;
    artist.textContent = song.artist;
}

// On load - Queue first song
loadSong(songs[0]);