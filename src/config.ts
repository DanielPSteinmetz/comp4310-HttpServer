import path from 'path';
import { Level, parseLevel } from './logLevel'

// Absolute path to project directory
export const projectDir = path.join(__dirname, '..');

// Convert project-relative path to absolute path
export function projectPath(...localPaths: string[]) {
    return path.join(projectDir, ...localPaths)
}

// Configuration information
export const httpPort = 8000
export const staticDir = projectPath('static')

let logLevel: Level = 'verbose'
if (process.env.LOG_LEVEL) {
  const envLevel = parseLevel(process.env.LOG_LEVEL.toLowerCase())
  if (envLevel !== undefined) {
    logLevel = envLevel
  }
}
export { logLevel }
