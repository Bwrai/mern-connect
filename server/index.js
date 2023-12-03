import express from 'express';
import dotEnv from 'dotenv';

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello Route')
})

//Error handling middleware
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

app.listen(PORT, () => {
    console.log(`App is Listening on port: ${PORT}`)
})