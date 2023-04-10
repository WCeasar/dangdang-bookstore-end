import Router from "koa-router";
import Koa from "koa";
import userDao from "../dao/userDao";
import {
  addUser,
  findAllUser,
  findAllUserByProp,
  findUserByUsernameAndPassword,
  findUserByLike,
  findUserByNameAndAddress,
  findUserByGroupAddressAndCountValid,
  findUserPage,
} from "../dao/userDaoDefine";
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

/** 根据用户名和密码来查询某一条数据 */
router.get(
  "/findUserByUsernameAndPassword/:username/:password",
  async (ctx: Koa.Context) => {
    const { username, password } = ctx.params;
    const user = await findUserByUsernameAndPassword(username, password);
    ctx.body = ctx.success(user);
  }
);

/** 模糊查询 */
router.get("/findUserByLike/:likeData", async (ctx: Koa.Context) => {
  const { likeData } = ctx.params;
  const userArr = await findUserByLike(likeData);
  ctx.body = ctx.success(userArr);
});

/** 查询姓名为带l和城市为beijing的数据的数据 */
router.get("/findUserByNameAndAddress", async (ctx: Koa.Context) => {
  const userArr = await findUserByNameAndAddress();
  ctx.body = ctx.success(userArr);
});

/** 在合法条件下查询以城市进行分类的数据以及并统计合法数 */
router.get("/findUserByGroupAddressAndCountValid", async (ctx: Koa.Context) => {
  const userArr = await findUserByGroupAddressAndCountValid();
  ctx.body = ctx.success(userArr);
});

/** 在合法条件下查询以城市进行分类的数据以及并统计合法数 */
router.get("/findUserByGroupAddressAndCountValid", async (ctx: Koa.Context) => {
  const userArr = await findUserByGroupAddressAndCountValid();
  ctx.body = ctx.success(userArr);
});

router.get("/findUserPage/:pageNo/:pageSize", async (ctx: Koa.Context) => {
  const { pageNo, pageSize } = ctx.params;
  const userArr = await findUserPage(pageNo, pageSize);
  ctx.body = ctx.success(userArr);
});

module.exports = router;
