// importing necessary modules
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./config/DB.js";
import jobRoute from "./Routes/jobRoute.js";

// setting the server

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// setting the middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to the database
connect();

// setting the routes
app.use("/api/jobs", jobRoute);
