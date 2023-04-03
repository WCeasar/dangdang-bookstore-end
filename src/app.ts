import Koa from "koa";

import allRouterLoader from "./utils/allRouterLoader";
import dbConfig from "./conf/dbConfig";
dbConfig.setConf("port", 9999);

console.log(dbConfig.getConf());
const app = new Koa();

allRouterLoader.init(app);
