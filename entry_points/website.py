
import os

import mimetypes
mimetypes.add_type("application/javascript", ".mjs", True)

from flask import Flask, render_template

app = Flask('gem', static_url_path='')
config_name = os.environ.get('FLASK_ENV') or 'development'
from config import get_configuration
app.config.from_object(get_configuration(config_name))

@app.route("/", methods=['GET'])
def render_root_page():
    return render_template('index.html')

