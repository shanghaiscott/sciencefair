<html>
  <head>
    <title>Data Visualization</title>
    <jsp:include page="/head.jsp"/>
    <style type="text/css">



      body {
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #eee;
      }

      .form-signin {
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
      }
      .form-signin .form-signin-heading,
      .form-signin .checkbox {
        margin-bottom: 10px;
      }
      .form-signin .checkbox {
        font-weight: normal;
      }
      .form-signin .form-control {
        position: relative;
        font-size: 16px;
        height: auto;
        padding: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .form-signin .form-control:focus {
        z-index: 2;
      }
      .form-signin input[type="text"] {
        margin-bottom: -1px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    </style>
  </head>
  <body class="yui3-skin-sam">

    <jsp:include page="/banner.jsp"/>
    <div class="container">
      <div id="jumbotron">


        <form id="login_form" action="j_security_check" method="POST" role="form" class="form-signin">
          <h2 class="form-signin-heading">Sign In</h2>
          <div class="form-group">
            <label for="j_username">Name</label>
            <input type="text" name="j_username" id="j_username" class="form-control"/>
          </div>
          <div>
            <label for="j_password">Password</label>
            <input type="password" name="j_password" id="j_password" class="form-control"/>
          </div>
          <div class="form-group">
            <button type="submit" id="submit" class="btn btn-lg btn-primary btn-block">Sign In</button>
          </div>
        </form>

      </div>
    </div>
    <jsp:include page="/scripts.jsp"/>

  </body>
</html>
