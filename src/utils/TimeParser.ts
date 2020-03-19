interface FormatObj {
    [y: string]: number;
      m : number;
      d: number;
      h: number;
      i: number;
      s: number;
      a: number;
  }
  /**
   * 将时间戳转化为时间字符串
   * @description 时间戳 => '2020.1.09 12:22:22'
   * @author chrislee
   * @since 2020/2/10
   */
  export function parseTime(time: number|string, cFormat?: string) {
    if (arguments.length === 0 || time === null || time === '') {
      return null;
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date: Date;
    if (typeof time === 'object') {
      date = time;
    } else {
      if (('' + time).length === 10) {time = parseInt(String(time)) * 1000; }
      date = new Date(time);
    }
    const formatObj: FormatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = String(formatObj[key]);
      if (key === 'a') {return ['一', '二', '三', '四', '五', '六', '日'][Number(value) - 1] };
      if (result.length > 0 && Number(value) < 10) {
        value = '0' + value;
      }
      return value || '0';
    })
    return time_str;
  }
  