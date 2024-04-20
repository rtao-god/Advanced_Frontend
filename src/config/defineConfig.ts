import { loadEnv } from "vite"

export function setupDefineConfig(mode: any) {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    __APP_ENV__: JSON.stringify(env.APP_ENV),
  }
}
