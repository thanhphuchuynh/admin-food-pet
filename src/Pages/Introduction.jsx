import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Components/Header';

const Introduction = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={HomeIntroduction} />
                <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function HomeIntroduction() {
  const [changeModel, setChangeModel] = useState(true);

  const Model = () =>
    changeModel ? (
      <iframe
        id="695fe8a7-86ba-4756-83ab-b76059c49d93"
        src="https://www.vectary.com/viewer/v1/?model=695fe8a7-86ba-4756-83ab-b76059c49d93&env=studio3"
        frameBorder="0"
        width="100%"
        height="100%"></iframe>
    ) : (
      <iframe
        id="d678007b-d9ed-48af-8495-ec882b2ebca1"
        src="https://www.vectary.com/viewer/v1/?model=d678007b-d9ed-48af-8495-ec882b2ebca1&env=studio3"
        frameBorder="0"
        width="100%"
        height="100%"></iframe>
    );
  return (
    <div>
      <div className="container">
        <div
          className="container-web-ar"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60%',
            height: '100%',
          }}>
          <Model />
        </div>
        <div className="wrapper">
          <h5
            style={{
              position: 'absolute',
              width: '80%',
              mixBlendMode: 'difference',
              textShadow: 'black 0.1em 0.1em 0.2em',
              color: 'white',
            }}>
            The <b>PET FOOD</b> sells one of the biggest ranges of pet food in Vietnamese, as well
            as a huge range of veterinary products and pet accessories. It's everything for pets!
          </h5>
          <p style={{ display: 'inline-block' }} onClick={() => setChangeModel(!changeModel)}>
            Click to change Model
          </p>
        </div>
      </div>
    </div>
  );
}
export default Introduction;
