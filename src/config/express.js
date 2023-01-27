import express from 'express';
import helmet from 'helmet';
import createRoutes from '../routes';
import cors from 'cors';
import bodyParser from 'body-parser';

/**
 * Express instance
 * @public
 */
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(bodyParser.json());

/* mount api version routes */
createRoutes(app);

app.use(helmet());

export default app;
