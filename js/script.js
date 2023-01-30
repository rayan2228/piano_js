// select the dom elements
const keysElm = document.querySelectorAll(".keys");
const keysElmArr = Array.from(keysElm);
const volumeMeterElm = document.querySelector(".volumeMeter");
const volumeValueElm = document.querySelector(".volumeValue");

// initial data
let callAudio = (filename = a) => {
  let audio = new Audio(`./tunes/${filename}.wav`);
  audio.volume = volumeMeterElm.value / 100;
  audio.currentTime = 0;
  audio.play();
};
volumeValueElm.textContent = volumeMeterElm.value;
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

// play the piano
keysElmArr.map((key) => {
  let datasetKeyValue = key.dataset.key.toLowerCase();
  key.addEventListener("click", function (event) {
    if (key.classList.contains("text-white")) {
      key.style.backgroundImage = "linear-gradient(#333, #000)";
      key.style.backgroundImage = "linear-gradient(to bottom, #000, #434343)";
    } else {
      key.style.backgroundImage = "linear-gradient(#fff 96%, #eee 4%)";
      key.style.backgroundImage =
        "linear-gradient(to bottom, #fff 0%, #eee 100%)";
    }
    setTimeout(() => {
      key.removeAttribute("style");
    }, 200);
    callAudio(datasetKeyValue);
  });
  document.addEventListener("keypress", function (event) {
    let keyboardKey = event.key.toLowerCase();
    if (datasetKeyValue === keyboardKey) {
      if (key.classList.contains("text-white")) {
        key.style.backgroundImage = "linear-gradient(#333, #000)";
        key.style.backgroundImage = "linear-gradient(to bottom, #000, #434343)";
      } else {
        key.style.backgroundImage = "linear-gradient(#fff 96%, #eee 4%)";
        key.style.backgroundImage =
          "linear-gradient(to bottom, #fff 0%, #eee 100%)";
      }
      setTimeout(() => {
        key.removeAttribute("style");
      }, 200);
      callAudio(datasetKeyValue);
    }
  });
});
