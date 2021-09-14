import React, { useContext, createContext } from "react";

export type Order = {
  id: string;
  orderType: "SELL" | "BUY";
  qty: number;
  coinType: string;
  price: number;
  userId?: string;
};

export type OrdersContextType = {
  orders: Array<Order>;
  setOrders: (orders: Array<Order>) => void;
};

export const OrdersContext = createContext<OrdersContextType>({
  orders: [],
  setOrders: undefined
});

interface OrdersProviderProps {
  children?: React.ReactNode;
  orders: Array<Order>;
  setOrders: any;
}

export const OrdersProvider = (props: OrdersProviderProps): JSX.Element => {
  return (
    <OrdersContext.Provider
      value={{
        orders: props.orders,
        setOrders: props.setOrders,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  );
};

export const useOrdersContext = () => useContext(OrdersContext);
