const express = require("express");
const cors = require("cors");

const app = express();

app.set("port", 3000);

app.use(cors());

app.use("/geo", require("./geo.routers"));

app.listen(app.get("port"), () => {
  console.log(`Èstoy en: http://localhost:${app.get("port")}`);
});
