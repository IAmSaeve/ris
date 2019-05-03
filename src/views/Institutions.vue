<template>
  <div>
    <section class="Search">
      <select
        v-model="selectedCategory"
        @change="getInstitutionData"
        name="select-category"
      >
        <option value="Dagtilbud2Praktik">Dagtilbud 2. praktik</option>
        <option value="Skolefritid2Praktik">Skole fritid 2. praktik</option>
        <option value="SocialSpecial2Praktik">Social special 2. praktik</option>
        <option value="Dagtilbud3Praktik">Dagtilbud 3. praktik</option>
        <option value="Skolefritid3Praktik">Skole fritid 3. praktik</option>
        <option value="SocialSpecial3Praktik">Social special 3. praktik</option>
      </select>
      <input
        type="search"
        name="search-place"
        placeholder="Search..."
        v-model="searchQuery"
        v-on:input="search"
      />
    </section>
    <section class="Selector"></section>
    <ul v-if="searchQuery === ''">
      <li v-for="(place, index) in result" :key="index">
        {{ place["Praktikstedets adresse"] }}
      </li>
    </ul>
    <ul v-else>
      <li v-for="(place, index) in filteredArray" :key="index">
        {{ place["Praktikstedets adresse"] }}
      </li>
    </ul>
  </div>
</template>

<script>
import db from "@/components/firebase.js";

export default {
  data() {
    return {
      selectedCategory: "",
      searchQuery: "",
      filteredArray: [],
      result: []
    };
  },
  mounted() {
    this.getInstitutionData();
  },
  methods: {
    getInstitutionData() {
      if (this.selectedCategory !== "") {
        db.ref(this.selectedCategory).on(
          "value",
          snapshot => {
            // TODO: Maybe there should be a load limit which can dynamicly be changed
            // splice(startIndex, endIndex) can be used for this.
            this.result = snapshot.val();

            // Only enable this for debugging!
            // eslint-disable-next-line
            // console.log(this.result);
          },
          errorObject => {
            //TODO: Handle error and infor user.
            // eslint-disable-next-line
            console.log("The read failed: " + errorObject.code);
          }
        );
      }
    },
    search() {
      // TODO: Search can be made dynamic so that you can query for more then just the address.
      this.filteredArray = this.result.filter(term => {
        return term["Praktikstedets adresse"]
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
/* Make some styling to the database content */
</style>
