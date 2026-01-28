
export const levels = {
    silent: 0,
    error: 1,
    warn: 2,
    http: 3,
    info: 4,
    debug: 5,
    verbose: 6
} as const

export type Level = keyof typeof levels

const levelKeys = Object.keys(levels) as Level[]

export function parseLevel(val: string): Level | undefined {
  const asLevel = val as Level
  return levelKeys.includes(asLevel) ? asLevel : undefined 
}
