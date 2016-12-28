import React, {PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ListIcon from 'material-ui/svg-icons/action/list';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';

export default class listCollapse extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
      <div>
        <div>
          <List>
            <ListItem
              primaryText="SEE BENEFITS"
              leftIcon={<ListIcon color='#6D65CB' />}
              style={{
                fontFamily: 'Montserrat',
                fontSize: '13px',
                color: 'black',
                textTransform: 'uppercase',
              }}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedListStyle={{background:'linear-gradient(135deg, rgb(109, 101, 203) 0%, rgb(41, 56, 144) 100%)',}}
              nestedItems={[
                <ListItem
                  key={1}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                  }}
                  primaryText="Fosters Team Collaboration"
                  disabled={true}
                />,
                <ListItem
                  key={2}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                  }}
                  primaryText="CUTS DOWN DEVELOPMENT TIME"
                  disabled={true}
                />,
                <ListItem
                  key={3}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                  }}
                  primaryText="GIVES EVERYONE A VOICE"
                  disabled={true}
                />,
                <ListItem
                  key={4}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                  }}
                  primaryText="IT’S BETTER, FASTER AND CHEAPER"
                  disabled={true}
                />
              ]}
            />
            <Divider />
          </List>
        </div>
      </div>
    );
  }
}