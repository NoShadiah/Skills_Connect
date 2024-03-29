from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config
from models.db import db
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flasgger import Swagger, swag_from
from documentation.config.swagger import template, swagger_config
from datetime import timedelta


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    app.config.JWT_SECRET_KEY="super secret key"
    app.config.from_pyfile("../config.py")
    app.config.JWT_ACCESS_TOKEN_EXPIRES=timedelta(hours=0.5)
    app.config.SWAGGER = {
        "tittle ":"Skills Connect API",
        "ui_version":3
    }


    db.init_app(app)
    # configurations with the app
    JWTManager(app)
    CORS(app, supports_credentials=True)
    Swagger(app, config=swagger_config, template=template)

    from models.admins.controller import admins
    from models.users.controller import users
    from models.auth.auth import auth

    #registering blueprints    
    app.register_blueprint(admins)
    app.register_blueprint(users)
    app.register_blueprint(auth)
    
    return app