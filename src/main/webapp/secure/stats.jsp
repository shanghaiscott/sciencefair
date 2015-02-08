<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <title>Data Visualization</title>
    <link href="${pageContext.servletContext.contextPath}/js/flot-0.8.3/examples/examples.css" rel="stylesheet" type="text/css">
    <jsp:include page="/head.jsp"/>

    <script type="text/javascript" 
    src="${pageContext.servletContext.contextPath}/yui/build/yui/yui-min.js"></script>

    <script type="text/javascript">
      YUI_config = {
        fetchCSS: false,
        combine: true,
        comboBase: '${pageContext.servletContext.contextPath}/yuicombo?',
        root: '/yui/build/'
      };
    </script>
  </head>
  <body>
    <jsp:include page="/banner.jsp"/>

    <div class="container">
      <div class="jumbotron"> <!-- class="jumbotron"-->
        <H2>Background Radiation Analysis</H2>
        <p>Total radiation dosage and average count per hour (CPM x 60) over 8 hours (00:00-08:00).</p>
        <div class="demo-container">
          <div id="dataChart" class="demo-placeholder"></div>
        </div>
        <div>1,000 CPM = 1 mR/hr = 10 uSv/hr</div>
      </div>
    </div>

    <div id="loadingData" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Loading data...</h4>
          </div>
          <div class="modal-body">
            <div class="progress progress-striped active">
              <div class="progress-bar" style="width: 100%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <jsp:include page="/scripts.jsp"/>

    <script type="text/javascript">

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
                  y = item.datapoint[1].toFixed(2);
          $("#tooltip").html(item.series.label + " = " + y)
                  .css({top: item.pageY + 5, left: item.pageX + 5})
                  .fadeIn(200);
        } else {
          $("#tooltip").hide();
        }
      });

      var totalData = [];
      var avgData = [];
      var ticks = [[0, "Air Total"], [1, "Air Avg"], [2, "Metal Total"], [3, "Metal Avg"], [4, "Water Total"], [5, "Water Avg"], [6, "Plastic Total"], [7, "Plastic Avg"]];
      var plotOptions = {
        series: {
          bars: {
            show: true
          }
        },
        bars: {
          align: "center", barWidth: 0.5
        },
        xaxis: {
          axisLabel: "Containers",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: "Verdana,Arial",
          axisLabelPadding: 10,
          ticks: ticks
        },
        yaxis: {
          axisLabel: "Radiation",
          axisLabelUseCanvas: true,
          axisLabelFontSizePixels: 12,
          axisLabelFontFamily: "Verdana,Arial",
          axisLabelPadding: 3
        },
        legend: {
          noColums: 0,
          labelBoxBorderColor: "#000000",
          position: "nw"
        },
        grid: {
          hoverable: true,
          clickable: true,
          borderWidth: 2,
          backgroundColor: {colors: ["#FFFFFF", "#EDF5FF"]}
        }
      };
      /////////////////////////
      var ticks = false;
      var appBase = "${pageContext.servletContext.contextPath}";
      // load all the data for the particular dates and time ranges we care about
      // do it for each of the containers and then plot all on one graph.
      var detector = "mazur-prm8000";
      var startTime = "00:00:00";
      var endTime = "08:00:00";
      var counter = 0;
      var airData = [];
      var metalData = [];
      var waterData = [];
      var woodData = [];
      var plasticData = [];
      var dataSource = [
        {label: "air", date: "2015-01-21", totalIndex: 0, avgIndex: 1},
        {label: "metal", date: "2015-02-05", totalIndex: 2, avgIndex: 3},
        {label: "water", date: "2015-02-07", totalIndex: 4, avgIndex: 5},
        {label: "plastic", date: "2015-02-08", totalIndex: 6, avgIndex: 7}
        //{data: woodData, label: "wood"},
      ];
      $("#loadingData").modal({show: true});

      $.each(dataSource, function (index, d) {
        //console.log(d);
        var ajaxURL = appBase + "/webapi/radiation/container/" +
                d.label + "/stats/" + d.date + "/" + startTime + "/" + endTime;
        console.log(ajaxURL);
        $.ajax({
          async: true,
          cache: false,
          url: ajaxURL,
          dataType: "json",
          success: function (jsonData) {
            console.log(jsonData);
            $.each(jsonData, function (index, aStat) {
              console.log(aStat);
              totalData.push([d.totalIndex, aStat[1]]);
              avgData.push([d.avgIndex, aStat[2] * 60]);
            });

            $.plot("#dataChart",
                    [{label: "Total Count", data: totalData, color: "#5482FF"},
                      {label: "Average CPM", data: avgData, color: "#04F2E0"}], plotOptions);
            $("#loadingData").modal({show: false});
            $("#loadingData").modal('hide');
          }
        });
      });
    </script>
  </body>
</html>
