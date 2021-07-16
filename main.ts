input.onButtonPressed(Button.A, function () {
    basic.pause(2000)
    pornit = 1
})
input.onButtonPressed(Button.B, function () {
    pornit = 0
})
let pornit = 0
pornit = 0
basic.showIcon(IconNames.Heart)
OLED.init(128, 64)
basic.forever(function () {
    if (pornit == 1) {
        if (tinkercademy.PIR(DigitalPin.P3)) {
            for (let index = 0; index < 3; index++) {
                music.playTone(262, music.beat(BeatFraction.Whole))
                tinkercademy.LED(DigitalPin.P1, OnOff.On)
                tinkercademy.LED(DigitalPin.P2, OnOff.Off)
                OLED.writeStringNewLine("Alarma!!!")
                basic.pause(200)
                tinkercademy.LED(DigitalPin.P1, OnOff.Off)
                tinkercademy.LED(DigitalPin.P2, OnOff.On)
                OLED.clear()
                basic.pause(200)
            }
        } else {
            tinkercademy.LED(DigitalPin.P2, OnOff.Off)
            tinkercademy.LED(DigitalPin.P1, OnOff.Off)
            OLED.writeStringNewLine("Totul este bine!")
            basic.pause(500)
            OLED.clear()
        }
    }
})
