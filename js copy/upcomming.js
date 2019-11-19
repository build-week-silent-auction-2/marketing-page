function makeTable(container, data) {
    var table = $("<table/>").addClass('divTable');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>").addClass('divTableRow');
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}
let inp = document.createElement('input');
$(document).ready(function() {
    var data = [["Date", "Time", "Charitable?"], //headers
                ["11/20/19 ", "10:00am ", "X"], 
                ["11/25/19 ", "12:00pm ", "_"], 
                ["11/30/19 ", " 5:00pm ", "X"],
                ["12/2/19 ", " 9:00am ", "X"],
                ["12/5/19 ", " 2:00pm ", "_"],
                ["12/13/19 ", " 3:00pm ", "X"],
                ["12/17/19 ", " 10:00pm ", "X"],
                ["12/17/19 ", " 2:00pm ", "X"],
                ["12/20/19 ", " 11:00am ", "_"],
                ["12/21/19 ", " 2:30pm ", "X"]];
    let listings = makeTable($(document.body), data);
});

