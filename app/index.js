import express from "express";

const app = express();
app.set("port",3000)
app.listen(app.get("port"))
console.log("servidor ", app.get("port"));
