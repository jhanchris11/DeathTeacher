import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Avatar } from "antd";
import {
  DownOutlined,
  LogoutOutlined,
  ProfileOutlined
} from "@ant-design/icons";

const CustomDropDown = ({ userName, email }) => {
  const getItemsList = () => {
    return [
      {
        route: "/profile",
        icon: <ProfileOutlined />,
        content: userName
      },
      {
        route: "/",
        icon: <LogoutOutlined />,
        content: "Logout"
      }
    ];
  };

  //Todo: Convert to custom component
  const getDropDownList = itemsList => {
    return (
      <Menu>
        {itemsList &&
          itemsList.length > 0 &&
          itemsList.map((item, index) => (
            <Menu.Item icon={item.icon} key={index}>
              <Link to={item.route}>
                <a target="_blank" rel="noopener noreferrer">
                  {item.content}
                </a>
              </Link>
            </Menu.Item>
          ))}
      </Menu>
    );
  };

  return (
    <Dropdown overlay={getDropDownList(getItemsList())} trigger={["click"]}>
      <div>
        <Avatar
          size={32}
          src="https://via.placeholder.com/32x32"
          className="mr-2"
        />
        <span>{userName}</span>
        <DownOutlined className="ml-1" />
      </div>
    </Dropdown>
  );
};

export default CustomDropDown;
