
import os

import mimetypes
mimetypes.add_type("application/javascript", ".mjs", True)

from flask import Flask, make_response, render_template

app = Flask('gem', static_url_path='', static_folder='dist', template_folder='dist')
config_name = os.environ.get('FLASK_ENV') or 'development'
from config import get_configuration
app.config.from_object(get_configuration(config_name))

print('config: {0}'.format(app.config['SEND_FILE_MAX_AGE_DEFAULT']))


@app.route("/", methods=['GET'])
def render_root_page():
    response = make_response(render_template('index.html'))
    response.headers['Content-Security-Policy'] = "default-src 'self'"
    return response

