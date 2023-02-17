import express from 'express';
import connectDB from './database/database.js';
import dotenv from 'dotenv';
import cors from 'cors';
import Routes from './Routes/routes.js';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/", Routes);


const PORT = 8000; //express server will run on this port

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connectDB(username, password);

app.listen(PORT , ()=> console.log(`Server is running at PORT ${PORT}`)); //listen use to create express server