const initialState = {
    data: [],
  };
  
  const healthReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_HEALTH_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default healthReducer;
  