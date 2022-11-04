import express from 'express';

import ProductsRoutes from './routes/products.routes';
import UserRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UserRoutes);

export default app;
