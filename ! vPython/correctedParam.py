from vpython import * # or import python but more tedious 
from time import * # don't need vpython.
wallThickness=.1
roomDepth=6.5
roomWidth=7.5
roomHeight=30
mRadius=1
# class box, cylinder, sphere
florida=box(pos=vector(0,-roomHeight/2,0),size=vector(roomWidth,wallThickness,roomDepth), color=color.white)  
ceiling=box(pos=vector(0,roomHeight/2,0),size=vector(roomWidth,wallThickness,roomDepth), color=color.white) 
ceiling2=box(pos=vector(roomWidth/2,0,0),size=vector(wallThickness,roomHeight,roomDepth), color=color.white) 
ceiling3=box(pos=vector(-roomWidth/2,0,0),size=vector(wallThickness,roomHeight,roomDepth), color=color.white) 
ce1iling3=box(pos=vector(0,0,-roomDepth/2),size=vector(roomWidth,roomHeight,wallThickness), color=color.white) 
marble=sphere(color=color.red, radius=mRadius)  
deltaX=.1
deltaY=.1
deltaZ=.1
xPos=0
yPos=1
zPos=-1
while True:
    rate(1)
    xPos=xPos+deltaX
    yPos=yPos+deltaY
    zPos=zPos+deltaZ

    Xrme=xPos+mRadius
    Xlme=xPos-mRadius
    Ytme=yPos+mRadius
    Ybme=yPos-mRadius
    Zfme=zPos+mRadius
    Zbme=zPos-mRadius

    Rwe=roomWidth/2-wallThickness/2
    Lwe=-roomWidth/2+wallThickness/2
    Cwe=roomHeight/2-wallThickness/2
    Flwe=-roomHeight/2+wallThickness/2
    Fowe=roomDepth/2-wallThickness/2
    bwe=-roomDepth/2+wallThickness/2

    if (Xrme>=Rwe or Xlme<Lwe):
        deltaX=deltaX*(-1)

    if (Ytme>=Cwe or Ybme<Flwe):
        deltaY=deltaY*(-1)

    if (Zfme>=Fowe or Zbme<bwe):
        deltaZ=deltaZ*(-1)

    marble.pos=vector(xPos,yPos,zPos)
