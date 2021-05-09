import React from 'react';

import './layout.component.scss';


type TChildren = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<TChildren> = (props: TChildren) => {
  return (
    <div className="layout-component">
      {props.children}
    </div>
  );
};
export default Layout;
