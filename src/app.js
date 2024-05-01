import express from 'express';
import cors from 'cors'

// routes import
import uploadRoutes from './routes/upload.routes.js';

const app = express()


// middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({limit: "25mb", extended: true}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});


// routes
app.use('/api', uploadRoutes);


export default app;