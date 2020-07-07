import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import picme from './picme.jpg';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                          src={picme} 
                          alt="pic"
                          className="pic-of-me"
                        />

                        <div className="banner-text">
                            <h1>Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS  |  Boostrap  |  JavaScript  |  Python  |  React  |  NodeJS  |  MongoDB</p>
                            <div className="social-links">

                                <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" rel="noopener noneferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true " />
                                </a>

                                <a href="https://github.com/sryklief" rel="noopener noneferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true " />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;