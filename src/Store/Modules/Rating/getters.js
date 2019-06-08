// TODO: Make this useful
const getAvarageRating = state => {
  let avarage = 0;
  state.Ratings.forEach(rating => {
    avarage += rating.Rating;
  });
  return parseFloat((avarage / state.Ratings.length).toFixed(2));
};

export default {
  getAvarageRating
};
