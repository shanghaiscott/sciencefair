//
// Note appBase is defined by JSP EL a jsp.
//

var dataScale="hour";
var range = [];
var hour = 3600;
var day = 86400;

var plotOptions = {
  series: {
    lines: {
      show: true
    },
    points: {
      radius: 3,
      fill: true,
      show: false
    }
  },
  xaxis: {
    mode: "time",
    timezone: "America/New_York",
    tickSize: [1, dataScale],
    tickLength: 0,
    axisLabel: "Time",
    axisLabelFontSizePixels: 12,
    axisLabelFontFamily: 'Verdana, Arial',
    axisLabelPadding: 10
  },
  yaxes: {
    axisLabel: "CPM",
    axisLabelFontSizePixels: 12,
    axisLabelFontFamily: 'Verdana, Arial',
    axisLabelPadding: 3
  },
  legend: {
    noColumns: 0,
    labelBoxBorderColor: "#000000",
    position: "nw"
  },
  grid: {
    hoverable: true,
    autoHighlight: true,
    clickable: true,
    borderWidth: 2,
    borderColor: "#633200",
    backgroundColor: {colors: ["#ffffff", "#EDF5FF"]}
  }
};

function loadData(inrange) {
  $("#loadingData").modal({show: true});
  var dataType = appBase + "/webapi/radiation/detector/" + detector + "/time/";
  if (ticks) {
    dataType = appBase + "/webapi/radiation/detector/" + detector + "/";
  }
  var ajaxURL = dataType + inrange[0] + "/" + inrange[1];
  console.log(ajaxURL);
  $.ajax({
    async: true,
    cache: false,
    url: ajaxURL,
    dataType: "json",
    success: function (jsonData) {
      loadAndPlot(jsonData);
      $("#loadingData").modal({show: false});
      $("#loadingData").modal('hide');
    }
  });
}

function latest() {
  $.ajax({
    type: 'GET',       
    url: appBase + "/webapi/radiation/detector/" + detector + "/latest",
    dataType: 'html',
    context: document.body,
    global: false,
    async: true,
    success: function(lastTimestamp) { 
      range = [ lastTimestamp - (4 * hour), lastTimestamp];
      loadData(range);}
  });
}

function liveGraph() {
  $.ajax({
    type: 'GET',       
    url: appBase + "/webapi/radiation/detector/" + detector + "/count",
    dataType: 'html',
    context: document.body,
    global: false,
    async: true,
    success: function(dataRowCount) {
      range = [ (dataRowCount - dataMaxPoints), dataRowCount ];
      loadData(range);
      setTimeout('liveGraph()', 30000);// 30 seconds and recurse
    }
  });
}

$("<div id='tooltip'></div>").css({
  position: "absolute",
  display: "none",
  border: "1px solid #fdd",
  padding: "2px",
  "background-color": "#fee",
  opacity: 0.80
}).appendTo("body");

$("#dataChart").on("plothover", function (event, pos, item) {
  if (item) {
    var x = item.datapoint[0],
      y = item.datapoint[1].toFixed(2);//+ " at " + moment(x).format() 
    $("#tooltip").html(item.series.label + " = " + y)
      .css({top: item.pageY + 5, left: item.pageX + 5})
      .fadeIn(200);
  } else {
    $("#tooltip").hide();
  }
});

$("#backbutton").on("click", function() {
  range = [ range[0] - hour, range[1] - hour];
  loadData(range);
});

$("#forwardbutton").on("click", function() {
  range = [ range[0] + hour, range[1] + hour];
  loadData(range);
});

$("#backbutton2").on("click", function() {
  range = [ range[0] - (2 * hour), range[1] - (2 * hour)];
  loadData(range);
});

$("#forwardbutton2").on("click", function() {
  range = [ range[0] + (2 * hour), range[1] + (2 * hour)];
  loadData(range);
});

$("#resetbutton").on("click", function() {
  latest();
});

$('#startDateInput').bind('keypress', function(e) {
	if(e.keyCode === 13){// enter key
		var startDate = new Date($("#startDateInput").val() + "T00:00:00-05:00");
    console.log("enter key: " + startDate);
    if (! startDate) {
      latest();
    } else {
      var startDateSeconds = startDate.getTime() / 1000;
      console.log("start date seconds: " + startDateSeconds);
      range = [ startDateSeconds - (2 * hour), startDateSeconds + (2 * hour)];
      loadData(range);
    }
	}
});

$("#setTimeButton").on("click", function() {
  range = [ (new Date($("#startTimeInput").val())).getTime()/1000, 
    (new Date($("#endTimeInput").val())).getTime()/1000];
  console.log("new range: " + range[0]  +", " + range[1]);
  loadData(range);
});

///////////////////////////////////////////////////////////////////////////////
// YUI DataTable embedded in the "plotclick" handler.
var dataTable;
function secondsToDateString(o) {
  var date = new Date(o.value);
  return moment(date).format();
}

$("#dataChart").bind("plotclick", function (event, pos, item) {
  if (item) {
    var container = _dataLabel(item);
    var dummyResultListLocator = "myResults";

    YUI().use('datatable', 'datatable-sort', 'datasource-io', 'datasource-polling',
      'json-parse', 'datasource-jsonschema', 'datatable-mutable', 
      'datatable-scroll','datatable-formatters', function (Y) {
        var columns = [
          { key: "timeDetected", formatter: secondsToDateString }, "cpm","cpmUnit", "container", 
          "detector" ];
        if (!dataTable) {
          dataTable = new Y.DataTable({
            columns: columns,
            sortable: true
          });
        }
        var dataSourcePath = appBase + "/webapi/radiation/container/" + container + "/time/" +
            range[0] + "/" + range[1];
        // for live graph, we drill down to max points per host
        // ticks and dataMaxPoints are defined in the .jsp most likely
        if (ticks) {
          var containerRowCount = $.ajax({
            type: 'GET',
            url: appBase + "/webapi/radiation/container/" + container + "/count",
            dataType: 'html',
            context: document.body,
            global: false,
            async: false,
            success: function(data) {
              return data;
            }
          }).responseText;
          var hostrange = [ (containerRowCount - dataMaxPoints), containerRowCount ];

          dataSourcePath = appBase + "/webapi/radiation/container/" + container + "/" +
            hostrange[0] + "/" + hostrange[1];
        }
        console.log(dataSourcePath);
        var myDataSource = new Y.DataSource.IO({source: dataSourcePath});
        
        myDataSource.plug({fn: Y.Plugin.DataSourceJSONSchema, cfg: {
            schema: {
              resultsListLocator: dummyResultListLocator,
              resultFields: columns
            }
          }});

        myDataSource.on('data', function (e) {
          var rawResponse = e.data.responseText;
          // make sure first character isn't "{", if it isn't wrap the response   
          if (rawResponse.trim().charAt(0) !== '{') {
            yuiResponseText = '{ "' +
              e.data.responseText + '" : ' + rawResponse + ' }';
          }
        });

        dataTable.plug(Y.Plugin.DataTableDataSource, {datasource: myDataSource});
        dataTable.render("#grid_data");
        dataTable.datasource.load({
          success: function (e) {
            dataTable.onDataReturnInitializeTable(e);
          }
        });
      });
    // end YUI DataTable
  }
}); // end on click even handler
//
