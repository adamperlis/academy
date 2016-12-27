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
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                    background:'#6D65CB',
                  }}
                  primaryText="UNIT 1: OVERVIEW"
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black', }} 
                    primaryText="
                    Your instructor will give you an intro to design sprints and design thinking and review of steps in process.
                    Teams will be formed of Designer, Developers and Product Managers"
                    />,
                  ]}
                />,
                <ListItem
                  key={2}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                    background:'#6D65CB',
                  }}
                  primaryText="UNIT 2: DISCOVERY"
                  disabled={true}
                  nestedItems={[
                      <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black', }} 
                    primaryText="
                    You will discuss the (predetermined) challenges your company is facing with a particular feature.
                    As a group we will narrow down 3-5 key problems we are trying to solve using the 'How Might We...' format."
                    />,
                  ]}
                />,
                <ListItem
                  key={3}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                    background:'#6D65CB',
                  }}
                  primaryText="UNIT 3: SKETCH"
                  disabled={true}
                  nestedItems={[
                      <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black', }} 
                    primaryText="
                    Your team will sketch solutions to the problems identified in the previous step.
                    Once complete you will present your ideas amongst your group. Finally you will silently vote/decide on the features you like the best"
                    />,
                  ]}
                />,
                <ListItem
                  key={4}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                    background:'#6D65CB',
                  }}
                  primaryText="UNIT 4: WIREFRAME"
                  disabled={true}
                  nestedItems={[
                      <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black', }} 
                    primaryText="
                    Your designers will take your sketches and turn them into wireframes. Working with development and product teams to ensure feasability"
                    />,
                  ]}
                />,
                <ListItem
                  key={5}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                    background:'#6D65CB',
                  }}
                  primaryText="UNIT 5: DESIGN/PRESENTATION"
                  disabled={true}
                  nestedItems={[
                      <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black', }} 
                    primaryText="
                    Once your wireframes have been validated, your designers will work on making them look pretty while the product and development team work on the presentation.
                    Your presentation will include, an explanation of the problems identified, 'How might we...' questions, screenshots of your designs and potential questions to ask users."
                    />,
                  ]}
                />,
                <ListItem
                  key={6}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                    background:'#6D65CB',
                  }}
                  primaryText="UNIT 6: PROTOTYPE"
                  disabled={true}
                  nestedItems={[
                      <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black', }} 
                    primaryText="
                    Once your designs are built its time to create a prototype. Your designers will use software like InVision, UX Pin, Origami, etc to build your prototype."
                    />,
                  ]}
                />,
                <ListItem
                  key={7}
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: '12px',
                    color: 'white',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgb(136, 127, 247)',
                    background:'#6D65CB',
                  }}
                  primaryText="UNIT 7: PRESENT"
                  disabled={true}
                  nestedItems={[
                      <ListItem key={1} disabled={true} style={{fontFamily:'Raleway', fontSize: '13px', lineHeight: '15px', color: 'black', }} 
                    primaryText="
                    Your team will have the opportunity to present your prototype to the larger team and discuss your methodology."
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