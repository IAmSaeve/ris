<template>
  <input
    type="search"
    name="search-place"
    placeholder="Søg... (alle steder)"
    v-model="searchQuery"
    v-on:input="search"
    class="form-control m-3"
    aria-label="Search"
  />
</template>

<script>
import { eventBus } from "@/main.js";

import Fuse from "fuse.js";

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
      searchQuery: ""
    };
  },
  methods: {
    search() {
      // TODO: There should be a dynamic limiter on this
      // ATM it's fixed to 12 results
      let fuse = new Fuse(this.$store.getters.mergedData, options);
      eventBus.$emit("emitSearchObject", {
        searchQuery: this.searchQuery,
        result: fuse.search(this.searchQuery).slice(0, 12)
      });
    }
  },
  created() {
    eventBus.$on("emitCategory", event => {
      if (event !== []) {
        this.searchQuery = "";
      }
    });
  }
};
</script>
