<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="red darken-4 white--text">
                <v-toolbar-title>Tenant Search form</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="tenant" label="Tenant" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="business" name="address" label="Property" type="text"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-4 white--text" @click="searchAccounts()">Search</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "TenantSearch",
      methods:{
          searchAccounts:function(){
            window.location = "/#/SearchResults"
          }
      }
    }
</script>

<style scoped>

</style>
