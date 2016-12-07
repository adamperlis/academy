import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const ENTER_HOME_VIEW  = 'ENTER_HOME_VIEW';
const LEAVE_HOME_VIEW  = 'LEAVE_HOME_VIEW';
const ENTER_COMPONENTS_VIEW = 'ENTER_COMPONENTS_VIEW';
const LEAVE_COMPONENTS_VIEW = 'LEAVE_COMPONENTS_VIEW';
const ENTER_WHATISDESIGNTHINKING_VIEW = 'ENTER_WHATISDESIGNTHINKING_VIEW';
const LEAVE_WHATISDESIGNTHINKING_VIEW = 'LEAVE_WHATISDESIGNTHINKING_VIEW';
const ENTER_PRODUCTDESIGN_VIEW = 'ENTER_PRODUCTDESIGN_VIEW';
const LEAVE_PRODUCTDESIGN_VIEW = 'LEAVE_PRODUCTDESIGN_VIEW';


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
  case ENTER_COMPONENTS_VIEW:
  case ENTER_WHATISDESIGNTHINKING_VIEW:
  case ENTER_PRODUCTDESIGN_VIEW:
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
  case LEAVE_COMPONENTS_VIEW:
  case LEAVE_WHATISDESIGNTHINKING_VIEW:
  case LEAVE_PRODUCTDESIGN_VIEW:
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

export function enterComponents(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveComponents(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_COMPONENTS_VIEW,
    currentView:  'components',
    enterTime:    null,
    leaveTime:    time
  };
}

export function enterWhatIsDesignThinking(time = moment().format(dateFormat)) {
  return {
    type:         ENTER_WHATISDESIGNTHINKING_VIEW,
    currentView:  'whatIsDesignThinking',
    enterTime:    time,
    leaveTime:    null
  };
}

export function leaveWhatIsDesignThinking(time = moment().format(dateFormat)) {
  return {
    type:         LEAVE_WHATISDESIGNTHINKING_VIEW,
    currentView:  'WhatIsDesignThinking',
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
