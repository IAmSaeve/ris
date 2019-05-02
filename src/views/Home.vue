<template>
  <div class="home">
    <section class="information">
      <p>This sections should hold general information</p>
    </section>
    <section class="topRated">
      <p>This sections should show top rated places</p>
    </section>
    <section class="bottom">
      <p>This sections should display some company information and maybe social information</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.information {
  text-align: center;
  overflow: hidden;
  height: 50rem;
  background: #fff8e1;
}
.topRated {
  text-align: center;
  overflow: hidden;
  height: 50rem;
  background: #767c9f;
}
.bottom {
  text-align: center;
  overflow: hidden;
  height: 50rem;
  background: #34515e;
}
</style>
