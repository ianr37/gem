
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt_identity, jwt_required

from .services import authenticate

blueprint = Blueprint('aaa', __name__, url_prefix='/api/aaa')

@blueprint.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    response = None
    status = 401
    if authenticate(username, password):
        access_token = create_access_token(identity=username)
        refresh_token = create_refresh_token(identity=username)
        response = jsonify(access_token=access_token, refresh_token=refresh_token)
        status = 200
    else:
        response = jsonify({"msg": "Bad username or password"})
        status = 401
    return response, status

@blueprint.route("/refresh", methods=["get"])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)
    return jsonify(access_token=access_token)

@blueprint.route("/test-access", methods=["GET"])
@jwt_required()
def test_access():
    return jsonify(access=True)

