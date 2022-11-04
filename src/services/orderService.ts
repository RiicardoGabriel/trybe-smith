import orderModel from '../models/orderModel';

async function getOrders() {
  const data = await orderModel.getOrders();
    
  return { status: 200, data };
}

export default { getOrders };