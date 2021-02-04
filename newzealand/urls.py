"""newzealand URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from nzapp import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.Homepage.as_view(),name="index"),
    path('aboutus/', views.Aboutpage.as_view(),name="aboutus"),
    path('contactus/', views.Contactpage.as_view(),name="contactus"),
    path('workvisa/', views.Workpage.as_view(),name="workvisa"),
    path('studentvisa/', views.Studentpage.as_view(),name="studentvisa"),
    path('investorvisa/', views.Investorpage.as_view(),name="investorvisa"),
    path('holidayvisa/', views.Holidaypage.as_view(),name="holidayvisa"),
    path('self-empvisa/', views.Self_emp_page.as_view(),name="self-empvisa"),
    # path('refresh/', views.refresh, name='refresh')
]
