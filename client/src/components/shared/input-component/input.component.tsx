import React from 'react';
import './input.component.scss';

interface IInput {
    type?: string,
    placeholder: string,
    icon?: any,
    changeHandler(event: any): void
}

const Input: React.FunctionComponent<IInput> = (props: IInput) => {
  const onChangeHandler = (event: any) => {
    props.changeHandler(event.target.innerText);
  };

  const typeChecker = (event: any) => {
    const eventValue: string = String.fromCharCode(event.which);
    if (props.type === 'number') {
      if (isNaN(eventValue as any)) event.preventDefault();
    }
  };
  return (
    <div className='input-component'>
      <div className={props.icon ? 'input-text' : 'input-text no-margin'}>
        <div
          className='input-text-content'
          data-text={props.placeholder}
          contentEditable='true'
          onKeyPress={(e) => typeChecker(e)}
          onInput={(e) => onChangeHandler(e)}
        ></div>
      </div>
      {
        props.icon &&
        <button>
          <img src={props.icon} alt='Input icon' />
        </button>
      }
    </div>
  );
};

export default Input;
