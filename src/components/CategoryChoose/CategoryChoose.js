import React, { Fragment, useState, useEffect } from "react";
import { Select } from "antd";

import { getCategories } from "../../services/categoryService";
import {
  CustomButton,
  IconContainer,
  TextContainer,
  CategoryContainer,
  LogoContainer
} from "./CategoryChooseStyled.js";

const { Option } = Select;

const CategoryChoose = ({ handleSubmitDataParent }) => {
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState(null);

  useEffect(() => {
    handleCategories();
  }, []);

  const handleCategories = async () => {
    let { data } = await getCategories();
    setCategories(data["categories"]);
  };

  const handleChange = value => {
    setCategorySelected(value);
  };

  const handleSubmitData = () => {
    handleSubmitDataParent(categorySelected);
  };

  return (
    <Fragment>
      {categories.length > 0 && (
        <CategoryContainer>
          <LogoContainer/>
          <Select
            showSearch
            style={{ width: 250, height: 40, margin: "20px 0px" }}
            placeholder="Select your Category"
            optionFilterProp="children"
            onChange={handleChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {categories.map(category => (
              <Option key={category._id} value={category._id}>
                {category.category}
              </Option>
            ))}
          </Select>

          <CustomButton backgroundColor="#3b5998" onClick={handleSubmitData}>
            <IconContainer>
              <i className="fab fa-facebook-f"></i>
            </IconContainer>
            <TextContainer>Learn this Category</TextContainer>
          </CustomButton>
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default CategoryChoose;
