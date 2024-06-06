// server/index.js
const express = require("express");
const bodyParser = require("body-parser");
const eventRoutes = require("./Server/routes/eventRoutes");
const authRoutes = require("./Server/routes/authRoutes");
const setupSwagger = require("./swagger");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);

setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
