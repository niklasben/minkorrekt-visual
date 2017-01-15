$(function() {

    // Function to load the JSON File
    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data/complete.json', true);
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // .open will NOT return a value but simply returns undefined in async mode so use a callback
                callback(xobj.responseText);
            }
        }
        xobj.send(null);
    }

    // Call to function with anonymous callback
    loadJSON(function(response) {
        // Do Something with the response e.g.

        // Parse JSON File
        data = JSON.parse(response);

        // Load JSON into table
        $('#table').bootstrapTable({
            data: data
        });
    });
});
