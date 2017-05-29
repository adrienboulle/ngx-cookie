"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cookie_service_1 = require("./cookie.service");
function cookieServiceFactory(cookieOptionsProvider) {
    return new cookie_service_1.CookieService(cookieOptionsProvider);
}
exports.cookieServiceFactory = cookieServiceFactory;