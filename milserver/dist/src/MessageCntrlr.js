"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagecntrlr = void 0;
const express = require("express");
const httpStatus = require("http-status-codes");
class MessageCntrlr {
    constructor() {
        this.router = express.Router();
        MessageCntrlr.setRouterMiddleWare(this.router);
    }
    static setRouterMiddleWare(router) {
        router.route('/')
            .post(MessageCntrlr.addMessage);
    }
    static addMessage(req, res) {
        console.log('addMessage -', req.url);
        let body = req.body;
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send('NOT IMPLEMENTED');
    }
}
exports.messagecntrlr = new MessageCntrlr();
//# sourceMappingURL=MessageCntrlr.js.map