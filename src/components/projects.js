import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Header} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <>
        <Card shadow={5} style={{minWidth: '450',  margin: 'auto', display: 'inline-block' }}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg?cs=srgb&dl=astronomy-cosmos-dark-733475.jpg&fm=jpg) center / cover'}}>
            Chatty App
          </CardTitle>
            <CardText>
              ChattyApp is a client-side single-page application that allows multiple users to chat with each other. Users are able to set their username and chat in real-time through the Websocket server.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto', display: 'inline-block', marginleft: '1em' }}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://jayshetty.me/wp-content/uploads/2019/02/backlit-chiemsee-dawn-1363876.jpg) center / cover'}}>
            Tiny App
          </CardTitle>
          <CardText>
            Tiny App is a full stack web application built with Node and Express that allows users to shorten long URLS (a la bit.ly)
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.pixelstalk.net/wp-content/uploads/2016/12/1920x1080-City-At-Night-Hi-Res-620x349.jpg) center / cover'}}>
            Tweeter
          </CardTitle>
          <CardText>
            Tweeter is a simple, single-page Twitter clone using jQuery, HTML, and Javascript to dynamically allow users to view and post tweets. Dependencies include Node and Express.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://erikhare.files.wordpress.com/2017/06/forest.jpg?w=1200) center / cover'}}>
            Pizza Uto
          </CardTitle>
          <CardText>
            Pizza Uto is a web application for a single restaurant wher a user can order food for pick-up. Users can view the menu and select a pizza or beverage with an option to select a size of small, medium or large. The user can view all items in a cart and proceed to a check out page where they will be given details via Twilio SMS when their order is complete. 
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
        </Card>
        </>
      )
    }  
  }
  render () {
    return (
      <div className='category-tabs'>
        {/* <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({activeTab: tabID})} ripple >
          <Tab>React</Tab>
          <Tab>Node, Express</Tab>
          <Tab>MongoDB</Tab>
          <Tab>Full Stack</Tab>
        </Tabs> */}
        <section className='projects-grid'>
          <Grid className='projects-grid'>
            <Cell col={12}></Cell>
          </Grid>
          {this.toggleCategories()}
        </section>
      </div>
    )
  }
}

export default Projects