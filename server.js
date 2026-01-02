const express = require("express");
const app = express();
require("dotenv").config();
require("./config/dbConfig");   // this ensures DB connects

const portfolioRoute = require("./routes/portfolioRoutes");

app.use(express.json());

// API routes
app.use("/api/portfolio", portfolioRoute);

// Serve frontend in production
app.use(express.static("./client/build"));
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});
