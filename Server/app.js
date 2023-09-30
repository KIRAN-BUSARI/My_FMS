import express from "express";
import { config } from "dotenv";
import morgan from "morgan";

config();

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/', (req, res) => {
    res.send('<h1>This is FMS project</h1>')
});

export default app;