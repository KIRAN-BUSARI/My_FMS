import express from 'express';
import './app.js';

import { config } from 'dotenv'
config();



app.use();

app.send('/', (req, res) => {
    res.json("FMS development")
});

