import express from "express";
import cors from "cors"
import morgan from "morgan";

import Config from "./Config/serverConfig.js"
import apiRoutes from "./Routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("short"));

Config.RateLimiter(app);

app.use("/api", apiRoutes);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "failure",
    data: {},
    error: "Route not found",
    message: "Route not found",
  });
});

app.listen(Config.PORT, () => {
    console.log(`Server is running on http://localhost:${Config.PORT}`);
}); 