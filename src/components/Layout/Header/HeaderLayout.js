import React from "react";
import { Menu, Badge, Layout } from "antd";
import CustomDropDown from "../../shared/CustomDropDown/CustomDropDown";
import { BellOutlined } from "@ant-design/icons";

import logo from "../../../assets/logo.PNG";

import { HeaderChild, LogoContainer } from "./HeaderStyled";
import "./HeaderStyle.scss";

const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <Header className="headerCustom">
      <HeaderChild>
        <LogoContainer>
          <img src={logo} height={60} />
        </LogoContainer>

        <Menu mode="horizontal">
          <Menu.Item key="1" className="menu-item-icon">
              <span>Home</span>
          </Menu.Item>
          <Menu.Item key="2" className="menu-item-icon">
            <Badge count={99}>
              <span>Notifications</span>
              <BellOutlined />
            </Badge>
          </Menu.Item>

          <Menu.Item key="3">
            <CustomDropDown userName={"Jesus"} email={"jesus@gmail.com"} />
          </Menu.Item>
        </Menu>
      </HeaderChild>
    </Header>
  );
};

export default HeaderLayout;
