import { useState, useContext } from "react";
import { AppContext } from "../ReactCommerce.jsx";
import "./ThumbUnit.css";

export default function ThumbUnit(props) {
  //   console.log(props);
  const [isFavorite, setFavorite] = useState(false);
  const [inCart, setInCart] = useState(false);
  const cartState = useContext(AppContext);

  // console.log(props);

  function handleCart() {
    if (inCart) {
      //remove from cart
      if (cartState.cart.length > 0) {
        const index = cartState.cart.indexOf(
          cartState.cart.find((item) => item.id === props.id)
        );
        const newCart = cartState.cart
          .slice(0, index)
          .concat(cartState.cart.slice(index + 1));
        cartState.setCart([...newCart]);
      }
    } else {
      //add to cart
      const itemToCart = {
        id: props.id,
        name: props.name,
        price: props.price,
      };
      cartState.setCart([...cartState.cart, itemToCart]);
    }
    setInCart(!inCart);
  }

  function handleFavorite() {
    setFavorite(!isFavorite);
    // console.log("handleFavorite");
  }

  return (
    <div className="thumb-unit" key={props.id}>
      <div className="heading">
        <span>${props.price}</span>
        <span onClick={handleFavorite}>
          <i className={isFavorite ? "fa fa-heart" : "fa fa-heart-o"} />
        </span>
      </div>
      <div className="box" style={{ backgroundImage: `url(${props.src})` }} />
      <div className="info">
        <p>{props.name}</p>
        <span className="icon" onClick={handleCart}>
          <i
            className="fa fa-shopping-cart"
            style={inCart ? { color: "black" } : {}}
          />
        </span>
      </div>
    </div>
  );
}
