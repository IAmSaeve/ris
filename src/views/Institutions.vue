<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-between">
            <select
              v-model="selectedCategory"
              @change="selectInstitutionData"
              name="select-category"
              class="browser-default custom-select m-3"
            >
              <option value>Vælg speciale og praktik</option>
              <option value="Dagtilbud2Praktik">Dagtilbud 2. praktik</option>
              <option value="Skolefritid2Praktik"
                >Skole fritid 2. praktik</option
              >
              <option value="SocialSpecial2Praktik"
                >Social special 2. praktik</option
              >
              <option value="Dagtilbud3Praktik">Dagtilbud 3. praktik</option>
              <option value="Skolefritid3Praktik"
                >Skole fritid 3. praktik</option
              >
              <option value="SocialSpecial3Praktik"
                >Social special 3. praktik</option
              >
            </select>
            <app-search-component
              :selectedCategory="selectedCategory"
              @emitSearchObject="
                selectedCategory = $event.category;
                searchQuery = $event.query;
                result = $event.result;
              "
            ></app-search-component>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container" v-if="searchQuery === ''">
        <div
          class="row"
          v-for="(places, grpIndex) in grpResult"
          :key="grpIndex"
        >
          <div
            class="d-flex flex-column col-lg-4 col-md-12 mb-4 align-items-stretch"
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
import appSearchComponent from "@/components/Search.vue";

var _ = require("lodash");

export default {
  name: "Institutions",
  data() {
    return {
      selectedCategory: "",
      searchQuery: "",
      result: []
    };
  },
  methods: {
    selectInstitutionData() {
      // Clear input box in child component
      // I don't really like this :(
      this.$children[0].query = "";
      this.searchQuery = "";

      if (this.selectedCategory !== "" && this.searchQuery === "") {
        this.result = this.$store.state[this.selectedCategory];
      } else {
        this.result = [];
      }
    }
  },
  computed: {
    grpResult() {
      return _.chunk(this.result, 3);
    }
  },
  components: {
    appSearchComponent
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
