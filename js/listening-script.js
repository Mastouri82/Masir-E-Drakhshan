"use strict";

// Create elements
let booksInfo = {};

async function loadJSON() {
  try {
    const response = await fetch("js/books-data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    booksInfo = await response.json(); // مقداردهی bookData
    console.log("✅ داده‌های JSON دریافت شد:", booksInfo);

    processData();
  } catch (error) {
    console.error("❌ خطا در لود JSON:", error);
  }
}

function processData() {
  for (const book in booksInfo) {
    booksWrp.insertAdjacentHTML(
      "beforeend",
      `<div class="books mb-3 d-flex rounded-3 shadow-whene-hover">
       <img class="book-img rounded-3" src="${booksInfo[book].imgBookUrl}" alt="book image" />
       <div class="ps-2">
         <h3 class="my-2">${booksInfo[book].bookName}</h3>
         <p class="my-2">Teacher: ${booksInfo[book].teacher}</p>
       </div>
     </div>`
    );
  }
  const books = document.querySelectorAll(".books");
  Object.keys(booksInfo).forEach((book, index) => {
    books[index].addEventListener("click", () => {
      openSeasonWrp();
      createSeasonsItem(book);
    });
  });
}

// صدا زدن تابع
loadJSON();

// Assign wrappers
const booksWrp = document.querySelector(".books-wrp");
const seasonWrpContent = document.querySelector(".season-wrp-content");
const audioWrpContent = document.querySelector(".audio-wrp-content");

// Create items for books wrapper

// Add event listeners to books

// Open season wrapper
const seasonWrp = document.querySelector(".season-wrp");
function openSeasonWrp() {
  seasonWrp.style.visibility = "visible";
  seasonWrp.style.transform = "translateX(0)";
}

// Go back to books
function goBackToBooks() {
  seasonWrp.style.transform = "translateX(102%)";
  setTimeout(() => {
    seasonWrpContent.innerHTML = "";
    seasonWrp.style.visibility = "hidden";
  }, 1000);
}

// Create items for season wrapper
async function createSeasonsItem(bookName) {
  const seasonsLoc = booksInfo[bookName].seasonsBook;
  const seasonTracks = [];
  let delay = 0;
  let promises = Object.keys(seasonsLoc).map((season) => {
    const acSeason = seasonsLoc[season];
    seasonTracks.push(acSeason.tracks);
    return new Promise((resolve) => {
      setTimeout(() => {
        seasonWrpContent.insertAdjacentHTML(
          "beforeend",
          ` <div class="seasons mb-3 d-flex rounded-3 bg-danger" >
               <img
                 class="book-img rounded-3"
                 src="./assets/Simple-Present-Tens-img.png"
                 alt="book image"/>
               <div class="ps-2">
                 <h3 class="my-2">${acSeason.seasonName}</h3>
                 <p class="my-2">Number of tracks: ${acSeason.numberOfTracks}</p>
               </div>
             </div>`
        );
        resolve();
      }, delay);
      delay += 200;
    });
  });
  await Promise.all(promises);
  const eachSeason = document.querySelectorAll(".seasons");
  eachSeason.forEach((season, index) => {
    season.addEventListener("click", function () {
      createAudioItem(seasonTracks[index]);
    });
  });
}

// Create items for audio wrapper
let urlTracks = [];
const loadingCon = document.querySelector(".container-loading");
const playBtns = document.querySelector(".play-and-pause-btn");
// waveframe
let wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#4a4a4a",
  progressColor: "#ff8800",
  cursorColor: "#ff8800",
  height: 58,
  autoCenter: true,
  responsive: true,
  barWidth: 5,
  barGap: 2,
  normalize: true,
});
//creat audio item
async function createAudioItem(seasonTracks) {
  openAudioWrp();
  let delay = 0;
  let promises2 = Object.keys(seasonTracks).map((track) => {
    let acTrack = seasonTracks[track];
    urlTracks.push(acTrack.trackUrl);
    return new Promise((resolve) => {
      setTimeout(() => {
        audioWrpContent.insertAdjacentHTML(
          "beforeend",
          `<div class="audios mb-3 d-flex rounded-3 bg-danger">
           <img class="book-img rounded-3" src="${acTrack.trackImg}" alt="book image" />
           <div class="ps-2">
             <h3 class="my-2">${acTrack.trackName}</h3>
             <p class="my-2">Page: ${acTrack.page}</p>
           </div>
         </div>`
        );
        resolve();
      }, delay);
      delay += 200;
    });
  });
  await Promise.all(promises2);
  const eachAudio = document.querySelectorAll(".audios");
  eachAudio.forEach((audio, index) => {
    audio.addEventListener("click", function (e) {
      playBtns.addEventListener("pointerdown", () => {
        e.preventDefault();
        e.stopPropagation();
        playAndPauseAudio();
      });
      loading();
      playAudio(urlTracks, index);
      showTrackInfo(e);
    });
  });
}
// Loading
const progressContainer = document.querySelector(".progress-container");
const wrpCoverLisening = document.querySelector(".wrp-cover-lisening");
function loading() {
  trackName.classList.add("loading-effect");
  pageOfTrack.classList.add("loading-effect");
  wrpCoverLisening.children[0].style.display = "none";
  wrpCoverLisening.classList.add("loading-effect");

  loadingCon.style.display = "flex";
  waveform.style.display = "none";
}
function endLoading() {
  trackName.classList.remove("loading-effect");
  pageOfTrack.classList.remove("loading-effect");
  wrpCoverLisening.classList.remove("loading-effect");
  wrpCoverLisening.children[0].style.display = "block";
  mediaCtrl.style.backgroundImage = `url(${coverLisening.src})`;
  trackName.style.backgroundColor = "transparent";
  pageOfTrack.style.backgroundColor = "transparent";
  trackName.children[0].style.display = "block";
  pageOfTrack.children[0].style.display = "block";
  trackName.style.display = "block";
  pageOfTrack.style.display = "block";
  loadingCon.style.display = "none";
  waveform.style.display = "block";
}
// music control
let sounds = document.querySelector(".sounds");
const proxyUrl = "https://api.codetabs.com/v1/proxy?quest=";
let trackName = document.querySelector(".track-name");
let pageOfTrack = document.querySelector(".page-of-track");
function showTrackInfo(e) {
  trackName.insertAdjacentHTML(
    "beforeend",
    `
    <p>
      <i class="fa-solid fa-compact-disc fs-5 mb-2 me-1"></i> ${e.target.children[1].children[0].textContent}
    </P>
    
   `
  );
  pageOfTrack.insertAdjacentHTML(
    "beforeend",
    `
    <p>
     <i class="fa-solid fa-file me-1"></i> ${e.target.children[1].children[1].textContent}
    </p>
   `
  );
  coverLisening.src = `${e.target.children[0].src}`;
}

function playAudio(trackUrl, index) {
  changeTracks(trackUrl, index);
  wavesurfer.load(proxyUrl + trackUrl[index]);
  playAndPauseAudio();
}
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");
function changeTracks(trackUrl, index) {
  forwardBtn.addEventListener("click", () => {
    loading();
    index++;
    index > trackUrl.length - 1
      ? playAudio(urlTracks, 0)
      : playAudio(urlTracks, index);
  });
  backwardBtn.addEventListener("click", () => {
    loading();
    index--;
    index < 0
      ? playAudio(urlTracks, urlTracks.length - 1)
      : playAudio(urlTracks, index);
  });
}
const back5 = document.querySelector(".back-5");
back5.addEventListener("touchend", () => {
  let time = wavesurfer.getCurrentTime() - 5;
  wavesurfer.setTime(time);
  console.log(sounds.currentTime);
});

const forward5 = document.querySelector(".forward-5");
forward5.addEventListener("touchend", () => {
  let time = wavesurfer.getCurrentTime() + 5;
  wavesurfer.setTime(time);
  console.log(sounds.currentTime);
});

// Open audio wrapper
const audioWrp = document.querySelector(".audio-wrp");
function openAudioWrp() {
  audioWrp.style.visibility = "visible";
  audioWrp.style.transform = "translateX(0)";
}

// Go back to seasons
function goBackToSeasons() {
  document.querySelector(".audio-wrp").style.transform = "translateX(102%)";
  setTimeout(() => {
    audioWrpContent.innerHTML = "";
  }, 1000);
}

// Play audio

const waveform = document.querySelector("#waveform");
const crLoading = document.querySelectorAll(".cr-loading");
let loadingDelay = 0;
crLoading.forEach((circle) => {
  circle.style.animationDelay = `${loadingDelay}s`;
  loadingDelay += 0.1;
});

wavesurfer.on("timeupdate", () => {
  updateProgressBar();
});

wavesurfer.on("loading", () => {
  wavesurfer.pause();
});
wavesurfer.on("ready", () => {
  endLoading();
  wavesurfer.play();
});
// Play and pause audio
function playAndPauseAudio() {
  // wavesurfer.playPause();

  if (wavesurfer.isPlaying()) {
    wavesurfer.pause();
    playBtns.classList.add("fa-play");
    playBtns.classList.remove("fa-pause");
  } else {
    wavesurfer.play();
    playBtns.classList.add("fa-pause");
    playBtns.classList.remove("fa-play");
  }
}

// Update progress bar

const currentTime = document.querySelector(".progress-container span");

// Update progress bar function
function updateProgressBar() {
  const minutes = Math.floor(wavesurfer.getCurrentTime() / 60);
  const seconds = Math.floor(wavesurfer.getCurrentTime() % 60)
    .toString()
    .padStart(2, "0");
  const totalMinutes = Math.floor(wavesurfer.getDuration() / 60);
  const totalSeconds = Math.floor(wavesurfer.getDuration() % 60)
    .toString()
    .padStart(2, "0");
  currentTime.textContent = `${minutes}:${seconds} / ${totalMinutes}:${totalSeconds}`;
}

// open media control in mobile
const mediaCtrl = document.querySelector(".media-ctrl");
const wrpBtns = document.querySelector(".wrp-btns");
const closeMediaCtrl = document.querySelector(".close-media-ctrl");
const coverLisening = document.querySelector(".cover-lisening");

document.querySelector(".track-info").addEventListener("pointerdown", (e) => {
  mediaCtrl.style.height = "24%";
  mediaCtrl.style.transform = "translateY(-60%)";
  mediaCtrl.classList.add("flex-column");
  wrpBtns.classList.add("mt-auto", "mx-auto");
  wrpBtns.children[1].removeAttribute("hidden");
  wrpBtns.children[3].removeAttribute("hidden");
  wrpCoverLisening.style.display = "none";
  closeMediaCtrl.removeAttribute("hidden");

  mediaCtrl.style.backgroundColor = "rgba(0,0,0,0.65)";
  waveform.parentElement.style.display = "block";
});

closeMediaCtrl.addEventListener("touchend", () => {
  requestAnimationFrame(() => {
    mediaCtrl.style.height = "9%";
    mediaCtrl.style.transform = "";
    mediaCtrl.classList.remove("flex-column");
    wrpBtns.classList.remove("mt-auto", "mx-auto");
    wrpBtns.children[1].setAttribute("hidden", null);
    wrpBtns.children[3].setAttribute("hidden", null);
    mediaCtrl.children[2].children[0].children[0].style.display = "";
    closeMediaCtrl.setAttribute("hidden", null);
    waveform.parentElement.style.display = "none";
    wrpCoverLisening.style.display = "block";
  });
});
// افزودن قابلیت سوایپ برای موبایل
let touchStartX = 0;
let touchEndX = 0;
document.querySelector(".list-wrp").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.querySelector(".list-wrp").addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX - touchStartX > 50) {
    audioWrp.style.transform === "translateX(0px)"
      ? goBackToSeasons()
      : seasonWrp.style.transform === "translateX(0px)"
      ? goBackToBooks()
      : null;
  }
});
// const forward5= document.querySelector(".forward-5");
document.body.style.height = window.innerHeight + "px";
