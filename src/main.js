import { createApp } from 'vue'
import { install } from './components/index'
import App from './App.vue'
import router from './routers/index'
import './assets/misc/vui-fastclick' // import fastclick

// handle fastclick
if ('ontouchstart' in window) {
  const _attach = window.FastClick && window.FastClick.attach
  _attach && _attach(document.body)
}

// install vui app
const vui = createApp(App)
install(vui)
vui.use(router).mount('#app')
