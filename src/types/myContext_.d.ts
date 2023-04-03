import "koa";

declare module "koa" {
  export interface ContextDelegatedRequest {
    params: any;
  }
}
