// ENV configuration 
import dotenv from "dotenv";
dotenv.config();
import {fileURLToPath} from "url";
const __dirname = fileURLToPath(import.meta.url);

// imports 
import express from "express";
import cors from "cors";
import path from "path";
import * as sequelize from "./src/models/db.js";

// Setup
const PORT = process.env.PORT;
const app = express();


// middlewares 
app.use(cors());
app.use(express.json());

// Serve Views a s Static Files will be used for Production
app.set(express.static(path.join(__dirname, 'views')));


app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
    // sequelize Sync 
    sequelize.sync({alter: true}).then((res) => {
    }).catch((err) => {console.log(`Sequelize Error :`, err)});
})