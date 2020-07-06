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
              <CardText>h/github-mark.png
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://codecrew.co/wp-content/uploads/2014/05/html-css-logo.png) center / cover'}} >React Project #1</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
        <div><h1>Python</h1></div>
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