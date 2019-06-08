<template>
  <section>
    <div class="container">
      <div class="row mt-5">
        <div>
          <div class="col d-flex justify-content-between">
            <h2>{{ place["Praktiksteds navn"] }}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-between">
          <p class="mb-0">
            {{
              `Adresse:  ${place["Praktikstedets adresse"]}, ${
                place["Praktikstedets postnummer"]
              } ${place["Praktikstedets by"]}`
            }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <app-map-component :place="place"></app-map-component>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import appMapComponent from "@/components/InstitutionMap.vue";

export default {
  data() {
    return {
      palce: null,
      rating: []
    };
  },
  props: ["placeId"],
  components: {
    appMapComponent
  },
  created() {
    this.place = this.$store.getters.mergedData.find(
      p => p.Id === this.placeId
    );
    this.rating = this.$store.dispatch("getRatingData", {
      placeId: this.placeId,
      CollectionName: this.place.CollectionName
    });
  }
};
</script>
