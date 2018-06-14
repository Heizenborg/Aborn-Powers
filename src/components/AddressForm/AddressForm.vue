<template>
  <div class="form-holder-outter">
      <div class="form-holder-inner">
        <v-toolbar color="red darken-4 white--text">
        <v-toolbar-title>Account Information</v-toolbar-title>
        </v-toolbar>
        <v-layout row>
          <v-flex xs6 offset-xs1>
            <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Account Name"
            required
          ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs6 offset-xs1>
            <v-text-field
            v-model="account"
            :rules="accountRules"
            label="Account Number"
            required
          ></v-text-field>
          </v-flex>
        </v-layout>

        <v-spacer></v-spacer>
        <!--ADDRESS INFORMATION -->
        <v-toolbar color="red darken-4 white--text">
          <v-toolbar-title>Address Information</v-toolbar-title>
        </v-toolbar>

        <v-spacer></v-spacer>

        <v-layout row>
          <v-flex xs8 offset-xs1>
            <v-text-field
            v-model="street1"
            :rules="streetRules"
            label="Address 1"
            required
          ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
        <v-flex xs8 offset-xs1>
          <v-text-field
          v-model="street2"
          label="Address 2"
        ></v-text-field>
        </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs5 offset-xs1>
            <v-text-field
            v-model="city"
            :rules="streetRules"
            label="Address City"
            required
          ></v-text-field>
          </v-flex>

          <v-flex xs2 offset-xs1>
            <v-text-field
            v-model="state"
            :rules="streetRules"
            label="Address State"
            required
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>

        </v-layout>

          <v-layout row>
          <v-flex xs3 offset-xs1>
            <v-text-field
            v-model="zip"
            :rules="streetRules"
            label="Address Zip Code"
            required
          ></v-text-field>
          </v-flex>
        </v-layout>
    </div>
    <!--ADDRESS INFORMATION -->
    <v-layout row>
      <v-flex xs12 sm4 offset-sm8 text-xs-center>
        <div style="margin-bottom:20px;">
          <v-btn @click="addNewAccount()">Add New Account</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
   import 'google-maps';
    export default {
        name: "AddressForm",
         data: () => ({
           valid:false,
           name:'',
           nameRules:[
             v => !!v || 'Account Name is required'
           ],
           account:'',
           accountRules:[
             v => !!v || 'Account Number is required'
           ],
           street1:'',
           streetRules:[
             v => !!v || 'Address is required'
           ],
           street2:'',
           city:'',
           state:'',
           zip:''
         }),
      computed:{
          store(){
            return this.$store;
          }
      },
        methods: {
          addNewAccount: function () {
            //let key = 'AIzaSyCVFSIAGDYqU8QKuxcsrg8-rVpSFUaWBG0';
            let account = {
              name: this.name,
              account: this.account,
              street1: this.street1,
              street2: this.street2,
              city: this.city,
              state: this.state,
              zip: this.zip,
              lat: '',
              long: ''
            };
            let coords = this.getLatLong(account, this.$store);

            //window.location="#/Account_Details"
          },
          getLatLong: function (account, store) {
            console.log("Calling coordinates");
            let key = 'AIzaSyCVFSIAGDYqU8QKuxcsrg8-rVpSFUaWBG0';
            let coords = {
              latitude: '',
              longitude: ''
            };

            let geocoder = new google.maps.Geocoder();

            let address = account.street1 + "+" + account.city + "+" + account.state;
            geocoder.geocode({'address': address}, function (results, status) {
              if (status === 'OK') {
                account.lat = results[0].geometry.bounds.b.b;
                account.long = results[0].geometry.bounds.f.f;
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }

              store.commit('changeAccount', account);
              console.log("account:",account);
              window.location="#/Account_Details";


            });

          }
        }

    }
</script>

<style scoped>
  .form-holder-outter{
    width:60%;
    margin:0 auto;
    box-shadow: 2px 2px 5px grey;
    border-radius: 11pt;
  }
  .form-holder-inner{
    width:100%;

  }
</style>
