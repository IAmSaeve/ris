const getAvarageRating = state => {
  let avarage = 0;
  state.Ratings.forEach(rating => {
    avarage += rating.Rating;
  });
  return state.Ratings.length > 0
    ? parseFloat((avarage / state.Ratings.length).toFixed(2))
    : 0;
};

export default {
  getAvarageRating
};
