<template>
  <nav v-sticky class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-nav collapse navbar-collapse">
      <router-link class="nav-link nav-item" to="/">Home</router-link>
      <router-link class="nav-link nav-item" to="/about">About</router-link>
      <router-link class="nav-link nav-item" to="/institutions"
        >Institutions</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>
