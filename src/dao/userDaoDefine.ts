import { Op } from "sequelize";
import { userModel } from "../defineModel";
import { UserInfo } from "../interfaces/UserInfo";
import { sequelize } from "./baseDaoDefine";
class UserDaoDefine {
  // 添加用户
  static addUser(userinfo: Pick<UserInfo, keyof UserInfo>) {
    return userModel.create(userinfo);
  }

  // 查询所有用户
  static findAllUser() {
    return userModel.findAll({
      raw: true, // 在后端得到的时候只需要一些具体数据,去除一些掺杂数据
    });
  }

  // 根据具体属性来查询数据
  static findAllUserByProp() {
    return userModel.findAll({
      raw: true,
      attributes: ["username", "password"],
    });
  }

  // 根据姓名和密码来查询某一条数据
  static findUserByUsernameAndPassword(username: string, password: string) {
    console.log(username, password);
    return userModel.findOne({
      raw: true,
      where: {
        [Op.and]: [{ username }, { password }],
      },
    });
  }

  // 查询姓名中带l的数据
  static findUserByLike(likeData: string) {
    const data = `%${likeData}%`;
    return userModel.findAll({
      raw: true,
      where: {
        username: {
          [Op.like]: data,
        },
      },
    });
  }

  // 查询姓名为带l和城市为beijing的数据的数据
  static findUserByNameAndAddress() {
    return userModel.findAll({
      raw: true,
      where: {
        [Op.and]: [{ username: { [Op.like]: "%l%" } }, { address: "beijing" }],
      },
    });
  }

  // 在合法条件下查询以城市进行分类的数据以及并统计合法数
  static findUserByGroupAddressAndCountValid() {
    return userModel.findAll({
      raw: true,
      group: "address",
      attributes: [
        ["address", "地址"],
        [sequelize.fn("COUNT", sequelize.col("valid")), "合法"],
      ],
      where: {
        valid: 1,
      },
    });
  }

  // 分页
  static findUserPage(pageNo: string, pageSize: string) {
    return userModel.findAll({
      raw: true,
      offset: (parseInt(pageNo) - 1) * parseInt(pageSize),
      limit: parseInt(pageSize),
    });
  }
}

export const {
  addUser,
  findAllUser,
  findAllUserByProp,
  findUserByUsernameAndPassword,
  findUserByLike,
  findUserByNameAndAddress,
  findUserByGroupAddressAndCountValid,
  findUserPage,
} = UserDaoDefine;
