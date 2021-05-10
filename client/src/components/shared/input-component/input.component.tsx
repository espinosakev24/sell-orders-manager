import React from 'react';
import './input.component.scss';

interface IInput {
    type?: string,
    placeholder: string,
    icon?: any,
    nameId: string,
    changeHandler(nameId: string, value: string): void,
}

const Input: React.FunctionComponent<IInput> = (props: IInput) => {
  const onChangeHandler = (event: any) => {
    let eventValue = event.target.innerText;
    if (!isNaN(eventValue)) eventValue = parseInt(eventValue);
    props.changeHandler(props.nameId, eventValue);
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
          id={props.nameId}
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
