import { useContext } from "react";
import { AppContext } from "../ReactCommerce.jsx";
import ThumbUnit from "./ThumbUnit.jsx";
import "./ThumbList.css";

export default function ThumbList() {
  const appContext = useContext(AppContext);
  const thumbList = appContext.products.map((item) => (
    <ThumbUnit
      key={item.id}
      id={item.id}
      name={item.title}
      price={item.price}
      src={item.image}
    />
  ));
  return <div className="thumb-wrapper">{thumbList}</div>;
}
