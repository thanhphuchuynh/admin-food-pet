import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { NavbarComponent } from '../Components';
import { RouterHome } from '../Route/Router';

const Home = ()=>{
    return(
        <Router >
        <div>
            <NavbarComponent />
           
            <RouterHome />
        </div>
        </Router>
    )
}

export default Home;