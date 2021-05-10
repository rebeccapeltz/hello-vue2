import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Player from './components/VideoPlayer'
import Tag from './components/VideoTag'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  { 
    path: '/tag',
    component: Tag
  },
  { 
    path: '/player',
    component: Player
  }
 
]
export default new VueRouter({
  routes: routes
});