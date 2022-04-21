const express= require("express");
const app= express();

app.use(express.json());

const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

// const server= require("./src/cache");

const transController = require("./src/controller/trans.controller");

app.use("/transData", transController);

const connect = require("./src/config/db");

app.listen(2345, async () => {
    await connect();
  
    console.log(`running on port 2345`);
  });