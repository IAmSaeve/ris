/* eslint-disable no-console */

import db from "@/components/firebase.js";

//TODO: Handle error and infor user.

const getD2PData = ({ commit }) => {
  let collection = [];
  db.ref("Dagtilbud2Praktik").on(
    "value",
    snapshot => {
      collection = snapshot.val();
      commit("GET_D2P_DATA", collection);
    },
    errorObject => {
      console.log("The read failed: " + errorObject.code);
    }
  );
};

const getSF2PData = ({ commit }) => {
  let collection = [];
  db.ref("Skolefritid2Praktik").on(
    "value",
    snapshot => {
      collection = snapshot.val();
      commit("GET_SF2P_DATA", collection);
    },
    errorObject => {
      console.log("The read failed: " + errorObject.code);
    }
  );
};

const getSS2PData = ({ commit }) => {
  let collection = [];
  db.ref("SocialSpecial2Praktik").on(
    "value",
    snapshot => {
      collection = snapshot.val();
      commit("GET_SS2P_DATA", collection);
    },
    errorObject => {
      console.log("The read failed: " + errorObject.code);
    }
  );
};

const getD3PData = ({ commit }) => {
  let collection = [];
  db.ref("Dagtilbud3Praktik").on(
    "value",
    snapshot => {
      collection = snapshot.val();
      commit("GET_D3P_DATA", collection);
    },
    errorObject => {
      console.log("The read failed: " + errorObject.code);
    }
  );
};

const getSF3PData = ({ commit }) => {
  let collection = [];
  db.ref("Skolefritid3Praktik").on(
    "value",
    snapshot => {
      collection = snapshot.val();
      commit("GET_SF3P_DATA", collection);
    },
    errorObject => {
      console.log("The read failed: " + errorObject.code);
    }
  );
};

const getSS3PData = ({ commit }) => {
  let collection = [];
  db.ref("SocialSpecial3Praktik").on(
    "value",
    snapshot => {
      collection = snapshot.val();
      commit("GET_SS3P_DATA", collection);
    },
    errorObject => {
      console.log("The read failed: " + errorObject.code);
    }
  );
};

export default {
  getD2PData,
  getSF2PData,
  getSS2PData,
  getD3PData,
  getSF3PData,
  getSS3PData
};
