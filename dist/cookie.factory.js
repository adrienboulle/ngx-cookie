'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cookieServiceFactory = cookieServiceFactory;

var _cookie = require('./cookie.service');

function cookieServiceFactory(cookieOptionsProvider) {
    return new _cookie.CookieService(cookieOptionsProvider);
}