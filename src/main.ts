import express from "express";
import mongoose from "mongoose";
import routes from "./routes";


const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);
