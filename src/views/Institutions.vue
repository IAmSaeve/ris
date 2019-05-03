<template>
  <div>
    <section class="Search"></section>
    <!-- TODO: Maybe this should be in a component? -->
    <section class="Selector"></section>
    <ul>
      <li v-for="(place, index) in result" :key="index">
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
      result: []
    };
  },
  mounted() {
    this.getInstitutionData();
  },
  methods: {
    getInstitutionData() {
      db.ref("Dagtilbud2Praktik").on(
        "value",
        snapshot => {
          this.result = snapshot.val();
          // eslint-disable-next-line
          console.log(this.result);
        },
        errorObject => {
          // eslint-disable-next-line
          console.log("The read failed: " + errorObject.code);
        }
      );
    }
  }
};
</script>

<style scoped></style>
