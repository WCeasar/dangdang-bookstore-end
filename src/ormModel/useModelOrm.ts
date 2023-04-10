import { Column, DataType, Model, Table } from "sequelize-typescript";
import { UserInfo } from "../interfaces/UserInfo";

@Table({
  tableName: "userinfo",
})
class userModel extends Model<UserInfo> {
  @Column({
    type: DataType.INTEGER,
    field: "userid",
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  userid!: number;

  @Column({
    type: DataType.STRING,
    field: "username",
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    field: "address",
    allowNull: true,
  })
  address!: string;

  @Column({
    type: DataType.STRING,
    field: "password",
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.INTEGER,
    field: "valid",
    defaultValue: 1,
  })
  valid!: number;

  @Column({
    type: DataType.DATE,
    field: "birth",
    allowNull: true,
  })
  birth!: string;

  @Column({
    type: DataType.DATE,
    field: "createdAt",
    allowNull: true,
  })
  createdAt!: string;

  @Column({
    type: DataType.DATE,
    field: "updatedAt",
    allowNull: true,
  })
  updatedAt!: string;
}
