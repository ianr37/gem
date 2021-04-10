
const accessTokenKey = 'access-token';
const refreshTokenKey = 'refresh-token';

export class Profile {

    constructor(provider) {
        this.provider = provider;
    }

    getAccessToken() {
        this.provider.getItem(accessTokenKey);
    }
    
    getRefreshToken() {
        this.provider.getItem(refreshTokenKey);

    }

    setAccessToken(value) {
        this.provider.setItem(accessTokenKey, value);
    }
    
    setRefreshToken(value) {
        this.provider.setItem(refreshTokenKey, value);
    }

}

