import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')   # environment variable
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')    # environment variable

    MAIL_SERVER = 'smtp.googlemail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = os.environ.get('EMAIL_USER')    # environment variable
    MAIL_PASSWORD = os.environ.get('EMAIL_PASS')    # environment variable