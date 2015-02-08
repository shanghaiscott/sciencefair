<!-- Fixed navbar -->
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation"><!--  navbar-default -->
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" 
              data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <a class="navbar-brand" 
         href="${pageContext.servletContext.contextPath}/index.jsp">Background Radiation</a>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" 
             data-toggle="dropdown">Graphs <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="${pageContext.servletContext.contextPath}/secure/radiation.jsp"><i class="fa fa-line-chart fa-fw"></i> Radiation CPM</a></li>
            <!--<li><a href="${pageContext.servletContext.contextPath}/secure/radition.jsp"><i class="fa fa-line-chart fa-fw"></i> Radiation Count</a></li>-->
            <li><a href="${pageContext.servletContext.contextPath}/secure/stats.jsp"><i class="fa fa-bar-chart fa-fw"></i> Total and Average by Container</a></li>
          </ul>
        </li>
        
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" 
             data-toggle="dropdown">Documentation <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="${pageContext.servletContext.contextPath}/pics.jsp"><i class="fa fa-picture-o fa-fw"></i> Photographs</a></li>
            <li><a href="${pageContext.servletContext.contextPath}/refs.jsp"><i class="fa fa-bookmark-o fa-fw"></i> References</a></li>
            <li><a href="${pageContext.servletContext.contextPath}/code.jsp"><i class="fa fa-bookmark-o fa-fw"></i> Code</a></li>
          </ul>
        </li>
        
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" 
             data-toggle="dropdown"><i class="fa fa-user fa-fw"></i> ${pageContext.request.userPrincipal.name} <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="${pageContext.servletContext.contextPath}/logout"><i class="fa fa-power-off fa-fw"></i> Logout</a></li>
            <li class="divider"></li>
            <li><a href="${pageContext.servletContext.contextPath}"><i class="fa fa-home fa-fw"></i> Home</a></li>
            <li><a href="help.jsp"><i class="fa fa-question fa-fw"></i> Help</a></li>
          </ul>
        </li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</div>
