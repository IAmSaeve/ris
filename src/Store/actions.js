/* eslint-disable no-console */

import db from "@/components/firebase.js";

// TODO: Handle error and infor user.
// TODO: Maybe commit more information to inform users that the data is being downloaded.

const getD2PData = ({ commit }) => {
  let collection = [];
  db.collection("Dagtilbud2Praktik")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        collection.push(doc.data());
      });
      commit("GET_D2P_DATA", collection);
    });
};

const getSF2PData = ({ commit }) => {
  let collection = [];
  db.collection("Skolefritid2Praktik")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        collection.push(doc.data());
      });
      commit("GET_SF2P_DATA", collection);
    });
};

const getSS2PData = ({ commit }) => {
  let collection = [];
  db.collection("SocialSpecial2Praktik")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        collection.push(doc.data());
      });
      commit("GET_SS2P_DATA", collection);
    });
};

const getD3PData = ({ commit }) => {
  let collection = [];
  db.collection("Dagtilbud3Praktik")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        collection.push(doc.data());
      });
      commit("GET_D3P_DATA", collection);
    });
};

const getSF3PData = ({ commit }) => {
  let collection = [];
  db.collection("Skolefritid3Praktik")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        collection.push(doc.data());
      });
      commit("GET_SF3P_DATA", collection);
    });
};

const getSS3PData = ({ commit }) => {
  let collection = [];
  db.collection("SocialSpecial3Praktik")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        collection.push(doc.data());
      });
      commit("GET_SS3P_DATA", collection);
    });
};

export default {
  getD2PData,
  getSF2PData,
  getSS2PData,
  getD3PData,
  getSF3PData,
  getSS3PData
};
