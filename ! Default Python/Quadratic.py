print("This is Liam's Quadratic Solver 2000!")
print('It finds the roots of quadratic equations such as: 2x^2+6x+15')
print('For More information please visit: https://www.mathsisfun.com/algebra/quadratic-equation.html')
print('')

a=float(input('What is your a value: '))
b=float(input('What is your b value: '))
c=float(input('What is your c value: '))

x1=(-b+(((b*b)-(4*a*c))**0.5))/(2*a)
x2=(-b-(((b*b)-(4*a*c))**0.5))/(2*a)
print('x1=', x1)
print('x2=', x2)
print('Also note that the j is equal to an i')