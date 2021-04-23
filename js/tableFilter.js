// Fiter resource by the input to show you want to check
function filterResource(obj) {
    setTimeout(function() {
        var table = document.getElementById('excel');
        var column = 1;
        for (var i = 1; i < table.rows.length; i++) {
            var type = table.rows[i].cells[column].innerHTML;
            var result = type.match(obj.value) ? "" : "none"

            table.rows[i].style.display = result
        }
    }, 200);
}

// Fiter type by the input to show you want to check
function filterType(obj) {
    setTimeout(function() {
        var table = document.getElementById('excel');
        var column = 2;
        for (var i = 1; i < table.rows.length; i++) {
            var type = table.rows[i].cells[column].innerHTML;
            var result = type.match(obj.value) ? "" : "none"

            table.rows[i].style.display = result
        }
    }, 200);
}
