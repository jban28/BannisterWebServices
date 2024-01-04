import os
import json
import boto3

ses_client = boto3.client('ses',
                          region_name = os.environ["SES_REGION"],
                          aws_access_key_id = os.environ["SES_KEY_ID"], 
                          aws_secret_access_key = os.environ["SES_KEY_VALUE"]
                          )

def lambda_handler(event, context):
    body = json.loads(event["body"])
    
    try:
        name = body["name"]
        email = body["email"]
        subject = body["subject"]
        message = body["message"]
    except:
        return {
        'statusCode': 422,
        'body': json.dumps("Missing field(s)")
    }
    
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
       return {
            'statusCode': 500,
            'body': json.dumps("service not available")
        }

    else:
        return {
            'statusCode': 200,
            'body': json.dumps("sent")
        }
