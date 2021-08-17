import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  WaveUI  from  'wave-ui' 
import  'wave-ui/dist/wave-ui.css'
import axios from 'axios'
 
const app = createApp(App)

axios.get("http://localhost:8000/").then(
  res => {console.log(res)
  }).catch(err => {
    console.log(err);
  });
  
  app.use(router)
  app.use(store)
  new  WaveUI ( app ,  { 
    // 일부 Wave UI 옵션
  })
  
  app.mount('#app')

  app.config.globalProperties.url = "http://localhost:8000/";