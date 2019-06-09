/* eslint-disable no-console */

import db from "@/components/firebase.js";

const getRatingData = ({ commit }, payload) => {
  let collection = [];
  const categoryDocRef = db
    .collection(payload.CollectionName)
    .doc(payload.placeId);

  db.collection("Rating")
    .where("Place", "==", categoryDocRef)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        collection.push(doc.data());
      });
      commit("GET_RATING_DATA", collection);
    })
    .catch(error => {
      console.error("Error getting documents: ", error);
    });
};

const postRatingData = (context, payload) => {
  db.collection("Rating")
    .add({
      Place: db.doc(`/${payload.CollectionName}/${payload.placeId}`),
      Rating: payload.rating
    })
    .then(ref => {
      console.log("Added document with ID: ", ref.id);
    });
};

const clearRatingData = context => {
  context.commit("CLEAR_RATING_DATA");
};

export default {
  getRatingData,
  postRatingData,
  clearRatingData
};
