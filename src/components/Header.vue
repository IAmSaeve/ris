<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <b-button v-b-toggle="'collapse-2'" class="m-1">
        <span class="navbar-toggler-icon"></span>
      </b-button>

      <div class="navbar-nav collapse navbar-collapse">
        <router-link class="nav-link nav-item" to="/">Hjem</router-link>
        <router-link class="nav-link nav-item" to="/about"
          >Omkring os</router-link
        >
        <router-link class="nav-link nav-item" to="/institutions"
          >Institutioner</router-link
        >
      </div>
    </nav>
    <b-collapse id="collapse-2">
      <div class="card-group" id="mobileNav">
        <router-link class="ml-3 mt-2" to="/">Hjem</router-link>
        <router-link class="ml-3 mt-2" to="/about">Omkring os</router-link>
        <router-link class="ml-3 mt-2 mb-3" to="/institutions"
          >Institutioner</router-link
        >
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
button {
  display: none;
}

@media only screen and (max-width: 850px) {
  button {
    display: block;
  }
}

#collapse-2 {
  background: #343a40;
}

#mobileNav a {
  color: white;
}
</style>
