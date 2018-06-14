<template>
    <div class="google-map" id="map"></div>
</template>

<script>
  export default {
    //props: ['latitude', 'longitude'],
    mounted: function () {
      let latitude = parseFloat(this.$store.state.account.latitude);
      let longitude = parseFloat(this.$store.state.account.longitude);

      let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 15
      });
    }
  }

</script>

<style scoped>
#map {
  width: 95%;
  height: 95%;
  margin: 0 auto;
  top:10px;
  padding-top:10px;
  background: gray;
}
</style>
