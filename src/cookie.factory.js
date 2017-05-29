System.register(["./cookie.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function cookieServiceFactory(cookieOptionsProvider) {
        return new cookie_service_1.CookieService(cookieOptionsProvider);
    }
    exports_1("cookieServiceFactory", cookieServiceFactory);
    var cookie_service_1;
    return {
        setters: [
            function (cookie_service_1_1) {
                cookie_service_1 = cookie_service_1_1;
            }
        ],
        execute: function () {
        }
    };
});
