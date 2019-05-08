<template>
  <div id="app">
    <Header></Header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars*/

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Header from "@/components/Header";

Vue.use(BootstrapVue);

Vue.directive("sticky", {
  bind(el, binding, vnode) {
    // Arguments are applied by appending a :arg to a directive
    if (binding.arg === "bottom") {
      el.style.position = "fixed";
      el.style.bottom = "0px";
      el.style.width = "100%";
    } else {
      el.style.position = "sticky";
      el.style.top = "0px";
    }

    // Modifiers can be applied by adding a .arg to a directive
    // These an be chained and can follow a argument i.e. v-d:arg.mod.mod
    if (binding.modifiers.light) {
      el.style.backgroundColor = "#E12";
    }
  }
});

export default {
  components: {
    Header: Header
  },
  created() {
    // Loads data from firebase.
    // This is needed because I can't send search queries...
    this.$store.dispatch("getD2PData");
    this.$store.dispatch("getSF2PData");
    this.$store.dispatch("getSS2PData");
    this.$store.dispatch("getD3PData");
    this.$store.dispatch("getSF3PData");
    this.$store.dispatch("getSS3PData");
  }
};
</script>
