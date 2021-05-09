import React from 'react';
import './button.component.scss';

interface IButton {
    label: string
}

const Button: React.FunctionComponent<IButton> = (props: IButton) => {
  return (
    <button className="button-component">
      {props.label}
    </button>
  );
};

export default Button;
