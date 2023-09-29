from vpython import *
import numpy as np
rOrange=1
rCyan=1
lOrange=6
lCyan=6
cCyan=color.cyan
cOrange=color.orange
myCylOrange=cylinder(radius=rOrange, length=lOrange,color=cOrange)
myCylCyan=cylinder(radius=rCyan, length=lCyan,color=cCyan,pos=vector(0,3,0))
myCylOrangeLength=1
myCylCyanLength=1
myCylOrangeDelta=.1
myCylCyanDelta=.2
while True:
    rate(5)
    myCylOrangeLength=myCylOrangeLength+myCylOrangeDelta
    myCylCyanLength=myCylCyanLength+myCylCyanDelta
    myCylOrange.length=myCylOrangeLength
    myCylCyan.length=myCylCyanLength
    if myCylOrangeLength>=6  or myCylOrangeLength<=0.01:
        (myCylOrangeDelta)=myCylOrangeDelta*(-1)
    if myCylCyanLength>=6  or myCylCyanLength<=0.01:
        (myCylCyanDelta)=myCylCyanDelta*(-1)