input.onButtonPressed(Button.A, function () {
    bola = randint(0, bombo.length - 1)
    basic.showNumber(bombo.length)
    basic.pause(1000)
    basic.showNumber(bombo[bola])
    bombo.removeAt(bola)
})
let bola = 0
let bombo: number[] = []
bombo = []
for (let index = 0; index <= 98; index++) {
    bombo.push(index + 1)
}
basic.forever(function () {
	
})
