<template>
    <div class="google-map" id="map"></div>
</template>

<script>
  import GoogleMapsLoader from 'google-maps'
  export default {
    props:['latitude', 'longitude'],

  mounted: function () {
      console.log(this.latitude);
      let latitude=parseFloat(this.latitude);
      let longitude=parseFloat(this.longitude);
    GoogleMapsLoader.KEY = 'AIzaSyCVFSIAGDYqU8QKuxcsrg8-rVpSFUaWBG0';
    GoogleMapsLoader.load(function(google) {
      let options = {
        zoom: 8,
        center:{ lat: latitude, lng: longitude }
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
