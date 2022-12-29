import styled from 'styled-components';

interface AuthBtnType {
  title: string;
  onClickEvent: () => void;
}

const StyledInput = styled.button``;

export default function AuthBtn({ title, onClickEvent }: AuthBtnType) {
  return <StyledInput>{title}</StyledInput>;
}
