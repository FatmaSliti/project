import {LOST_TICKET} from './Types';
  
  const initState = {article: false};
  
  const Articles_Reducer = (state = initState, action) => {
    switch (action.type) {
      case LOST_TICKET:
        return { ...state, article: true };
      default:
        return state;
    }
  };
  
  export default Articles_Reducer;
  