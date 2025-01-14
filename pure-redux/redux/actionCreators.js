import getCurrentTime from '../utils/getCurrentTime.js'
import * as actionType from './actionTypes.js'

//actionCreators

export const addCurrentTime = () => ({
  type: actionType.ADD_CURRENT_TIME,
  payload: getCurrentTime(),
})

export const clearTimes = () => ({ type: actionType.CLEAR_ALL_TIMES })
