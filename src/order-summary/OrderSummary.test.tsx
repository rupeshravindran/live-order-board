import React from "react";
import { render, screen } from "@testing-library/react";
import { OrderSummary } from "./OrderSummary";
import { Order, OrdersProvider } from "../order-context";
import '@testing-library/jest-dom/extend-expect';

const mockOrders: Array<Order> = [
  {
    id: "1",
    orderType: "SELL",
    qty: 100,
    coinType: "BitCoin",
    price: 250,
    userId: "user1",
  },
  {
    id: "2",
    orderType: "SELL",
    qty: 200,
    coinType: "BitCoin",
    price: 250,
    userId: "user2",
  },
];

test("renders OrderSummary", () => {
  render(
    <OrdersProvider orders={mockOrders} setOrders={() => {}}>
      <OrderSummary />
    </OrdersProvider>
  );
  expect(screen.getByTestId("order-summary")).toHaveTextContent(
    "SELL : 300 : BitCoin @ 250"
  );  
});
