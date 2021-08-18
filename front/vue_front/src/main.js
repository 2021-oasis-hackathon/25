import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  WaveUI  from  'wave-ui' 
import  'wave-ui/dist/wave-ui.css'
 
const app = createApp(App)
  
  app.use(router)
  app.use(store)
  new  WaveUI ( app ,  { 
    // 일부 Wave UI 옵션
  })
  
  app.mount('#app')

  app.config.globalProperties.url = "http://127.0.0.1:8000/";