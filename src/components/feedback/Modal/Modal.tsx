import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Panel from '../../surfaces/Panel/Panel';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const portalDiv = document.getElementById('modal-portal') as HTMLElement;

  return ReactDOM.createPortal(
    isOpen && (
      <StyledOverlay onClick={onClose}>
        <div onClick={(evt) => evt.stopPropagation()}>
          {children && <Panel>{children}</Panel>}
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
`;

export default Modal;
