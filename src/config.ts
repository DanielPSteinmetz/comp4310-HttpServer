import path from 'path';
import { Level, parseLevel } from './logLevel'
import logger from './logger'

// Absolute path to project directory
export const projectDir = path.join(__dirname, '..');

// Convert project-relative path to absolute path
export function projectPath(...localPaths: string[]) {
    return path.join(projectDir, ...localPaths)
}

// Configuration information
export const httpPort = 8000
export const staticDir = projectPath('static')

let logLevel: Level = 'debug'
if (process.env.LOG_LEVEL) {

  const envLevel = parseLevel(process.env.LOG_LEVEL.toLowerCase())
  if (envLevel !== undefined) {
    logger.info(`Log level changed to ${envLevel}`)
    logLevel = envLevel
  }
  else {
    logger.warn(`LOG_LEVEL environment variable set to unknown value: "${process.env.LOG_LEVEL}"`)
  }
}
export { logLevel }
