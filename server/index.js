import express from 'express';
import dotEnv from 'dotenv';
import userRouter from './routes/userRoute.js';

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


// Use the middleware functions to route ex- usrRouter.
app.use("/api/user", userRouter)


//Error handling middleware sends JSON response with the eror details. 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    if (process.env.NODE_ENV === 'development') {
        console.log(err.stack)
    }
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

// Start the express server and listen to specific port.
app.listen(PORT, () => {
    console.log(`App is Listening on port: ${PORT}`)
})