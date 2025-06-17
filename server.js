require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/Productdb";

app.use(express.json());
app.use(bodyParser.json());
app.use(logger);
app.use(auth);
app.use("/products", productRoutes);
app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error("MongoDB error: ", err));

app.get("/", (req, res) => {
  res.send("Welcome to the Product API");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
