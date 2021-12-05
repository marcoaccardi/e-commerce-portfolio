import React from "react";
import { categories } from "./categories_info";
import { Container } from "./categories_style";
import CategoryItem from "./categoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
      ;
    </Container>
  );
};

export default Categories;
