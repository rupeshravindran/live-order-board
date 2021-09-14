import React, { useMemo } from "react";
import { useOrdersContext, Order } from "../order-context";
import { OrdersSummaryItem } from "./OrderSummaryItem";
import "./OrderSummary.css";

export const OrderSummary: React.FC = () => {
  const { orders } = useOrdersContext();
  const ordersSummary: Array<Order> = useMemo(() => {
    const result: Record<string, Order> = {};
    orders.forEach((order) => {
      const { orderType, qty, coinType, price } = order;
      const key = `${orderType}:${price}:${coinType}`;
      if (!result[key]) {
        result[key] = order;
      } else {
        result[key] = {
          ...result[key],
          qty: parseInt(`${result[key].qty}`) + parseInt(`${qty}`)
        };
      }
    });
    return Object.values(result);
  }, [orders]);

  return (
    <div className="OrderSummary">
      <div className="OrderSummaryTitle">Order Summary</div>
      {ordersSummary.map((order) => {
        return <OrdersSummaryItem key={order.id} order={order} />;
      })}
    </div>
  );
};
