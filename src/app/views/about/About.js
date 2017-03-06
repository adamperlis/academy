import React, {   Component,   PropTypes }  from 'react'; 
import cx                                   from 'classnames'; 
import shallowCompare                       from 'react-addons-shallow-compare'; 
import {
  WizardMotion 
}                                           from '../../components'; 
import { Grid, Row, Col }                   from 'react-bootstrap'; 
import { Link }                             from 'react-router';

class About extends Component {

  state = { animated: true, viewEntersAnim: true };

  componentDidMount() { const { enterAbout } =this.props; enterAbout(); }

  shouldComponentUpdate(nextProps, nextState) { return shallowCompare(this, nextProps, nextState); }

  render() { 
    const { animated, viewEntersAnim } = this.state; return( 
      <div className={cx({
      'animatedViews': animated, 'view-enter': viewEntersAnim 
    })}> 
  <div className="block-reveal"> 
  <Row className="show-grid hero about" style={{paddingBottom:'0'}}> 
  <div className="vertical-wrapper"> 
  <div className="vertical-middle"> 
  <Col xs={12} sm={9} smOffset={1} md={9} mdOffset={1} lg={9} lgOffset={1}>
  <h1>About</h1>
  <h2>Us</h2> 
  <p style={{width:'100%'}}>
  Academy was founded on the principle that everyone can be creative we just need to be taught how. According to 2015 study, over the past 10 years design led companies have outperformed the S&P 500 by an extraordinary 211%. This struck a chord with Academy and our mission became clear that we needed to consult and train organizations on how to apply Design Thinking principles to help transform their products, services and strategies for the better. We do so by implementing modern Design Thinking tools like Design Sprints, which provide a framework for teams to design, prototype and test their ideas in 5 days. We leave teams with the tools they need to carry on this type of work even when we are not around.
  </p>
  </Col>       
  <Col xs={6}></Col>       
  </div>       
  </div>        
  </Row>       
  </div>
  <Row className="show-grid about"> 
  <Col xs={12} sm={3} smOffset={1} md={2} mdOffset={1} lg={2} lgOffset={1}>
  <img className="img-responsive center-block" style={{borderRadius:'160px', width:'200px'}} src="/public/assets/images/profile_pic.jpg"/>
  <span style={{width:'100%', textAlign:'center'}}><p style={{fontFamily:'Playfair Display', fontWeight: '400'}}>CEO, Founder</p></span>
  </Col>
  <Col xs={12} sm={6} md={7} lg={7} >
  <p style={{width:'100%', fontSize:'16px'}}>
  Adam Perlis oversaw the redesign of TIME, Fortune and Money.com, as well as leading
  creative teams at AT&T, NBC Sports & Olympics and several other Fortune 500 companies, he is uniquely qualified to lead teams to success. His award winning work has been featured on
  Awwwards, The FWA, and TechCrunch. Working as both a designer and developer his diverse skill set
  includes UX/UI design, front-end and back-end development, 2D &amp; 3D motion graphics, and video
  production. He was a Speaker at Web Summit '16 and Tech Open Air '16. His upcoming speakerships
  include SXSW 17' and Fifteen Second Festival. He also serves as a guest
  lecturer/instructor at General Assembly, where he is a Design Thinking evangelist. 
  </p>
  </Col>
  </Row>
</div>       
);   
} 
}

About.propTypes = {   
  currentView: PropTypes.string.isRequired,   
  enterAbout:
PropTypes.func.isRequired, };

export default About;
