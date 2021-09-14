import React from "react";
import { Order } from "../order-context";
import { useOrdersContext } from "../order-context";

export interface OrderListItemProps {
  order: Order;
}

export const OrderListItem: React.FC<OrderListItemProps> = ({ order }) => {
  const { orderType, qty, coinType, price, userId } = order;
  const { orders, setOrders } = useOrdersContext();

  const cancelOrder = () => {
    const ordersClone = [...orders];
    const index = ordersClone.findIndex((orderItem) => orderItem === order);

    if (index !== -1) {
      ordersClone.splice(index, 1);
      setOrders(ordersClone);
    }
  };

  return (
    <div data-testid="order-list-item">
      <span>{`${orderType} : ${qty} : ${coinType} @ ${price} [${userId}] `}</span>
      <button onClick={cancelOrder}>Cancel Order</button>
    </div>
  );
};
