import Router from 'koa-router'
import Koa from 'koa'

import { findSecondCtgyAndThirdCtgyByFirstCtgyDao2 } from '../modules/ctgy/dao/ctgyDao'

const router = new Router()

router.prefix('/ctgyModule')

router.get(
  '/findSecondCtgyAndThirdCtgyByFirstCtgy/:firstctgyid',
  async (ctx: Koa.Context) => {
    const { firstctgyid } = ctx.params

    console.log(firstctgyid)
    const res = await findSecondCtgyAndThirdCtgyByFirstCtgyDao2(
      parseInt(firstctgyid)
    )

    ctx.body = ctx.success(res)
  }
)

module.exports = router
