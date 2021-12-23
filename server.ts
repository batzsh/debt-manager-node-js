import express from "express";
import cors from "cors";
import routes from "./routes";
import createConnection from "./src/infra/database/index";

createConnection();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => console.log("🚀 Server is running on port 3000..."));

module.exports = app;
