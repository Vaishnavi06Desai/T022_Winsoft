import * as dotenv from "dotenv";
import * as jwt from "jsonwebtoken";
import {Database, database as db, IMDB, IMDBUsers} from "./database"

// get config vars
dotenv.config();

class Authenticate {
public methods = {
  generateAccessToken: function (userid: string) {
    // expires after half and hour (1800 seconds = 30 minutes)
    console.log(process.env.TOKEN_SECRET);
    // return jwt.sign(userid, {payload: "process.env.TOKEN_SECRET as string"}, { expiresIn: '1h' });
    return jwt.sign({payload:userid},  "process.env.TOKEN_SECRET as string", { expiresIn: '1h' });
  },

  valid: function (userid: string, password: string) {
    let retVal: boolean = false;
    let user: IMDBUsers;
    for (user of db.MilitaryDatabase.users) {
      if (user.userid == userid && user.password == password) {
        retVal = true;
        break;
      }
    }
    return retVal;
  },

  validate: function (token: string) {
    // Gather the jwt access token from the request header
    return jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
      console.log(err)
      if (err) return false
      if (db.MilitaryDatabase.insession.includes(token)) return true
      else return false
    })

  },

  sessionlive: function (token: string) {
    db.MilitaryDatabase.insession.push(token);
    console.log(db.MilitaryDatabase.insession);
  },

  logout: function (token: string) {
    for (var i = 0; i < db.MilitaryDatabase.insession.length; i++) {
      if (db.MilitaryDatabase.insession[i] === token) {
        console.log(db.MilitaryDatabase.insession.splice(i, 1));
      }
    }
  }

}
}
export let authenticate = new Authenticate();