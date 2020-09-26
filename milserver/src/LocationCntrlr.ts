
import * as express from 'express';
import * as httpStatus from 'http-status-codes';
import { authenticate } from './Authenticate';
import { dijkstra as graph } from './graph';


// import { Validator } from './validator';
import { I1 } from './interfaces';


class LocationCntrlr {

  public router: express.Router = express.Router();
  public constructor() {
    LocationCntrlr.setRouterMiddleWare(this.router);

  }

  public static setRouterMiddleWare(router: express.Router): void {
    router.route('/')
      .post(LocationCntrlr.addLocation);


  }

  public static addLocation(req: express.Request, res: express.Response): void {
    console.log('addLocation -', req.url);
    //let body: I1 = req.body;
    res.send(graph.findnode(req.body.target));
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('NOT IMPLEMENTED');

  }


}

export let locationcntrlr = new LocationCntrlr();


