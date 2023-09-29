from vpython import *
import numpy as np
glassBulb=sphere(radius=1.25,color=color.white, opacity=.3) 
glassCyl=cylinder(radius=.65, length=6, color=color.white, opacity=.3)
mercSphere=sphere(radius=1, color=color.red, opacity=1)
mercCyl=cylinder(radius=.45, length=6, color=color.red, opacity=1)
for i in np.linspace(1,6,25):
    box(size=vector(.05,.5,.5), pos=vector(i,0,.5), color=color.white)


while True:
    pass
    for i in np.linspace(0,6,100):
        rate(50)
        mercCyl.length=i
    for i in np.linspace(6,1,100):
        rate(100)
        mercCyl.length=i