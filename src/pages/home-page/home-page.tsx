import React from "react";
import { Helmet } from "react-helmet-async";
import { TestDiv } from "./styled";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Главная Маркетплейса</title>
      </Helmet>
      <h1>Главная маркетплейса</h1>
      <TestDiv>Тестовая тема</TestDiv>
    </>
  )
}

export default HomePage;