"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationcntrlr = void 0;
const express = require("express");
const httpStatus = require("http-status-codes");
class LocationCntrlr {
    constructor() {
        this.router = express.Router();
        LocationCntrlr.setRouterMiddleWare(this.router);
    }
    static setRouterMiddleWare(router) {
        router.route('/')
            .post(LocationCntrlr.addLocation);
    }
    static addLocation(req, res) {
        console.log('addLocation -', req.url);
        let body = req.body;
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send('NOT IMPLEMENTED');
    }
}
exports.locationcntrlr = new LocationCntrlr();
//# sourceMappingURL=LocationCntrlr.js.map