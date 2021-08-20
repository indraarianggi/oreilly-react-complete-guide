import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
`;

const ModalHeader = styled.header`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;

const ModalBody = styled.div`
  padding: 1rem;
`;

const ModalFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export type TErrorModalProps = {
  title: string;
  message: string;
  onClose: () => void;
};

const ErrorModal = ({ title, message, onClose }: TErrorModalProps) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <Card>
          <ModalHeader>
            <h2>{title}</h2>
          </ModalHeader>
          <ModalBody>{message}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Okay</Button>
          </ModalFooter>
        </Card>
      </ModalContainer>
    </>
  );
};

export default ErrorModal;
