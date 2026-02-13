function setupAutoFullscreenListeners(firstLoad) {
  let videoPlayer = document.querySelector("ytd-player video");

  // Exit early if element doesn't exist or isn't an html video element
  if (
     ! videoPlayer
     || ! videoPlayer instanceof HTMLVideoElement
  ) { return; }

  // Set hasEventListenersAdded property to false on first load
  if (firstLoad) {
    videoPlayer.hasEventListenersAdded = false;
  }

  // Exit early if already has listeners added
  if (videoPlayer.hasEventListenersAdded) { return; }

  // setup listeners
  videoPlayer.addEventListener("loadstart", (event) => { triggerFullscreen(videoPlayer); });
  videoPlayer.addEventListener("canplay", (event) => { triggerFullscreen(videoPlayer); });
  videoPlayer.addEventListener("play", (event) => { triggerFullscreen(videoPlayer); });
  videoPlayer.addEventListener("keydown", (event) => {
    if(event.key == "/" || event.key == "c") {
      event.stopImmediatePropagation();
    }
  });

  // exit fullscreen when video ends
  videoPlayer.addEventListener("ended", (event) => {
    window.location.assign("https://www.youtube.com");
  });

  // Set hasEventListenersAdded to true to prevent duplicate listeners being added
  videoPlayer.hasEventListenersAdded = true;
}

function triggerFullscreen(videoPlayer) {
  // only trigger fullscreen if not already in fullscreen
  if (document.fullscreenElement) { return; }

  // dispatch keyboard event to press f to go fullscreen
  videoPlayer.dispatchEvent(new KeyboardEvent(
    "keydown", {
      key : "f",
      code : "KeyF",
      keyCode : 70,
      bubbles : true,
      cancelable : true,
      composed : true,
      target : videoPlayer
    }
  ));
}

window.addEventListener("load", (event) => { setupAutoFullscreenListeners(true); });
navigation.addEventListener('navigate', (event) => { setupAutoFullscreenListeners(false); });
// Stop / shortcut key
document.addEventListener("keydown", (event) => {
  if(event.key == "/" || event.key == "c") {
    event.stopImmediatePropagation();
  }
});