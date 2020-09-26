"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerAPI = void 0;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const openapi_validator_middleware_1 = require("openapi-validator-middleware");
const appConfig_1 = require("./appConfig");
const LocationCntrlr_1 = require("./LocationCntrlr");
const MessageCntrlr_1 = require("./MessageCntrlr");
const AuthenticateCntrlr_1 = require("./AuthenticateCntrlr");
class ServerAPI {
    constructor() {
        this.apiApp = express();
        this.port = appConfig_1.configuration.webport;
        this.apiApp.disable('x-powered-by');
        this.apiApp.disable('etag');
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const server = this.apiApp.listen(this.port, () => {
                console.log(`------------API Web Server Starting on port ${this.port} -------------`);
            });
        });
    }
    setMiddleware() {
        this.apiApp.use(helmet());
        this.apiApp.use(cors());
        this.apiApp.use(cookieParser());
        this.apiApp.use(express.json());
        this.apiApp.use(express.urlencoded({ 'extended': true }));
        this.apiApp.use(express.static(path.join(__dirname, '..', 'static')));
    }
    setRouterMiddleWare() {
        this.apiApp.use('/location', LocationCntrlr_1.locationcntrlr.router);
        this.apiApp.use('/message', MessageCntrlr_1.messagecntrlr.router);
        this.apiApp.use('/authenticate', AuthenticateCntrlr_1.authenticatecntrlr.router);
        this.apiApp.use((err, req, res, next) => {
            if (err instanceof openapi_validator_middleware_1.InputValidationError) {
                return res.status(400).json({ more_info: JSON.stringify(err.errors) });
            }
            next();
        });
    }
}
exports.ServerAPI = ServerAPI;
const api = new ServerAPI();
api.setMiddleware();
api.setRouterMiddleWare();
api.start();
//# sourceMappingURL=ServerAPI.js.map