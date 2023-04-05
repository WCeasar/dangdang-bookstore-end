import Router from "koa-router";
import Koa from "koa";
import userDao from "../dao/userDao";

const router = new Router();

router.prefix("/userModule");

router.get("/findUserInfo/:username/:password", async (ctx: Koa.Context) => {
  const { username, password } = ctx.params;

  const UserInfoArr = await userDao.findUserInfo(username, password);

  ctx.body = ctx.success(UserInfoArr[0]);
});

router.post("/addUser", (ctx: Koa.Context) => {});

module.exports = router;
