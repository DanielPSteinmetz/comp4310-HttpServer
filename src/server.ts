import http from "http"
import * as config from './config'
import app from "./app/app"
import logger from './logger'


logger.info('Log level: ' + config.logLevel)
// Create the server
const server = http.createServer(app);

// Start the server
server.listen(config.httpPort, () => {  // called once the server is running
    logger.info('Server listening on port ' + config.httpPort + '...');
});
