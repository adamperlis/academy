import React from 'react';
import { Drawer, AppBar, MenuItem, Divider} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme' 
import Sticky from 'react-stickynode';
import { Link }       from 'react-router';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';


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

export default class TopBarNav extends React.Component {


  constructor(props){
    super(props);
    this.state = {open:false};
    this.state = {
      value: '/',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
    console.log("open")
   }
  handleClose() { this.setState({open: false}); }
        render() {

            return (
                <div>
                <Drawer
                  containerStyle={{background: 'linear-gradient(135deg, #6D65CB 0%, #293890 100%)',}}
                  docked={false}
                  openSecondary={false}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                  >
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleClose.bind(this)}
                    className="drawer"
                    to={'/'}>
                    Home
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'#6D65CB',}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleClose.bind(this)}
                    className="drawer"
                    to={'#'}>
                    What's Design Thinking?
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'#6D65CB',}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleClose.bind(this)}
                    className="drawer"
                    to={'/designSprint'}>
                    Sprint Academy
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'#6D65CB',}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleClose.bind(this)}
                    className="drawer"
                    to={'/ProductDesign'}>
                    Design & Development
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'#6D65CB',}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleClose.bind(this)}
                    className="drawer"
                    to={'/InnovationServices'}>
                    Innovation Services
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'#6D65CB',}}/>
                  <MenuItem>
                    <Link
                    onTouchTap={this.handleClose.bind(this)}
                    className="drawer"
                    to={'/ContactUs'}>
                    Contact Us
                    </Link>
                  </MenuItem>
                  <Divider style={{background:'#6D65CB',}}/>
                </Drawer>

                <Sticky enabled={true} top={0} innerZ={3}>
                    <AppBar
                    className="appBar" 
                    style={{
                      height:'40px',
                      background:'#FAFAFA',
                      borderBottom:'1px solid #6D65CB',
                    }} 
                    titleStyle={{fill:'rgb(0, 0, 0)',}}
                    showMenuIconButton={true} 
                    title={
                      <Link
                      className="nav-logo"
                      to={'/'}>
                      <img src={require('../../images/academy-logo-black.svg')} height="24px"/>
                      </Link>
                    }
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)} 
                    />
                  </Sticky>

                  <Sticky enabled={true} onStateChange={this.addClass} top={40} bottomBoundary={0} innerZ={2}>
                  <Tabs initialSelectedIndex={-1} onChange={this.changeTab} className="small-nav">

                    <Tab value={0} style={styles.headline} label="Sprint Academy" containerElement={<Link to="/designSprint"/>} />
                    <Tab value={1} style={styles.headline} label="Design & Development" containerElement={<Link to="/ProductDesign"/>} />
                    <Tab value={2} style={styles.headline} label="Innovation Services" containerElement={<Link to="/InnovationServices"/>} />
                
                  </Tabs>
                  </Sticky>
                </div>


            );
        }
    }

    TopBarNav.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};