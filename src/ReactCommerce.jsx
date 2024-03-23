import { useState, createContext, useEffect } from "react";
// import { items } from "./itemsDB.js";
import Navigation from "./components/Navigation.jsx";
import Header from "./components/Header.jsx";
import Cart from "./components/Cart.jsx";
import ProductsHeader from "./components/ProductsHeader.jsx";
import ThumbList from "./components/ThumbList.jsx";

export const AppContext = createContext();

export default function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const appState = { cart, setCart, products };
  const dataUrl = "https://fakestoreapi.com/products";

  //fetch data
  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <header>
          <Header />
          <Navigation />
          <Cart cart={cart} />
        </header>
        <div className="container">
          <ProductsHeader products={products} />
          <AppContext.Provider value={appState}>
            <ThumbList />
          </AppContext.Provider>
        </div>
      </div>
    </>
  );
}
