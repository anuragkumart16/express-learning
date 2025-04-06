import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { requestDataLimit } from "./constants.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(
  express.json({
    limit: requestDataLimit,
  })
); //setting the limit to how much json data can be sent

app.use(
  express.urlencoded({
    extended: true,
    limit: requestDataLimit,
  })
);

app.use(express.static("public"));

app.use(cookieParser());

export default app;
