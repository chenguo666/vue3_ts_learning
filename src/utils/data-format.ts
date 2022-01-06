const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format);
}
export function moramtTimeStamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  return '';
}
