import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';
import {
  WizardMotion,
  ContactUs,
  ArrowDownIcon
}                     from '../../components';
import  Scroll   from 'react-scroll';

var ScrollLink       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Time extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterTime } = this.props;
    enterTime();
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Row className="show-grid time hero">
        <div className="vertical-wrapper">
            <div className="vertical-middle">
          <Col xs={8} sm={4} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            
            <div className="block-reveal">
            <h1>Case Study</h1>
            <h2>Time, Inc</h2>
            </div>

            <Link
              className="back-btn btn"
              to={'/Work'}>
              <span><img src="/public/assets/images/arrow-thin-left.svg"/>
              BACK</span>
            </Link>
          
          </Col>
          <Col xs={6} sm={9} mdOffset={1} md={8} lgOffset={2} lg={6}></Col> 
          </div>
          </div>
        </Row>

         <Row className="show-grid arrow">
          <Col xs={12} md={12} xsHidden={true} smHidden={true}> 
            <ArrowDownIcon className="--white arrow-down-icon" />
          </Col>
        </Row> 

        <Row className="show-grid time">
          <Col xs={6} sm={6} smOffset={1} md={6} mdOffset={1} lg={6} lgOffset={1}> 

              <img className="brand-logos img-responsive" src="/public/assets/images/timeinc-logos.svg"/>
              <div className="divider"></div>
              <h6>The Challenge</h6>

            
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}></Col>

        </Row>
        <Row className="show-grid time" style={{paddingTop:'0'}}>
          <Col xs={12} sm={5} smOffset={1} md={5} mdOffset={1} lg={4} lgOffset={1}> 

              <p>To build a design architecture that could work across, TIME, Fortune and Money, while addressing the UX concerns and business goals of their respective websites.</p>
             
            
          </Col>
          <Col xs={12} sm={6} md={6} lg={7}>
           <img className="img-responsive" src="/public/assets/images/timeinc-articles-group@2x.png"/>
          </Col>

        </Row>

         <Row className="show-grid time">
          <Col xs={12} sm={3} smOffset={1} md={3} mdOffset={1} lg={3} lgOffset={1}> 

          <div className="secondary-title"><div className="small-line"></div><h5>The Problem</h5></div>             
            
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>

            <p>Anecodotal information from user studies told the team that there was too much clutter on the page and distracted users from their desired goals. Additionally, the data showed that Avg page view/visit were low, as well as avg. video views/visit and time spent. To users the page style felt old and antiquated. These stories were true of all three brands. Additionally, galleries are one of TIME’s most coveted  features and though it was performing well, it lacked some basic features that our editors and users wanted. Including proper social sharing on a per image basis, photos not getting cropped by the viewport, a way to treat vertical images and a way to handle captions better.</p>

          </Col>

        </Row>

        <Row className="show-grid time">
          <Col xs={12} sm={3} smOffset={1} md={3} mdOffset={1} lg={3} lgOffset={1}> 

          <div className="secondary-title"><div className="small-line"></div><h5>Before</h5></div>             
            
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Col xs={12} sm={6} md={6} lg={6}>
            <img className="img-responsive" src="/public/assets/images/timeinc-article-before@2x.png"/>
            <br></br>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <img className="img-responsive" src="/public/assets/images/timeinc-gallery-before@2x.png"/>
            </Col>
          </Col>

        </Row>
        <Row className="show-grid time">
          <Col xs={6} sm={6} smOffset={1} md={6} mdOffset={1} lg={6} lgOffset={1}> 

              <h6>The Problem</h6>

          </Col>
          <Col xs={6} sm={6} md={6} lg={6}></Col>

        </Row>

        <Row className="show-grid time" style={{paddingTop:'0'}}>
          <Col xs={12} sm={5} smOffset={1} md={5} mdOffset={1} lg={4} lgOffset={1}> 

              <p>Our team set out to tackle each issue using Design Thinking. We broke it down into two Design Sprints to cover all the problems facing articles and galleries. A team of 8-12 people was assembled from various disciplines including Design, Development, Product, Editorial, Photography and Research.</p>
             
            
          </Col>
          <Col xs={12} sm={6} md={6} lg={7}>
           <img className="img-responsive" src="/public/assets/images/design-sprint.svg"/>
          </Col>

        </Row>
        <Row className="show-grid time">  
          <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1}>
               <img className="img-responsive" src="/public/assets/images/timeinc-sprint-pictures@2x.jpg"/>
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={6} sm={6} smOffset={1} md={6} mdOffset={1} lg={6} lgOffset={1}> 

              <h6>The Solution</h6>

          </Col>
          <Col xs={6} sm={6} md={6} lg={6}></Col>

        </Row>

        <Row className="show-grid time" style={{paddingTop:'0'}}>
          <Col xs={12} sm={10} smOffset={1} md={5} mdOffset={1} lg={4} lgOffset={1}> 

              <p>Our user studies suggested that our pages were too ‘busy’. By reducing the amount of clutter on the page we gave the user more opportunity to find other articles that might interest them. This lead to a bump in avg. page views/visit.
              <br></br><br></br>

                We also introduced autoplay for the next video in the top container which surprised and delighted users. This lead to a bump in avg. video views/visit.
                <br></br><br></br>

                The minimalist approach to the page design lead to a more modern feel addressing users initial concerns.</p>
             
            
          </Col>
          <Col xs={12} sm={6} md={6} lg={8}></Col>

        </Row>
        <Row className="show-grid time">
        <div className="vertical-wrapper">
            <div className="vertical-middle">
              <Col xs={12} sm={3} smOffset={1} md={3} mdOffset={1} lg={3} lgOffset={2}>
                <div className="secondary-title"><div className="small-line"></div><h5>Article Page</h5></div>
              </Col> 

              <Col xs={12} sm={8} md={8} lg={6}>
                   <img className="img-responsive" src="/public/assets/images/time-article-desktop-mobile@2x.png"/>
              </Col>
            </div>
          </div>
        </Row>

        <Row className="show-grid time">
          <div className="vertical-wrapper">
            <div className="vertical-middle">
              <Col xsHidden={true} sm={5} md={5} mdOffset={1} lg={5} lgOffset={1}>
              <img className="img-responsive" src="/public/assets/images/money-fortune-mobile-articles@2x.png"/>
              </Col> 

              <Col xsHidden={true} sm={3} smOffset={1} md={3} mdOffset={1} lg={3}>
                              <div className="secondary-title"><div className="small-line"></div><h5>Mobile Friendly</h5></div>
              </Col>
            </div>
          </div>
        </Row>

        <Row className="show-grid time">
          <div className="vertical-wrapper">
            <div className="vertical-middle">
              <Col xs={12} smHidden={true} mdHidden={true} lgHidden={true}>
                <div className="secondary-title"><div className="small-line"></div><h5>Mobile Friendly</h5></div>
              </Col> 

              <Col xs={12} smHidden={true} mdHidden={true} lgHidden={true}>
                <img className="img-responsive" src="/public/assets/images/money-fortune-mobile-articles@2x.png"/>
              </Col>
            </div>
          </div>
        </Row>

        <Row className="show-grid time">
          <img className="img-responsive" src="/public/assets/images/time-mobile-features@3x.jpg"/>
        </Row>

        <Row className="show-grid time">
          <div className="vertical-wrapper">
            <div className="vertical-middle">
              <Col xs={12} sm={10} smOffset={1} md={5} mdOffset={1} lg={3} lgOffset={1}>
                <div className="secondary-title"><div className="small-line"></div><h5>Gallery</h5></div>
                <p>After running tests with users we found that app like functionality was something they desired. We introduced the concept of a modal and vertical scroll which gave our design team more real estate to work with. This gave our images an opportunity to breath and let vertical images shine. 
                  <br></br><br></br>
                  Additionally, we were able to intergrate captions and incorporated a super easy way to navigate from image 1 to 100 using a grid option.
                  <br></br><br></br>
                  We also introduced social sharing of a particular image which was a surprise and delight for our users.</p>
              </Col> 

              <Col xs={12} sm={12} md={6} lg={8}>
                   <img className="img-responsive" src="/public/assets/images/time-gallery-desktop-mobile@2x.png"/>
              </Col>
            </div>
          </div>
        </Row>

         <Row className="show-grid time">  
          <Col xs={12} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
               <img className="img-responsive" src="/public/assets/images/time-gallery-desktop-features@2x.png"/>
          </Col>
        </Row>

         <Row className="show-grid time">  
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
               <img className="img-responsive" src="/public/assets/images/time-gallery-mobile-features@2x.png"/>
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col  xs={6} sm={6} smOffset={1} md={6} mdOffset={1} lg={6} lgOffset={1}> 
            <h6>Styleguide</h6>            
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={12} sm={10} smOffset={1} md={5} mdOffset={1} lg={3} lgOffset={1}> 
             <div className="secondary-title"><div className="small-line"></div><h5>Colors</h5></div>    
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/timeinc-colors@2x.png"/>            
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={12} sm={6} md={6} lg={6}> 
             <div className="secondary-title"><div className="small-line"></div><h5>Gradients</h5></div>    
          </Col>
        </Row>

         <Row className="show-grid time"> 
            <img className="img-responsive" src="/public/assets/images/timeinc-gradients.svg"/>
        </Row>

        <Row className="show-grid time">
          <Col xs={12} sm={10} smOffset={1} md={5} mdOffset={1} lg={3} lgOffset={1}> 
             <div className="secondary-title"><div className="small-line"></div><h5>Typography</h5></div>    
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={8} sm={8} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/Duplicate-Ionic.svg"/>
            <br></br>
          </Col>
          <Col xs={12} sm={4} smOffset={1} md={4} mdOffset={1} lg={4} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/duplicate-examples.svg"/>
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={8} sm={8} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/Franklin-Gothic.svg"/>
            <br></br>
          </Col>
          <Col xs={12} sm={4} smOffset={1} md={4} mdOffset={1} lg={4} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/franklin-gothic-examples.svg"/>
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={8} sm={8} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/Helvetica-Neue.svg"/>
            <br></br>
          </Col>
          <Col xs={12} sm={4} smOffset={1} md={4} mdOffset={1} lg={4} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/helvetica-neue-examples.svg"/>
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={8} sm={8} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/Solano-Gothic.svg"/>
            <br></br>
          </Col>
          <Col xs={12} sm={4} smOffset={1} md={4} mdOffset={1} lg={4} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/solano-gothic-examples.svg"/>
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={8} sm={8} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/Brandon-Grotesque.svg"/>
            <br></br>
          </Col>
          <Col xs={12} sm={4} smOffset={1} md={4} mdOffset={1} lg={4} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/brandon-grotesque-examples.svg"/>
          </Col>
        </Row>

        <Row className="show-grid time">
          <Col xs={8} sm={8} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/Karmina.svg"/>
            <br></br>
          </Col>
          <Col xs={12} sm={4} smOffset={1} md={4} mdOffset={1} lg={4} lgOffset={1}> 
            <img className="img-responsive" src="/public/assets/images/karmina-examples.svg"/>
          </Col>
        </Row>
        <br></br>
      </div>
    );
  }
}

Time.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterTime:   PropTypes.func.isRequired
};

export default Time;
