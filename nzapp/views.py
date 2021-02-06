from django.shortcuts import render
from django.views.generic import View, TemplateView
# Create your views here.
class Homepage(TemplateView):
    template_name= "index.html"

class Aboutpage(TemplateView):
    template_name= "aboutus.html"

class Workpage(TemplateView):
    template_name= "workvisa.html"
class Studentpage(TemplateView):
    template_name= "studentvisa.html"
class Investorpage(TemplateView):
    template_name= "investorvisa.html"
class Holidaypage(TemplateView):
    template_name= "holidayvisa.html"
class Self_emp_page(TemplateView):
    template_name= "self-empvisa.html"
class Entrepreneurpage(TemplateView):
    template_name= "entrepreneurvisa.html"
class Essentialpage(TemplateView):
    template_name= "ess_skill_visa.html"
class Contactpage(TemplateView):
    template_name= "contactus.html"
    def post(self, request):

        form = request.POST
        name = form.get('name')
        email = form.get('email')
        phone = form.get('phone')
        subject = form.get('subject')
        message = form.get('message')

        new_contact = models.Contact.objects.create(
            name=name,
            email=email,
            phone=phone,
            subject=subject,
            message=message

        )
        new_contact.save()
        mailHandler.sendMailToUser(name, email)
        mailHandler.sendMailToVisaToCanada(name, email, phone, subject, message)
        messages.success(request, "Your query has been successfully submitted. We will get back to you soon.")
        return redirect("contactus")
