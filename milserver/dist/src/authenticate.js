"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const dotenv = require("dotenv");
//const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const database = require("./database");
// get config vars
dotenv.config();
class Authenticate {
    constructor() {
        this.methods = {
            generateAccessToken: function (userid) {
                // expires after half and hour (1800 seconds = 30 minutes)
                console.log(process.env.TOKEN_SECRET);
                return jwt.sign(userid, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
            },
            valid: function (userid, password) {
                let user;
                for (user of database.users) {
                    if (user.userid == userid && user.password == password) {
                        return true;
                    }
                }
                return false;
            },
            validate: function (token) {
                // Gather the jwt access token from the request header
                return jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
                    console.log(err);
                    if (err)
                        return false;
                    if (database.insession.includes(token))
                        return true;
                    else
                        return false;
                });
            },
            sessionlive: function (token) {
                database.insession.push(token);
                console.log(database.insession);
            },
            logout: function (token) {
                for (var i = 0; i < database.insession.length; i++) {
                    if (database.insession[i] === token) {
                        console.log(database.insession.splice(i, 1));
                    }
                }
            }
        };
    }
}
exports.authenticate = new Authenticate();
//# sourceMappingURL=Authenticate.js.map