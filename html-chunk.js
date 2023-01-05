module.exports.header = `
<html>
    <head>
      <link rel="shortcut icon" href="#">
      <title>Home Page</title>
    </head>
    <body>
    <br>
`

module.exports.footer = `
    </body>
</html>
`

/////////////////////////////////////////////////////////

module.exports.home = `
  <h1>Welcome to Codecamp</h1>
`

module.exports.notFound = `
  <h1>404, have no such a page</h1>
  <script>
    setTimeout(() => location.href='/', 2000)
  </script>
`

/////////////////////////////////////////////////////////

module.exports.inputBar = `
<form action='/add' method='POST'>
  <input name='user'/>
  <button>Add</button>
</form>
`