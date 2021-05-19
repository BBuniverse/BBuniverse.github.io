function filter(obj) {
    setTimeout(function() {
        var bound = document.getElementById("input")
        var boxs = document.querySelectorAll("div.feeds");
        for (i = 0; i < boxs.length; i++) {
            // Show all item at first
            boxs[i].style.display = "";
            if (i < bound.value) {
                boxs[i].style.background = "#fffadd";
            } else {
                // Hidden reset item
                boxs[i].style.display = "none";
            }
        }
    }, 200);
}
