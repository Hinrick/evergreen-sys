import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authenticationReducer from './authentication'
import basicInfoReducer from './basicInfo'
import nursingCareReducer from './nursingCare'
import nutritionCareReducer from './nutritionCare'
import qualityIndexReducer from './qualityIndex'
import socialWorkReducer from './socialWork'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  basicInfo: basicInfoReducer,
  nursingCare: nursingCareReducer,
  nutritionCare: nutritionCareReducer,
  qualityIndex: qualityIndexReducer,
  socialWork: socialWorkReducer
})


export const store = createStore(rootReducer, composeEnhancer(
  applyMiddleware(thunk)
))
