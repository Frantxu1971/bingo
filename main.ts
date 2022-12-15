/**
 * Crea el cartón 2 y lo lista
 */
/**
 * Crea un número aleatorio y comprueba si no está en la lista, si no está agrega el valor a la lista, y si está se vuelve a llamar
 */
function Crear_numero (list: number[]) {
    caux = randint(1, 99)
    if (list.indexOf(caux) == -1) {
        list.push(caux)
    } else {
        Crear_numero(list)
    }
}
/**
 * Crea el cartón 1 y luego lo lista
 */
input.onButtonPressed(Button.A, function () {
    bola = randint(0, bombo.length - 1)
    basic.showNumber(bombo.length)
    basic.pause(1000)
    basic.showNumber(bombo[bola])
    bombo.removeAt(bola)
})
function lucecitas2 (núm: number) {
    aux2 = núm
    x2 = 3
    y2 = 0
    while (aux2 != 0) {
        led.plot(x2, y2)
        y2 += 1
        aux2 += -1
        if (y2 > 4) {
            x2 += 1
            y2 = 0
        }
    }
}
function lucecitas1 (núm: number) {
    basic.clearScreen()
    aux1 = núm
    x1 = 0
    y1 = 0
    while (aux1 != 0) {
        led.plot(x1, y1)
        y1 += 1
        aux1 += -1
        if (y1 > 4) {
            x1 += 1
            y1 = 0
        }
    }
}
/**
 * Crea el cartón 1 y luego lo lista
 */
let y1 = 0
let x1 = 0
let aux1 = 0
let y2 = 0
let x2 = 0
let aux2 = 0
let bola = 0
let caux = 0
let bombo: number[] = []
let Carton1 = [10]
let Carton2 = [10]
bombo = []
for (let index = 0; index <= 98; index++) {
    bombo.push(index + 1)
}
Carton1.pop()
Carton2.pop()
for (let index = 0; index <= 9; index++) {
    Crear_numero(Carton1)
}
basic.showString("Carton 1")
for (let index = 0; index <= 9; index++) {
    basic.showNumber(Carton1[index])
    basic.pause(1000)
}
for (let index = 0; index <= 9; index++) {
    Crear_numero(Carton2)
}
basic.showString("Carton 2")
for (let index = 0; index <= 9; index++) {
    basic.showNumber(Carton2[index])
    basic.pause(1000)
}
basic.forever(function () {
	
})
