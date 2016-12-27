import React from 'react';
import { Drawer, AppBar, MenuItem, Divider} from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme' 
import Sticky from 'react-stickynode';
import { Link }       from 'react-router';
import Menu from 'material-ui/svg-icons/navigation/menu';

export default class TopBarNav extends React.Component {

  constructor(props){
    super(props);
    this.state = {open:false};
  }

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
                </Drawer>

                <Sticky enabled={true} top={0} innerZ={1}>
                    <AppBar
                    className="appBar" 
                    style={{
                      height:'60px',
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
              </div>
            );
        }
    }

    TopBarNav.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};