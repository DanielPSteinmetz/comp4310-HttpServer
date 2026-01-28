import winston from 'winston';
import * as config from './config.js';
import { levels } from './logLevel.js'

// Colors to use when printing the different levels
const colors = {
    error: 'red',
    warn: 'yellow',
    http: 'cyan',
    info: 'green',
    debug: 'blue',
    verbose: 'grey',
} as const

// Format that uses full call stack as the message when an Error is logged
const traceErrors = winston.format(function traceErrors(info) {
    if (info instanceof Error) {
        info.message = info.stack ?? info.message
    }
    return info;
});

// Format that converts non-string messages to JSON strings
const toJsonString = winston.format(function toJsonString(info) {
    if (typeof info.message !== 'string') {
        info.message = JSON.stringify(info.message);
    }
    return info;
});

// This is the actual logger
const logger = winston.createLogger({
    levels,
    level: config.logLevel,
    format: winston.format.combine(
        traceErrors(),
        toJsonString(),
        winston.format.cli({ levels, colors }),
    ),
    transports: new winston.transports.Console(),
});

// To connect to Morgan
export const httpStream = {
    write(message: string) { 
      logger.http(message)
    }
};

export default logger
