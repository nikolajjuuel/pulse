import express from "express";
import routes from "./routes";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});