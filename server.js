import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; // Import cors as ES module
import formRoutes from "./routes/formRoutes.js"; // Use .js for ES modules
import careerRoutes from "./routes/careerRoutes.js"; // Use .js for ES modules

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json()); // body-parser usage with ES module
app.use(cors());

app.use(cors({
  origin: ['http://localhost:3000', 'https://example.com'], // Allow specific origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow cookies if needed
}));


// Connect to MongoDB
// At the MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    console.log("Current database:", mongoose.connection.db.databaseName);
    // List all collections
    mongoose.connection.db.listCollections().toArray((err, collections) => {
      if (err) {
        console.log("Error getting collections:", err);
      } else {
        console.log("Available collections:", collections.map(c => c.name));
      }
    });
  })
  .catch((err) => console.error(err));

// Routes
app.use("/api/form", formRoutes);
app.use("/api/careers", careerRoutes);

// Start Server
const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));