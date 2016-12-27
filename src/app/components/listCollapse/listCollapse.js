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
              primaryText="SEE SYLLABUS"
              leftIcon={<ListIcon color='#6D65CB' />}
              style={{
                fontFamily: 'Montserrat',
                fontSize: '13px',
                color: 'black',
                textTransform: 'uppercase',
              }}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'black',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(224, 224, 224)',
                  }}
                  primaryText="UNIT 1: OVERVIEW"
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black',}} 
                    primaryText="Drafts" 
                    />,
                  ]}
                />,
                <ListItem
                  key={2}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'black',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(224, 224, 224)',
                  }}
                  primaryText="UNIT 2: DISCOVERY"
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black',}} 
                    primaryText="Drafts" 
                    />,
                  ]}
                />,
                <ListItem
                  key={3}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'black',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(224, 224, 224)',
                  }}
                  primaryText="UNIT 3: SKETCH"
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black',}} 
                    primaryText="Drafts" 
                    />,
                  ]}
                />,
                <ListItem
                  key={4}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'black',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(224, 224, 224)',
                  }}
                  primaryText="UNIT 4: WIREFRAME"
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black',}} 
                    primaryText="Drafts" 
                    />,
                  ]}
                />,
                <ListItem
                  key={5}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'black',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(224, 224, 224)',
                  }}
                  primaryText="UNIT 5: DESIGN/PRESENTATION"
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black',}} 
                    primaryText="Drafts" 
                    />,
                  ]}
                />,
                <ListItem
                  key={6}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'black',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(224, 224, 224)',
                  }}
                  primaryText="UNIT 6: PROTOTYPE"
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black',}} 
                    primaryText="Drafts" 
                    />,
                  ]}
                />,
                <ListItem
                  key={7}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'black',
                    textTransform: 'uppercase',
                  }}
                  primaryText="UNIT 7: PRESENT"
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black',}} 
                    primaryText="Drafts" 
                    />,
                  ]}
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