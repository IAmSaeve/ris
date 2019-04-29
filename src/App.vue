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
import Header from "@/components/Header";
export default {
  components: {
    Header: Header
  }
};
</script>
