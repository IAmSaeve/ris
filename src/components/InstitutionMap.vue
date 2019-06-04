<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";

export default {
  data() {
    return {
      zoom: 6,
      result: Object
    };
  },
  props: ["place"],
  mounted() {
    this.generateMap();
  },
  methods: {
    async generateMap() {
      // This tries to correct address errors when searching
      // TODO: Find better API to search for lon and lat
      let s = this.place["Praktikstedets adresse"];
      let n = s.indexOf(",");
      s = s.substring(0, n != -1 ? n : s.length);

      this.result = await fetch(
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
      this.renderMap();
    },
    renderMap() {
      let map = L.map("map", {
        center:
          this.result === undefined
            ? { lat: "56.2128586", lon: "9.3004301" }
            : [this.result.lat, this.result.lon],
        zoom: this.result === undefined ? this.zoom : 15
      });
      L.control.scale().addTo(map);
      if (this.result !== undefined) {
        L.marker([this.result.lat, this.result.lon]).addTo(map);
      }

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
