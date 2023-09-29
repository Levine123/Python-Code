from vpython import * # or import python but more tedious 
from time import * # don't need vpython.
import numpy as np 
myPiston=cylinder(radius=1, length=3, color=color.red, opacity=.25)
while True:
    for i in np.linspace(1,20000,1000):
        rate(100)
        myPiston.length=i
    for i in np.linspace(20000,1,1000):
        rate(100)
        myPiston.length=i