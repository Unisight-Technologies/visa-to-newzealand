from django.core.mail import send_mail
import environ
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os

env = environ.Env()
# reading .env file
environ.Env.read_env()

def sendMailToUser(name, send_to):
    subject = "Thanks for contacting us"
    message = "Hello "+ name +"! <br><br>We have successfully received your message.<br><br>We will get back to you as soon as possible.<br><br>Regards<br>- Visa To New Zealand."
    msg = Mail(
        from_email='unisighttechnologies@gmail.com',
        to_emails=send_to,
        subject=subject,
        html_content=message
    )

    try:
        sg = SendGridAPIClient(os.environ.get('API_KEY'))
        response = sg.send(msg)

    except Exception as e:
        print(e)


def sendMailToVisaToNewZealand(name, email, phone, subject, message):
    message = "A new message has been received on our website:<br><br>Name: "+name+"<br>Email Id: "+email+"<br>Phone: "+phone+"<br>Subject: "+subject+"<br>Message: "+message+"<br><br><br>Regards"
    subject = "A message has been received on Visa To New Zealand"
    msg = Mail(
        from_email='unisighttechnologies@gmail.com',
        to_emails='info@VisaToNewzealand.com',
        subject=subject,
        html_content=message
    )

    try:
        sg = SendGridAPIClient(os.environ.get('API_KEY'))
        response = sg.send(msg)
    except Exception as e:
        print(e)
