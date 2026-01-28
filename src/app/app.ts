import type * as http from "http"

export function requestHandler(req: http.IncomingMessage, res: http.ServerResponse) {
  if (req.url === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Hello, world! Typescript definitely made this a much better experience and didn\'t overcomplicate anything :)')
    res.end()
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.write('Not found, no clue what a "' + req.url + '" is...\n')
    res.end()
  }
}

