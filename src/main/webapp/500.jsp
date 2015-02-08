<%@ page isErrorPage="true" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%
  int count = 0;
  StringBuffer strace = new StringBuffer();
  strace.append(exception);
  strace.append("\n");
  for (StackTraceElement elem : exception.getStackTrace()) {
    count++;
    strace.append(count + ": " + elem.toString());
    strace.append("\n");
  }
  Throwable cause = exception.getCause();
  count = 0;
  if (cause != null) {
    strace.append(cause);
    strace.append("\n");
    for (StackTraceElement elem : cause.getStackTrace()) {
      count++;
      strace.append(count + ": " + elem.toString());
      strace.append("\n");
    }
  }
%>
<html>
  <head>
    <title>Server Side Error</title>
    <jsp:include page="/head.jsp"/>
  </head>
  <body>
    <jsp:include page="/banner.jsp"/>
    <div class="container">
      <div class="jumbotron">
        <h2>An Error Has Occurred on the Server</h2>

        <form id="reportErrorForm" method="post" 
              action="${pageContext.servletContext.contextPath}/secure/sendmail" role="form">
          <div class="form-group">
            <textarea name="message" rows="30" class="stack" readonly="true" 
                      style="width: 100%; white-space: pre-line" class="form-control">
              
<%=strace.toString()%>

            </textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default">Send to developers</button>
          </div>
        </form>

      </div>
    </div>
    <jsp:include page="/scripts.jsp"/>
  </body>
</html>
