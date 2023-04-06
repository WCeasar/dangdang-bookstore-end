/* 数据库连接配置接口 **/
interface DbConCof {
  host: string;
  port: number | any;
  user: string;
  password: string;
  database: string;
}

/** 生产环境和开发环境下不同的配置接口 */
interface EnvDbConf {
  dev: DbConCof;
  prod: DbConCof;
}

const isString = (data: any): data is String => {
  return typeof data === "string";
};

const isDbConCofKey = (data: any): data is keyof DbConCof => {
  return (
    data === "host" ||
    data === "port" ||
    data === "user" ||
    data === "password" ||
    data === "database"
  );
};
class DbConfig {
  static dbConfig: DbConfig = new DbConfig();
  env!: keyof EnvDbConf;
  envDbConf!: EnvDbConf;
  constructor() {
    this.init();
  }

  init() {
    this.env = process.env.NODE_ENV === "dev" ? "dev" : "prod";

    this.envDbConf = {
      dev: {
        host: "127.0.0.1",
        port: 3306,
        user: "admin",
        password: "12345",
        database: "dangdang",
      },
      prod: {
        host: "127.0.0.1",
        port: 3306,
        user: "admin",
        password: "123456",
        database: "dangdang",
      },
    };
  }

  setConf<T extends Record<keyof DbConCof, any>>(data: DbConCof): void;
  setConf<K extends keyof DbConCof>(key: K, value: DbConCof[K]): void;
  setConf(data: any, value?: any): void {
    if (isDbConCofKey(data) && data.length > 0) {
      // const temp = this.envDbConf[this.env][data]; // T1 const temp: string | number
      // this.envDbConf[this.env][data] = value; // T2 不能将类型“any”分配给类型“never”。
      this.envDbConf[this.env][data] = value;
    } else {
      this.envDbConf[this.env] = data;
    }
  }

  getConf(): DbConCof;
  getConf(key: keyof DbConCof): any;
  getConf(data?: any) {
    if (isDbConCofKey(data) && data.length > 0) {
      const value = this.envDbConf[this.env][data];
      return value;
    } else {
      return this.envDbConf[this.env];
    }
  }
}

export default DbConfig.dbConfig;
