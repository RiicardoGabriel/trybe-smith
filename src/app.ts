import express from 'express';

import ProductsRoutes from './routes/products.routes';
import UserRoutes from './routes/users.routes';
import OrderRoutes from './routes/orders.routes';
import LoginRoutes from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);
app.use('/login', LoginRoutes);

export default app;
