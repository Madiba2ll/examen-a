let luminosité = 0
basic.forever(function () {
    luminosité = pins.digitalReadPin(DigitalPin.P0)
    if (luminosité >= 600) {
        servos.P1.setAngle(180)
    } else if (luminosité < 300) {
        servos.P1.setAngle(90)
    } else {
        servos.P1.setAngle(0)
    }
})
