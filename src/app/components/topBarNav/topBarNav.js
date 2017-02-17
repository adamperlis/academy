import React, {Component} from 'react';
import { Drawer, AppBar, MenuItem, Divider} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme' 
import Sticky from 'react-stickynode';
import { Link }       from 'react-router';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { connect }  from 'react-redux';
import FlatButton from 'material-ui/FlatButton';



const mapStateToProps = (state) => {
  return {
    currentView:  state  };
};
const styles = {
  headline: {
    fontSize: '10px',
    fontFamily: '"Montserrat", sans-serif',
    textTransform: 'uppercase',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    fontWeight: '400',
    padding: '0px 7px 0px 7px',
    margin: '0px 0px 0px',
    borderRight: '1px solid rgba(255, 255, 255, 0.19)',
            
  },
};

// function handleActive(tab) {
//   // alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
// }

class TopBarNav extends Component {


  constructor(props){
    super(props);
    this.state = {open:false};
   }

 // This removes the inkBar from the tab and closes the drawer. 
  handleTopNavActiveClass = () => {
    this.state.open !== false ? this.handleClose() : false;
   };

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleRouteActions = (value) => {
    this.state.open !== false ? this.handleClose() : false;
 }

  handleClose() { this.setState({open: false}); console.log("closed"); }

        render() {     
            return (
                <div>
                <Drawer
                  containerStyle={{background: '#6d65cb'}}
                  docked={false}
                  openSecondary={false}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                  >
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleTopNavActiveClass.bind(this)}
                    className="drawer"
                    to={'/'}>
                    Home
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'rgb(126, 119, 204)'}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleTopNavActiveClass.bind(this)}
                    className="drawer"
                    to={'#'}>
                    What is Design Thinking?
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'rgb(126, 119, 204)'}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleRouteActions.bind(this, 'designSprint')} 
                    className="drawer"
                    to={'/designSprint'}>
                    Sprint Academy
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'rgb(126, 119, 204)',}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleRouteActions.bind(this, 'ProductDesign')}
                    className="drawer"
                    to={'/ProductDesign'}>
                    Design & Development
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'rgb(126, 119, 204)',}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleRouteActions.bind(this, 'Work')}
                    className="drawer"
                    to={'/Work'}>
                    Work
                    </Link>
                  </MenuItem>
                  {/*<Divider style={{background:'rgb(126, 119, 204)',}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleRouteActions.bind(this, 3)}
                    className="drawer"
                    to={'/InnovationServices'}>
                    Innovation Services
                    </Link>
                  </MenuItem>*/}
                  <Divider style={{background:'rgb(126, 119, 204)',}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleTopNavActiveClass.bind(this)}
                    className="drawer"
                    to={'/ContactUs'}>
                    Contact Us
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'rgb(126, 119, 204)',}}/>
                </Drawer>

                <Sticky enabled={true} top={0} innerZ={3}>
                    <AppBar
                    className="appBar" 
                    style={{
                      height:'60px',
                      background:'#FAFAFA',
                      borderBottom:'1px solid #6D65CB',
                    }} 
                    titleStyle={{fill:'rgb(0, 0, 0)',}}
                    title={
                      <Link
                      className="nav-logo"
                      onTouchTap={this.handleTopNavActiveClass.bind(this)}
                       to={'/'}>
                      <img src='/public/assets/images/academy-logo-black.svg' height="24px"/>
                      </Link>
                    }
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                    iconElementRight={
                      <div>
                      <FlatButton className="navLinks hidden-xs hidden-sm" label="Sprint Academy" containerElement={<Link  to="/designSprint"/>} />
                      <FlatButton className="navLinks hidden-xs hidden-sm" label="Design & Development" containerElement={<Link  to="/ProductDesign"/>} />
                      <FlatButton className="navLinks hidden-xs hidden-sm" label="Work" containerElement={<Link  to="/Work"/>} />
                      </div>
                      }
                    iconStyleRight={{
                      marginTop: '12px',
                    }} 
                    />

                  
                  <Tabs value={this.props.currentView.views.currentView}  onChange={this.handleRouteActions} className="small-nav hidden-md hidden-lg">

                    <Tab value={'designSprint'} style={styles.headline} label="Sprint Academy" containerElement={<Link to="/designSprint"/>} />
                    <Tab value={'ProductDesign'} style={styles.headline} label="Design & Development" containerElement={<Link to="/ProductDesign"/>} />
                    <Tab value={'Work'} style={styles.headline} label="Work" containerElement={<Link to="/Work"/>} />
                
                  </Tabs>
                  </Sticky>
                </div>


            );
        }
    }

export default connect(mapStateToProps)(TopBarNav);

