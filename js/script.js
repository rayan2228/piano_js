// select the dom elemets
const keysElm = document.querySelectorAll(".keys");
const keysElmArr = Array.from(keysElm);
const volumeMeterElm = document.querySelector(".volumeMeter");
const volumeValueElm = document.querySelector(".volumeValue");

// initial data
let callAudio = (filename = a) => {
  let audio = new Audio(`../tunes/${filename}.wav`);
  audio.volume = volumeMeterElm.value / 100;
  audio.currentTime = 0;
  audio.play();
};

// volume up down function
function volumeUpDown() {
  if (volumeMeterElm.value < 0) {
    volumeMeterElm.value = 0;
  } else if (volumeMeterElm.value > 100) {
    volumeMeterElm.value = 100;
  }
  volumeValueElm.textContent = volumeMeterElm.value;
}

// event handle
volumeMeterElm.addEventListener("change", volumeUpDown);

keysElmArr.map((key) => {
  key.addEventListener("click", function () {
    callAudio(key.dataset.key);
  });
});
