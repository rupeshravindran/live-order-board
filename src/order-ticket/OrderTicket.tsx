import React, { useState, KeyboardEvent } from "react";
import { uuid } from "uuidv4";
import { Order, useOrdersContext } from "../order-context";
import "./OrderTicket.css";

// TODO: fix the event type
type InputElementEvent = any;

export const OrderTicket: React.FC = () => {
  const [order, setOrder] = useState({
    userId: "",
    coinType: "",
    qty: 0,
    price: 0
  });

  const { orders, setOrders } = useOrdersContext();

  const buy = () => {
    const payload: Order = { ...order, orderType: "BUY", id: uuid() };
    setOrders(orders.concat(payload));
  };

  const sell = () => {
    const payload: Order = { ...order, orderType: "SELL", id: uuid() };
    setOrders(orders.concat(payload));
  };

  const handleUserIdChange = (event: InputElementEvent) => {
    setOrder({ ...order, userId: event.target?.value });
  };

  const handleCoinType = (event: InputElementEvent) => {
    setOrder({ ...order, coinType: event.target?.value });
  };

  const handleQtyChange = (event: InputElementEvent) => {
    setOrder({ ...order, qty: event.target?.value });
  };

  const handlePriceChange = (event: InputElementEvent) => {
    setOrder({ ...order, price: event.target?.value });
  };

  return (
    <div className="OrderTicket">
      <div className="OrderTicketTitle">Place Order</div>
      <label data-testid="user-id" htmlFor="userId">
        User Id:
        <input
          id="userId"
          type="text"
          value={order.userId}
          onChange={handleUserIdChange}
        />
      </label>
      <label data-testid="coin-type" htmlFor="coinType">
        Coin Type:
        <input
          id="coinType"
          type="text"
          value={order.coinType}
          onChange={handleCoinType}
        />
      </label>
      <label data-testid="qty" htmlFor="qty">
        Order Qty:
        <input
          id="qty"
          type="text"
          value={order.qty}
          onChange={handleQtyChange}
        />
      </label>
      <label data-testid="price" htmlFor="price">
        Price Per Coin:
        <input
          id="price"
          type="text"
          value={order.price}
          onChange={handlePriceChange}
        />
      </label>
      <button className="Buy" data-testid="buy-button" onClick={buy}>
        BUY
      </button>
      <button className="Sell" data-testid="sell-button" onClick={sell}>
        SELL
      </button>
    </div>
  );
};
