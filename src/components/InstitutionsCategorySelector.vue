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
      selectedCategory: ""
    };
  },
  methods: {
    selectInstitutionData() {
      if (this.selectedCategory !== "") {
        eventBus.$emit(
          "emitCategory",
          this.$store.state[this.selectedCategory]
        );
      } else {
        eventBus.$emit("emitCategory", []);
      }
    }
  },
  created() {
    eventBus.$on("emitSearchObject", event => {
      if (event.searchQuery !== "") {
        this.selectedCategory = "";
      }
    });
  }
};
</script>
