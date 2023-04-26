import React, { MouseEventHandler, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export interface ModalProps {
  isOpen: boolean;
  handleClose: MouseEventHandler;
  children: ReactNode;
}

const Modal = ({ isOpen, handleClose, children }: ModalProps) => {
  const portalDiv = document.getElementById('modal-portal') as HTMLElement;

  return ReactDOM.createPortal(
    isOpen && (
      <StyledOverlay onClick={handleClose}>
        <div onClick={(evt) => evt.stopPropagation()}>
          <div
            style={{
              border: '1px solid green',
              width: '300px',
              height: '450px',
            }}
          >
            I'm a Modal
          </div>
        </div>
      </StyledOverlay>
    ),
    portalDiv
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(7px);
  /* z-index: 4; */
`;

export default Modal;
