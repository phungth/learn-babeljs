var connect = require("connect");
var serveStatic = require("serve-static");

connect()
  .use(serveStatic('dist/', { index: ['index.html', 'index.htm'] }))
  .listen(8080, () => console.log("Server running on 8080..."));
