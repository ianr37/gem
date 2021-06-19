
import os

import mimetypes
mimetypes.add_type("application/javascript", ".mjs", True)

from flask import Flask, make_response, request, render_template
from flask_jwt_extended import JWTManager

app = Flask('gem', static_url_path='', static_folder='dist', template_folder='dist')
config_name = os.environ.get('FLASK_ENV') or 'development'
from config import get_configuration
app.config.from_object(get_configuration(config_name))
jwt = JWTManager(app)

from aaa import blueprint as aaa_blueprint
app.register_blueprint(aaa_blueprint)

CONTENT_SECURITY_POLICY = ';'.join([
    "default-src 'self' https://testlab-a.r37.co.uk:8000/*",
#   "script-src 'self' https://testlab-a.r37.co.uk:8000/*",
#   "script-src-attr 'self' https://testlab-a.r37.co.uk:8000/*",
#   "script-src-elem 'self' https://testlab-a.r37.co.uk:8000/*",
])

@app.after_request
def after_request_callback(response):
    if request.base_url.endswith(('.js', '.mjs')):
        #TODO: evaluate security risk of adding this header to downloads of user generated files
        response.headers['Content-Security-Policy'] = CONTENT_SECURITY_POLICY
    return response

@app.route("/", methods=['GET'])
def render_root_page():
    response = make_response(render_template('index.html'))
    response.headers['Content-Security-Policy'] = CONTENT_SECURITY_POLICY
    return response

