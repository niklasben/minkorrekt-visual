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
    var arrayMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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

      // Copy array* to array*BarChart for following operation
      var arrayNumberBarChart = arrayNumber.slice();
      var arrayDurationIntegerMinBarChart = arrayDurationIntegerMin.slice();

      // Alter arrayNumber to remove episode numbers 12a and 12b
      var index12a = arrayNumberBarChart.indexOf('012a');
      var index12b = arrayNumberBarChart.indexOf('012b');
      if (index12a > -1) {
        arrayNumberBarChart.splice(index12a, 1);
      }
      if (index12b > -1) {
        arrayNumberBarChart.splice(index12b, 1);
      }

      // Add new elements to arrays
      var durMin = dataComplete[i].duration_integer;
      durMin = durMin / 60;
      arrayDurationIntegerMin.push(durMin);

      // Add values to year arrays
      var date = new Date(dataComplete[i].pubdate);
      var year = date.getFullYear();

      // 2013
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
    };

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
    arrayDurationMonth2017.push(varDurationSum201702);
    arrayDurationMonth2017.push(varDurationSum201703);
    arrayDurationMonth2017.push(varDurationSum201704);
    arrayDurationMonth2017.push(varDurationSum201705);
    arrayDurationMonth2017.push(varDurationSum201706);
    /* arrayDurationMonth2017.push(varDurationSum201707);
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
    // Load data into and build chart durEpisodeBar
    /* durEpisode = document.getElementById('durEpisodeBar');
    var trace1 = {
        x: arrayNumberBarChart,
        y: arrayDurationIntegerMin,
        text: arrayTitlemain,
        type: 'bar',
        hoverinfo: 'y+text',
        name: 'Dauer [min]'
    };
    var trace2 = {
        x: [12],
        y: [59.1],
        name: 'Folge 12a',
        text: 'Du wirst wieder angerufen!',
        type: 'bar'
    };
    var trace3 = {
        x: [12],
        y: [41.55],
        name: 'Folge 12b',
        text: 'Previously (on) Lost',
        type: 'bar'
    };
    var data = [trace1, trace2, trace3];

    var layout = {
        font: {
            family: 'monospace',
            color: '#000000'
        },
        barmode: 'stack',
        showlegend: true,
        legend: {
            traceorder: 'normal',
            orientation: 'h'
        },
        hovermode: 'all',
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
            l: 60,
            r: 60,
            b: 60,
            t: 20,
            pad: 4
        },
        plot_bgcolor: '#e0e0e0'
    };
    Plotly.plot(durEpisode, data, layout); */


    // Begin charts duration and date **************************************
    // Load data into and build chart durationDateLine
    durDateLine = document.getElementById('durationDateLine');
    var trace1 = {
      x: arrayPubdate,
      y: arrayDurationIntegerMin,
      text: arrayTitlemain,
      mode: 'lines+markers',
      type: 'scatter',
      name: 'Dauer [min]',
      line: {
        shape: 'Dauer [min]'
      }
    };
    var mean = {
      x: arrayPubdate,
      y: arrayDurationIntegerMean,
      xcalendar: 'gregorian',
      mode: 'lines',
      name: '⌀ Folgenlänge [min]',
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
      hovermode: 'all',
      hoveron: 'pills',
      hoverinfo: 'x+y+text',
      showlegend: true,
      legend: {
        traceorder: 'normal',
        orientation: 'h'
      },
      xaxis: {
        title: 'Datum',
        tickformat: '%b %Y',
        hoverformat: '%d %b %Y',
        showgrid: true,
        zeroline: false
      },
      yaxis: {
        title: 'Dauer [min]',
        showline: false
      },
      autosize: true,
      margin: {
        l: 60,
        r: 60,
        b: 60,
        t: 20,
        pad: 4
      },
      plot_bgcolor: '#e0e0e0'
    };
    var data = [trace1, mean];
    Plotly.plot(durDateLine, data, layout);

    // Load data into and build chart durationDateArea
    (function() {
      var d3 = Plotly.d3;

      var contentInnerWidth = $('.content')
        .innerWidth();
      var contentInnerHeight = $('.content')
        .innerHeight();

      var gd3 = d3.select('#durationperdate')
        .selectAll('div.content > div.tab-content')
        .append('div')
        .attr('id', 'durationDateArea')
        .attr('class', 'tab-pane fade')
        .style({
          width: contentInnerWidth + 'px',
          height: contentInnerHeight + 'px'
        });

      var gd = gd3.node();

      Plotly.plot(gd, [{
        type: 'bar',
        x: [1, 2, 3, 4],
        y: [5, 10, 2, 8],
        marker: {
          color: '#C8A2C8',
          line: {
            width: 2.5
          }
        }
      }], {
        title: 'Auto-Resize',
        font: {
          size: 16
        }
      });
      console.log('gd ' + gd);

      $(window)
        .resize(function() {

          var windowheight = $(window)
            .height();

          $(".content")
            .css({
              "height": windowheight + "px"
            });

          var contentInnerWidth = $('.content')
            .innerWidth();

          $(".js-plotly-plot")
            .css({
              "width": contentInnerWidth + "px",
              "height": windowheight + "px"
            });
          $(".plotly")
            .css({
              "width": contentInnerWidth + "px",
              "height": windowheight + "px"
            });

          var update = {
            width: contentInnerWidth,
            height: windowheight
          };
          Plotly.relayout(gd, update);
        });
    })();


    // var durDateArea = document.getElementById('durationDateArea');
    //
    // var trace1 = {
    //     x: arrayPubdate,
    //     y: arrayDurationIntegerMin,
    //     text: arrayTitlemain,
    //     fill: 'tozeroy',
    //     mode: 'lines+markers',
    //     type: 'scatter',
    //     name: 'Dauer [min]'
    // };
    // var mean = {
    //     x: arrayPubdate,
    //     y: arrayDurationIntegerMean,
    //     mode: 'lines',
    //     name: '⌀ Folgenlänge',
    //     line: {
    //         dash: 'dot',
    //         width: 2,
    //         color: 'rgb(255, 0, 0)'
    //     }
    // };
    // var layout = {
    //     font: {
    //         family: 'monospace',
    //         color: '#000000'
    //     },
    //     hovermode: 'all',
    //     hoveron: 'pills+fills',
    //     hoverinfo: 'x+y+text',
    //     showlegend: true,
    //     legend: {
    //         traceorder: 'normal',
    //         orientation: 'h'
    //     },
    //     xaxis: {
    //         title: 'Datum',
    //         tickformat: '%b %Y',
    //         hoverformat: '%d %b %Y',
    //         showgrid: true,
    //         zeroline: false
    //     },
    //     yaxis: {
    //         title: 'Dauer [min]',
    //         showline: false
    //     },
    //     autosize: true,
    //     margin: {
    //         l: 60,
    //         r: 60,
    //         b: 60,
    //         t: 20,
    //         pad: 4
    //     },
    //     plot_bgcolor: '#e0e0e0'
    // };
    // var data = [trace1, mean];
    // Plotly.plot(durDateArea, data, layout);


    // Console output for testing
    // console.log(test);
    // console.log('index12a: ' + index12a);
    // console.log('index12b: ' + index12b);
    // console.log('dataCompleteLength: ' + dataCompleteLength);
    // console.log('arrayNumberBarChart.length: ' + arrayNumberBarChart.length);
    // console.log('arrayNumberBarChart: ' + arrayNumberBarChart);
    // console.log('varDurationSum2013: ' + varDurationSum2013);
    // console.log('varDurationSum2014: ' + varDurationSum2014);
    // console.log('varDurationSum2015: ' + varDurationSum2015);
    // console.log('varDurationSum2016: ' + varDurationSum2016);
    // console.log('varDurationSum2017: ' + varDurationSum2017);
    // console.log('varDurationSum201306: ' + varDurationSum201306);
    // console.log(arrayDurationIntegerMean);
  });
});


// (function() {
//     var d3 = Plotly.d3;
//
//     var WIDTH_IN_PERCENT_OF_PARENT = 60,
//         HEIGHT_IN_PERCENT_OF_PARENT = 80;
//
//     var gd3 = d3.select('section')
//         .append('div')
//         .style({
//             width: WIDTH_IN_PERCENT_OF_PARENT + '%',
//             'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
//
//             height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
//             'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
//         });
//
//     var gd = gd3.node();
//
//     Plotly.plot(gd, [{
//         type: 'bar',
//         x: [1, 2, 3, 4],
//         y: [5, 10, 2, 8],
//         marker: {
//             color: '#C8A2C8',
//             line: {
//                 width: 2.5
//             }
//         }
//     }], {
//         title: 'Auto-Resize',
//         font: {
//             size: 16
//         }
//     });
//
//     window.onresize = function() {
//         Plotly.Plots.resize(gd);
//     };
//
// })();
