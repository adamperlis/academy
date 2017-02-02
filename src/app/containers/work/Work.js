import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Work }              from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterWork: viewsActions.enterWork,
    },
    dispatch
  );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Work);
