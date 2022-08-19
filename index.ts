import express, { Express } from "express";
import dotenv from "dotenv";
import { readdirSync } from 'fs';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// routes
readdirSync('./routes').map((route) => app.use("/api", require(`./routes/${route.split('.')[0]}`)));

app.listen(port, () => {
  console.log("Server started");
});
