import Vue from 'vue';
import Router from 'vue-router';
import AddressForm from '@/components/AddressForm/AddressForm.vue';
import AccountDetails from '@/components/AccountDetails/AccountDetails.vue';
import TenantSearch from '@/components/TenantSearch/TenantSearch.vue';
import SearchResults from '@/components/TenantSearch/SearchResults.vue';

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
    },
    {
      path:'/Search',
      component: TenantSearch
    },
    {
      path:'/SearchResults',
      component: SearchResults
    }
  ]
})
