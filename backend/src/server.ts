import express from 'express';
import cors from 'cors';
import routes from './routes';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/devices', routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
