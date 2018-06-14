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
            <GoogleMap></GoogleMap>
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
      computed:{
          account(){
            return this.$store.state.account;
          },
          name(){
            return this.$store.state.account.name;
          },
          account(){
            return this.$store.state.account.account;
          },
          street1(){
            return this.$store.state.account.street1;
          },
          street2(){
            return this.$store.state.account.street2;
          },
          city(){
            return this.$store.state.account.city;
          },
          state(){
            return this.$store.state.account.state;
          },
          zip(){
            return this.$store.state.account.zip;
          },
          /*latitude(){
            return this.$store.state.account.latitude;
          },
        longitude(){
            return this.$store.state.account.longitude;
        }*/
      },
      mounted: function(){
          console.log("mounted",this.$store.state.account);
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
