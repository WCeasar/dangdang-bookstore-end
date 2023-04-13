import Koa from "koa";

import allRouterLoader from "./utils/allRouterLoader";
import dbConfig from "./conf/dbConfig";

const app = new Koa();

allRouterLoader.init(app);
