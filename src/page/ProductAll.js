import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const fetchProduct = async () => {
    let searchQuery = query.get("q");
    let url = `http://localhost:5000/products?q=${searchQuery}`;

    await fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setProductList(json);
        console.log(productList);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard className="card" item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
