import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';
const ENTER_DESIGNSPRINT_VIEW = 'ENTER_DESIGNSPRINT_VIEW';
const LEAVE_DESIGNSPRINT_VIEW = 'LEAVE_DESIGNSPRINT_VIEW';
const ENTER_INNOVATIONSERVICES_VIEW = 'ENTER_WHATISDESIGNTHINKING_VIEW';
const LEAVE_INNOVATIONSERVICES_VIEW = 'LEAVE_WHATISDESIGNTHINKING_VIEW';
const ENTER_PRODUCTDESIGN_VIEW = 'ENTER_PRODUCTDESIGN_VIEW';
const LEAVE_PRODUCTDESIGN_VIEW = 'LEAVE_PRODUCTDESIGN_VIEW';
const ENTER_CONTACTUS_VIEW = 'ENTER_CONTACTUS_VIEW';
const LEAVE_CONTACTUS_VIEW = 'LEAVE_CONTACTUS_VIEW';


// /////////////////////
// reducer
// /////////////////////
const initialState = {
  currentView:  'not set',
  enterTime:    null,
  leaveTime:    null
};

export default function (state = initialState, action) {
  switch (action.type) {

  case ENTER_HOME_VIEW:
  case ENTER_DESIGNSPRINT_VIEW:
  case ENTER_INNOVATIONSERVICES_VIEW:
  case ENTER_PRODUCTDESIGN_VIEW:
  case ENTER_CONTACTUS_VIEW:
    // can't enter if you are already inside
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  case LEAVE_HOME_VIEW:
  case LEAVE_DESIGNSPRINT_VIEW:
  case LEAVE_INNOVATIONSERVICES_VIEW:
  case LEAVE_PRODUCTDESIGN_VIEW:
  case LEAVE_CONTACTUS_VIEW:
    // can't leave if you aren't already inside
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView:  action.currentView,
        enterTime:    action.enterTime,
        leaveTime:    action.leaveTime
      };
    }
    return state;

  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
export function enterHome(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_HOME_VIEW,
    currentView:  'home',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveHome(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_HOME_VIEW,
    currentView:  'home',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterDesignSprint(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_DESIGNSPRINT_VIEW,
    currentView:  'designSprint',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveDesignSprint(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_DESIGNSPRINT_VIEW,
    currentView:  'designSprint',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterInnovationServices(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_INNOVATIONSERVICES_VIEW,
    currentView:  'innovationServices',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveInnovationServices(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_INNOVATIONSERVICES_VIEW,
    currentView:  'innovationServices',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterProductDesign(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_PRODUCTDESIGN_VIEW,
    currentView:  'ProductDesign',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveProductDesign(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_PRODUCTDESIGN_VIEW,
    currentView:  'ProductDesign',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterContactUs(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_CONTACTUS_VIEW,
    currentView:  'ContactUs',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveContactUs(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_CONTACTUS_VIEW,
    currentView:  'ContactUs',
    enterTime:    null,
    leaveTime:    time
  };
}
