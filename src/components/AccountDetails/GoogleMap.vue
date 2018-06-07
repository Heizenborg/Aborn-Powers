<template>
    <div class="google-map" id="map"></div>
</template>

<script>
  import GoogleMapsLoader from 'google-maps'
  export default {

  mounted: function () {
    GoogleMapsLoader.KEY = 'AIzaSyCVFSIAGDYqU8QKuxcsrg8-rVpSFUaWBG0';
    GoogleMapsLoader.load(function(google) {
      let options = {
        zoom: 8,
        center:{ lat: 38.575764, lng: -121.478851 }
      };

      let map = new google.maps.Map(document.getElementById('map'), options);
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
