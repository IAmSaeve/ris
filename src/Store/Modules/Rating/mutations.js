const GET_RATING_DATA = (state, payload) => {
  state.Ratings = payload;
};

const CLEAR_RATING_DATA = state => {
  state.Ratings = [];
};

export default {
  GET_RATING_DATA,
  CLEAR_RATING_DATA
};
