const clock: HTMLElement | any = document.getElementsByClassName("clock")[0]
setInterval(updateNewTime, 1000);
updateNewTime();
function updateNewTime() {
    var cd = new Date();
    let hh = padding(cd.getHours());
    let mm = padding(cd.getMinutes());
    let ss = padding(cd.getSeconds());
    let time = `${hh}:${mm}:${ss}`;
    let yyyy = cd.getFullYear();
    let MM = padding(cd.getMonth() + 1);
    let dd = padding(cd.getDate());
    let date = `${dd}/${MM}/${yyyy}`;
    clock.getElementsByClassName('date')[0].innerText = date;
    clock.getElementsByClassName('time')[0].innerText = time;
};
function padding(num: number) {
    if (num < 10)
        return '0' + num;
    return num;
}