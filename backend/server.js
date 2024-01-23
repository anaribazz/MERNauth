import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config();

import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

connectDB();
const port = process.env.PORT;

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
app.get('/', (req, res) => res.send(`server is ready`))

app.listen(port, () => console.log(`server started on port ${port}`))