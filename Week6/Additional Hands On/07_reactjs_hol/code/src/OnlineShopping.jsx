import { Component } from "react";
import Cart from './Cart';

export default class OnlineShopping extends Component {
  render() {
    const CartInfo = [
      { itemname: "Laptop", price: 80000 },
      { itemname: "TV", price: 12000 },
      { itemname: "Washing Machine", price: 50000 },
      { itemname: "Mobile", price: 30000 },
      { itemname: "Fridge", price: 70000 }
    ];

    return (
      <div className="mydiv">
        <h1>Items Ordered :</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <Cart item={CartInfo} />
          </tbody>
        </table>
      </div>
    );
  }
}
