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


// routes import

/*
here we are importing the route from the routes folder and adding it to the app but keep in mind that, in the router file its being exported as router and here we are renaming it to somehting else
*/

import userRouter from "./routes/user.routes.js";

// router middleware

app.use("/api/v1/users", userRouter);


export default app;
