import React from 'react';
import './layout.component.scss';
import httpService from './../../services/http.service';


type TChildren = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<TChildren> = (props: TChildren) => {
  const createMock = () => {
    httpService.mockOrder().then((res: any) => {
      console.log(res.data, 'New mock');
      window.location.reload(false);
    });
  };
  return (
    <>
      <div className="layout-component">
        {props.children}
      </div>
      <div className="mockorder" onClick={createMock}>
        Create mock order
      </div>
    </>
  );
};
export default Layout;
