<template>
  <div>
    <section class="Search">
      <select
        v-model="selectedCategory"
        @change="selectInstitutionData"
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
      <li v-for="(place, index) in result" :key="index">
        {{ place["Praktikstedets adresse"] }}
      </li>
    </ul>
  </div>
</template>

<script>
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
      this.result = this.$store.state[this.selectedCategory].filter(term => {
        return term["Praktikstedets adresse"]
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
    selectInstitutionData() {
      if (this.selectedCategory !== "") {
        this.result = this.$store.state[this.selectedCategory];
      }
    }
  }
};
</script>

<style scoped>
/* Make some styling to the database content */
</style>
