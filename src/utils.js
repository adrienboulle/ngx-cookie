System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isBlank(obj) {
        return obj === undefined || obj === null;
    }
    exports_1("isBlank", isBlank);
    function isPresent(obj) {
        return obj !== undefined && obj !== null;
    }
    exports_1("isPresent", isPresent);
    function isString(obj) {
        return typeof obj === 'string';
    }
    exports_1("isString", isString);
    function mergeOptions(oldOptions, newOptions) {
        if (!newOptions) {
            return oldOptions;
        }
        return {
            path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
            domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
            expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
            secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
        };
    }
    exports_1("mergeOptions", mergeOptions);
    function safeDecodeURIComponent(str) {
        try {
            return decodeURIComponent(str);
        }
        catch (e) {
            return str;
        }
    }
    exports_1("safeDecodeURIComponent", safeDecodeURIComponent);
    function safeJsonParse(str) {
        try {
            return JSON.parse(str);
        }
        catch (e) {
            return str;
        }
    }
    exports_1("safeJsonParse", safeJsonParse);
    return {
        setters: [],
        execute: function () {
        }
    };
});
