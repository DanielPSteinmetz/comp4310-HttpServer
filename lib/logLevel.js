"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levels = void 0;
exports.parseLevel = parseLevel;
exports.levels = {
    silent: 0,
    error: 1,
    warn: 2,
    http: 3,
    info: 4,
    debug: 5,
    verbose: 6
};
const levelKeys = Object.keys(exports.levels);
function parseLevel(val) {
    const asLevel = val;
    return levelKeys.includes(asLevel) ? asLevel : undefined;
}
