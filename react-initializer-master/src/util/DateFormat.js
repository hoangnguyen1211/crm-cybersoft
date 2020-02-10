export function DateFormat(date) {
    const temp = new Date(date);
    const day = temp.getDate() < 10 ? `0${temp.getDate()}` : temp.getDate();
    let month = temp.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
    const year = temp.getFullYear();
    return `${day}-${month}-${year}`;
}

export function DateTimeFormat(date) {
    const temp = new Date(date);
    const day = temp.getDate() < 10 ? `0${temp.getDate()}` : temp.getDate();
    let month = temp.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
    const year = temp.getFullYear();
    const hour = temp.getHours() < 10 ? `0${temp.getHours()}` : temp.getHours();
    const minute = temp.getMinutes() < 10 ? `0${temp.getMinutes()}` : temp.getMinutes();
    return `${day}-${month}-${year} ${hour}h${minute}`;
}