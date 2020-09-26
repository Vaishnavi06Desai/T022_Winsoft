
import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import { authenticate } from './Authenticate';
const decrypt = require('./decrypt')



// import { Validator } from './validator';
import { I2 } from './interfaces';


class MessageCntrlr {

  public router: express.Router = express.Router();
  public constructor() {
    MessageCntrlr.setRouterMiddleWare(this.router);

  }

  public static setRouterMiddleWare(router: express.Router): void {
    router.route('/')
      .post(MessageCntrlr.addMessage);


  }

  public static addMessage(req: express.Request, res: express.Response): void {
    console.log('addMessage -', req.url);
    //let body: I2 = req.body;
    console.log("hii")
    console.log(req.body.message, req.body.key);
    res.send(decrypt.decrypt(req.body.message, req.body.key));

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('NOT IMPLEMENTED');

  }


}

export let messagecntrlr = new MessageCntrlr();


