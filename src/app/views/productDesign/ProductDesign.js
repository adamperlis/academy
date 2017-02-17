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

class ProductDesign extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterProductDesign } = this.props;
    enterProductDesign();
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
        <div className="show-grid row product-design hero">
          <div className="vertical-wrapper">
              <div className="vertical-middle">
            <div className="col-xs-8 col-sm-4 col-sm-offset-1 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1"> 
              <div className="block-reveal">
              <h1>Product</h1>
              <h2>Design & Development</h2>
              </div>
              
              <ScrollLink
                className="btn"
                activeClass="active" to="services" spy={true} smooth={true} offset={-90} duration={850}>
                SEE OUR SERVICES
              </ScrollLink>
            </div>
            <div className="col-xs-6 col-sm-9 col-md-8 col-md-offset-1 col-lg-6 col-lg-offset-2"></div> 
            </div>
            </div>
        </div>

        <div className="show-grid row arrow">
          <div className="col-xs-12 col-md-12 hidden-xs hidden-sm"> 
            <ArrowDownIcon className="--purple arrow-down-icon" />
          </div>
        </div>

        <div id="services" className="show-grid row product-des">
          <div className="col-xs-10 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-1"> 

          <h3>
          Product
          </h3>
          <h4>
          Design & UX
          </h4>

          <p className="subhead">
          Our approach to product design is simple, the user comes first. Our award winning team will take you from concept, to prototype to execution using design thinking, and design sprints to build you the products of your dreams.
          </p> 
          <ContactUs label="Design with Us" />

          </div>
          <div className="col-xs-12 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-1" style={{paddingRight:'0'}}>
            <img className="img-responsive" src="/public/assets/images/sketch@2x.png" style={{marginTop:'50px'}}/>
          </div>
        </div>

        <div className="show-grid row product-dev">
          <div className="hidden-xs col-sm-5 col-sm-offset-1 col-md-6 col-md-offset-1 col-lg-6" style={{marginLeft:'0px', paddingLeft:'0'}}>
            <img className="img-responsive" src="/public/assets/images/sublime@2x.png" style={{marginTop:'50px'}}/>
          </div> 
          <div className="hidden-xs col-sm-5 col-md-4 col-lg-4 col-lg-offset-1"> 

          <h3>
          Product
          </h3>
          <h4>
          Development
          </h4>

          <p className="subhead">
          Agile development means we are constantly building, testing and evolving your product. Our team of experienced devlopers will work with you to build quality, maintainable and future proof products that fit your business needs.
          </p>
          <ContactUs label="Develop with Us" />
          </div>
        </div>

        <div className="show-grid row product-dev">
          <div className="col-xs-10 hidden-sm hidden-md hidden-lg">
          <h3 style={{textAlign:'left'}}>
          Product
          </h3>
          <h4 style={{textAlign:'left'}}>
          Development
          </h4>

          <p className="subhead" style={{textAlign:'left'}}>
          Agile development means we are constantly building, testing and evolving your product. Our team of experienced devlopers will work with you to build quality, maintainable and future proof products that fit your business needs.
          </p>
          <ContactUs label="Develop with Us" />
          </div> 
          <div className="col-xs-12 hidden-sm hidden-md hidden-lg"> 
            <img className="img-responsive" src="/public/assets/images/sublime@2x.png" style={{marginTop:'50px'}}/>
          </div>
        </div>

        <div className="show-grid row bootcamp">
          <div className="col-xs-10 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-1"> 

          <h3>
          Product
          </h3>
          <h4>
          Management
          </h4>

          <p className="subhead">
          Our team captains, will help steer your products in the right direction. Managing timelines, communicating between designers and developers, overseeing usability tests and communicating with you all the way through. Rest assured that this group will get your product off the ground safely.          
          </p>
           <ContactUs label="Manage with Us" />

          </div>
          <div className="col-xs-12 col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-2 col-lg-6 col-lg-offset-1" style={{paddingRight:'0'}}>
            <img className="img-responsive" src="/public/assets/images/team-gant@2x.png" style={{marginTop:'50px'}}/>
          </div>
        </div>
      </div>
    );
  }
}

ProductDesign.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterProductDesign:   PropTypes.func.isRequired
};

export default ProductDesign;
