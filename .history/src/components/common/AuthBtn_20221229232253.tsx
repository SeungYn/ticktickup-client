import styled from 'styled-components';

interface AuthBtnType {
  title: string;
  onClickEvent: () => void;
}

const StyledInput = styled.button`
  width: 100%;
  height: 2rem;
  font-size: 1.4rem;
`;

export default function AuthBtn({ title, onClickEvent }: AuthBtnType) {
  return <StyledInput onClick={onClickEvent}>{title}</StyledInput>;
}
