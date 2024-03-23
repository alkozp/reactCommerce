import "./ProductsHeader.css";
export default function ProductsHeader({ products }) {
  return (
    <div className="sub-header">
      <h2 className="title">
        Sales<span>{products.length} results</span>
      </h2>
      <div className="close-btn">
        <i className="fa fa-close" />
      </div>
    </div>
  );
}
