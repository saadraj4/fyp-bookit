import express from 'express';
import connectDb from "./Config/database.js";
import cors from 'cors';
import pkg from 'body-parser';
import DemoRoutes from './routes/DemoRoutes.js'
const { json } = pkg;
const app = express();
const PORT = 8080;

connectDb()
app.use(cors());
app.use(json());

app.use('/api/user', DemoRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
