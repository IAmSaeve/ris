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
      <div class="row mb-5">
        <div class="col">
          <!-- This sends soooo many events, god help me!
          FIXME: Should really be optimized! -->
          <star-rating
            v-model="RatingHeler"
            :increment="0.5"
            :fixed-points="2"
            :star-size="30"
          ></star-rating>
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
      palce: null
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
    this.$store.dispatch("getRatingData", {
      placeId: this.placeId,
      CollectionName: this.place.CollectionName
    });
  },
  computed: {
    RatingHeler: {
      get: function() {
        return this.$store.getters.getAvarageRating;
      },
      set: function(rating) {
        this.$store.dispatch("postRatingData", {
          placeId: this.placeId,
          CollectionName: this.place.CollectionName,
          rating: rating
        });
      }
    }
  },
  destroyed() {
    // TODO: Should be done via mutations for state tracking
    this.$store.state.rating.Ratings = [];
    this.$store.getters.getAvarageRating;
  }
};
</script>
