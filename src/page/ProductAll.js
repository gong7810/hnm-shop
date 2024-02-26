import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [error, setError] = useState();

  const fetchProduct = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?", searchQuery);
    let url = `http://localhost:5000/products?q=${searchQuery}`;

    console.log("url", url);
    let response = await fetch(url);
    console.log("response", response);
    let data = await response.json();
    console.log("data", data);

    if (data.length < 1) {
      if (searchQuery !== "") {
        setError(`"${searchQuery}"와 일치하는 상품이 없습니다`);
      } else {
        throw new Error("결과가 없습니다.");
      }
    } else {
      setError(0);
    }

    setProductList(data);
    // await fetch(url)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (json) {
    //     setProductList(json);
    //     console.log(json);
    //   });
  };

  useEffect(() => {
    fetchProduct();
  }, [query]);

  return (
    <div>
      <Container>
        {error ? (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        ) : (
          <Row>
            {productList.map((menu) => (
              <Col md={3} sm={12} key={menu.id}>
                <ProductCard className="card" item={menu} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductAll;
