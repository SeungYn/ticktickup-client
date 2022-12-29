import styled from 'styled-components';

interface AuthBtnType {
  title: string;
  onClickEvent: () => void;
}

const StyledInput = styled.button`
  width: 100%;
  height: 0.8rem;
`;

export default function AuthBtn({ title, onClickEvent }: AuthBtnType) {
  return <StyledInput onClick={onClickEvent}>{title}</StyledInput>;
}
