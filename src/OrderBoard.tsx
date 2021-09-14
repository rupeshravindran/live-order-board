import React, { useState } from "react";
import { OrderList } from "./order-list";
import { OrderSummary } from "./order-summary";
import { OrderTicket } from "./order-ticket";
import { OrdersProvider } from "./order-context";

const OrderBoard: React.FC = () => {
  const [orders, setOrders] = useState([]);
  return (
    <div className="App">
      <OrdersProvider orders={orders} setOrders={setOrders}>
        <OrderSummary />
        <OrderList />
        <OrderTicket />
      </OrdersProvider>
    </div>
  );
};

export default OrderBoard;
