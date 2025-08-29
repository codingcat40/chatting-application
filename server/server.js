import express from 'express'
import "dotenv/config"
import cors from 'cors'
import http from 'http'
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';

// express server

const app = express();
const server = http.createServer(app);

// middlewares
app.use(express.json({limit: '4mb'}));
app.use(cors());


// Routes Setup
app.use("/api/status", (req, res) => {
    res.send("Server is live");
});

app.use("/api/auth", userRouter);




// connect db function
await connectDB();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
})
