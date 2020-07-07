import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import {BrowserRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
      if(this.state.activeTab === 0){
        return(
          <div className="react-page" >
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}} >GitHub Finder</CardTitle>
                <CardText>
                  A program designed to search GitHub repositories.
                </CardText>
                <CardActions border>
                <Button colored style={{paddingLeft: '120px'}} href='https://github.com/sryklief/project-finder-github' target="_blank">GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}} >IT Logger</CardTitle>
                <CardText>
                  Keeps track of work that has been done or still has to be completed.
                </CardText>
                <CardActions border>
                  <Button colored style={{paddingLeft: '120px'}} href='https://github.com/sryklief/it-logger' target="_blank">GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}} >Contact Keeper</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </CardText>
                <CardActions border>
                <Button colored style={{paddingLeft: '120px'}} href='https://github.com/sryklief/Contact-Keeper' target="_blank">GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>
          </div>

        )
        } else if(this.state.activeTab === 1) {
          return (
            <div className="react-page">
              <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#484435', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUD1MLNjS3i_DuicvvMKKXUWfLFMkS3NiGtw&usqp=CAU) center / cover'}} >React Project #1</CardTitle>
                  <CardText>
                    A website displaying employee profiles using HTML and CSS only.
                  </CardText>
                  <CardActions border>
                  <Button colored style={{paddingLeft: '120px'}} href='https://github.com/sryklief/Web-Project' target="_blank">GitHub</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            </div>
          )
          } else if(this.state.activeTab === 2) {
            return (
              <div className="react-page">
              <div className="projects-grid">

                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#484435', height: '176px', background: 'url(https://icon-library.com/images/python-icon-png/python-icon-png-2.jpg) center / cover'}} >Lotto Project</CardTitle>
                  <CardText>
                    User guesses 6 numbers between 1 and 50 whilst trying to match the 6 randomly generated numbers for a chance to win a prize.
                  </CardText>
                  <CardActions border>
                  <Button colored style={{paddingLeft: '120px'}} href='https://github.com/sryklief/lotto' target="_blank">GitHub</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://icon-library.com/images/python-icon-png/python-icon-png-2.jpg) center / cover'}} >Python/MySQL</CardTitle>
                  <CardText>
                    A digital logbook to keep track of people signing in and out of a premises using Python and MySQL database.
                  </CardText>
                  <CardActions border>
                  <Button colored style={{paddingLeft: '120px'}} href='https://github.com/sryklief/python-mySQLdb' target="_blank">GitHub</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            </div>
            )
          }
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>Python</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;