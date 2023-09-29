from vpython import * # or import python but more tedious 
from time import * # don't need vpython.

ball=sphere()
x=int(input('How Long: '))
for i in range(0,x,1):
    ball.color=color.red
    sleep(0.33)
    ball.color=color.blue
    sleep(0.13)
    ball.color=color.green
    sleep(0.13)
    ball.color=color.yellow
    sleep(0.33)