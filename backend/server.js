import express from "express";
import path from "path";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import tenantRoutes from "./routes/tenantRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";

const router = express.Router();

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// ROOT API HTML FILE
app.use("/", router);

router.get("/", function (req, res) {
  const __dirname = path.resolve();
  res.sendFile(path.join(__dirname + "/index.html"));
});

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/tenant", tenantRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/account", accountRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
