interface AuthBtnType {
  title: string;
  onClickEvent: () => void;
}
export default function AuthBtn({ title, onClickEvent }: AuthBtnType) {
  return <button onClick={onClickEvent}>{title}</button>;
}
