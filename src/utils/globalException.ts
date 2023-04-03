/**
 * 全局异常处理中间件
 */

import Koa from "koa";
import logUtils from "./logUtils";

const globalException = async (ctx: Koa.Context, next: Koa.Next) => {
  logUtils.debug("进入异常中间件");
  try {
    await next();
  } catch (error: any) {
    logUtils.info("出现异常");
    ctx.body = ctx.fail(`服务器异常${(error as { message: any }).message}`);
  }
};

export default globalException;
