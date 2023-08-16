import { secondCtgyModel } from './secondCtgyModel'
import { thirdCtgyModel } from './thirdCtgyModel'

secondCtgyModel.hasMany(thirdCtgyModel, {
  as: 'thirdCtgy',
  foreignKey: 'secondctgyid'
})

thirdCtgyModel.belongsTo(secondCtgyModel, {
  as: 'secondCtgy',
  foreignKey: 'secondctgyid',
  targetKey: 'secondctgyid'
})

// 查询
export const findSecondCtgyAndThirdCtgyByFirstCtgy = async (
  firstctgyid: number
) => {
  const res = await secondCtgyModel.findAll({
    raw: true,
    where: { firstctgyid },
    include: [
      {
        model: thirdCtgyModel,
        as: 'thirdCtgy'
      }
    ]
  })

  return res
}
