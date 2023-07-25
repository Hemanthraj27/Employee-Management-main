import express from 'express';
import bodyParser from "body-parser";

// import routes
import router from './Routes/routes.js';

import dotenv from 'dotenv';
import { connectToDatabase } from './Services/mongoDBService.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// use express json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use router
app.use(router);

// Middleware to parse request body as JSON
app.use(express.json());
app.get('/', function(req, res){
  res.json({ message: 'Welcome to Securra Health' });
});

// Connect to MongoDB and start the server
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});