import React, {Component} from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl'
import Main from './components/main'
import HomePage from './components/homePage'
import Projects from './components/projects'
import Contacts from './components/contact'
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  render () {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-colour' title="Alex Tilatti" scroll>
            <Navigation>
                {/* <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> */}
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
            <div className='main-container'>
            <HomePage/>
            <Projects/>
            <Contacts/>
            </div>  
            {/* <Main/> */}
        </Content>
    </Layout>
</div>
);
}

}

export default App;
