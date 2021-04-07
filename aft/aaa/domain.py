
from uuid import uuid4

from werkzeug.security import generate_password_hash, check_password_hash

class DomainObject:

    def __init__(self):
        self._oid = str(uuid4())

    @property
    def oid(self):
        return self._oid

class User(DomainObject):
    
    def __init__(self, username, password):
        super().__init__()
        self.username = username
        self.pwdhash = generate_password_hash(password)

    def __repr__(self):
        return 'User(username={0}, oid={1})'.format(self.username, self.oid)

    def __str__(self):
        return 'User(username={0}, oid={1})'.format(self.username, self.oid)

    @property
    def password(self):
        raise AttributeError('Password is write only')

    @password.setter
    def password(self, plaintext):
        self.pwdhash = generate_password_hash(plaintext)

    def password_match(self, plaintext):
        return plaintext and check_password_hash(self.pwdhash, plaintext)

