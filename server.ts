import express, { application } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3333, () => console.log("🚀 Server is running..."));

module.exports = app;
