class Rectangle:
    def __init__(self,c,l,w, h):
        self.color=c
        self.length=l
        self.width=w
        self.height=h
    def are(self):
        self.area=self.length*self.width
        return self.area
    def per(self):
        self.perimeter=2*self.length+2*self.width
        return self.perimeter
    def dia(self):
        self.diagonal=(self.width**2+self.length**2)**0.5
        return self.diagonal
    def vol(self):
        self.volume=self.length*self.width*self.height
        return self.volume

myRect1=Rectangle('red', 3, 4, 5)
myRect2=Rectangle('blue', 6, 4, 5) 
print(myRect1.color)
print('MyRect1 Length=', myRect1.length)
print('MyRect1 Area=', myRect1.are()) # use class name even if u return the variable
print('MyRect1 Perimeter=', myRect1.per()) # use class name even if u return the variable
print('MyRect1 Volume=', myRect1.vol()) # use class name even if u return the variable
print('MyRect1 Diagonal=', myRect1.vol()) # use class name even if u return the variable