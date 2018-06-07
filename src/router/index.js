import Vue from 'vue';
import Router from 'vue-router';
import AddressForm from '@/components/AddressForm/AddressForm.vue';
import AccountDetails from '@/components/AccountDetails/AccountDetails.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddressForm',
      component: AddressForm
    },
    {
      path:'/Account_Details',
      component: AccountDetails
    }
  ]
})
