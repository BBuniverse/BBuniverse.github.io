function change() {
    var date = new Date();
    var mytime = date.toLocaleTimeString();
    document.getElementById('time').innerHTML = mytime;
}
