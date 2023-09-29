import cv2
import mediapipe as mp

myCam=cv2.VideoCapture(0)
    _,frame=myCam.read()
    cv2.imshow('My Webcam',frame)
    cv2.moveWindow('My Webcam',0,0)
    if cv2.wattKey(1) == ord('q'):
        break
myCam.release()
