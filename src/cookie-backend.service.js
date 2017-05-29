System.register(["@angular/core", "./cookie.service"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, cookie_service_1, CookieBackendService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cookie_service_1_1) {
                cookie_service_1 = cookie_service_1_1;
            }
        ],
        execute: function () {
            CookieBackendService = (function (_super) {
                __extends(CookieBackendService, _super);
                function CookieBackendService() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(CookieBackendService.prototype, "cookieString", {
                    get: function () {
                        return global.Zone.current.get('req').headers.cookie || '';
                    },
                    set: function (val) {
                        global.Zone.current.get('req').headers.cookie = val;
                        global.Zone.current.get('res').headers.cookie = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                return CookieBackendService;
            }(cookie_service_1.CookieService));
            CookieBackendService = __decorate([
                core_1.Injectable()
            ], CookieBackendService);
            exports_1("CookieBackendService", CookieBackendService);
        }
    };
});
