import "./Cart.css";
export default function Cart({ cart }) {
  console.log("cart - ", cart);
  return (
    <div className="more">
      <a className="menu" href="#">
        <i className="fa fa-align-right" />
      </a>
      <div className="figure">{cart.length}</div>
    </div>
  );
}
