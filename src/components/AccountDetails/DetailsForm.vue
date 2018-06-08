<template>
  <v-flex style="padding-top:10px;">
    <v-layout row>
      <v-flex xs8 offset-xs1>
        <v-text-field
        v-model="name"
        label="Account Name"
        :required=required
        :disabled=formLocked
      ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs8 offset-xs1>
        <v-text-field
        v-model="account"
        label="Account Number"
        :required=required
        :disabled=formLocked
      ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs8 offset-xs1>
        <v-text-field
        v-model="street1"
        label="Address 1"
        :required=required
        :disabled=formLocked
      ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs8 offset-xs1>
        <v-text-field
        v-model="street2"
        label="Address 2"
        :required=required
        :disabled=formLocked
      ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs8 offset-xs1>
        <v-text-field
        v-model="city"
        label="City"
        :required=required
        :disabled=formLocked
      ></v-text-field>
      </v-flex>
    </v-layout>

     <v-layout row>
      <v-flex xs4 offset-xs1>
        <v-text-field
        v-model="state"
        label="State"
        :required=required
        :disabled=formLocked
      ></v-text-field>
      </v-flex>

      <v-flex xs2 offset-xs2>
        <v-text-field
        v-model="zip"
        label="Zip Code"
        :required=required
        :disabled=formLocked
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-flex xs2 offset-xs7 style="margin-bottom: 10px;">
      <v-btn v-if="formLocked" @click="toggleEdit()">Edit</v-btn>
      <v-btn v-else color="blue" @click="toggleEdit()">Update</v-btn>
    </v-flex>

  </v-flex>
</template>

<script>
    export default {
        name: "DetailsForm",
        props:['name','account', 'street1','street2','city','state','zip'],
      data:()=>({
           formLocked:true,
           required:false,
        }),
        methods:{
          toggleEdit:function(){
            this.formLocked = !this.formLocked;
            this.required = !this.required;
          }
        }
    }
</script>

<style scoped>

</style>
