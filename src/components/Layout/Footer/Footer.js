import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterMain = ({ text }) => {
  return <Footer className="cl-footer">{text}</Footer>;
};

export default FooterMain;
