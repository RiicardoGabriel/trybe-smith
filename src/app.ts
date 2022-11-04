import express from 'express';

import ProductsRoutes from './routes/products.routes';
import UserRoutes from './routes/users.routes';
import OrderRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);

export default app;
