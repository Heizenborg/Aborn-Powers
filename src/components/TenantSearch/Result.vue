<template>

</template>

<script>
  import $ from 'jquery';
    export default {
        name: "Result",

      mounted:function(){
        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function (data) {
            console.log(data);
          }
        });
      }
    }
</script>

<style scoped>

</style>
