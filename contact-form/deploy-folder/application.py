from flask import Flask
from flask import request
from flask_cors import CORS
import json
import boto3

config = json.load(open("./config.json", "r"))

ses_client = boto3.client('ses',
                          region_name=config["region_name"],
                          aws_access_key_id=config["aws_access_key_id"], 
                          aws_secret_access_key=config["aws_secret_access_key"]
                          )

application = Flask(__name__)

CORS(application)

@application.route("/contact-form", methods=["POST"])
def contact_form ():
    try:
        name = request.form["name"]
        email = request.form["email"]
        subject = request.form["subject"]
        message = request.form["message"]
    except:
        return "Missing fields", 422
    
    try:
        ses_client.send_email(
            Source='noreply@bannisterwebservices.co.uk',
            Destination={
                'ToAddresses': [
                    'james@bannisterwebservices.co.uk',
                ]
            },
            Message={
                'Subject': {
                    'Data': subject,
                    'Charset': 'utf-8'
                },
                'Body': {
                    'Text': {
                        'Data': message,
                        'Charset': 'utf-8'
                    }
                }
            },
            ReplyToAddresses=[
                email,
            ],
        )

        client_message = f"""Hi {name},
    Thank you for contacting Bannister Web Services. 

    James wil be in touch with a response to your enquiry as soon as possible.

    Your message: 
    Subject: \"{subject}\"
    Message: \"{message}\"
    """
        ses_client.send_email(
            Source='noreply@bannisterwebservices.co.uk',
            Destination={
                'ToAddresses': [
                    email,
                ]
            },
            Message={
                'Subject': {
                    'Data': subject,
                    'Charset': 'utf-8'
                },
                'Body': {
                    'Text': {
                        'Data': client_message,
                        'Charset': 'utf-8'
                    }
                }
            }
        )
    except:
       return "service not available", 500

    else:
        return "sent", 200

if __name__ == "__main__":
    application.run()