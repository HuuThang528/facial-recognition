from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')

def show(request):
    return render(request, 'frontend/show.html')
