import React, { useState } from "react";

const useCustomModal = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!isVisible);
  };

  return { isVisible , toggleModal };
};

export default useCustomModal;