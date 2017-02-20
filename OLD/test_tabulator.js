 (function() {

     //create Tabulator on DOM element with id "example-table"
     $("#example-table").tabulator({
         // set height of table (optional)
         height: "320px",
         //fit columns to width of table (optional)
         fitColumns: true,
         //Define Table Columns
         columns: [{
                 title: "number",
                 field: "number",
                 sorter: "number",
             },
             {
                 title: "titlemain",
                 field: "titlemain",
                 sorter: "string",
                 align: "left",
             },
             {
                 title: "specials",
                 field: "specials",
                 sorter: "string",
             },
             {
                 title: "duration",
                 field: "duration",
                 sorter: "time",
                 align: "center"
             },
             {
                 title: "duration_original",
                 field: "duration_original",
                 sorter: "time",
                 align: "center"
             },
             {
                 title: "pubdate",
                 field: "pubdate",
                 sorter: "date",
                 align: "right"
             },
             {
                 title: "pubtime",
                 field: "pubtime",
                 sorter: "time",
                 align: "center"
             },
             {
                 title: "url",
                 field: "url",
                 sorter: "alphanum",
                 align: "left"
             },
         ],
         /*
         // Alert Function onClick
         rowClick: function(e, id, data, row) { //trigger an alert message when the row is clicked
             alert("Row " + id + " Clicked!!!!");
         }, */
     });

     // Function to load the JSON File
     function loadJSON(callback) {

         var xobj = new XMLHttpRequest();
         xobj.overrideMimeType("application/json");
         // xobj.open('GET', 'data/test.json', true);
         xobj.open('GET', 'test.json', true);
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
         jsonresponse = JSON.parse(response);

         // Load JSON into table
         $("#example-table").tabulator("setData", jsonresponse);
     });

 })();
