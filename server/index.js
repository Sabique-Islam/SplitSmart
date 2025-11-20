import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { connectDB } from './config/db.js';

import dashboardRoutes from './routes/dashboardRoutes.js';
import expenseRoutes from './routes/expenseRoutes.js';
import billRoutes from './routes/billRoutes.js';
import savingsRoutes from './routes/savingsRoutes.js';

const app = express();

app.use(cors({ origin: env.clientOrigin }));
app.use(express.json());

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/bills', billRoutes);
app.use('/api/savings', savingsRoutes);

const port = env.port;

connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
});
