import Controls from "./controls.js";
import Timer from "./timer.js";
import Sound from "./sound.js";
import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay, } from "./elements.js";

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
});

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
});

const sound = Sound();

buttonPlay.addEventListener('click', function() {
    controls.replacePlayOrPause();
    buttonStop.classList.remove("hidden");
    buttonSet.classList.add("hidden");
    timer.countDown();
    sound.pressButton();
})

buttonPause.addEventListener('click', function() {
    controls.replacePlayOrPause();
    timer.hold();
    sound.pressButton();
});

buttonStop.addEventListener('click', function() {
    controls.reset();
    timer.reset();
    sound.pressButton();
});

buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
})

buttonSoundOn.addEventListener('click', () => {
    controls.replaceSound();
    sound.bgAudio.play();
})

buttonSoundOff.addEventListener('click', () => {
    controls.replaceSound();
    sound.bgAudio.pause();
})