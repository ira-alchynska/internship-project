const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.PORT || 8000;
server.use(middlewares);
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );
server.use("/api", router);
server.get("*", function (req, res) {
  //   res.redirect("/");
  res.sendfile(__dirname + "/build/index.html");
});
server.listen(PORT, () => {
  console.log("Server is running", PORT);
});
