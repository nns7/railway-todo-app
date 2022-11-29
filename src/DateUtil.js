import { format, formatDistanceStrict, parse } from "date-fns";
import { ja } from "date-fns/locale";

export function showJST(limit) {
  const limitDate = parse(limit, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date());
  limitDate.setHours(limitDate.getHours() + 9);
  return format(limitDate, "yyyy年MM月dd日 HH時mm分");
}

export function timeRemainingFromNow(limit) {
  const limitDate = parse(limit, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date());
  limitDate.setHours(limitDate.getHours() + 9);
  const nowDate = new Date();
  return limitDate > nowDate
    ? formatDistanceStrict(limitDate, nowDate, { locale: ja })
    : "期限切れ";
}
