import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className='test-body'>
                <Grid className='test-grid'>
                    
                        <h2>Testimonials</h2>
                        
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Contrary to popular belief, Lorem Ipsum is 
                        not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                    
                  
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="test-list">
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
        
                </Grid>
            </div>
        )
    }
}

export default About;