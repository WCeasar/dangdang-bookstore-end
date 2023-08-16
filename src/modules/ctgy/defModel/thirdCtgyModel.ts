import { sequelize } from '../../../modules/baseDao'
import { DataType } from 'sequelize-typescript'

class ThirdCtgyModel {
  static createModel() {
    const model = sequelize.define('thirdctgy', {
      thirdctgyid: {
        type: DataType.INTEGER,
        field: 'thirdctgyid',
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      thirdctgyname: {
        type: DataType.STRING,
        field: 'thirdctgyname',
        allowNull: false
      },
      secondctgyid: {
        type: DataType.INTEGER,
        allowNull: false
      }
    })
    model.sync({ force: false })
    return model
  }
}

export const thirdCtgyModel = ThirdCtgyModel.createModel()
