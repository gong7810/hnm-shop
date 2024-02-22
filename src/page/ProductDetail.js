import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [selectSize, setSelectSize] = useState("");

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    await fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setProduct(json);
      });
  };

  const select = (size) => {
    setSelectSize(size);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>
            <h5>{product?.title}</h5>
            <div style={{ fontWeight: "bold" }}>￦ {product?.price}</div>
            <p>{product?.choice === true ? "concious choice" : ""}</p>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택 {selectSize === "" ? "" : selectSize + " "}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => select("")}>
                  사이즈 선택
                </Dropdown.Item>
                {product?.size.map((size) => (
                  <Dropdown.Item onClick={() => select(size)}>
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
