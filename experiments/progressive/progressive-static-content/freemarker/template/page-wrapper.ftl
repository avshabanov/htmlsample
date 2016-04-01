<#macro page title>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />

    <meta name="Author" content="Alex" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <title>Progressive Website &raquo; ${title}</title>

    <link rel="stylesheet" type="text/css" href="/libs/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="/libs/bootstrap/css/bootstrap-theme.css" />
    <link rel="stylesheet" type="text/css" href="/css/global.css" />
  </head>
  <body>

  <div id="main-content" class="container">
    <#nested/>
  </div>

  <div id="footer">
  </div>

  <script type="text/javascript" src="/js/bundle.js"></script>
</body>
</html>
</#macro>
