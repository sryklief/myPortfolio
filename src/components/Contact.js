import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import picme from './picme.jpg';

class Contact extends Component {
    render() {
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>M.Saadiq Ryklief</h2>
                        <img 
                          src={picme} 
                          alt="pic"
                          className="pic-of-me"
                          style={{height: '250px'}}
                        />
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Bebas Neue', paddingLeft: '1.5em'}}>
                                    <i className='fa fa-phone-square' aria-hidden='true'/>
                                    081-503-3058
                                </ListItemContent>
                            </ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Bebas Neue'}}>
                                    <i className='fa fa-envelope' aria-hidden='true'/>
                                    saadiqcode@gmail.com
                                </ListItemContent>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
