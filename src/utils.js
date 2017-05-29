"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isBlank(obj) {
    return obj === undefined || obj === null;
}
exports.isBlank = isBlank;
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function isString(obj) {
    return typeof obj === 'string';
}
exports.isString = isString;
function mergeOptions(oldOptions, newOptions) {
    if (!newOptions) {
        return oldOptions;
    }
    return {
        path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
        domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
        expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
        secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure
    };
}
exports.mergeOptions = mergeOptions;
function safeDecodeURIComponent(str) {
    try {
        return decodeURIComponent(str);
    } catch (e) {
        return str;
    }
}
exports.safeDecodeURIComponent = safeDecodeURIComponent;
function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
}
exports.safeJsonParse = safeJsonParse;