import { sequelize } from '../../../modules/baseDao'
import { findSecondCtgyAndThirdCtgyByFirstCtgy } from '../defModel/oneToMany'

class CtgyDao {
  static async findSecondCtgyAndThirdCtgyByFirstCtgyDao(firstctgyid: number) {
    const res = await findSecondCtgyAndThirdCtgyByFirstCtgy(firstctgyid)
    return res
  }

  static async findSecondCtgyAndThirdCtgyByFirstCtgyDao2(firstctgyid: number) {
    const sql = `select * from secondctgy sc inner join thirdctgy tc on sc.secondctgyid = tc.secondctgyid where sc.firstctgyid = ${firstctgyid}`
    const res = (await sequelize.query(sql))[0]
    return res
  }
}

export const {
  findSecondCtgyAndThirdCtgyByFirstCtgyDao,
  findSecondCtgyAndThirdCtgyByFirstCtgyDao2
} = CtgyDao
