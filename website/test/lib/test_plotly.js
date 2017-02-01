$(function() {

    // Function to load the file complete.json
    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data/complete.json', true);
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // .open will NOT return a value but simply returns undefined
                // in async mode so use a callback
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

        // Create arrays
        // Create arrays for all complete.json elements
        var arrayPubdate = [];
        var arrayPubday = [];
        var arrayUrl = [];
        var arrayNumber = [];
        var arraySpecials = [];
        var arrayPubtime = [];
        var arrayPubtimeInteger = [];
        var arrayDuration = [];
        var arrayDurationInteger = [];
        var arrayTitlemain = [];

        // Create arrays for new elements
        var arrayMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        var arrayDurationIntegerMean = [];
        var arrayDurationIntegerMin = [];
        var arrayDuration2013 = [];
        var arrayDurationMonth2013 = [];
        var arrayDuration2014 = [];
        var arrayDurationMonth2014 = [];
        var arrayDuration2015 = [];
        var arrayDurationMonth2015 = [];
        var arrayDuration2016 = [];
        var arrayDurationMonth2016 = [];
        var arrayDuration2017 = [];
        var arrayDurationMonth2017 = [];

        // Create variables for years and months
        // Year 2013
        var varDurationSum2013 = 0;
        var varDurationSum201301 = 0;
        var varDurationSum201302 = 0;
        var varDurationSum201303 = 0;
        var varDurationSum201304 = 0;
        var varDurationSum201305 = 0;
        var varDurationSum201306 = 0;
        var varDurationSum201307 = 0;
        var varDurationSum201308 = 0;
        var varDurationSum201309 = 0;
        var varDurationSum201310 = 0;
        var varDurationSum201311 = 0;
        var varDurationSum201312 = 0;
        // Year 2014
        var varDurationSum2014 = 0;
        var varDurationSum201401 = 0;
        var varDurationSum201402 = 0;
        var varDurationSum201403 = 0;
        var varDurationSum201404 = 0;
        var varDurationSum201405 = 0;
        var varDurationSum201406 = 0;
        var varDurationSum201407 = 0;
        var varDurationSum201408 = 0;
        var varDurationSum201409 = 0;
        var varDurationSum201410 = 0;
        var varDurationSum201411 = 0;
        var varDurationSum201412 = 0;
        // Year 2015
        var varDurationSum2015 = 0;
        var varDurationSum201501 = 0;
        var varDurationSum201502 = 0;
        var varDurationSum201503 = 0;
        var varDurationSum201504 = 0;
        var varDurationSum201505 = 0;
        var varDurationSum201506 = 0;
        var varDurationSum201507 = 0;
        var varDurationSum201508 = 0;
        var varDurationSum201509 = 0;
        var varDurationSum201510 = 0;
        var varDurationSum201511 = 0;
        var varDurationSum201512 = 0;
        // Year 2016
        var varDurationSum2016 = 0;
        var varDurationSum201601 = 0;
        var varDurationSum201602 = 0;
        var varDurationSum201603 = 0;
        var varDurationSum201604 = 0;
        var varDurationSum201605 = 0;
        var varDurationSum201606 = 0;
        var varDurationSum201607 = 0;
        var varDurationSum201608 = 0;
        var varDurationSum201609 = 0;
        var varDurationSum201610 = 0;
        var varDurationSum201611 = 0;
        var varDurationSum201612 = 0;
        // Year 2017
        var varDurationSum2017 = 0;
        var varDurationSum201701 = 0;
        var varDurationSum201702 = 0;
        var varDurationSum201703 = 0;
        var varDurationSum201704 = 0;
        var varDurationSum201705 = 0;
        var varDurationSum201706 = 0;
        var varDurationSum201707 = 0;
        var varDurationSum201708 = 0;
        var varDurationSum201709 = 0;
        var varDurationSum201710 = 0;
        var varDurationSum201711 = 0;
        var varDurationSum201712 = 0;

        // Add elements to arrays
        for (i = 0; i < dataCompleteLength; i++) {
            // Add crawled elements to arrays
            arrayPubdate.push(dataComplete[i].pubdate);
            arrayPubday.push(dataComplete[i].pubday);
            arrayUrl.push(dataComplete[i].url.toString());
            arrayNumber.push(dataComplete[i].number);
            arraySpecials.push(dataComplete[i].specials.toString());
            arrayPubtime.push(dataComplete[i].pubtime);
            arrayPubtimeInteger.push(dataComplete[i].pubtime_integer);
            arrayDuration.push(dataComplete[i].duration);
            arrayDurationInteger.push(dataComplete[i].duration_integer);
            arrayTitlemain.push(dataComplete[i].titlemain.toString());
            // Add new elements to arrays
            var durMin = dataComplete[i].duration_integer;
            durMin = durMin / 60;
            arrayDurationIntegerMin.push(durMin)
            // Add values to year arrays
            var date = new Date(dataComplete[i].pubdate);
            var year = date.getFullYear();
            if (year == '2013') {
                varDurationSum2013 += (dataComplete[i].duration_integer / 60);
                arrayDuration2013.push((dataComplete[i].duration_integer / 60));
                var month2013 = date.getMonth();
                if (month2013 == '7') {
                    varDurationSum201308 += (dataComplete[i].duration_integer / 60);
                } else if (month2013 == '8') {
                    varDurationSum201309 += (dataComplete[i].duration_integer / 60);
                } else if (month2013 == '9') {
                    varDurationSum201310 += (dataComplete[i].duration_integer / 60);
                } else if (month2013 == '10') {
                    varDurationSum201311 += (dataComplete[i].duration_integer / 60);
                } else if (month2013 == '11') {
                    varDurationSum201312 += (dataComplete[i].duration_integer / 60);
                }
                // 2014
            } else if (year == '2014') {
                varDurationSum2014 += (dataComplete[i].duration_integer / 60);
                arrayDuration2014.push((dataComplete[i].duration_integer / 60));
                var month2014 = date.getMonth();
                if (month2014 == '0') {
                    varDurationSum201401 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '1') {
                    varDurationSum201402 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '2') {
                    varDurationSum201403 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '3') {
                    varDurationSum201404 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '4') {
                    varDurationSum201405 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '5') {
                    varDurationSum201406 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '6') {
                    varDurationSum201407 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '7') {
                    varDurationSum201408 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '8') {
                    varDurationSum201409 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '9') {
                    varDurationSum201410 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '10') {
                    varDurationSum201411 += (dataComplete[i].duration_integer / 60);
                } else if (month2014 == '11') {
                    varDurationSum201412 += (dataComplete[i].duration_integer / 60);
                }
                // 2015
            } else if (year == '2015') {
                varDurationSum2015 += (dataComplete[i].duration_integer / 60);
                arrayDuration2015.push((dataComplete[i].duration_integer / 60));
                var month2015 = date.getMonth();
                if (month2015 == '0') {
                    varDurationSum201501 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '1') {
                    varDurationSum201502 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '2') {
                    varDurationSum201503 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '3') {
                    varDurationSum201504 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '4') {
                    varDurationSum201505 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '5') {
                    varDurationSum201506 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '6') {
                    varDurationSum201507 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '7') {
                    varDurationSum201508 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '8') {
                    varDurationSum201509 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '9') {
                    varDurationSum201510 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '10') {
                    varDurationSum201511 += (dataComplete[i].duration_integer / 60);
                } else if (month2015 == '11') {
                    varDurationSum201512 += (dataComplete[i].duration_integer / 60);
                }
                // 2016
            } else if (year == '2016') {
                varDurationSum2016 += (dataComplete[i].duration_integer / 60);
                arrayDuration2016.push((dataComplete[i].duration_integer / 60));
                var month2016 = date.getMonth();
                if (month2016 == '0') {
                    varDurationSum201601 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '1') {
                    varDurationSum201602 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '2') {
                    varDurationSum201603 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '3') {
                    varDurationSum201604 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '4') {
                    varDurationSum201605 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '5') {
                    varDurationSum201606 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '6') {
                    varDurationSum201607 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '7') {
                    varDurationSum201608 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '8') {
                    varDurationSum201609 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '9') {
                    varDurationSum201610 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '10') {
                    varDurationSum201611 += (dataComplete[i].duration_integer / 60);
                } else if (month2016 == '11') {
                    varDurationSum201612 += (dataComplete[i].duration_integer / 60);
                }
                // 2017
            } else if (year == '2017') {
                varDurationSum2017 += (dataComplete[i].duration_integer / 60);
                arrayDuration2017.push((dataComplete[i].duration_integer / 60));
                var month2017 = date.getMonth();
                if (month2017 == '0') {
                    varDurationSum201701 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '1') {
                    varDurationSum201702 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '2') {
                    varDurationSum201703 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '3') {
                    varDurationSum201704 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '4') {
                    varDurationSum201705 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '5') {
                    varDurationSum201706 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '6') {
                    varDurationSum201707 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '7') {
                    varDurationSum201708 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '8') {
                    varDurationSum201709 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '9') {
                    varDurationSum201710 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '10') {
                    varDurationSum201711 += (dataComplete[i].duration_integer / 60);
                } else if (month2017 == '11') {
                    varDurationSum201712 += (dataComplete[i].duration_integer / 60);
                }
            }
        }
        // Adding elements to array 2013
        /* arrayDurationMonth2013.push(varDurationSum201301);
        arrayDurationMonth2013.push(varDurationSum201302);
        arrayDurationMonth2013.push(varDurationSum201303);
        arrayDurationMonth2013.push(varDurationSum201304);
        arrayDurationMonth2013.push(varDurationSum201305);
        arrayDurationMonth2013.push(varDurationSum201306);
        arrayDurationMonth2013.push(varDurationSum201307); */
        arrayDurationMonth2013.push(varDurationSum201308);
        arrayDurationMonth2013.push(varDurationSum201309);
        arrayDurationMonth2013.push(varDurationSum201310);
        arrayDurationMonth2013.push(varDurationSum201311);
        arrayDurationMonth2013.push(varDurationSum201312);
        // Adding elements to array 2014
        arrayDurationMonth2014.push(varDurationSum201401);
        arrayDurationMonth2014.push(varDurationSum201402);
        arrayDurationMonth2014.push(varDurationSum201403);
        arrayDurationMonth2014.push(varDurationSum201404);
        arrayDurationMonth2014.push(varDurationSum201405);
        arrayDurationMonth2014.push(varDurationSum201406);
        arrayDurationMonth2014.push(varDurationSum201407);
        arrayDurationMonth2014.push(varDurationSum201408);
        arrayDurationMonth2014.push(varDurationSum201409);
        arrayDurationMonth2014.push(varDurationSum201410);
        arrayDurationMonth2014.push(varDurationSum201411);
        arrayDurationMonth2014.push(varDurationSum201412);
        // Adding elements to array 2015
        arrayDurationMonth2015.push(varDurationSum201501);
        arrayDurationMonth2015.push(varDurationSum201502);
        arrayDurationMonth2015.push(varDurationSum201503);
        arrayDurationMonth2015.push(varDurationSum201504);
        arrayDurationMonth2015.push(varDurationSum201505);
        arrayDurationMonth2015.push(varDurationSum201506);
        arrayDurationMonth2015.push(varDurationSum201507);
        arrayDurationMonth2015.push(varDurationSum201508);
        arrayDurationMonth2015.push(varDurationSum201509);
        arrayDurationMonth2015.push(varDurationSum201510);
        arrayDurationMonth2015.push(varDurationSum201511);
        arrayDurationMonth2015.push(varDurationSum201512);
        // Adding elements to array 2016
        arrayDurationMonth2016.push(varDurationSum201601);
        arrayDurationMonth2016.push(varDurationSum201602);
        arrayDurationMonth2016.push(varDurationSum201603);
        arrayDurationMonth2016.push(varDurationSum201604);
        arrayDurationMonth2016.push(varDurationSum201605);
        arrayDurationMonth2016.push(varDurationSum201606);
        arrayDurationMonth2016.push(varDurationSum201607);
        arrayDurationMonth2016.push(varDurationSum201608);
        arrayDurationMonth2016.push(varDurationSum201609);
        arrayDurationMonth2016.push(varDurationSum201610);
        arrayDurationMonth2016.push(varDurationSum201611);
        arrayDurationMonth2016.push(varDurationSum201612);
        // Adding elements to array 2017
        arrayDurationMonth2017.push(varDurationSum201701);
        /* arrayDurationMonth2017.push(varDurationSum201702);
        arrayDurationMonth2017.push(varDurationSum201703);
        arrayDurationMonth2017.push(varDurationSum201704);
        arrayDurationMonth2017.push(varDurationSum201705);
        arrayDurationMonth2017.push(varDurationSum201706);
        arrayDurationMonth2017.push(varDurationSum201707);
        arrayDurationMonth2017.push(varDurationSum201708);
        arrayDurationMonth2017.push(varDurationSum201709);
        arrayDurationMonth2017.push(varDurationSum201710);
        arrayDurationMonth2017.push(varDurationSum201711);
        arrayDurationMonth2017.push(varDurationSum201712); */

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
        var trace1 = {
            x: arrayNumber,
            y: arrayDurationIntegerMin,
            type: 'bar',
            name: 'Dauer [min]'
        };

        var trace2 = {
            x: ['12'],
            y: [59.1],
            type: 'bar',
            name: 'Folge 12a'
        };

        var trace3 = {
            x: ['12'],
            y: [41.55],
            type: 'bar',
            name: 'Folge 12b'
        };

        var data = [trace1, trace2, trace3];

        var layout = {
            barmode: 'stack',
            showlegend: false,
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
                tickformat: '%b %Y',
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
        durYearBar = document.getElementById('durationYearBar');

        var data = [{
            x: ['2013', '2014', '2015', '2016', '2017'],
            y: [varDurationSum2013, varDurationSum2014, varDurationSum2015, varDurationSum2016, varDurationSum2017],
            type: 'bar',
            marker: {
                color: ['rgb(65,105,225)', 'rgb(0,139,69)', 'rgb(205,0,0)', 'rgb(238,154,0)', 'rgb(125,38,205)']
            }
        }];
        Plotly.plot(durYearBar, data);

        // Load data into and build chart durationYearLine

        // Load data into and build chart durationYearArea

        // Load data into and build chart durationYearPie

        // Load data into and build chart durationYearBox
        durYearBox = document.getElementById('durationYearBox');
        var trace1 = {
            y: arrayDuration2013,
            type: 'box',
            name: '2013',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(65,105,225)',
                opacity: 0.5
            },
            boxpoints: 'all'
        };
        var trace2 = {
            y: arrayDuration2014,
            type: 'box',
            name: '2014',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(0,139,69)',
                opacity: 0.5
            },
            boxpoints: 'all'
        };
        var trace3 = {
            y: arrayDuration2015,
            type: 'box',
            name: '2015',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(205,0,0)',
                opacity: 0.5
            },
            boxpoints: 'all'
        };
        var trace4 = {
            y: arrayDuration2016,
            type: 'box',
            name: '2016',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(238,154,0)',
                opacity: 0.5
            },
            boxpoints: 'all'
        };
        var trace5 = {
            y: arrayDuration2017,
            type: 'box',
            name: '2017',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(125,38,205)',
                opacity: 0.5
            },
            boxpoints: 'all'
        };
        var data = [trace1, trace2, trace3, trace4, trace5];
        var layout = {
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
        Plotly.plot(durYearBox, data, layout);



        // Begin charts duration and month **************************************
        // Load data into and build chart durationMonthBar
        durMonthBar = document.getElementById('durationMonthBar');
        var trace1 = {
            x: arrayMonths,
            y: arrayDurationMonth2013,
            type: 'bar',
            name: '2013',
            marker: {
                color: 'rgb(65,105,225)',
                opacity: 0.5
            }
        };
        var trace2 = {
            x: arrayMonths,
            y: arrayDurationMonth2014,
            type: 'bar',
            name: '2014',
            marker: {
                color: 'rgb(0,139,69)',
                opacity: 0.5
            }
        };
        var trace3 = {
            x: arrayMonths,
            y: arrayDurationMonth2015,
            type: 'bar',
            name: '2015',
            marker: {
                color: 'rgb(205,0,0)',
                opacity: 0.5
            }
        };
        var trace4 = {
            x: arrayMonths,
            y: arrayDurationMonth2016,
            type: 'bar',
            name: '2016',
            marker: {
                color: 'rgb(238,154,0)',
                opacity: 0.5
            }
        };
        var trace5 = {
            x: arrayMonths,
            y: arrayDurationMonth2017,
            type: 'bar',
            name: '2017',
            marker: {
                color: 'rgb(125,38,205)',
                opacity: 0.5
            }
        };
        var data = [trace1, trace2, trace3, trace4, trace5];
        var layout = {
            barmode: 'group',
            showlegend: true,
            xaxis: {
                title: 'Monat',
                tickangle: -45,
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
        Plotly.plot(durMonthBar, data, layout);

        // Load data into and build chart durationMonthLine

        // Load data into and build chart durationMonthArea

        // Load data into and build chart durationMonthPie

        // Load data into and build chart durationMonthBox
        durMonthBox = document.getElementById('durationMonthBox');
        var trace1 = {
            y: arrayDurationMonth2013,
            type: 'box',
            name: '2013',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(65,105,225)',
                opacity: 0.5
            },
            boxmean: 'sd',
            boxpoints: 'all'
        };
        var trace2 = {
            y: arrayDurationMonth2014,
            type: 'box',
            name: '2014',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(0,139,69)',
                opacity: 0.5
            },
            boxmean: 'sd',
            boxpoints: 'all'
        };
        var trace3 = {
            y: arrayDurationMonth2015,
            type: 'box',
            name: '2015',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(205,0,0)',
                opacity: 0.5
            },
            boxmean: 'sd',
            boxpoints: 'all'
        };
        var trace4 = {
            y: arrayDurationMonth2016,
            type: 'box',
            name: '2016',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(238,154,0)',
                opacity: 0.5
            },
            boxmean: 'sd',
            boxpoints: 'all'
        };
        var trace5 = {
            y: arrayDurationMonth2017,
            type: 'box',
            name: '2017',
            jitter: 0.3,
            pointpos: -1.8,
            marker: {
                color: 'rgb(125,38,205)',
                opacity: 0.5
            },
            boxmean: 'sd',
            boxpoints: 'all'
        };
        var data = [trace1, trace2, trace3, trace4, trace5];
        var layout = {
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
        Plotly.plot(durMonthBox, data, layout);



        // Console output for testing
        // console.log(test);
        // console.log('arrayDurationIntegerMin: ' + arrayDurationIntegerMin);
        // console.log('varDurationSum2013: ' + varDurationSum2013);
        // console.log('varDurationSum2014: ' + varDurationSum2014);
        // console.log('varDurationSum2015: ' + varDurationSum2015);
        // console.log('varDurationSum2016: ' + varDurationSum2016);
        // console.log('varDurationSum2017: ' + varDurationSum2017);
        // console.log('varDurationSum201306: ' + varDurationSum201306);
    });
});
