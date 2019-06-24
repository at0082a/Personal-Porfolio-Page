import React, {Component} from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contacts extends Component {
  render () {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Alex Tilatti</h2>
            <img className='contact-pic' src="http://streitcouncil.org/uploads/images/Alex%20Tilatti.jpg"
            alt='profile-pic'
            />
          </Cell>
          <Cell col={6}>
            <h2>Contact Information</h2>
            <hr/>
            <div className='contact-info'>
              <List>
                <ListItem>
                  <ListItemContent className='contact-content'>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    647-382-6761
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className='contact-content'>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    alex.tilatti@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className='contact-content' icon="person">Bob Odenkirk</ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contacts