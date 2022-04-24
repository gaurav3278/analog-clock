setInterval(setClock, 1000);
const hourhand = document.querySelector('[data-hour-hand')
const minutehand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand')
function setClock() {
    const date = new Date()
    const secondRatio = date.getSeconds() / 60
    const minuteRatio = (secondRatio + date.getMinutes()) / 60
    const hourRatio = (minuteRatio + date.getHours()) / 12

    setRotation(secondHand, secondRatio)
    setRotation(minutehand, minuteRatio)
    setRotation(hourhand, hourRatio)
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()