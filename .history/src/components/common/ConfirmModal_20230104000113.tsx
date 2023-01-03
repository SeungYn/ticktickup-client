import styled from 'styled-components';

interface ModalType {
  title: string;
  content: string;
  callback: () => void;
}

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ConfirmModal({ title, content, callback }: ModalType) {
  return <div></div>;
}
