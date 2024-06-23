const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoutes");

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

const port = process.env.Port || 5000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



app.listen(port, () => {
  console.log(`server listening on The port ${port}`);
});
