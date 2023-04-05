import Koa from "koa";

import allRouterLoader from "./utils/allRouterLoader";

const app = new Koa();

allRouterLoader.init(app);
