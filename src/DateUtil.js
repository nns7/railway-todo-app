import { format, formatDistanceStrict, parse } from "date-fns";
import { ja } from "date-fns/locale";

export function showJST(utc) {
  const timeUtc = parse(utc, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date());
  timeUtc.setHours(timeUtc.getHours() + 9);
  return format(timeUtc, "yyyy年MM月dd日 HH時mm分");
}

export function timeRemainingFromNow(utc) {
  const timeUtc = parse(utc, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date());
  timeUtc.setHours(timeUtc.getHours() + 9);
  return formatDistanceStrict(timeUtc, new Date(), { locale: ja });
}
