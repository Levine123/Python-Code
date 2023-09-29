from time import *
from threading import Thread

def myBox(delayT, color):
    while True:
        print('..............My Box Is Open')
        sleep(delayT)
        print('..............My Box Is Closed')
        sleep(delayT)

def myLED(delayT, color):
    while True:
        print('My LED is On')
        sleep(delayT)
        print('My LED is Off')
        sleep(delayT)
def myCounter():
    j=0
    while True:
        j=j+1
        print(j,'------------------')
        sleep(.05)

delayBox=5
delayLED=1
boxThread=Thread(target=myBox, args=(delayBox, 'red'))
LEDThread=Thread(target=myLED, args=(delayLED, 'blue')) # no trailing comma with two arguments
counterThread=Thread(target=myCounter)
boxThread.daemon=True
LEDThread.daemon=True
counterThread.daemon=True
boxThread.start()
LEDThread.start()
counterThread.start()
while True:
    pass