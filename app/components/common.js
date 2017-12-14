Date.prototype.Format = function (fmt, local, utc) {
  let tempTime = this;
  let o = {};
  if (utc) {
    o = {
      "y+": tempTime.getUTCFullYear(),
      "M+": tempTime.getUTCMonth() + 1,                 //月份
      "d+": tempTime.getUTCDate(),                    //日
      "h+": tempTime.getUTCHours(),                   //小时
      "m+": tempTime.getUTCMinutes(),                 //分
      "s+": tempTime.getUTCSeconds(),                 //秒
      "q+": Math.floor((tempTime.getUTCMonth() + 3) / 3), //季度
      "S+": tempTime.getMilliseconds()             //毫秒
    };
  } else {
    o = {
      "y+": tempTime.getFullYear(),
      "M+": tempTime.getMonth() + 1,                 //月份
      "d+": tempTime.getDate(),                    //日
      "h+": tempTime.getHours(),                   //小时
      "m+": tempTime.getMinutes(),                 //分
      "s+": tempTime.getSeconds(),                 //秒
      "q+": Math.floor((tempTime.getMonth() + 3) / 3), //季度
      "S+": tempTime.getMilliseconds()             //毫秒
    };
  }

  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      if (k == "y+") {
        fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
      }
      else if (k == "S+") {
        let lens = RegExp.$1.length;
        lens = lens == 1 ? 3 : lens;
        fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1, lens));
      }
      else {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
  }
  if (local) {
    let timeOff = new Date().getTimezoneOffset() / 60;
    let sign = Math.sign(timeOff);
    let zone = (("00" + Math.abs(timeOff) + "00").substr(("" + Math.abs(timeOff)).length));
    zone = sign === -1 ? '+' + zone.toString() : '-' + zone.toString();
    fmt = fmt + ' ' + zone;
  }
  return fmt;
};