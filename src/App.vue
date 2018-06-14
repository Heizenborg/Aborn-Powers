<template>
  <v-app id="management">
    <v-toolbar color="red darken-4 white--text">
      <v-toolbar-title color="#fff">Property Management Portal</v-toolbar-title>
    </v-toolbar>

    <v-toolbar>
      <div class="text-xs-center">
        <v-menu offset-y>
          <v-btn slot="activator" color="red darken-4 white--text" dark>Accounts</v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title @click="addAccount()">Add Account</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-title @click="searchAccount()">Search Account</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
    <v-container fluid><!--fluid makes the container full screen-->
      <router-view/><!--loads the components SPA style look at router/index.js for component and url management-->
    </v-container>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods:{
    addAccount:function(){
      window.location="/"
    },
    searchAccount:function(){
      window.location = "/#/Search"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
