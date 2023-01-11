let milivolts = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
input.onButtonPressed(Button.B, function () {
    milivolts = Math.round(pins.analogReadPin(AnalogPin.P0) * 3000 / 1023)
    basic.showNumber(milivolts)
    if (milivolts < 1200) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
basic.forever(function () {
	
})
