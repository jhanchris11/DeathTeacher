import React, { useState, useContext } from "react";
import { SearchOutlined } from "@ant-design/icons";
import messageBotContext from "../../context/messageBot/messageBotContext";
import { Button } from 'antd';
import { getTopicClass, getScrappingQuestion } from "../../services/botService";
import contextSpinner from "../../context/spinner/spinnerContext";

import './SearchStyle.scss';

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { setSearchInput, setClassText } = useContext(messageBotContext);
  const { setLoading } = useContext(contextSpinner);

  const handleSearchClick = e => {
    e.preventDefault();
    setSearchInput(searchText);
    handlerService(searchText)
    setLoading(true);
    setSearchText("");
  };

  const updateState = e => {
    setSearchText(e.target.value);
  };

  const handlerService = async (topic) => {
    getScrappingQuestion({ topic }).then(({ response }) => console.log(response))
    const { data } = await getTopicClass({ topic })
    setClassText(data['response'])
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding:"15px" }}>
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
        className="searchButton"
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
