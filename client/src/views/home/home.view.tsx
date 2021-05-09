import React from 'react';
import Button from '../../components/shared/button-component/button.component';
import './home.view.scss';

import homeImage from './homeicon.svg';

const Home: React.FunctionComponent = () => {
  return (
    <section className="home-view">
      <div className="home-content-text">
        <div className="home-content-container">
          <h1>Sell orders manager</h1>
          <h2>Web app to manage selling orders</h2>
          <p>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Itaque, provident.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facere, hic facilis? Aspernatur veritatis
          ullam impedit voluptatum deserunt praesentium necessitatibus
           debitis, tenetur sint, maiores incidunt veniam commodi est
           magnam non doloribus!
          </p>
          <Button label="Get started" />
        </div>
      </div>
      <div className="home-content-img">
        <img src={homeImage} alt="Home view image" width="300"/>
      </div>
    </section>
  );
};

export default Home;
