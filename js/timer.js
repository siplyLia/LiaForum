const time = {
    h: 0,
    m: 0,
    s: 0
}

setInterval(function () {
    var date = new Date()

    time.h = date.getHours()
    time.m = date.getMinutes()
    time.s = date.getSeconds()

    time.h = (time.h < 10) ? '0' + time.h : time.h
    time.m = (time.m < 10) ? '0' + time.m : time.m
    time.s = (time.s < 10) ? '0' + time.s : time.s

    document.getElementById('time').innerHTML = time.h + ':' + time.m + ':' + time.s;
}, 1000);
$('button').on('click', function () {
    $('.wrap').toggleClass('day night');
});