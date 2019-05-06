<template>
  <div id="app">
    <Header></Header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Header from "@/components/Header";

Vue.use(BootstrapVue);

export default {
  components: {
    Header: Header
  },
  created() {
    this.$store.dispatch("getD2PData");
    this.$store.dispatch("getSF2PData");
    this.$store.dispatch("getSS2PData");
    this.$store.dispatch("getD3PData");
    this.$store.dispatch("getSF3PData");
    this.$store.dispatch("getSS3PData");
  }
};
</script>
