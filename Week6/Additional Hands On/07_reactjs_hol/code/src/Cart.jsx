import { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <>
        {this.props.item.map((x, index) => (
          <tr key={index}>
            <td>{x.itemname}</td>
            <td>{x.price}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default Cart;
