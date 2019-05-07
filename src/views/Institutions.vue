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
            <input
              type="search"
              name="search-place"
              placeholder="Search..."
              v-model="searchQuery"
              v-on:input="search"
              class="form-control m-3"
              aria-label="Search"
            />
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
var _ = require("lodash");

export default {
  data() {
    return {
      selectedCategory: "",
      searchQuery: "",
      result: []
    };
  },
  methods: {
    search() {
      // TODO: Search can be made dynamic so that you can query for more then just the address.
      if (
        this.selectedCategory !== "" ||
        typeof this.$store.state[this.selectedCategory] !== "undefined"
      ) {
        this.result = this.$store.state[this.selectedCategory].filter(term => {
          return term["Praktikstedets adresse"]
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        });
      }
    },
    selectInstitutionData() {
      if (this.selectedCategory !== "") {
        this.result = this.$store.state[this.selectedCategory];
      }
    }
  },
  computed: {
    grpResult() {
      return _.chunk(this.result, 3);
    }
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
