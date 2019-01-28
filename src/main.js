import Vue from 'vue'
import App from './App.vue'
import Blacklight from 'blacklight-vue'
import Routes from './routes'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

Vue.config.productionTip = false

Vue.use(Blacklight)
Vue.use(VueRouter)

// Push your own "Home" page into the routes.
Routes.push({ path: '/', name: 'home', component: Home })
const router = new VueRouter({
  routes: Routes
})

// Add address to the API server
Vue.http.options.root = 'http://localhost:3000'
Vue.http.options.headers = {
  Accept: 'application/json'
}

Vue.prototype.$titleField = 'title_tesim'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
