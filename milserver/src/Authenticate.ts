const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
// import * as jwt from "jsonwebtoken";
const database = require("./database")
// get config vars
dotenv.config();

class Authenticate {
public methods = {
  generateAccessToken: function (userid: string) {
    // expires after half and hour (1800 seconds = 30 minutes)
    console.log(process.env.TOKEN_SECRET);
    return jwt.sign(userid, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  },

  valid: function (userid: string, password: string) {
    let user: any;
    for (user of database.users) {
      if (user.userid == userid && user.password == password) {
        return true;
      }
    }
    return false;
  },

  validate: function (token: string) {
    // Gather the jwt access token from the request header
    return jwt.verify(token, process.env.TOKEN_SECRET, (err: any, user: any) => {
      console.log(err)
      if (err) return false
      if (database.insession.includes(token)) return true
      else return false
    })

  },

  sessionlive: function (token: string) {
    database.insession.push(token);
    console.log(database.insession);
  },

  logout: function (token: string) {
    for (var i = 0; i < database.insession.length; i++) {
      if (database.insession[i] === token) {
        console.log(database.insession.splice(i, 1));
      }
    }
  }

}
}
export let authenticate = new Authenticate();