import React from "react";
import { useOrdersContext, Order } from "../order-context";
import { OrderListItem } from "./OrderListItem";
import "./OrderList.css";

export const OrderList: React.FC = () => {
  const { orders } = useOrdersContext();
  return (
    <div className="OrderList">
      <div className="OrderListTitle">Order List</div>
      {orders.map((order: Order) => {
        return <OrderListItem key={order.id} order={order} />;
      })}
    </div>
  );
};
