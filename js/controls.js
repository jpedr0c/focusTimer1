export default function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
}) {
    
    
    function replacePlayOrPause(){
        buttonPlay.classList.toggle("hidden");
        buttonPause.classList.toggle("hidden");
    }

    function reset(){
        buttonPlay.classList.remove("hidden");
        buttonPause.classList.add("hidden");
        buttonStop.classList.add("hidden");
        buttonSet.classList.remove("hidden");
    }
    
    function replaceSound(){
        buttonSoundOn.classList.toggle("hidden");
        buttonSoundOff.classList.toggle("hidden");
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        if (!newMinutes) {
          return false
        }
    
        return newMinutes
      }

    return {
        replaceSound,
        replacePlayOrPause,
        reset,
        getMinutes,
    }
}
