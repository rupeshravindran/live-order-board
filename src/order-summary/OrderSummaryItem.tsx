import React from "react";
import { Order } from "../order-context";

export interface OrdersSummaryItemProps {
  order: Order;
}

export const OrdersSummaryItem: React.FC<OrdersSummaryItemProps> = (props) => {
  const { orderType, qty, coinType, price } = props.order;

  return (
    <div data-testid="order-summary">
      <span>{`${orderType} : ${qty} : ${coinType} @ ${price}`}</span>
    </div>
  );
};
