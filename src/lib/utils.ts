/**
 *
 * @param utc_time  2020-04-16T03:29:16.044Z
 */
function formDate(utc_time: String): any {
    const T_pos: any = utc_time.indexOf("T");
    const Z_pos: any = utc_time.indexOf("Z");
    const year_month_day: any = utc_time.substr(0, T_pos);
    const hour_minute_second: any = utc_time.substr(T_pos + 1, Z_pos - T_pos - 1);
    const new_date: any = year_month_day + " " + hour_minute_second;

    // 处理成为时间戳
    let timestamp: any = new Date(Date.parse(new_date)).getTime();
    // timestamp = timestamp.getTime();
    // timestamp = timestamp / 1000;
    timestamp = timestamp / 1000 + 8 * 60 * 60;

    const nowDate: any = new Date().getTime() / 1000;

    const after_time: any = nowDate - timestamp;

    const minute: any = Math.ceil(after_time / 60);
    const hour: any = Math.ceil(minute / 60);
    const day: any = Math.ceil(hour / 24);
    const month: any = Math.ceil(day / 30);
    const year: any = Math.ceil(month / 12);
    if (year > 1) {
        return `${year}年`;
    }
    if (month > 1) {
        return `${month}月`;
    }
    if (day > 1) {
        return `${day}天`;
    }
    if (hour > 1) {
        return `${hour}小时`;
    }

    return `${minute}分钟`;
}

export { formDate };