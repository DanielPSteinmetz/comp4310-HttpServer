import http from "http"
import * as config from './config'
import { requestHandler } from "./app/app"

// Create the server
const server = http.createServer(requestHandler);

// Start the server
server.listen(config.httpPort, () => {  // called once the server is running
    console.log('Server listening on port ' + config.httpPort + '...');
});
