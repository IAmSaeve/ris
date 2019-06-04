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
          <div id="map"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import L from "leaflet";

export default {
  props: ["place"],
  mounted() {
    this.getCoordinates();
  },
  methods: {
    async getCoordinates() {
      // This tries to correct address errors when searching
      // TODO: Find better API to search for lon and lat
      let s = this.place["Praktikstedets adresse"];
      let n = s.indexOf(",");
      s = s.substring(0, n != -1 ? n : s.length);

      var result = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${s}&format=json`
      )
        .then(response => {
          return response.json().then(v => {
            // eslint-disable-next-line
            // console.log(`Got response ${JSON.stringify(v)}`) // For debugging only
            return v[0];
          });
        })
        .catch(e =>
          // eslint-disable-next-line
          console.error(`Caught error:\n${e}}`)
        );

      // Initialize the map and assign it to a variable for later use
      var map = L.map("map", {
        // Set latitude and longitude of the map center (required)
        center: [result.lat, result.lon],
        // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
        zoom: 15
      });
      L.control.scale().addTo(map);
      L.marker([result.lat, result.lon]).addTo(map);

      // Create a Tile Layer and add it to the map
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    }
  }
};
</script>

<style scoped>
#map {
  width: 75%;
  height: 20rem;
}
</style>
