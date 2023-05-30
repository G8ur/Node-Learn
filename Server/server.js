// creating node js server

const { write } = require("fs");
const httpp = require("http"); // for global module http if ./http then in local path

const server = httpp.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  //sending the response
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first webpage</title></head>");
  res.write("<body><p>Noob</p></body>");
  res.write("</html>");
  res.end();
}); // not he function braces beacuse we want to run this function for all values not any particular value

server.listen(3000);
