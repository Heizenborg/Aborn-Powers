<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm12 md10>
            <v-card class="elevation-12">
              <v-toolbar dark color="red darken-4 white--text">
                <v-toolbar-title>Search Results</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <div style="height:50px;"></div>
              <v-card-text>

                <Result/>
                <Result/>
                <Result/>

              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
  import Result from './Result';
    export default {
        name: "SearchResults",
      components:{Result}

    }
</script>

<style scoped>

</style>
