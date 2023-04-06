import Router from "koa-router";
import Koa from "koa";
import userDao from "../dao/userDao";
import { addUser, findAllUser, findAllUserByProp } from "../dao/userDaoDefine";
import { UserInfo } from "../interfaces/UserInfo";

const router = new Router();

router.prefix("/userModule");

/** 根据姓名和密码查询某个用户 */
router.get("/findUserInfo/:username/:password", async (ctx: Koa.Context) => {
  const { username, password } = ctx.params;
  const UserInfoArr = await userDao.findUserInfo(username, password);
  ctx.body = ctx.success(UserInfoArr[0]);
});

/** 添加新用户 */
router.post("/addUser", async (ctx: Koa.Context) => {
  const user: UserInfo = ctx.request.body;
  const res = await addUser(ctx.request.body);
  ctx.body = ctx.success(res);
});

/** 查询所有用户 */
router.get("/findAllUser", async (ctx: Koa.Context) => {
  const allUser = await findAllUser();
  console.log(allUser);
  ctx.body = ctx.success(allUser);
});

/** 根据属性投影查询所有用户 */
router.get("/findAllUserByProp", async (ctx: Koa.Context) => {
  const allUser = await findAllUserByProp();
  console.log(allUser);
  ctx.body = ctx.success(allUser);
});

module.exports = router;
