## Introduction 
 The 'Live Order Board'  support these features:
1) Placing an order. An order can be either a BUY or a SELL and should capture
- user id
- coin type (Litecoin, Ethereum.. etc)
- order quantity (how many coins)
- price per coin (e.g.: £125)

2) Cancel a registered order - this will remove the order from 'Live Order Board'

3) Get summary information of live orders (see explanation below)

Imagine we have received the following orders:
- a) SELL: 350.1 Ethereum @ £13.6 [user1]
- b) SELL: 50.5 for £14 [user2]
- c) SELL: 441.8 for £13.9 [user3]
- d) SELL: 3.5 for £13.6 [user4]
Our ‘Live Order Board’ should provide us the following summary information:
- 353.6 for £13.6 // order a + order d
- 441.8 for £13.9 // order c
- 50.5 for £14 // order b

## Getting Started
   ### Install dependencies 
   ```
   npm install
   ```

   ### Test the widget 
   ```
   npm run storybook
   ```

   ### Build the package
   ```
   npm run build
   ```

   ### Test the package 
   ```
   npm run test
   ```
