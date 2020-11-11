import React from 'react';
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
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          The <b>PET FOOD</b> sells one of the biggest ranges of pet food in Vietnamese, as well as
          a huge range of veterinary products and pet accessories. It's everything for pets!
        </h5>
      </div>
    </div>
  );
}
export default Introduction;
