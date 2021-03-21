const needle = require('needle');

const authlink = 'https://shikimori.one/oauth';

class Auth {
    constructor (shikimori) {
        this.shikimori = shikimori;

        this.credentials = {
            redirecturi: 'urn:ietf:wg:oauth:2.0:oob'
        }
    }


    async login(obj) {
        return needle('post', `${authlink}/token`, {
            grant_type: 'authorization_code',
            client_id: obj.clientid,
            client_secret: obj.clientsecret,
            code: obj.authcode,
            redirect_uri: (obj.redirecturi || this.credentials.redirecturi )
        }, {
            headers: {
                'user-agent': `User-Agent: ${obj.useragent}`
            }
        }).then((res) => {
            if (['www-authenticate'] in res.headers) throw Error(res.headers['www-authenticate']);

            const body = res.body;

            Object.assign(this.credentials, obj, {
                accesstoken: body.access_token,
                refreshtoken: body.refresh_token,
                createdat: body.created_at,
                tokenexpiresin: body.expires_in,
                scope: body.scope
            });

            return this.credentials;
        });
    }

    async refreshToken() {
        const credentials = this.credentials;

        if (!credentials.refreshtoken) throw Error('invalid_request: Missing required parameter: refresh_token.');

        return needle('post', `${authlink}/token`, {
            grant_type: 'refresh_token',
            client_id: credentials.clientid,
            client_secret: credentials.clientsecret,
            refresh_token: credentials.refreshtoken
        }, {
            headers: {
                'user-agent': `User-Agent: ${credentials.useragent}`
            }
        }).then((res) => {
            const body = res.body;

            Object.assign(this.credentials, {
                accesstoken: body.access_token,
                refreshtoken: body.refresh_token,
                createdat: body.created_at
            })

            return this.credentials;
        });
    }
}

module.exports = Auth;