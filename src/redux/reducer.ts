import { combineReducers } from 'redux';


import common from './slice/common';
import { commonApi } from './services/commonApi';


const appReducer = combineReducers({
  common,
 
  [commonApi.reducerPath]: commonApi.reducer,
//   [profileApi.reducerPath]: profileApi.reducer,
//   [reportApi.reducerPath]: reportApi.reducer,
//   [refAndEarnApi.reducerPath]: refAndEarnApi.reducer,
//   [pledgeApi.reducerPath]: pledgeApi.reducer,
//   [paymentApi.reducerPath]: paymentApi.reducer,
//   [buybackApi.reducerPath]: buybackApi.reducer,
//   [marketInfoApi.reducerPath]: marketInfoApi.reducer,
});

const rootReducer = (state: any, action: any) => {
//   if (action.type === toLogout.type) {
//     state = undefined;
//   }
  return appReducer(state, action);
};

export default rootReducer;
