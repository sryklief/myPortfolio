import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className='test-body'>
                <Grid className='test-grid'>
                    
                <h2 style={{paddingLeft: '11em'}}>Testimonials</h2>
                <hr style={{borderTop: '3px solid #833fb2', width: '100%', alignItems: 'center'}}/>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Contrary to popular belief, Lorem Ipsum is 
                        not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                </Grid>
            </div>
        )
    }
}

export default About;