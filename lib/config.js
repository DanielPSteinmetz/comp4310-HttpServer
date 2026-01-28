"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logLevel = exports.staticDir = exports.httpPort = exports.projectDir = void 0;
exports.projectPath = projectPath;
const path_1 = __importDefault(require("path"));
const logLevel_1 = require("./logLevel");
// Absolute path to project directory
exports.projectDir = path_1.default.join(__dirname, '..');
// Convert project-relative path to absolute path
function projectPath(...localPaths) {
    return path_1.default.join(exports.projectDir, ...localPaths);
}
// Configuration information
exports.httpPort = 8000;
exports.staticDir = projectPath('static');
let logLevel = 'verbose';
exports.logLevel = logLevel;
if (process.env.LOG_LEVEL) {
    const envLevel = (0, logLevel_1.parseLevel)(process.env.LOG_LEVEL.toLowerCase());
    if (envLevel !== undefined) {
        exports.logLevel = logLevel = envLevel;
    }
}
