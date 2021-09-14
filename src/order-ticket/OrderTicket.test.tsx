import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Order, OrdersProvider } from "../order-context";
import { OrderTicket } from "./OrderTicket";
import "@testing-library/jest-dom/extend-expect";

const mockOrders: Array<Order> = [
  {
    id: "1",
    orderType: "SELL",
    qty: 100,
    coinType: "BitCoin",
    price: 250,
    userId: "user1"
  },
  {
    id: "2",
    orderType: "SELL",
    qty: 200,
    coinType: "BitCoin",
    price: 250,
    userId: "user2"
  },
];

const mockSetOrders = jest.fn();

test("renders OrderTicket", () => {
  render(
    <OrdersProvider orders={mockOrders} setOrders={mockSetOrders}>
      <OrderTicket />
    </OrdersProvider>
  );
  expect(screen.getByTestId("user-id")).toHaveTextContent("User Id:");
  expect(screen.getByTestId("coin-type")).toHaveTextContent("Coin Type:");
  expect(screen.getByTestId("qty")).toHaveTextContent("Order Qty:");
  expect(screen.getByTestId("price")).toHaveTextContent("Price Per Coin:"); 
  fireEvent.click(screen.getByTestId("buy-button"));
  expect(mockSetOrders).toHaveBeenCalledTimes(1);
  mockSetOrders.mockClear();
  fireEvent.click(screen.getByTestId("sell-button"));
  expect(mockSetOrders).toHaveBeenCalledTimes(1);
});