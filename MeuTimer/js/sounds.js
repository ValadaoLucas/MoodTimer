export default function () {
  const buttonForest = new Audio("./assets/Forest.wav")
  buttonForest.loop = true
  const buttonRain = new Audio("./assets/Rain.wav")
  buttonRain.loop = true
  const buttonCafeteria = new Audio("./assets/Cafeteria.wav")
  buttonCafeteria.loop = true
  const buttonFireplace = new Audio("./assets/Fireplace.wav")
  buttonFireplace.loop = true

  function pressForest() {
    buttonForest.play()
    buttonRain.pause()
    buttonCafeteria.pause()
    buttonFireplace.pause()
    
  }

  function pressRain() {
    buttonRain.play()
    buttonForest.pause()
    buttonCafeteria.pause()
    buttonFireplace.pause()

  }

  function pressCafeteria() {
    buttonCafeteria.play()
    buttonForest.pause()
    buttonRain.pause()
    buttonFireplace.pause()
  }

  function pressFireplace() {
    buttonFireplace.play()
    buttonCafeteria.pause()
    buttonForest.pause()
    buttonRain.pause()
  }

  return {
    pressForest,
    pressCafeteria,
    pressFireplace,
    pressRain
  }
}
