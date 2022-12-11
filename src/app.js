const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.route");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://127.0.0.1/clinica_san_pedro")
  .then(() => console.log("Connected to the base"))
  .catch((error) => console.log(`Failed to connect to db: ${error}`));

app.use(express.json({ limit: "2mb" }));
app.use(cors());

app.use("/api/user", userRoutes);

app.listen(PORT, () => console.log(`🚀 API is listening on port ${PORT}`));