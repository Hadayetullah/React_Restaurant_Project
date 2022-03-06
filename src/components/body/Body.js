import react from 'react';
import Home from './Home';
import Menu from './Menu';
import About from './About'
import Contact from './Contact';
import { Route, Redirect, Switch } from 'react-router-dom';


let Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
}

export default Body;