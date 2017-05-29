"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var utils_1 = require("./utils");
exports.COOKIE_OPTIONS = new core_1.OpaqueToken('COOKIE_OPTIONS');
/** @private */
var CookieOptionsProvider = function () {
    function CookieOptionsProvider(options, _injector) {
        if (options === void 0) {
            options = {};
        }
        this._injector = _injector;
        this.defaultOptions = {
            path: this._injector.get(common_1.APP_BASE_HREF, '/'),
            domain: null,
            expires: null,
            secure: false
        };
        this._options = utils_1.mergeOptions(this.defaultOptions, options);
    }
    Object.defineProperty(CookieOptionsProvider.prototype, "options", {
        get: function get() {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return CookieOptionsProvider;
}();
CookieOptionsProvider = __decorate([core_1.Injectable(), __param(0, core_1.Inject(exports.COOKIE_OPTIONS)), __metadata("design:paramtypes", [Object, core_1.Injector])], CookieOptionsProvider);
exports.CookieOptionsProvider = CookieOptionsProvider;