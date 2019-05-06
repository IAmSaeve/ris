import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

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
  actions
});
