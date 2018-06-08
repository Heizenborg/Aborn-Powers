<template>
    <v-layout row wrap>
      <!-- LEFT Box-->
      <v-flex xs12 sm4 style="box-shadow: 3px 3px 8px grey;">
         <v-toolbar flat color="red darken-4 white--text">
         <v-toolbar-title>Account Information</v-toolbar-title>
        </v-toolbar>
        <div class="account-container">
          <DetailsForm
          :name="name"
          :account="account"
          :street1="street1"
          :street2="street2"
          :city="city"
          :state="state"
          :zip="zip"
          ></DetailsForm>
         </div>
      </v-flex>

      <v-flex xs12 sm1 md1 ></v-flex>

      <!-- RIGHT Box-->
      <v-flex xs12 sm7 style="box-shadow: 3px 3px 8px grey;">
         <v-toolbar flat color="red darken-4 white--text">
        <v-toolbar-title>Map</v-toolbar-title>
        </v-toolbar>
         <div class="account-container">
            <GoogleMap name="testing" :latitude="latitude" :longitude="longitude"></GoogleMap>
         </div>
      </v-flex>
    </v-layout>
</template>

<script>
  import GoogleMap from './GoogleMap';
  import DetailsForm from './DetailsForm';
    export default {
        name: "AccountDetails",
      components: {DetailsForm, GoogleMap},
      data:()=>({
          name:'John Doe',
          account:'1001234',
          street1:'123 Main Street',
          street2:'Apartment 2b',
          city:'El Dorado Hills',
          state:'California',
          zip:'95762',
          latitude:'38.685737',
          longitude:'-121.082167',

        }),
      computed:{
          account2(){
            return this.$store.state.account;
          }

      },
      mounted: function(){
          console.log(this.account2);
      }
    }
</script>

<style scoped>
  .account-container{
    background-color: #fff;
    width:100%;
    height:500px;
  }

</style>
