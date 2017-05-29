System.register(["@angular/core", "@angular/common", "./utils"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, utils_1, COOKIE_OPTIONS, CookieOptionsProvider;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            exports_1("COOKIE_OPTIONS", COOKIE_OPTIONS = new core_1.OpaqueToken('COOKIE_OPTIONS'));
            CookieOptionsProvider = (function () {
                function CookieOptionsProvider(options, _injector) {
                    if (options === void 0) { options = {}; }
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
                    get: function () {
                        return this._options;
                    },
                    enumerable: true,
                    configurable: true
                });
                return CookieOptionsProvider;
            }());
            CookieOptionsProvider = __decorate([
                core_1.Injectable(),
                __param(0, core_1.Inject(COOKIE_OPTIONS)),
                __metadata("design:paramtypes", [Object, core_1.Injector])
            ], CookieOptionsProvider);
            exports_1("CookieOptionsProvider", CookieOptionsProvider);
        }
    };
});