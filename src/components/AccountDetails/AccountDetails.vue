<template>
    <v-layout row wrap>
      <!-- LEFT Box-->
      <v-flex xs12 sm5>
         <v-toolbar flat>
         <v-toolbar-title>Account Information</v-toolbar-title>
        </v-toolbar>
        <div class="account-container">

         </div>
      </v-flex>

      <v-flex xs12 sm1 md2></v-flex>

      <!-- RIGHT Box-->
      <v-flex xs12 sm5>
         <v-toolbar flat>
        <v-toolbar-title>Map</v-toolbar-title>
        </v-toolbar>
         <div class="account-container">
            <GoogleMap name="testing"></GoogleMap>
         </div>
      </v-flex>
    </v-layout>
</template>

<script>
  import GoogleMap from './GoogleMap';
    export default {
        name: "AccountDetails",
      components: {GoogleMap}
    }
</script>

<style scoped>
  .account-container{
    background-color: #fff;
    width:100%;
    height:500px;
  }

</style>
