import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; // Import cors as ES module
import formRoutes from "./routes/formRoutes.js"; // Use .js for ES modules
import careerRoutes from "./routes/careerRoutes.js"; // Use .js for ES modules
import connectToDatabase from "./db/connect.js";

dotenv.config();

const app = express();
(async () => {
  await connectToDatabase(); // Connect to MongoDB
})();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // body-parser usage with ES module
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies





// Connect to MongoDB
// At the MongoDB connection
// mongoose.connect(process.env.MONGO_URI,{serverSelectionTimeoutMS: 130000 })
//   .then(() => {
//     console.log("MongoDB Connected");
//     console.log("Current database:", mongoose.connection.db.databaseName);
//     // List all collections
//     mongoose.connection.db.listCollections().toArray((err, collections) => {
//       if (err) {
//         console.log("Error getting collections:", err);
//       } else {
//         console.log("Available collections:", collections.map(c => c.name));
//       }
//     });
//   })
//   .catch((err) => console.error(err));

  // main page 
  app.get("/", (req, res) => {
    res.send('api is working in kdk condition!!!')   
  })
// Routes
app.use("/gr2/api/form", formRoutes);
app.use("/gr2/api/careers", careerRoutes);

// Start Server
const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
