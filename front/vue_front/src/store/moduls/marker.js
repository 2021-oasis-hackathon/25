export default {
  state: {
    currentPos:"123123" , 
    a: "asdasd",
  },
  getters: {
  },
  mutations: {
    Pos : (state, payload) =>{
      state.currentPos=payload; 
      console.log(state.currentPos);
    }
  },
  actions: {
    Pos: ({commit}, payload) =>{
      commit('Pos', payload);   
    }
  },
  modules: {
  }
}