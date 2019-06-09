import Vue from "vue";
import Vuex from "vuex";

import actions from "@/Store/actions";
import mutations from "@/Store/mutations";

import rating from "@/Store/Modules/Rating/rating";

Vue.use(Vuex);

// TODO: Could be refactored to another module
export default new Vuex.Store({
  state: {
    Dagtilbud2Praktik: [],
    Skolefritid2Praktik: [],
    SocialSpecial2Praktik: [],
    Dagtilbud3Praktik: [],
    Skolefritid3Praktik: [],
    SocialSpecial3Praktik: []
  },
  mutations,
  actions,
  getters: {
    mergedData: state => {
      // Returns a merged array for full search
      return state.Dagtilbud2Praktik.concat(
        state.Skolefritid2Praktik,
        state.SocialSpecial2Praktik,
        state.Dagtilbud3Praktik,
        state.Skolefritid3Praktik,
        state.SocialSpecial3Praktik
      );
    }
  },
  modules: {
    rating
  }
});
