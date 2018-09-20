import numpy as np
import cv2
import sys
import dlib
import cv2
import openface
from skimage import io 
class manager(self):
	face_detector = dlib.get_frontal_face_detector()
	face_pose_predictor = dlib.shape_predictor(predictor_model)
	face_aligner = openface.AlignDlib(predictor_model)
	predictor_model = "shape_predictor_68_face_landmarks.dat"
	self.frame=frame
	def __init__(self):
		print("start")
	def managecamera(self):
		frame=camera()
	def startdetect&alignment(self):
		frame=change(self,frame)
		detect&align(self,frame)
	#def startencoding(self):
class frame(manager):
	def camera(self):	
		cap = cv2.VideoCapture(0)
		temp=False
		while(True):
			print("start")
    			ret, frame = cap.read()
			temp=isquit(self)
			if temp:
				break
				framerelease()
				caprelease(self)
		return frame
	def isquit(self):
		if cv2.waitKey(1) & 0xFF == ord('q'):
			temp=True
		return temp
	def caprelease(self):
		cap.release()
		cv2.destroyAllWindows

class detectionandalignment(manager):
	def change(self,frame):
		frame=cv2.cvtColor(frame,cv2.COLOR_BGR2RGB)
		frame=io.imread(frame)
		return frame
	def detectandalign(self,frame):
		detected_faces=face_detector(frame,1)
		for i, face_rect in enumerate(detected_faces):
			print("- Face #{} found at Left: {} Top: {} Right: {} Bottom: {}".format(i, face_rect.left(), face_rect.top(), face_rect.right(), face_rect.bottom()))
		pose_landmarks = face_pose_predictor(image, face_rect)
		alignedFace = face_aligner.align(534, image, face_rect, landmarkIndices=openface.AlignDlib.OUTER_EYES_AND_NOSE)
		cv2.imwrite("aligned_face_{}.jpg".format(i), alignedFace)
#class encoding(manager):
######################################___MAIN___##########################################################
man=manager()






















