export default {
  state: {
    currentPos:null,
    markers: [

    ],
  },
  getters: {
  },
  mutations: {
    setUserPos : (state, payload) =>{
      state.currentPos=payload; 
      console.log("markers : ", state.currentPos);
      state.markers.push(payload);
    }
  },
  actions: {
     
    setUserPos: ({commit}, payload) =>{
      commit('setUserPos', payload);   
    }
  },
  modules: {
  }
}