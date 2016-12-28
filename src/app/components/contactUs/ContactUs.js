import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class ContactUs extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
      labelStyle={{
        color:'#FF0084',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: '800',
        fontSize: '11px',
      }}
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton className={'btn'} 
        style={{
          backgroundColor: '#FF0084',
          borderRadius:'100px',
          border: '1px solid #FF0084',
          lineHeight: '20px',
          height: '48px',
         
        }}
        labelStyle={{
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: '800',
          fontSize: '11px',
          textAlign: 'center',
          lineHeight: '20px',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}

        label={this.props.label} onTouchTap={this.handleOpen} 
        />
        <Dialog
          title="Contact Us"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          titleStyle={{
            fontFamily: '"Montserrat", sans-serif', 
            fontSize: '30px',
            color: 'black',
            fontWeight: 'bold',
            letterSpacing: '-.8px',
          }}
          bodyStyle={{
            fontFamily: 'Raleway',
            fontSize: '13px',
            lineHeight: '18px',
            color: '#000000',
            marginTop:'20px',
            marginBottom:'30px',
            textAlign: 'left',
          }}
          
        >
          You can reach us at <a className="link" href="mailto:hello@academybydesign.com?Subject=Hello" target="_blank">hello@academybydesign.com</a>
          
        </Dialog>
      </div>
    );
  }
}