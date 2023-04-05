class StringUtils {
  static isNotEmpty(str: string) {
    return str.length > 0 && str !== null;
  }
}

export const { isNotEmpty } = StringUtils;
