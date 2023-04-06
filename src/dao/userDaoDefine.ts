import { userModel } from "../defineModel";
import { UserInfo } from "../interfaces/UserInfo";

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
}

export const { addUser, findAllUser, findAllUserByProp } = UserDaoDefine;
