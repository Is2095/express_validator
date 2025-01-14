import express from 'express';
import router from '../routers';

const app = express();

app.use(express.json());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE, PATCH'
  );
  res.header("X-Total-Count", "1000");

  next();
})

app.use('/api', router);

export default app;