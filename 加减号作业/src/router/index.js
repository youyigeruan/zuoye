import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/mymain"
  },
  {
    path: '/mymain',
    name: 'mymain',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myMain.vue'),
	
  },
  {
	 path: '/myitem/:content',
	 name: 'myitem',
	 // route level code-splitting
	 // this generates a separate chunk (about.[hash].js) for this route
	 // which is lazy-loaded when the route is visited.
	 component: () => import(/* webpackChunkName: "about" */ '../views/mycon.vue'), 
  },
  {
    path: '/myfind',
    name: 'myfind',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myFind.vue'),
	children:[
		{path:'recommend',
		component:() => import(/* webpackChunkName: "about" */ '../views/recommend.vue')},
		{path:'follow',
		component:() => import(/* webpackChunkName: "about" */ '../views/follow.vue')},
		{path:'onecity',
		component:() => import(/* webpackChunkName: "about" */ '../views/onecity.vue')}
	]
  },
  {
    path: '/myme',
    name: 'myme',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myMe.vue')
  },
  {
    path: '/mymessage',
    name: 'mymessage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myMessage.vue')
  },
  {
    path: '/myten/:class',
    name: 'myten',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myten.vue'),
	children:[
		// {path:"/",redirect:"/mycourse"},
		{path:"mycourse/:classes",component: () => import(/* webpackChunkName: "about" */ '../views/mycourse.vue')},
	{path:"myaddr/:classes",component: () => import(/* webpackChunkName: "about" */ '../views/myaddr.vue')},
	{path:"mycoach/:classes",component: () => import(/* webpackChunkName: "about" */ '../views/mycoach.vue')},
	]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
