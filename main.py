def on_button_pressed_a():
    basic.show_number(len(bombo))
    basic.pause(1000)
    basic.show_number(bombo[0])
input.on_button_pressed(Button.A, on_button_pressed_a)

bombo: List[number] = []
bombo = []
for index in range(99):
    bombo.append(index)

def on_forever():
    pass
basic.forever(on_forever)
