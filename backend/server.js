import express from 'express'
import cors from 'cors';
import 'dotenv/config'


// app config
const app = express();
const port = process.env.PORT || 4000; // fallback to 5000 if PORT is not set

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get('/', (req, res) => {
    res.send('API WORKING');
});

// start server
app.listen(port, () => {
    console.log("Server running on http://localhost",port);
});
