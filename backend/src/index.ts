import express from 'express';
import cors from 'cors';
import { config } from './config/env';
import { servicesRouter } from './routes/services';
import { bookingsRouter } from './routes/bookings';
import { pagesRouter } from './routes/pages';

const app = express();

app.use(
  cors({
    origin: config.frontendOrigin,
  })
);

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/services', servicesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/pages', pagesRouter);

app.listen(config.port, () => {
  console.log(`Cartenatex API running on port ${config.port}`);
});


