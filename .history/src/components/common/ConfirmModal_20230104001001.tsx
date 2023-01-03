import styled from 'styled-components';

interface ModalType {
  title: string;
  content: string;
  callback: () => void;
}

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.152);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div``;

export default function ConfirmModal({ title, content, callback }: ModalType) {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={callback}>확인</button>
      </ModalContent>
    </ModalContainer>
  );
}
