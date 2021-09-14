import React from "react";
import { render, screen } from "@testing-library/react";
import { OrderList } from "./OrderList";
import { Order, OrdersProvider } from "../order-context";

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
      <OrderList />
    </OrdersProvider>
  );
  const orderNodes = screen.getAllByTestId("order-list-item");
  expect(orderNodes.length).toBe(2);
  
});
