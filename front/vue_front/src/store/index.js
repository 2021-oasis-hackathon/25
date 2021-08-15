import { createStore } from 'vuex'

import food from './moduls/food.js';
import map from './moduls/map.js';
import plan from './moduls/plan.js';
import community from './moduls/community.js';
import marker from './moduls/marker.js';

export default createStore({
  state:{
    init:"9ppcmu4ekd",
  },
  modules: {
    namespaced:true,
    food,
    map , 
    plan,
    community,
    marker:marker, 
  }
})
