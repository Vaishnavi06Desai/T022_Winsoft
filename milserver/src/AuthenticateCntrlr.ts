

import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import { authenticate } from './Authenticate';


// import { Validator } from './validator';
import { credentials } from './interfaces';


class AuthenticateCntrlr {

  public router: express.Router = express.Router();
  public constructor() {
    AuthenticateCntrlr.setRouterMiddleWare(this.router);

  }

  public static setRouterMiddleWare(router: express.Router): void {
    router.route('/')
      .post(AuthenticateCntrlr.addAuthenticate);


  }

  public static addAuthenticate(req: express.Request, res: express.Response): void {
    //console.log('addAuthenticate -', req.url);
    let body: credentials = req.body;
    console.log(body.username)
    if (authenticate.methods.valid(req.body.username, req.body.password)) {
      const token = authenticate.methods.generateAccessToken(req.body.userid);
      authenticate.methods.sessionlive(token);
      res.send(token);
    }
    else {
      res.status(httpStatus.StatusCodes.UNAUTHORIZED).send('Unauthorized!');
    }
    //res.status(httpStatus.INTERNAL_SERVER_ERROR).send('NOT IMPLEMENTED');

  }


}

export let authenticatecntrlr = new AuthenticateCntrlr();


