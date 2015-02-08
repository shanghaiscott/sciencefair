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
      <div class="jumbotron">
        <H2>Radiation by Time of Day</H2>
        
        <!-- chart here -->
        <div class="demo-container">
          <div id="dataChart" class="demo-placeholder"></div>
        </div>
        <p>On the Y-axis is the count per minute (CPM.) On the X-axis is the time of day (00:00 - 08:00 US EST). The CPM unit of the Geiger counter translates to common <a href="http://hps.org/publicinformation/ate/faqs/radiationdoses.html">units</a> as follows: 1,000 CPM = 1 mR/hr = 10 uSv/hr.</p>
        <!-- data navigation controls here -->
        <!--
        <div class="btn-group" role="group" aria-label="...">
          <button id="backbutton2" type="button" class="btn btn-default"><span 
            class="glyphicon glyphicon-backward" aria-hidden="true"></span> -2 Hours</button>
          <button id="backbutton" type="button" class="btn btn-default"><span 
            class="glyphicon glyphicon-backward" aria-hidden="true"></span> -1 Hour</button>
          <button id="resetbutton" type="button" class="btn btn-default">Latest</button>
          <button id="forwardbutton" type="button" class="btn btn-default">+1 Hour <span 
            class="glyphicon glyphicon-forward" aria-hidden="true"></span></button>
          <button id="forwardbutton2" type="button" class="btn btn-default">+2 Hours <span 
            class="glyphicon glyphicon-forward" aria-hidden="true"></span></button>
        </div>
        <div class="input-group">
          <input id="startDateInput" type="text" class="form-control"
            placeholder="starting date: yyyy-MM-dd">
        </div>
        <div class="input-group">
          <input id="startTimeInput" type="text" class="form-control"
            placeholder="starting date: yyyy-MM-ddTHH:mm:SS-05:00">
          <input id="endTimeInput" type="text" class="form-control"
            placeholder="starting date: yyyy-MM-ddTHH:mm:SS-05:00">
          <button id="setTimeButton" type="button" class="btn btn-default">Set</button>
        </div>
      </div>
        -->
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
      
      timezoneJS.timezone.zoneFileBasePath = '${pageContext.servletContext.contextPath}/tz';
      timezoneJS.timezone.init({ async: true, callback: function() { 
      var appBase="${pageContext.servletContext.contextPath}";
      // load all the data for the particular dates and time ranges we care about
      // do it for each of the containers and then plot all on one graph.
      //var detector = "mazur-prm8000";
      var startTime="00:00:00";
      var endTime="08:00:00";
      var airData = [];
      var metalData = [];
      var waterData = [];
      //var woodData = [];
      var plasticData = [];
      var data = [
        {data: airData, label: "air", date: "2015-01-21"},
        {data: metalData, label: "metal", date: "2015-02-05"},
        {data: waterData, label: "water", date: "2015-02-07"},
        {data: plasticData, label: "plastic", date: "2015-02-08"}
        //{data: woodData, label: "wood"},
      ];
      $("#loadingData").modal({show: true});
      $.each(data, function(index, d) {
        //console.log(d);
        var ajaxURL = appBase + "/webapi/radiation/container/" + 
                d.label + "/" + d.date + "/" + startTime + "/" + endTime;
        console.log(ajaxURL);
        $.ajax({
          async: true,
          cache: false,
          url: ajaxURL,
          dataType: "json",
          success: function (jsonData) {
            //console.log(jsonData);
            $.each(jsonData, function (index, aRadiation) {
              //console.log(aRadiation);
              d.data.push([aRadiation.timestamp, aRadiation.cpm]);             
              }
            );
            $.plot("#dataChart", data, plotOptions);
            $("#loadingData").modal({show: false});
            $("#loadingData").modal('hide');
          }
        });
      });
    }});
      
      </script>
    <!--script type="text/javascript" 
      src="${pageContext.servletContext.contextPath}/js/radiation.js"></script-->
    <script type="text/javascript" 
      src="${pageContext.servletContext.contextPath}/js/chart-core.js"></script>
    <!--script type="text/javascript">
      $(document).ready(latest());
    </script-->
  </body>
</html>
