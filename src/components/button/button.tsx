import * as styled from "./button.styled";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  title: string;
}

const Button = (props: Props) => {
  const { title, onClick, ...restProps } = props;

  return (
    <styled.button onClick={onClick} {...restProps}>
      {title}
    </styled.button>
  );
};

export default Button;
