largura = float(input('Largura da parede em metros: '))
altura = float(input('Altura da parede em metros: '))
area = largura * altura
tinta = area / 2 
print(f'Sua parede tem dimensão de {largura}x{altura} e sua área é de {area}m^2')
print(f'Para pintar essa parede, você precisará de {tinta}L de tinta')