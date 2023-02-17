import ReactDom from 'react-dom';
import classes from './Modal.module.css';
import { Button } from '@chakra-ui/react';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
        <Button colorScheme="blue" mr={3} onClick={props.onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

const modalPlaceholderElement = document.getElementById('modal-placeholder');

const ModalBox = props => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        modalPlaceholderElement
      )}

      {ReactDom.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        modalPlaceholderElement
      )}
    </>
  );
};

export default ModalBox;
