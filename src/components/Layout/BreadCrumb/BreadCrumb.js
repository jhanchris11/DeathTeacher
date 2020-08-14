import React from "react";
import { Breadcrumb } from "antd";

const BreadCrumb = ({ seccionBot, seccionPreguntas, seccionPerfil }) => {
  return (
    <Breadcrumb className="cl-breadcrumb">
      <Breadcrumb.Item>
        {seccionPreguntas
          ? seccionPreguntas
          : seccionBot
          ? seccionBot
          : seccionPerfil}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
