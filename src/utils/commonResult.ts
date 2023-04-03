/**
 * 通用响应封装
 */
enum statusCode {
  SUCCESS = 200,
  FAIL = 500,
}

class CommonResult {
  static success(data = undefined, message = "") {
    return {
      data,
      message,
      code: statusCode.SUCCESS,
    };
  }
  static fail(message = "") {
    return {
      undefined,
      message,
      code: statusCode.FAIL,
    };
  }
}

export const { success, fail } = CommonResult;
