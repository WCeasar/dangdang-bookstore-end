import Router from "koa-router";
import Koa from "koa";

const router = new Router();

router.prefix("/userModule");

router.get("/findUserInfo/:username", (ctx: Koa.Context) => {
  const { username } = ctx.params;
  ctx.body = username;
});

router.post("/addUser", (ctx: Koa.Context) => {
  const userinfo: UserInfo = ctx.request.body;
  ctx.body = userinfo;
});

type UserInfo = {
  username: "zs";
  password: "123";
};

module.exports = router;