import { Sequelize } from 'sequelize-typescript'
import dbConfig from '../conf/dbConfig'
import path from 'path'
import logUtils from '../utils/logUtils'

class BaseDaoOrm {
  static baseDaoOrm: BaseDaoOrm = new BaseDaoOrm()
  sequelize!: Sequelize

  constructor() {
    this.initSeqConf()
  }

  initSeqConf() {
    const { user, password, port, host, database } = dbConfig.getConf()
    const sequelize = new Sequelize(database, user, password, {
      port,
      host,
      dialect: 'mysql',
      define: {
        freezeTableName: true,
        timestamps: false
      }
    })
    this.sequelize = sequelize
    this.addModel()
  }

  addModel() {
    const modelPath = path.join(process.cwd(), 'src/ormModel')
    logUtils.debug('addModels...')
    this.sequelize.addModels([modelPath])
  }
}

export default BaseDaoOrm.baseDaoOrm
