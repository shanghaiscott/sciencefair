<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <title>MNS 5th Grade Science Fair 2015: Background Radiation</title>
    <jsp:include page="/head.jsp"/>
  </head>
  <body>
    <jsp:include page="/banner.jsp"/>
    <div class="container">
      <div class="jumbotron">
        <H2>Background Radiation</H2>
        <p><a href="https://en.wikipedia.org/wiki/Background_radiation">Background radiation</a> is measured using a <a href="https://en.wikipedia.org/wiki/Geiger_counter">Geiger counter</a> over number of days in a typical <a href="https://en.wikipedia.org/wiki/New_York_City">New York City</a> <a href="https://www.google.com/maps/place/1675+York+Ave,+New+York,+NY+10128">apartment</a>. The Geiger counter is then placed in a metal box (a safe), submerged in a bucket of water, and enclosed in a <a href="https://en.wikipedia.org/wiki/Styrofoam">styrofoam</a> box to observe if those containers effect the amount of radiation detected.</p>
        <p><a href="secure/radiation.jsp">Graph...</p>
        <p><a href="webapi/radiation">All the data in JSON</a>. Data points: <span id="dataCount"></span></p>
        <p>Scientist: <a mailto="blaise@geneticmail.com">Blaise Douglass</a>, <a href="http://www.ps290.org/">MNS</a> class of 2015.</p>

        <h3>REST API</h3>
        <%-- don't use :${pageContext.request.serverPort} because behind the
        proxy it will show the inaccesable port --%>
        <table class="table table-striped">
          <tr><td>
              ${pageContext.request.scheme}://${pageContext.request.serverName}${pageContext.servletContext.contextPath}/webapi/radiation
            </td></tr>
          <tr><td>
              ${pageContext.request.scheme}://${pageContext.request.serverName}${pageContext.servletContext.contextPath}/webapi/radiation/count
            </td></tr>
          <tr><td>
              ${pageContext.request.scheme}://${pageContext.request.serverName}${pageContext.servletContext.contextPath}/webapi/radiation/container/[container] (air, water, metal, plastic)
            </td></tr>
          <tr><td>
              ${pageContext.request.scheme}://${pageContext.request.serverName}${pageContext.servletContext.contextPath}/webapi/radiation/detector/[detector] (<a href="http://www.mazurinstruments.com/PRM-8000_detail.html">mazur-prm8000</a>)
            </td></tr>
          <tr><td>
              ${pageContext.request.scheme}://${pageContext.request.serverName}${pageContext.servletContext.contextPath}/webapi/radiation/container/[container]/[date]/[start]/[end]
            </td></tr>
          <tr><td>
              ${pageContext.request.scheme}://${pageContext.request.serverName}${pageContext.servletContext.contextPath}/webapi/radiation/detector/[detector]/[date]/[start]/[end]
            </td></tr>
        </table>
      </div>
            
    </div>

    <jsp:include page="/scripts.jsp"/>
    <script type="text/javascript">
      $.ajax({
        type: 'GET',
        url: "${pageContext.servletContext.contextPath}/webapi/radiation/count",
        dataType: 'text',
        context: document.body,
        global: false,
        async: true,
        success: function (count) {
          $("#dataCount").text(count);
          console.log(count);
        }
      });
    </script>
  </body>
</html>

