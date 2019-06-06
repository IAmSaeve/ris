/* eslint-disable no-console */

import db from "@/components/firebase.js";

const getRatingData = ({ commit }) => {
  let collection = [];

  const categoryDocRef = db
    .collection("Dagtilbud2Praktik")
    .doc("02fwREcUA59ClAFIDqks");

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
