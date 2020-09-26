"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticatecntrlr = void 0;
const express = require("express");
const httpStatus = require("http-status-codes");
const Authenticate_1 = require("./Authenticate");
class AuthenticateCntrlr {
    constructor() {
        this.router = express.Router();
        AuthenticateCntrlr.setRouterMiddleWare(this.router);
    }
    static setRouterMiddleWare(router) {
        router.route('/')
            .post(AuthenticateCntrlr.addAuthenticate);
    }
    static addAuthenticate(req, res) {
        //console.log('addAuthenticate -', req.url);
        let body = req.body;
        console.log(body.userid);
        if (Authenticate_1.authenticate.methods.valid(req.body.userid, req.body.password)) {
            const token = Authenticate_1.authenticate.methods.generateAccessToken(req.body.userid);
            Authenticate_1.authenticate.methods.sessionlive(token);
            res.send(token);
        }
        else {
            res.status(httpStatus.StatusCodes.UNAUTHORIZED).send('Unauthorized!');
        }
        //res.status(httpStatus.INTERNAL_SERVER_ERROR).send('NOT IMPLEMENTED');
    }
}
exports.authenticatecntrlr = new AuthenticateCntrlr();
//# sourceMappingURL=AuthenticateCntrlr.js.map