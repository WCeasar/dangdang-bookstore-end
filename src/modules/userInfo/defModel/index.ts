import { DataType } from 'sequelize-typescript'
import { sequelize } from '../../baseDao'

class UserInfo {
  static createModel() {
    const model = sequelize.define(
      'userinfo',
      {
        userid: {
          type: DataType.INTEGER,
          field: 'userid',
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        username: {
          type: DataType.STRING,
          field: 'username',
          allowNull: false
        },
        password: {
          type: DataType.STRING,
          field: 'password',
          allowNull: false
        },
        valid: {
          type: DataType.INTEGER,
          field: 'valid',
          allowNull: true,
          defaultValue: 1
        },
        address: {
          type: DataType.STRING,
          field: 'address',
          allowNull: true
        },
        birth: {
          type: DataType.DATE,
          field: 'birth',
          allowNull: true
        },
        createdAt: {
          type: DataType.DATE
        },
        updatedAt: {
          type: DataType.DATE
        }
      },
      {
        freezeTableName: true,
        timestamps: true
      }
    )
    // 同步数据库，force的值为true，表若存在则先删除后创建，force的值为false表示表若存在则不创建
    model.sync({ force: false })
    return model
  }
}

export const userModel = UserInfo.createModel()
