const http = require("http");
const routes = require("./routes"); //as not global module

const server = http.createServer(routes);
console.log(routes.someText) // the command wile console log the someText value and and will perform the same function
server.listen(3000);
