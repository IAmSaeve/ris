<template>
  <div id="app">
    <Header></Header>
    <div class="row mr-0">
      <div class="col-xs-6 col"></div>
      <div class="col-xs-6 col-md-8">
        <router-view></router-view>
      </div>
      <div class="col-xs-6 col"></div>
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
  }
};
</script>
