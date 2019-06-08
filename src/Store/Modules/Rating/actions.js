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

export default {
  getRatingData
};
