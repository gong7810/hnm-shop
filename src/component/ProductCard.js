import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  const zoomIn = (event) => {
    event.target.style.transform = "scale";
  };

  return (
    <div>
      <img
        className="image scale"
        src={item?.img}
        width="90%"
        height="160%"
        onClick={showDetail}
      />
      <div style={item?.choice === true ? { textDecoration: "underline" } : {}}>
        {item?.choice === true ? "concious choice" : ""}
      </div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
