"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const database_1 = require("./database");
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
                let retVal = false;
                let user;
                for (user of database_1.database.MilitaryDatabase.users) {
                    if (user.userid == userid && user.password == password) {
                        retVal = true;
                        break;
                    }
                }
                return retVal;
            },
            validate: function (token) {
                // Gather the jwt access token from the request header
                return jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
                    console.log(err);
                    if (err)
                        return false;
                    if (database_1.database.MilitaryDatabase.insession.includes(token))
                        return true;
                    else
                        return false;
                });
            },
            sessionlive: function (token) {
                database_1.database.MilitaryDatabase.insession.push(token);
                console.log(database_1.database.MilitaryDatabase.insession);
            },
            logout: function (token) {
                for (var i = 0; i < database_1.database.MilitaryDatabase.insession.length; i++) {
                    if (database_1.database.MilitaryDatabase.insession[i] === token) {
                        console.log(database_1.database.MilitaryDatabase.insession.splice(i, 1));
                    }
                }
            }
        };
    }
}
exports.authenticate = new Authenticate();
//# sourceMappingURL=Authenticate.js.map