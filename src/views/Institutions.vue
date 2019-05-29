<template>
  <div>
    <!-- Top part of the body -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-between">
            <app-category-component></app-category-component>
            <app-search-component
              :selectedCategory="selectedCategory"
            ></app-search-component>
          </div>
        </div>
      </div>
    </section>

    <!-- Main body is rendered here -->
    <section>
      <div class="container" v-if="searchQuery === ''">
        <div
          class="row"
          v-for="(places, grpIndex) in grpResult"
          :key="grpIndex"
        >
          <div
            class="col-lg-4 col-md-12 mb-4 align-items-stretch"
            v-for="(place, index) in places"
            :key="index"
          >
            <div class="card m-3" id="card">
              <div class="card-body">
                <h6>{{ place["Praktiksteds navn"] }}</h6>
                <p class="mb-0">{{ place["Praktikstedets adresse"] }}</p>
                <p class="mb-0">
                  {{
                    place["Praktikstedets postnummer"] +
                      " " +
                      place["Praktikstedets by"]
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" v-else>
        <div
          class="row"
          v-for="(places, grpIndex) in grpResult"
          :key="grpIndex"
        >
          <div
            class="col-lg-4 col-md-12 mb-4 align-items-stretch"
            v-for="(place, index) in places"
            :key="index"
          >
            <div class="card m-3" id="card">
              <div class="card-body">
                <h6>{{ place["Praktiksteds navn"] }}</h6>
                <p class="mb-0">{{ place["Praktikstedets adresse"] }}</p>
                <p class="mb-0">
                  {{
                    place["Praktikstedets postnummer"] +
                      " " +
                      place["Praktikstedets by"]
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// TODO: Remove later
/* eslint-disable no-console */
import appSearchComponent from "@/components/InstitutionsSearch.vue";
import appCategoryComponent from "@/components/InstitutionsCategorySelector.vue";

import { eventBus } from "@/main.js";

import chunk from "lodash/chunk";

export default {
  name: "Institutions",
  data() {
    return {
      selectedCategory: "",
      searchQuery: "",
      result: []
    };
  },
  computed: {
    grpResult() {
      // Divide array data into small, 3 size, arrays.
      // This is for processing the data with ease.
      return chunk(this.result, 3);
    }
  },
  mounted() {
    eventBus.$on("emitSearchObject", event => {
      this.selectedCategory = event.category;
      this.searchQuery = event.query;
      this.result = event.result;
    });
    eventBus.$on("emitCategoryObject", event => {
      console.log(event);
    });
  },
  components: {
    appSearchComponent,
    appCategoryComponent
  }
};
</script>

<style scoped>
/* Make some styling to the database content */
#card {
  background-color: #45526e;
  min-height: 9rem;
}
#card p {
  color: #fff;
}
#card h6 {
  color: #00bcd4;
}
input,
select {
  max-width: 12rem;
}
</style>
