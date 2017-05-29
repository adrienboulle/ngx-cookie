"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CookieModule = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _cookie = require("./src/cookie.service");

Object.keys(_cookie).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _cookie[key];
        }
    });
});

var _cookieBackend = require("./src/cookie-backend.service");

Object.keys(_cookieBackend).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _cookieBackend[key];
        }
    });
});

var _cookieOptionsProvider = require("./src/cookie-options-provider");

Object.keys(_cookieOptionsProvider).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _cookieOptionsProvider[key];
        }
    });
});

var _cookie2 = require("./src/cookie.factory");

Object.keys(_cookie2).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _cookie2[key];
        }
    });
});

var _utils = require("./src/utils");

Object.keys(_utils).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _utils[key];
        }
    });
});

var _core = require("@angular/core");

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CookieModule = CookieModule_1 = function () {
    function CookieModule() {}
    /**
     * Use this method in your root module to provide the CookieService
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    CookieModule.forRoot = function (options) {
        if (options === void 0) {
            options = {};
        }
        return {
            ngModule: CookieModule_1,
            providers: [{ provide: _cookieOptionsProvider.COOKIE_OPTIONS, useValue: options }, { provide: _cookie.CookieService, useFactory: _cookie2.cookieServiceFactory, deps: [_cookieOptionsProvider.CookieOptionsProvider] }]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    CookieModule.forChild = function (options) {
        if (options === void 0) {
            options = {};
        }
        return {
            ngModule: CookieModule_1,
            providers: [{ provide: _cookieOptionsProvider.COOKIE_OPTIONS, useValue: options }, { provide: _cookie.CookieService, useFactory: _cookie2.cookieServiceFactory, deps: [_cookieOptionsProvider.CookieOptionsProvider] }]
        };
    };
    return CookieModule;
}();
exports.CookieModule = CookieModule = CookieModule_1 = __decorate([(0, _core.NgModule)({
    providers: [_cookieOptionsProvider.CookieOptionsProvider]
})], CookieModule);
exports.CookieModule = CookieModule;

var CookieModule_1;