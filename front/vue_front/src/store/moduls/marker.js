export default {
  state: {
    currentPos:null,
    markers: [

    ],
  },
  getters: {
  },
  mutations: {
    addMarker : (state, payload) =>{
      state.markers.push(payload);
      console.log("Add Marker", state.markers);
    },
    setUserPos : (state, payload) =>{
      state.currentPos=payload; 
      console.log("setUserPos : ", state.currentPos);
    }
  },
  actions: {
    addMarker : ({commit}, payload) =>{
      commit('addMarker', payload);
    },
    setUserPos: ({commit}, payload) =>{
      commit('setUserPos', payload);   
    },
  },
  modules: {
  }
}