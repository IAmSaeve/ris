<template>
  <input
    type="search"
    name="search-place"
    placeholder="Søg... (alle steder)"
    v-model="query"
    v-on:input="search"
    class="form-control m-3"
    aria-label="Search"
  />
</template>

<script>
var Fuse = require("fuse.js");

// See https://fusejs.io/ for config
var options = {
  shouldSort: true,
  findAllMatches: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 16,
  minMatchCharLength: 3,
  keys: [
    "Praktiksteds navn",
    "Praktikstedets adresse",
    "Praktikstedets postnummer",
    "Praktikstedets by"
  ]
};

export default {
  data() {
    return {
      query: ""
    };
  },
  // Props is unused but left here to remind me how to use props
  props: ["selectedCategory"],
  methods: {
    search() {
      // TODO: There should be a limiter on this
      let fuse = new Fuse(this.$store.getters.mergedData, options);
      this.$emit("emitSearchObject", {
        query: this.query,
        category: "",
        result: fuse.search(this.query)
      });
    }
  }
};
</script>
