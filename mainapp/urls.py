from django.urls import path
from . import views

app_name="mainapp"
urlpatterns = [
    path('', views.home_view, name='homepage'),
    path('seven', views.seven_days, name='seven'),
]
