# from flask_simple_crypt import SimpleCrypt
# from app import app
import os
class Config:
   SQLALCHEMY_TRACK_MODIFICATIONS = False
   JWT_SECRET_KEY = "protected"
   # cipher = SimpleCrypt()
   # cipher.init_app(app)

   

   @staticmethod
   def init_app(app):
       pass
   
   

class DevelopmentConfig(Config):
   DEBUG=True
   SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:''@localhost/skills_connect'


class TestingConfig(Config):
   DEBUG = True
   TESTING = True
   SQLALCHEMY_DATABASE_URI = os.environ.get("TEST_DATABASE_URL")


config = {
   'development': DevelopmentConfig,
   'testing': TestingConfig,
   'default': DevelopmentConfig
   }


# import os
# class Config:
#    SQLALCHEMY_TRACK_MODIFICATIONS = False
#    JWT_SECRET_KEY = "protected"
   

#    @staticmethod
#    def init_app(app):
#        pass

# class DevelopmentConfig(Config):
#    DEBUG=True
#    # SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:''@localhost/cohort_2_recess'
#    basedir = os.path.abspath(os.path.dirname(__file__))
#     # In this, am telling SQLAlchemy tha in the os library, set a path, 
#     # the absolute path is a function that takes in the path of the working directory, where this file is.
#    conn = os.path.join(basedir, 'skills_connect')
#     # configuring the application/connecting to the database
#    SQLALCHEMY_DATABASE_URI=\
#                                 'sqlite:///'+conn


# class TestingConfig(Config):
#    DEBUG = True
#    TESTING = True
#    SQLALCHEMY_DATABASE_URI = os.environ.get("TEST_DATABASE_URL")


# config = {
#    'development': DevelopmentConfig,
#    'testing': TestingConfig,
#    'default': DevelopmentConfig
# }

