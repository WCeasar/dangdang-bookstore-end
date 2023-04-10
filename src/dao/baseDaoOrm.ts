import { Sequelize } from "sequelize-typescript";
import dbConfig from "../conf/dbConfig";
import path from "path";

class BaseDaoOrm {
  sequelize!: Sequelize;

  constructor() {
    this.initSeqConf();
  }

  initSeqConf() {
    const { user, password, port, host, database } = dbConfig.getConf();
    const sequelize = new Sequelize(database, user, password, {
      port,
      host,
      dialect: "mysql",
    });
    this.sequelize = sequelize;
    this.addModel();
  }

  addModel() {
    const modelPath = path.join(process.cwd(), "src/ormModel/useModelOrm.ts");
    console.log(modelPath);
  }
}
