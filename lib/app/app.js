"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = requestHandler;
function requestHandler(req, res) {
    if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello, world! Typescript definitely made this a much better experience and didn\'t overcomplicate anything :)');
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not found, no clue what a "' + req.url + '" is...\n');
        res.end();
    }
}
//needed so that importing as `const app = require('/dist/app.js')` gives the function and not an object
module.exports = requestHandler;
