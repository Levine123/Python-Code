from vpython import * # or import python but more tedious 
from time import * # don't need vpython.
wallThickness=.1
roomDepth=10
roomWidth=5
roomHeight=10
# class box, cylinder, sphere
florida=box(pos=vector(0,-roomHeight/2,0),size=vector(roomWidth,wallThickness,roomDepth), color=color.white)  
ceiling=box(pos=vector(0,roomHeight/2,0),size=vector(roomWidth,wallThickness,roomDepth), color=color.white) 
ceiling2=box(pos=vector(roomWidth/2,0,0),size=vector(wallThickness,roomHeight,roomDepth), color=color.white) 
ceiling3=box(pos=vector(-roomWidth/2,0,0),size=vector(wallThickness,roomHeight,roomDepth), color=color.white) 
ce1iling3=box(pos=vector(0,0,-roomDepth/2),size=vector(roomWidth,roomHeight,wallThickness), color=color.white) 
marble=sphere(pos=vector(0,-4.25,0), color=color.red, radius=.75)  
deltaX=.1
xPos=0
while True:
    rate(10)
    xPos=xPos+deltaX
    if (xPos>roomWidth/2.352941 or xPos<-roomWidth/2.352941):
        deltaX=deltaX*(-1)
    marble.pos=vector(xPos,0,0)