
import * as express from 'express';
import * as dotenv from "dotenv";
import * as jwt from "jsonwebtoken";
import * as httpStatus from 'http-status-codes';
import { Database, database as db, IMDBUsers } from "./database"

// get config vars
dotenv.config();

class Authenticate {
  public generateAccessToken(userid: string) {
    // expires after half and hour (1800 seconds = 30 minutes)
    console.log(process.env.TOKEN_SECRET);
    // return jwt.sign(userid, {payload: "process.env.TOKEN_SECRET as string"}, { expiresIn: '1h' });
    return jwt.sign({ payload: userid }, process.env.TOKEN_SECRET as string, { expiresIn: '1h' });
  }

  public valid(userid: string, password: string): boolean {
    let retVal: boolean = false;
    let user: IMDBUsers;
    for (user of db.MilitaryDatabase.users) {
      if (user.userid == userid && user.password == password) {
        retVal = true;
        break;
      }
    }
    return retVal;
  }

  public validate(token: string) {
    // Gather the jwt access token from the request header
    return jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
      console.log(err)
      if (err) return false
      if (db.MilitaryDatabase.insession.includes(token)) return true
      else return false
    })

  }

  public sessionlive(token: string): void {
    db.MilitaryDatabase.insession.push(token);
    console.log(db.MilitaryDatabase.insession);
  }

  public logout(token: string): void {
    for (var i = 0; i < db.MilitaryDatabase.insession.length; i++) {
      if (db.MilitaryDatabase.insession[i] === token) {
        console.log(db.MilitaryDatabase.insession.splice(i, 1));
      }
    }
  }

  public authenticateToken(req: express.Request, res: express.Response, next: express.NextFunction) {
    // Gather the jwt access token from the request header
    const authHeader: string = (req.headers) ? req.headers['authorization'] || '' : '';

    const token: string = (authHeader && authHeader.split(' ')[1]) || '';

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
      console.log(err)
      if (err) {
        res.sendStatus(httpStatus.StatusCodes.UNAUTHORIZED);
      } else if (db.MilitaryDatabase.insession.includes(token)) {
        next();
      } else {
        res.sendStatus(httpStatus.StatusCodes.UNAUTHORIZED);
      }
    })
  }
}

export let authenticate = new Authenticate();