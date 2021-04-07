
from .domain import User

users = [User('ian', 'test')]
user_by_name = {u.username : u for u in users}
user_by_oid = {u.oid : u for u in users}

def authenticate(username, password):
    user = user_by_name.get(username, None)
    result = user if user.password_match(password) else None
    return result


def identity(payload):
    oid = payload['identity']
    result = user_by_oid.get(oid, None)
    return result

