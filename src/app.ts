import Koa from "koa";

import allRouterLoader from "./utils/allRouterLoader";
import dbConfig from "./conf/dbConfig";

const app = new Koa();

dbConfig.setConf("password", "123456");
console.log(dbConfig.getConf());

allRouterLoader.init(app);
