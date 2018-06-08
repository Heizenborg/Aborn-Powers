import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    account:{
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

  },
  actions:{

  },
  getters:{

  }
});
