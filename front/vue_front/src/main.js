import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

const app = createApp(App)

let url = "http://localhost:8000/user/"; // 장고 서버 주소

axios.get(url)
.then(function(response){
  console.log(response);
})
.catch(function(response){
  console.log(response);
})
app.use(router)
app.use(store)
app.use(vuetify)

app.mount('#app')
