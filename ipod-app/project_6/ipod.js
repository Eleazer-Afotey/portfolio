// Create your global variables below:
var tracklist = [
  "Let's Go Up",
  "Shield",
  "Not Alone",
  "Concrete Evidence",
  "Freedom",
  "Brave",
  "A Root out of Dry Ground",
  "Lawgiver",
  "Disciples",
  "A Tender Plant",
];
var volLevels = [];
const DEFAULT_COLOR = "rgb(95, 147, 154)";

let defaultStart = 0;
let playing = false;

/*
Getting id's for different DOM elements to be manipulated.
*/
var prevBtn = document.getElementById("prev-btn");
var playBtn = document.getElementById("play-btn");
var nextBtn = document.getElementById("next-btn");
var volumeUpBtn = document.getElementById("volume-up");
var volumeDownBtn = document.getElementById("volume-down");
let volBar = document.getElementById("vol-bar");
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");

//global Index.
let index = 0;

/*
Automatically updates the volume of the app to level 3.
*/
function init() {
  for (i = 0; i < 6; i++) {
    {
      volLevels[i] = document.getElementById(`vl${i}`);
    }
    if (i < 3) {
      volLevels[i].style.backgroundColor = DEFAULT_COLOR;
    }
  }
}

/*
Increase the volume when the plus button is clicked.
*/
function volUp() {
  for (i = 0; i < volLevels.length; i++)
    if (volLevels[i].style.backgroundColor !== DEFAULT_COLOR) {
      volLevels[i].style.backgroundColor = DEFAULT_COLOR;
      break;
    }
}

/*
Decrease the volume when the minus button is clicked.
*/
function volDown() {
  for (i = volLevels.length - 1; i > -1; i--) {
    if (volLevels[i].style.backgroundColor === DEFAULT_COLOR) {
      volLevels[i].style.backgroundColor = "#ffffff";
      break;
    }
  }
}

/*
function moves the bar when the number of seconds are passed to it≥
*/
function moveBar(seconds) {
  volBar.value = `${seconds}`;
  volBar.textContent = volBar.value;
}

/*
Updates the music time.
*/
function updateTime() {
  if (playing) {
    ++defaultStart;
    if (defaultStart === 180) {
      nextSong();
      return;
    }
    startTime.textContent = secondsToMs(defaultStart);
    moveBar(defaultStart);
  }
}

/*
changes the button of the pause/play
*/
function changeButton() {
  if (playBtn.textContent === "pause") {
    playBtn.textContent = "play_arrow";
    playing = false;
  } else {
    playBtn.textContent = "pause";
    playing = true;
  }
}

setInterval(updateTime, 1000);

function switchPlay(e) {
  // Your code goes here
  changeButton();
}

/*
Moves to the next song when the next button is clicked
*/
function nextSong(e) {
  startTime.textContent = secondsToMs(0);
  defaultStart = 0;
  volBar.value = "0";

  if (!playing) {
    startTime.textContent = secondsToMs(0);
  }

  if (index >= 5) {
    index = -1;
  }
  currIndex = index + 1;
  current_song = document.getElementById("song-title");
  current_song.textContent = tracklist[currIndex];
  index = currIndex;
}

/*
Moves to the previos song when the previous button is clicked
*/
function prevSong() {
  // Your code goes here
  startTime.textContent = secondsToMs(0);
  volBar.value = "0";
  defaultStart = 0;

  if (!playing) {
    startTime.textContent = secondsToMs(0);
  }

  if (index <= 0) {
    index = tracklist.length;
  }
  currIndex = index - 1;
  current_song = document.getElementById("song-title");
  current_song.textContent = tracklist[currIndex];
  index = currIndex;
}

/*
converts seconds to minutes
*/
function secondsToMs(d) {
  d = Number(d);

  var min = Math.floor(d / 60);
  var sec = Math.floor(d % 60);
  //   console.log(`00${sec}`);

  return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

playBtn.addEventListener("click", switchPlay);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
volumeUpBtn.addEventListener("click", volUp);
volumeDownBtn.addEventListener("click", volDown);

init();
