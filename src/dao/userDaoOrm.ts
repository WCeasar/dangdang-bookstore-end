import './baseDaoOrm'
import userInfoModel from '../ormModel/useModelOrm'

class UserDaoOrm {
  static findAllUser() {
    return userInfoModel.findAll()
  }
}

export default UserDaoOrm
