import { createStore } from 'vuex'

import food from './moduls/food.js';
import map from './moduls/map.js';
import plan from './moduls/plan.js';
import community from './moduls/community.js';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    food : food,
    map : map, 
    plan : plan,
    community: community,
  }
})
