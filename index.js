import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
import ConnectDB from './Connection/ConnectDB.js';
import router from './Router/UserRouter.js';
import cors from 'cors';
import path from 'path'
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';


// Middleware :

app.use(cors());
app.use(express.json());
app.use('/', router)
app.use(cookieParser)





// Get the current module's filename and convert it to a path
const __filename = fileURLToPath(import.meta.url);

// Determine the directory name from the current module's filename
const __dirname = path.dirname(__filename);

// Set the path to the folder where your uploaded files are stored.
const uploadsFolderPath = path.join(__dirname, 'uploads');

// Serve the static files from the "uploads" folder using the correct URL format.
app.use('/uploads', express.static(uploadsFolderPath));



app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});


ConnectDB();