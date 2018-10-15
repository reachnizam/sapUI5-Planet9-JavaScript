oTableShowActiveColumns.setVisibleRowCount(myArr.length);
oTableShowActiveColumns.addDelegate({

    onAfterRendering: function() {
        // oTableShowActiveColumns.setRows(50);
        for (var k = 0; k < myArr.length; k++) {
            if (myArr[k].ExceptionFlag === 'X') {
                var cellID = oTableShowActiveColumns.getRows()[k].getId();
                //oTableShowActiveColumns.getRows()[k].setEditable(false);
                $("#" + cellID).css("background-color", "red");

            } else {
                var id = oTableShowActiveColumns.getRows()[k].getId();
                $("#" + id).css("background-color", "green");
            }
        }
        myArr = [];

    }
});

// when you want to apply color to all the rows based on certain condition , then you have to set the table set visibility as 0 and in code set the table visibility as length of your oDATA obj

