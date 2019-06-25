import React, { Component } from "react";
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from "react-mdl";

//add a new card per project page

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="content-grid" />
          <Grid className="projects-grid">
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  width: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "#black",
                    height: "221px",
                    background:
                      "url(https://tryolabs.com/images/blog/social/react.736da783.png) center / cover",
                    zIndex: 1
                  }}
                >
                  ChattyApp
                </CardTitle>
                <CardText>
                  ChattyApp is a client-side single-page application that allows
                  multiple users to chat with each other. Users are able to set
                  their username and chat in real-time through through the
                  Websocket server.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/at0082a/Chatty-App"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  width: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "black",
                    height: "221px",
                    background:
                      "url(https://www.techaroha.com/wp-content/uploads/2018/06/BEEVA-nodejs-1200x565.jpg) center / cover"
                  }}
                >
                  Pizza Uto
                </CardTitle>
                <CardText>
                A web application for a single restaurant where a user can order food 
                for pick-up. Users can view the menu, select items to order and proceed to a check out page. Users are 
                notified of their order using Twilio via text message.


                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/at0082a/midterm-project-6"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  minWidth: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "black",
                    height: "220px",
                    background:
                      "url(https://www.techaroha.com/wp-content/uploads/2018/06/BEEVA-nodejs-1200x565.jpg) center / cover"
                  }}
                >
                  TinyApp
                </CardTitle>
                <CardText>
                  TinyApp is a full stack web application built with Node and
                  Express that allows users to shorten long URLs (à la bit.ly). Users can register, login, and create new tiny URL's. 
                  A user can view their saved URLs when logged in.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/at0082a/tiny-app"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  minWidth: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "black",
                    height: "230px",
                    background:
                      "url(https://www.cherwell.com/-/media/cherwell/images/tap-logos/asset_logo_amazon-web-service.png) center / cover"
                  }}
                >
                  Haven
                </CardTitle>
                <CardText>
                  Haven is an open source Smart Home app built to automate and
                  control common household processes. The first feature
                  implementation of the app is a camera video feed. The camera
                  can be placed anywhere in your home. Video feeds are stored in AWS
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/adrianaj24/home-assistant"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
            <Cell col={3}>
              <Card
                shadow={5}
                style={{
                  display: "flex",
                  minWidth: "450",
                  margin: "auto",
                  height: "400px"
                }}
              >
                <CardTitle
                  style={{
                    display: "flex",
                    color: "black",
                    height: "250px",
                    background:
                      "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg) center / cover"
                  }}
                >
                  Tweeter
                </CardTitle>
                <CardText>
                  Single-page Twitter clone powered by AJAX that helped refine
                  front-end development skills and leverage the asynchronous
                  power of JavaScript
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/adrianaj24/tweeter"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }} />
              </Card>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Projects;