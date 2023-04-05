import { UserInfo } from "../interfaces/UserInfo";
import logUtils from "../utils/logUtils";
import { isNotEmpty } from "../utils/stringUtils";
import baseDao from "./baseDao";

class UserDao {
  static userDao: UserDao = new UserDao();

  findUserInfo(username: string, password: string) {
    logUtils.debug("进入findUserInfo");
    let sql = `select * from userInfo where 1=1`;

    if (isNotEmpty(username)) {
      sql += ` and username="${username}"`;
    }

    if (isNotEmpty(password)) {
      sql += ` and password="${password}"`;
    }
    console.log(sql);
    return baseDao.query<UserInfo[]>(sql);
  }
}

export default UserDao.userDao;
