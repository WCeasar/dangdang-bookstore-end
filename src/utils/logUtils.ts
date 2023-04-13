import log4js from 'log4js'

enum levelInfo {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal'
}

class LogUtils {
  static logUtils: LogUtils = new LogUtils()

  logger!: log4js.Logger

  constructor() {
    this.config()
  }

  config() {
    log4js.configure({
      appenders: {
        console: { type: 'console' },
        debug_file: { type: 'file', filename: 'mylog/debug.log' }
      },
      categories: {
        default: {
          level: levelInfo.DEBUG,
          appenders: ['console', 'debug_file']
        },
        info: { level: levelInfo.INFO, appenders: ['console'] }
      }
    })
  }

  getCategories(level: levelInfo) {
    this.logger = log4js.getLogger(level)
  }

  debug(input: string) {
    this.getCategories(levelInfo.DEBUG)
    this.logger.debug(input)
  }

  info(input: string) {
    this.getCategories(levelInfo.INFO)
    this.logger.info(input)
  }
}

export default LogUtils.logUtils
