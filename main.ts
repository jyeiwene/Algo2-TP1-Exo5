let posY = 0
let Direction_vertical = 1
for (let posX = 0; posX <= 4; posX++) {
    led.plot(posX, 0)
}
basic.forever(function () {
    posY += Direction_vertical
    basic.pause(250)
    for (let posX = 0; posX <= 4; posX++) {
        led.unplot(posX, posY)
        if (posY == 1) {
            led.plotBrightness(posX, 0, 160)
        } else if (posY == 2) {
            led.plotBrightness(posX, 1, 160)
            led.plotBrightness(posX, 0, 35)
        } else if (posY == 3) {
            led.unplot(posX, 0)
            led.plotBrightness(posX, 2, 160)
            led.plotBrightness(posX, 1, 35)
        } else if (posY == 4) {
            for (let posY = 0; posY <= 1; posY++) {
                led.unplot(posX, posY)
                led.plotBrightness(posX, 3, 160)
                led.plotBrightness(posX, 2, 35)
            }
        } else if (posY == 5) {
            led.unplot(posX, 2)
            led.plotBrightness(posX, 4, 160)
            led.plotBrightness(posX, 3, 35)
        } else if (posY == 6) {
            led.unplot(posX, 3)
            led.plotBrightness(posX, 4, 35)
        } else if (posY == 7) {
            for (let posY = 0; posY <= 5; posY++) {
                led.unplot(posX, 4)
            }
            basic.pause(1000)
            posY = 0
        }
        led.plot(posX, posY)
    }
})
