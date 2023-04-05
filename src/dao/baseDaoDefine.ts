import { Sequelize } from "sequelize-typescript";
import dbConfig from "../conf/dbConfig";

class BaseDaoDefine {
  static baseDaoDefine: BaseDaoDefine = new BaseDaoDefine();
  sequelize!: Sequelize;

  constructor() {
    this.initSeqConf();
  }

  initSeqConf() {
    const { database, user, password, host, port } = dbConfig.getConf();

    this.sequelize = new Sequelize(database, user, password, {
      host,
      port,
      dialect: "mysql",
    });
  }
}

export const { sequelize } = BaseDaoDefine.baseDaoDefine;
