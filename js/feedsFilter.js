function filter(obj) {
    setTimeout(function() {
        var bound = document.getElementById("input")
        var boxs = document.querySelectorAll("div.feeds");
        for (i = 0; i < boxs.length; i++) {
            boxs[i].style.display = "";
            if (i < bound.value) {
                boxs[i].style.background = "#fffadd";
            } else {
                boxs[i].style.display = "none";
            }
        }
    }, 200);
}
