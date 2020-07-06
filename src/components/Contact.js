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
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Contrary to popular belief, Lorem Ipsum is 
                        not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-phone-square' aria-hidden='true'/>
                                    081-503-3058
                                </ListItemContent>
                            </ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', paddingRight: '1em'}}>
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
