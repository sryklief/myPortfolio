import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import picme from './picme.jpg';


class Resume extends Component {
  render() {
    return(
      <div className="resume-page">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>
                <img 
                    src={picme} 
                    alt="pic"
                    className="pic-of-me"
                    style={{height: '200px'}}
                />
            </div>

            <h2 style={{paddingTop: '2em'}}>M.Saadiq Ryklief</h2>
            <h4 style={{color: 'rgb(46, 46, 46)'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>15 Dien Street Grassy Park, 7941</p>
            <h5>Phone</h5>
            <p>081 503 3058</p>
            <h5>Email</h5>
            <p>saadiqcode@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2016}
              schoolName="South Peninsula High School"
              />

               <Education
                 startYear={2017}
                 endYear={2018}
                 schoolName="False Bay TVET College"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               
                />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Semi Skilled Pipe Fitter"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Events"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <Experience
                startYear={2019}
                endYear={2019}
                jobName="Promo"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={50}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={85}
                  />
                  <Skills
                    skill="Python"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={55}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;