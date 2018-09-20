import numpy as np
import cv2
import sys
import dlib
import cv2
import openface
import os
from skimage import io 
class manager(self):
	face_detector = dlib.get_frontal_face_detector()
	face_pose_predictor = dlib.shape_predictor(predictor_model)
	face_aligner = openface.AlignDlib(predictor_model)
	predictor_model = "shape_predictor_68_face_landmarks.dat"
	self.listlabel=[]
	self.dictionary={}
	def __init__(self,dir):
		self.dir=dir
	def start
	def startdetectionandalignment(self):
		frame=change(self,frame)
		detectandalign(self,frame)
	#def startencoding(self):
class preparefolder(manager):
	def get_subdirs(self,dir):
    	"Get a list of immediate subdirectories"
    		return next(os.walk(dir))[1]
	def getsubfolder(self):
		mydir="trainingset"
		subdirs=get_subdirs(mydir)
		return subdirs
	def getsubfile(self,subdir):
		mydir=subdir
		subfiles=get_subdirs(mydir)
		return subfiles
	def getlabel(self):
		subdirs=getsubfolder(self)
		for i in range(subdirs):
			self.listlabel.append(i)
	def associatelabelwithimage(self):
		subdirs=getsubfolder(self)
		lensubdirs=len(subdirs)
		for i in self.listlabel:
			subfiles=getsubfile(self,i)
			for j in subfiles:
				self.dictionary[i]=[j]
class detectionandalignment(manager):
	def passframe(self):
		for i in listphoto:
			frame=i
 
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






















