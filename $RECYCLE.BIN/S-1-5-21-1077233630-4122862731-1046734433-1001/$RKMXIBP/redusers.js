// src/store/reducers.js
import { SELECT_REGION, LOAD_REGION_INFO, TOGGLE_NIGHT_MODE } from './actions';

const initialState = {
  selectedRegion: null,
  regionInfo: null,
  nightMode: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_REGION:
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case LOAD_REGION_INFO:
      return {
        ...state,
        regionInfo: action.payload,
      };
    case TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightMode: !state.nightMode,
      };
    default:
      return state;
  }
};

export default reducer;
