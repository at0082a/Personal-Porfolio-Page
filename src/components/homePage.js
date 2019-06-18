import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class HomePage extends Component {
  render () {
    return (
      <div className='home-container'>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
            src='http://streitcouncil.org/uploads/images/Alex%20Tilatti.jpg'
            className='profile-picture'
            alt='profilepic'
            />
            <div className='banner-text'><h1>Full Stack Developer</h1>
              <hr/>
              <p><b>Front End</b>: HTML | CSS | JavaScript </p>
              <p><b>Frameworks and Libraries</b>: BootStrap | SCSS | Node JS | Express | React | Ruby | Bootstrap | AWS CLI | AJAX | KNEX | JQUERY </p>
              <p><b>Systems, CMS, Databases</b>: MongoDB | PSQL | GIT | Ruby on Rails | AWS S3 Storage</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default HomePage