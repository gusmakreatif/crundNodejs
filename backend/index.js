//import express
import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

// init express
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);


// listen on port
app.listen(3000, () => console.log('Server Running at http://localhost:3000'));