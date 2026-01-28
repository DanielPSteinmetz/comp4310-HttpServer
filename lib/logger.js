"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpStream = void 0;
const winston_1 = __importDefault(require("winston"));
const config = __importStar(require("./config.js"));
const logLevel_js_1 = require("./logLevel.js");
// Colors to use when printing the different levels
const colors = {
    error: 'red',
    warn: 'yellow',
    http: 'cyan',
    info: 'green',
    debug: 'blue',
    verbose: 'grey',
};
// Format that uses full call stack as the message when an Error is logged
const traceErrors = winston_1.default.format(function traceErrors(info) {
    if (info instanceof Error) {
        info.message = info.stack ?? info.message;
    }
    return info;
});
// Format that converts non-string messages to JSON strings
const toJsonString = winston_1.default.format(function toJsonString(info) {
    if (typeof info.message !== 'string') {
        info.message = JSON.stringify(info.message);
    }
    return info;
});
// This is the actual logger
const logger = winston_1.default.createLogger({
    levels: logLevel_js_1.levels,
    level: config.logLevel,
    format: winston_1.default.format.combine(traceErrors(), toJsonString(), winston_1.default.format.cli({ levels: logLevel_js_1.levels, colors })),
    transports: new winston_1.default.transports.Console(),
});
// To connect to Morgan
exports.httpStream = {
    write(message) {
        logger.http(message);
    }
};
exports.default = logger;
