$(function() {

    // Function to load the file complete.json
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
        // Do something with the response ...

        // Parse file complete.json
        dataComplete = JSON.parse(response);

        // Reverse array order to have episode 0 as first element
        dataComplete = dataComplete.reverse();

        // Store array length from complete.json in variable
        var dataCompleteLength = dataComplete.length;

        // Create arrays for all complete.json elements and some more
        var arrayPubdate = [];
        var arrayPubday = [];
        var arrayUrl = [];
        var arrayNumber = [];
        var arraySpecials = [];
        var arrayPubtime = [];
        var arrayPubtimeInteger = [];
        var arrayDuration = [];
        var arrayDurationInteger = [];
        var arrayDurationIntegerMean = [];
        var arrayDurationIntegerMin = [];
        var arrayTitlemain = [];

        // Add elements to arrays
        for (i = 0; i < dataCompleteLength; i++) {
            arrayPubdate.push(dataComplete[i].pubdate);
            arrayPubday.push(dataComplete[i].pubday);
            arrayUrl.push(dataComplete[i].url.toString());
            arrayNumber.push(dataComplete[i].number);
            arraySpecials.push(dataComplete[i].specials.toString());
            arrayPubtime.push(dataComplete[i].pubtime);
            arrayPubtimeInteger.push(dataComplete[i].pubtime_integer);
            arrayDuration.push(dataComplete[i].duration);
            arrayDurationInteger.push(dataComplete[i].duration_integer);
            var durMin = dataComplete[i].duration_integer;
            durMin = durMin / 60;
            arrayDurationIntegerMin.push(durMin)
            arrayTitlemain.push(dataComplete[i].titlemain.toString());
        }

        // Create variables with certain values
        // Create mean of duration as integer in minutes
        var meanDurationInteger = arrayDurationInteger.reduce(add, 0);

        function add(a, b) {
            return ((a + b) / dataCompleteLength);
        }

        for (i = 0; i < dataCompleteLength; i++) {
            arrayDurationIntegerMean.push(meanDurationInteger);
        }

        // Begin charts duration and episode number ****************************
        // Load data into and build chart testchart1
        TESTER = document.getElementById('testchart1');
        var data = [{
            x: arrayNumber,
            y: arrayDurationIntegerMin,
            type: 'bar',
            name: 'Dauer [min]'
        }];
        var layout = {
            showlegend: true,
            xaxis: {
                title: 'Nummer',
                showgrid: true,
                zeroline: false
            },
            yaxis: {
                title: 'Dauer [min]',
                showline: false
            },
            autosize: true,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            },
            plot_bgcolor: '#c7c7c7'
        };
        Plotly.plot(TESTER, data, layout);

        // Load data into and build chart testchart2
        TESTER2 = document.getElementById('testchart2');
        var data = [{
            x: arrayNumber,
            y: arrayDurationIntegerMin,
            type: 'scatter',
            name: 'Dauer [min]'
        }];
        var layout = {
            title: 'Title',
            showlegend: false,
            xaxis: {
                title: 'Nummer',
                showgrid: true,
                zeroline: true
            },
            yaxis: {
                title: 'Dauer [min]',
                showline: false
            },
            autosize: true,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            },
            plot_bgcolor: '#c7c7c7'
        };
        Plotly.plot(TESTER2, data, layout);

        // Load data into and build chart testchart3
        TESTER3 = document.getElementById('testchart3');
        var data = [{
            x: arrayNumber,
            y: arrayDurationIntegerMin,
            fill: 'tozeroy',
            type: 'scatter',
            name: 'Dauer [min]'
        }];
        var layout = {
            showlegend: false,
            xaxis: {
                title: 'Nummer',
                showgrid: true,
                zeroline: true
            },
            yaxis: {
                title: 'Dauer [min]',
                showline: false
            },
            autosize: true,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            },
            plot_bgcolor: '#c7c7c7'
        };
        Plotly.plot(TESTER3, data, layout);

        // Load data into and build chart testchart4
        TESTER4 = document.getElementById('testchart4');
        var data = [{
            values: arrayDurationIntegerMin,
            labels: arrayNumber,
            type: 'pie',
            name: 'Dauer [min]'
        }];
        var layout = {
            showlegend: true,
            autosize: true,
        };
        Plotly.plot(TESTER4, data, layout);


        // Begin charts duration and date **************************************
        // Load data into and build chart durationDateLine
        durDateLine = document.getElementById('durationDateLine');
        var trace1 = {
            x: arrayPubdate,
            y: arrayDurationIntegerMin,
            text: arrayTitlemain,
            mode: 'lines+markers',
            // hoverinfo: 'all',
            type: 'scatter',
            name: 'Dauer [min]',
            line: {
                shape: 'Dauer [min]'
            }
        };
        var trace2 = {
            x: arrayPubdate,
            y: arrayDurationIntegerMean,
            mode: 'lines',
            name: '⌀ Folgenlänge',
            line: {
                dash: 'dot',
                width: 2,
                color: 'rgb(255, 0, 0)'
            }
        };
        var layout = {
            font: {
                family: 'monospace',
                color: '#000000'
            },
            hovermode: 'closest',
            showlegend: true,
            xaxis: {
                title: 'Datum',
                showgrid: true,
                zeroline: true
            },
            yaxis: {
                title: 'Dauer [min]',
                showline: false
            },
            autosize: true,
            margin: {
                l: 60,
                r: 10,
                b: 60,
                t: 10,
                pad: 4
            },
            plot_bgcolor: '#e0e0e0'
        };
        var data = [trace1, trace2];
        Plotly.plot(durDateLine, data, layout);

        // Load data into and build chart durationDateArea
        durDateArea = document.getElementById('durationDateArea');
        var trace1 = {
            x: arrayPubdate,
            y: arrayDurationIntegerMin,
            fill: 'tozeroy',
            type: 'scatter',
            name: 'Dauer [min]'
        };
        var trace2 = {
            x: arrayPubdate,
            y: arrayDurationIntegerMean,
            mode: 'lines',
            name: '⌀ Folgenlänge',
            line: {
                dash: 'dot',
                width: 2,
                color: 'rgb(255, 0, 0)'
            }
        };
        var layout = {
            title: 'Title',
            showlegend: false,
            xaxis: {
                title: 'Nummer',
                showgrid: true,
                zeroline: true
            },
            yaxis: {
                title: 'Dauer [min]',
                showline: false
            },
            autosize: true,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            },
            plot_bgcolor: '#c7c7c7'
        };
        var data = [trace1, trace2];
        Plotly.plot(durDateArea, data, layout);

        // Begin charts duration and year **************************************
        // Load data into and build chart durationYearBar

        // Load data into and build chart durationYearLine

        // Load data into and build chart durationYearArea

        // Load data into and build chart durationYearPie



        // Begin charts duration and month **************************************
        // Load data into and build chart durationMonthBar

        // Load data into and build chart durationMonthLine

        // Load data into and build chart durationMonthArea

        // Load data into and build chart durationMonthPie



        // Console output for testing
        // console.log(test);
        // console.log('dataCompleteLength: ' + dataCompleteLength);
        // console.log('meanDurationInteger ' + meanDurationInteger);
    });
});
