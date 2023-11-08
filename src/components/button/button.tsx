import * as styled from './button.styled';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  title?: string;
  icon?: string;
  iconRight?: boolean;
}

const Button = (props: Props) => {
  const { title, icon, iconRight, onClick, ...restProps } = props;

  return (
    <styled.button onClick={onClick} {...restProps}>
      {!iconRight && icon && <img src={icon} alt="Left icon" />}
      {title && title}
      {iconRight && icon && <img src={icon} alt="Right icon" />}
    </styled.button>
  );
};

export default Button;
