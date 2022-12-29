import styled from 'styled-components';

interface AuthBtnType {
  title: string;
  onClickEvent: () => void;
}

const StyledInput = styled.button`
  width: 100%;

  font-size: 1.4rem;
  border: none;
  background: #00838f;
  border-radius: 10px;
  padding: 0.4rem 0;
  color: white;
`;

export default function AuthBtn({ title, onClickEvent }: AuthBtnType) {
  return <StyledInput onClick={onClickEvent}>{title}</StyledInput>;
}
