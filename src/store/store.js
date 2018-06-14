import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    account:{//in the future this should probably just store the account number
          name:'John Doe',
          account:'1001234',
          street1:'123 Main Street',
          street2:'Apartment 2b',
          city:'El Dorado Hills',
          state:'California',
          zip:'95762',
          latitude:'38.685737',
          longitude:'-121.082167',

    }
  },
  mutations:{
    changeName(state, payload){
      state.account.name = payload;
    },
    changeAccount(state, payload){
      console.log("change account");
      console.log("payload:",payload);
      state.account.name = payload.name;
      state.account.account = payload.account;
      state.account.street1 = payload.street1;
      state.account.street2 = payload.street2;
      state.account.city = payload.city;
      state.account.state = payload.state;
      state.account.zip = payload.zip;
      state.account.latitude = payload.latitude;
      state.account.longitude = payload.longitude;
    }
  },
  actions:{

  },
  getters:{

  }
});

