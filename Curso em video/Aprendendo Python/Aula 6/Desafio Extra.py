n1 = int(input('Digite o Primeiro número: '))
n2 = int(input('Digite o Segundo número: '))
s = n1 + n2
print('A soma entre', n1, 'e', n2, 'vale', s)

# ou da pra fazer assim:

print('A soma entre {} e {} vale {}'.format(n1, n2, s))

#ou

print(f'A soma entre {n1} e {n2} vale {s}')