import React, { useState, useContext } from "react";
import { SearchOutlined } from "@ant-design/icons";
import ContextMessage from "../../Context/ContextMessage";
import { Button } from 'antd';
import { getTopicClass, getScrappingQuestion } from "../../services/BotService";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { setSearchInput, setClassText } = useContext(ContextMessage);

  const handleSearchClick = e => {
    e.preventDefault();
    setSearchInput(searchText);
    handlerService(searchText)

    setSearchText("");
  };

  const updateState = e => {
    setSearchText(e.target.value);
  };

  const handlerService = async (topic) => {
    getScrappingQuestion({ topic }).then(({ response }) => console.log(response))
    const { response } = await getTopicClass({ topic })
    setClassText(response)
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
