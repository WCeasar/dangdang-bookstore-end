import { DataTypes } from 'sequelize'
import { Column, Model, Table } from 'sequelize-typescript'

@Table({
  tableName: 'userinfo'
})
export default class userModel extends Model<userModel> {
  @Column({
    type: DataTypes.INTEGER,
    field: 'userid',
    autoIncrement: true,
    primaryKey: true
  })
  userid!: number

  @Column({
    type: DataTypes.STRING,
    field: 'username',
    allowNull: false
  })
  username!: string

  @Column({
    type: DataTypes.STRING,
    field: 'address',
    allowNull: true
  })
  address!: string

  @Column({
    type: DataTypes.STRING,
    field: 'password',
    allowNull: false
  })
  password!: string

  @Column({
    type: DataTypes.INTEGER,
    field: 'valid',
    defaultValue: 1
  })
  valid!: number
}
