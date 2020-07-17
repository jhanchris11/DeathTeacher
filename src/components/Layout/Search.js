import React, { useState, useContext } from "react";
import { SearchOutlined } from "@ant-design/icons";
import ContextMessage from "../../Context/ContextMessage";
import { Button, Radio } from 'antd';

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { setSearchInput } = useContext(ContextMessage);

  const handleSearchClick = e => {
    e.preventDefault();
    setSearchInput(searchText);
    setSearchText("");
  };

  const updateState = e => {
    setSearchText(e.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="Search-Box">
        <SearchOutlined />
        <input
          type="text"
          placeholder="Buscar"
          className="Input-Search"
          value={searchText}
          onChange={updateState}
        ></input>
      </div>
      <Button
        type="primary"
        shape="round"
        icon={<SearchOutlined />}
        size="large"
        onClick={handleSearchClick}
      >
        Buscar
      </Button>
    </div>
  );
};

export default Search;
