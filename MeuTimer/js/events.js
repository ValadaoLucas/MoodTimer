import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonHigher,
  buttonLower,
  buttonForest,
  buttonRain,
  buttonCafeteria,
  buttonFireplace,
  background
} from "./elements.js"

import Sound from "./sounds.js"

const sound = Sound ()

export default function({controls, timer}) {

  buttonForest.addEventListener('click', function () {
    sound.pressForest()
    buttonForest.classList.add('chosenSound')
    buttonCafeteria.classList.remove('chosenSound')
    buttonFireplace.classList.remove('chosenSound')
    buttonRain.classList.remove('chosenSound')
    background.classList.add('backgroundForest')
    background.classList.remove('backgroundRain')
    background.classList.remove('backgroundCafeteria')
    background.classList.remove('backgroundFireplace')

    document.getElementById("timer").style.color = "white"
    document.getElementById("controls").classList.add('chosenControls')


  
  })

buttonRain.addEventListener('click', function () {
  sound.pressRain()
  buttonForest.classList.remove('chosenSound')
  buttonCafeteria.classList.remove('chosenSound')
  buttonFireplace.classList.remove('chosenSound')
  buttonRain.classList.add('chosenSound')
  background.classList.remove('backgroundForest')
  background.classList.add('backgroundRain')
  background.classList.remove('backgroundCafeteria')
  background.classList.remove('backgroundFireplace')

})

buttonCafeteria.addEventListener('click', function () {
  sound.pressCafeteria()
  buttonForest.classList.remove('chosenSound')
  buttonCafeteria.classList.add('chosenSound')
  buttonFireplace.classList.remove('chosenSound')
  buttonRain.classList.remove('chosenSound')
  background.classList.remove('backgroundForest')
  background.classList.remove('backgroundRain')
  background.classList.add('backgroundCafeteria')
  background.classList.remove('backgroundFireplace')


})

buttonFireplace.addEventListener('click', function () {
  sound.pressFireplace()
  buttonForest.classList.remove('chosenSound')
  buttonCafeteria.classList.remove('chosenSound')
  buttonFireplace.classList.add('chosenSound')
  buttonRain.classList.remove('chosenSound')
  background.classList.remove('backgroundForest')
  background.classList.remove('backgroundRain')
  background.classList.remove('backgroundCafeteria')
  background.classList.add('backgroundFireplace')

})


buttonPlay.addEventListener('click', function() {
  timer.countdown()
})

buttonStop.addEventListener('click', function() {
  timer.reset()
})


buttonHigher.addEventListener('click', function() {
  timer.moreMinutes()
})


buttonLower.addEventListener('click', function() {
  timer.lessMinutes()
})
}