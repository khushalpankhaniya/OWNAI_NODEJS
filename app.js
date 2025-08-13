import express from 'express'
import dotenv from 'dotenv'
import logicRouter from './routes/logicRoutes.js'
import cors from 'cors'
import { AppDataSource } from './db/data-source.js'

dotenv.config();
const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', logicRouter);

const port = process.env.PORT || 3000;


AppDataSource.initialize()
  .then(() => {
    console.log("database connction succesfully")
    app.listen(port, () => {
      console.log(`app working on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("database connection error:", err)
  });