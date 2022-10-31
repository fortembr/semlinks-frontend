const initialState = {
  events: [],
  selectedEvent: {},
  selectedCalendars: ['Important', 'Work', 'Social', 'Travel']
};

const calenderReducer = (state = initialState, action) => {
  const filterIndex = state.selectedCalendars.findIndex((i) => i === action.filter);
  const value = action.value;
  let selected = [];
  switch (action.type) {
    case 'FETCH_EVENTS':
      return { ...state, events: action.events };

    case 'ADD_EVENT':
      return { ...state };

    case 'REMOVE_EVENT':
      return { ...state };

    case 'UPDATE_EVENT':
      return { ...state };

    case 'UPDATE_FILTERS':
      if (state.selectedCalendars.includes(action.filter)) {
        state.selectedCalendars.splice(filterIndex, 1);
      } else {
        state.selectedCalendars.push(action.filter);
      }
      if (state.selectedCalendars.length === 0) {
        state.events.length = 0;
      }
      return { ...state };

    case 'UPDATE_ALL_FILTERS':
      if (value === true) {
        selected = ['Important', 'Work', 'Social', 'Travel'];
      } else {
        selected = [];
      }
      return { ...state, selectedCalendars: selected };

    case 'SELECT_EVENT':
      return { ...state, selectedEvent: action.event };

    default:
      return state;
  }
};

export default calenderReducer;
