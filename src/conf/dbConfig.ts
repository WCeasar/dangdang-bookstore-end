/* 数据库连接配置接口 **/
interface DbConCof {
  host: string
  port: number | any
  user: string
  password: string
  database: string
}

/** 生产环境和开发环境下不同的配置接口 */
interface EnvDbConf {
  dev: DbConCof
  prod: DbConCof
}

const isString = (data: any): data is String => {
  return typeof data === 'string'
}

const isDbConCofKey = (data: any): data is keyof DbConCof => {
  return (
    data === 'host' ||
    data === 'port' ||
    data === 'user' ||
    data === 'password' ||
    data === 'database'
  )
}
class DbConfig {
  static dbConfig: DbConfig = new DbConfig()
  env!: keyof EnvDbConf
  envDbConf!: EnvDbConf
  constructor() {
    console.log(process.env.NODE_ENV === 'dev')
    this.init()
  }

  init() {
    this.env = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'
    console.log(process.env.NODE_ENV === 'dev')
    this.envDbConf = {
      dev: {
        host: '127.0.0.1',
        port: 3306,
        user: 'admin',
        password: 'root',
        database: 'dangdang'
      },
      prod: {
        host: '127.0.0.1',
        port: 3306,
        user: 'admin',
        password: '123456',
        database: 'dangdang'
      }
    }
  }

  setConf<T extends Record<keyof DbConCof, any>>(data: DbConCof): void
  setConf<K extends keyof DbConCof>(key: K, value: DbConCof[K]): void
  setConf(data: any, value?: any): void {
    if (isDbConCofKey(data) && data.length > 0) {
      this.envDbConf[this.env][data] = value
    } else {
      this.envDbConf[this.env] = data
    }
  }

  getConf(): DbConCof
  getConf(key: keyof DbConCof): any
  getConf(data?: any) {
    if (isDbConCofKey(data) && data.length > 0) {
      console.log(this.env)
      const value = this.envDbConf[this.env][data]
      console.log(value, 'value')
      return value
    } else {
      return this.envDbConf[this.env]
    }
  }
}

export default DbConfig.dbConfig
