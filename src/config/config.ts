import { IConfig } from './config-schema'
import Paths from './paths'

export default class Config {
  private config: IConfig
  private paths: Paths
  constructor() {
    this.paths = new Paths()
    const configObject = require(`${this.paths.configFileJson}`)
    this.config = configObject
  }
  public getConfigObject(): IConfig {
    return this.config
  }
  public getEnv() {
    const devFlag = this.config.dev
    const dev = devFlag ? 'development' : 'production'
    return dev
  }
  public isDev() {
    if (this.getEnv() === 'development') {
      return true
    } else {
      return false
    }
  }
  public getLoggingLevel() {
    const level =
      this.config.logging && this.config.logging.level
        ? this.config.logging.level
        : 'info'
    return level
  }
  public getDatabaseConfig() {
    if (this.getEnv() === 'development') {
      return this.config.database.dev
    } else {
      return this.config.database.prod
    }
  }
  public getServerConfig() {
    if (this.getEnv() === 'development') {
      return this.config.server.dev
    } else {
      return this.config.server.prod
    }
  }
}
