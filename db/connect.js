import mongoose from 'mongoose';
import dotenv from "dotenv";


// Flag to track connection status
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log('Using existing MongoDB connection');
    return;
  }

  const MONGO_URI = process.env.MONGO_URI; // Get connection string from .env
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState === 1;
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    throw err; // Stop further execution if the connection fails
  }
};

export default connectToDatabase;
