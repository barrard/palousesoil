import { combineReducers } from "redux";
// import { reducer as toastrReducer } from "react-redux-toastr";
// import meta_reducer from './meta_reducer.js'
import user_reducer from './user_reducer.js'
// import stock_data_reducer from './stock_data_reducer'
// import MA_analysis from './MA_analysis_reducer.js'
// import Chart_Analysis from './Chart_Analysis_reducer.js'
// import usersReducer from "./user_reducer.js";
// import StockBotReducer from "./StockBotReducer.js";

export default combineReducers({
//   toastr: toastrReducer,
  user:user_reducer,
    // meta:meta_reducer,
//   stock_data:stock_data_reducer,
//   // MA_analysis:MA_analysis,
//   Chart_Analysis:Chart_Analysis,
//   stockBot:StockBotReducer

});
