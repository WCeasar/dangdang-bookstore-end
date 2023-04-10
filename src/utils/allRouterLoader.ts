/**
 * 路由自动导入中间件
 */
import Koa from "koa";
import body from "koa-body";
import path from "path";
import fs from "fs";
import Router from "koa-router";
import json from "koa-json";
import globalException from "./globalException";
import * as commonResult from "./commonResult";
class AllRouterLoader {
  static allRouterLoader: AllRouterLoader = new AllRouterLoader();
  app!: Koa;

  init(app: Koa) {
    this.app = app;
    Object.assign(this.app.context, commonResult);
    this.app.use(globalException);
    this.loadRouterWrap();

    this.listen();
  }

  // 获取所有的路由文件
  getFiles(dir: string) {
    return fs.readdirSync(dir);
  }

  // 获取所有路由模块文件绝对路径
  getAbsoluteFiles() {
    const dir = path.join(process.cwd(), "./src/router");
    const absolutePathList: string[] = [];
    const routerModuleFileNames = this.getFiles(dir);
    for (const routerModuleFileName of routerModuleFileNames) {
      absolutePathList.push(dir + "\\" + routerModuleFileName);
    }
    return absolutePathList;
  }

  // 加载所有路由模块
  loadRouterWrap() {
    const absolutePathList = this.getAbsoluteFiles();
    this.loadRouter(absolutePathList);
  }

  // koa路由类型守卫
  isRouter(module: any): module is Router {
    return module instanceof Router;
  }

  // 获取根路由
  getRootRouter() {
    const router = new Router();
    router.prefix("/dang");
    router.use(body());
    router.use(json());
    return router;
  }

  // 加载路由模块方法
  loadRouter(absolutePathList: string[]) {
    for (const absolutePath of absolutePathList) {
      const routerModule = require(absolutePath);
      const RootRouter = this.getRootRouter();
      if (this.isRouter(routerModule)) {
        RootRouter.use(routerModule.routes(), routerModule.allowedMethods());
      }

      this.app.use(RootRouter.routes());
    }
  }

  listen() {
    this.app.listen("5003", () => {
      console.log("http://localhost:5003/dang");
    });
  }
}

export default AllRouterLoader.allRouterLoader;
