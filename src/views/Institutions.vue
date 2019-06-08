<template>
  <div>
    <!-- Begin: select and search -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-between">
            <app-category-component></app-category-component>
            <app-search-component></app-search-component>
          </div>
        </div>
      </div>
    </section>
    <!-- End: select and search -->

    <!-- Begin: main body -->
    <section>
      <div class="container">
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
            <div class="card m-3" id="card" @click="openInstitution(place)">
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
    <!-- End: main body -->
  </div>
</template>

<script>
import appSearchComponent from "@/components/InstitutionsSearch.vue";
import appCategoryComponent from "@/components/InstitutionsCategorySelector.vue";

import { eventBus } from "@/main.js";

import chunk from "lodash/chunk";

export default {
  name: "Institutions",
  data() {
    return {
      result: []
    };
  },
  methods: {
    openInstitution(place) {
      this.$router.push({
        name: "institution",
        params: { name: place["Praktiksteds navn"], placeId: place.Id }
      });
    }
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
      this.result = event.result;
    });
    eventBus.$on("emitCategory", event => {
      this.result = event;
    });
  },
  components: {
    appSearchComponent,
    appCategoryComponent
  }
};
</script>

<style scoped>
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
