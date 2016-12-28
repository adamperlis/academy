import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { ContactUs }         from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterContactUs: viewsActions.enterContactUs,
      leaveContactUs: viewsActions.leaveContactUs
    },
    dispatch
  );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactUs);
