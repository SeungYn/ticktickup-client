import styled from 'styled-components';

interface ModalType {
  title: string;
  content: string;
  callback: () => void;
}

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

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 450px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color};
`;
