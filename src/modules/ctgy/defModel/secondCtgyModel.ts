import { DataType } from 'sequelize-typescript'
import { sequelize } from '../../../modules/baseDao'

class SecondCtgyModel {
  static createModel() {
    const model = sequelize.define('secondctgy', {
      secondctgyid: {
        type: DataType.INTEGER,
        field: 'secondctgyid',
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      secondctgyname: {
        type: DataType.STRING,
        field: 'secondctgyname',
        allowNull: false
      },
      firstctgyid: {
        type: DataType.INTEGER,
        allowNull: false
      }
    })

    model.sync({ force: false })
    return model
  }
}

export const secondCtgyModel = SecondCtgyModel.createModel()
