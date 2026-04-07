import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';


const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))


app.use('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "server is running"
    })
})


app.use('/api/auth', authRoutes);


export { app }
export default app;