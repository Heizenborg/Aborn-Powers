<template>

  <div style="width:100%;" @click="goToProfile()">
    <div class="results-container">
      <div class="results-image">
        <img v-bind:src="account.image"/>
      </div>
      <div class="info-container">
        <div class="results-name">{{this.account.name}}</div>
        <div class="results-email">{{this.account.email}}</div>

      </div>
      <div class="phone-container">
         <div class="results-phone">{{this.account.phone}}</div>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery';
    export default {
        name: "Result",

      data:()=>({
        account:{
          name:'',
          email:'',
          phone:'',
          image:''
        }
      }),

      mounted:function(){
        let account = this.account;
        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function (data) {
            console.log(data.results[0]);
            account.name = data.results[0].name.first + " " + data.results[0].name.last;
            account.email = data.results[0].email;
            account.phone = data.results[0].phone;
            account.image = data.results[0].picture.medium;
          }
        });
      },
      computed:{
        store(){
          return this.$store;
        }
      },
      methods:{
          goToProfile:function(){
            window.location = "/#/Account_Details"
          }
      }
    }
</script>

<style scoped>
  .results-container{
    position: relative;
    width:95%;
    height:100px;
    margin:0 auto;
    /*border:1px solid black;*/
    border-radius: 9pt;
    box-shadow: 12px 8px 15px lightgray;
  }
  .results-image{
    float:left;
    height:100%;
    margin-left:20px;
    width:100px;
    border-radius: 50%;
    padding:5px;
  }
 .results-image img{
   width:100%;
   height:100%;
   border-radius: 50%;
 }
  .info-container{
    float:left;

    height:100%;
    width:60%;
    margin-left: 20px;
  }
  .results-name{
    margin-top:15px;
    padding-left:30px;
    font-size: 24pt;
    text-transform: capitalize;
  }
  .results-email{
    margin-top:10px;
    padding-left:30px;
    font-size: 12pt;
    color:cornflowerblue;
  }
  .results-phone{
    margin-top:25px;
    padding-top: 20px;
    padding-left: 20px;
    font-size: 30pt;
  }
</style>
