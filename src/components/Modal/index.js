import React, { Component } from "react";
import { createPortal } from "react-dom";

import * as S from "./style";

const modalRoot = document.getElementById("modal");

class Portal extends Component {
  constructor(props) {
    super(props);

    this.element = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    return createPortal(this.props.children, this.element);
  }
}

class Modal extends Component {
  render() {
    const { hidden, children } = this.props;

    return (
      <Portal>
        <S.Modal hidden={hidden}>
          <S.Content>{children}</S.Content>
        </S.Modal>
      </Portal>
    );
  }
}

export default Modal;
