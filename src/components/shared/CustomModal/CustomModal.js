import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { Modal } from 'antd';

const CustomModal = ({ isVisible, toggleModal, title, children }) =>
  isVisible
    ? createPortal(
        <Fragment>
          <Modal
            title={title}
            visible={isVisible}
            onOk={toggleModal}
            onCancel={toggleModal}
            footer= {null}
          >
            { children }
          </Modal>
        </Fragment>,
        document.body
      )
    : null;

export default CustomModal;