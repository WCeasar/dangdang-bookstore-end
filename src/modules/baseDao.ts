import { Sequelize } from 'sequelize-typescript'
import dbConfig from '../conf/dbConfig'
import path from 'path'
import logUtils from '../utils/logUtils'

class BaseDao {
  static baseDao: BaseDao = new BaseDao()
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
      },
      pool: {
        max: 10,
        min: 5,
        idle: 10000,
        acquire: 1000
      }
    })
    this.sequelize = sequelize
  }

  addModel() {
    const modelPath = path.join(process.cwd(), 'src/modules/decorModel')
    logUtils.debug('addModels...')
    this.sequelize.addModels([modelPath])
  }
}

const baseDao = BaseDao.baseDao
baseDao.addModel()

export default baseDao

export const { sequelize } = baseDao
