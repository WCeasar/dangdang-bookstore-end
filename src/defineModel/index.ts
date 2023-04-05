import { sequelize } from "../dao/baseDaoDefine";

class UserInfo {
  createModel() {
    sequelize.define("userinfo", {
      userid: {
        type:DateType
      },
    });
  }
}
