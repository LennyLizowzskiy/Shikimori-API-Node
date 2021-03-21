const AUTH = require('./lib/auth.js');
const API = require('./lib/api.js');


class Shikimori {
    constructor () {
        this.auth = new AUTH(this);
        this.api = new API(this);
    }
}

module.exports = Shikimori;