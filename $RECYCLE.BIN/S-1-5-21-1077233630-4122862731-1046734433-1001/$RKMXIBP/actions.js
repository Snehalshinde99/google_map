// src/store/actions.js
export const SELECT_REGION = 'SELECT_REGION';
export const LOAD_REGION_INFO = 'LOAD_REGION_INFO';
export const TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE';

export const selectRegion = (region) => ({
  type: SELECT_REGION,
  payload: region,
});

export const loadRegionInfo = (region) => async (dispatch) => {
  try {
    // Perform API call to get region info based on the selected region.
    // You can use libraries like axios to make API requests.
    const regionInfo = await fetchRegionInfoFromAPI(region);

    dispatch({
      type: LOAD_REGION_INFO,
      payload: regionInfo,
    });
  } catch (error) {
    // Handle error if API call fails.
    console.error('Error loading region info:', error);
  }
};

export const toggleNightMode = () => ({
  type: TOGGLE_NIGHT_MODE,
});
