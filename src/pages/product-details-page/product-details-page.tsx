import React from "react";
import { Helmet } from "react-helmet-async";

const ProductDetailsPage:React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Страница продукта Маркетплейса</title>
      </Helmet>
      <h1>Страница Продукта</h1>
    </>
  )
}

export default ProductDetailsPage;