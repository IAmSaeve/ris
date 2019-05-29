<template>
  <select
    v-model="selectedCategory"
    @change="selectInstitutionData"
    name="select-category"
    class="browser-default custom-select m-3"
  >
    <option value>Vælg speciale og praktik</option>
    <option value="Dagtilbud2Praktik">Dagtilbud 2. praktik</option>
    <option value="Skolefritid2Praktik">Skole fritid 2. praktik</option>
    <option value="SocialSpecial2Praktik">Social special 2. praktik</option>
    <option value="Dagtilbud3Praktik">Dagtilbud 3. praktik</option>
    <option value="Skolefritid3Praktik">Skole fritid 3. praktik</option>
    <option value="SocialSpecial3Praktik">Social special 3. praktik</option>
  </select>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
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
      //   this.$children[0].query = "";
      this.searchQuery = "";

      if (this.selectedCategory !== "" && this.searchQuery === "") {
        eventBus.$emit(
          "emitCategoryObject",
          this.$store.state[this.selectedCategory]
        );
      } else {
        eventBus.$emit("emitCategoryObject", []);
      }
    }
  }
};
</script>

<style></style>
