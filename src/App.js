import React, {Component} from 'react';
import {Layout, Header, Navigation, Grid, Cell, Content} from 'react-mdl'
import Main from './components/main'
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  render () {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-colour' title="Alex Tilatti" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        {/* <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer> */}
        <Content>
            {/* <div className="page-content" /> */}
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
              <div className="button-container">
                <a
                  href="https://github.com/at0082a"
                  target="_blank"
                  className="rounded-btn"
                >
                  {" "}
                  <img
                    className="button-icon"
                    src="http://i64.tinypic.com/10xqzxl.png"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexander-tilatti-7670a649/"
                  target="_blank"
                  className="rounded-btn"
                >
                  <img
                    className="button-icon"
                    src="http://i66.tinypic.com/2zsb5ls.png"
                  />
                </a>
                <a
                  href="https://resume.creddle.io/resume/cuhvvpzhma7"
                  target="_blank"
                  className="rounded-btn"
                >
                  <img
                    className="button-icon"
                    src="http://i66.tinypic.com/2a4pheq.png"
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
            <Main/>
        </Content>
    </Layout>
</div>
);
}

}

export default App;
