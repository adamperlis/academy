import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
const ENTER_DESIGNSPRINT_VIEW = 'ENTER_DESIGNSPRINT_VIEW';
const ENTER_INNOVATIONSERVICES_VIEW = 'ENTER_WHATISDESIGNTHINKING_VIEW';
const ENTER_PRODUCTDESIGN_VIEW = 'ENTER_PRODUCTDESIGN_VIEW';
const ENTER_CONTACTUS_VIEW = 'ENTER_CONTACTUS_VIEW';
const ENTER_WORK_VIEW = 'ENTER_WORK_VIEW';
const ENTER_TIME_VIEW = 'ENTER_TIME_VIEW';



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
  case ENTER_WORK_VIEW:
  case ENTER_TIME_VIEW:
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


export function enterDesignSprint(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_DESIGNSPRINT_VIEW,
    currentView:  'designSprint',
    enterTime:    time,
    leaveTime:    null
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

export function enterProductDesign(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_PRODUCTDESIGN_VIEW,
    currentView:  'ProductDesign',
    enterTime:    time,
    leaveTime:    null
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

export function enterWork(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_WORK_VIEW,
    currentView:  'Work',
    enterTime:    time,
    leaveTime:    null
  };
}

export function enterTime(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_TIME_VIEW,
    currentView:  'Time',
    enterTime:    time,
    leaveTime:    null
  };
}
