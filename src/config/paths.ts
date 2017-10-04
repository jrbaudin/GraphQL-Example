import { realpathSync } from 'fs'
import { resolve } from 'path'

// Make sure any symlinks in the project folder are resolved:
const appDirectory = realpathSync(process.cwd())
const resolveApp = (relativePath: string) => {
  return resolve(appDirectory, relativePath)
}

export default class Paths {
  public get appNodeModules(): string {
    return resolveApp('node_modules')
  }
  public get appPackageJson(): string {
    return resolveApp('package.json')
  }
  public get appRoot(): string {
    return resolveApp('.')
  }
  public get configFileJson(): string {
    return resolveApp('config/config.json')
  }
  public get firebaseServiceAccountJson(): string {
    return resolveApp('config/serviceAccountKey.json')
  }
}
