import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import AboutMe from './Testimonials';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
    </Switch>
)

export default Main;