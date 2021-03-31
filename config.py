
import os
import uuid

BASEDIR = os.path.abspath(os.path.dirname(__file__))

class Configuration(object):
    SECRET_KEY = os.environ.get('MARQUEE_SECRET_KEY') or str(uuid.uuid4())

    @staticmethod
    def init_application(application):
        pass

class DevelopmentConfiguration(Configuration):
    DEBUG = True
    SEND_FILE_MAX_AGE_DEFAULT = 15

class TestingConfiguration(Configuration):
    TESTING = True

class ProductionConfiguration(Configuration):
    pass

configuration = {
    'development': DevelopmentConfiguration(),
    'testing': TestingConfiguration(),
    'production': ProductionConfiguration(),
}

def get_configuration(name):
    return configuration.get(name, DevelopmentConfiguration())

