// reducers.js
const initialState = {
    data: [],
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  