import mysql, { Connection } from "mysql";
import dbConfig from "../conf/dbConfig";

class BaseDao {
  static baseDao: BaseDao = new BaseDao();
  con!: Connection;

  constructor() {
    this.connection();
  }

  connection() {
    this.con = mysql.createConnection(dbConfig.getConf());
    this.con.connect();
  }

  query<T>(sql: string) {
    return new Promise<T>((resolve, reject) => {
      this.con.query(sql, (error: any, result: T) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default BaseDao.baseDao;
