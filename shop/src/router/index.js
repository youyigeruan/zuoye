import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout';

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: layout,
	redirect:"/home",
	meta:{title:'首页',icon:'icon-home'},
	children:[
	  {
		path:'home',
		name:'myhome',
		meta:{title:"首页",icon:'icon-home'},
		component:()=>import(/*webpackChunkName:"home"*/'@/views/home/index')  
	  }
	  
  ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue'),
	meta:{title:'登录'},
	hidden:true
  },
  {
    path: '/404',
    name: 'fof',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue'),
	meta:{title:'404页'},
	hidden:true
  },
  {
  	  path:'/pms',
  	  component:layout,
  	  redirect:'/pms/product',
  	  name:'pms',
  	  meta:{title:'商品',icon:'icon-shangpin'},
  	  children:[
  		  {
  			  path:'product',
  			  name:'product',
  			  meta:{title:"商品列表",icon:'icon-liebiao1'},
  			  component:()=>import(/*webpackChunkName:"product"*/'@/views/pms/product/index') 
  		  },
  		  {
  			  path:'addproduct',
  			  name:'addproduct',
			  hidden:true,
  			  meta:{title:"添加商品",icon:'icon-tianjia'},
  			  component:()=>import(/*webpackChunkName:"addproduct"*/'@/views/pms/product/add') 
  		  },
		  {
			  path:'updateproduct',
			  name:'updateproduct',
			  meta:{title:"修改商品",icon:'icon-tianjia'},
			  hidden:true,
			  component:()=>import(/*webpackChunkName:"updateproduct"*/'@/views/pms/product/update') 
		  },
  		  {
  			  path:'productCate',
  			  name:'productCate',
  			  meta:{title:"商品分类",icon:'icon-fenlei1'},
  			  component:()=>import(/*webpackChunkName:"productCate"*/'@/views/pms/productCate/index') 
  		  },
		  {
			  path:'addCate',
			  name:'addCate',
			  hidden:true,
			  meta:{title:"添加分类",icon:'icon-fenlei1'},
			  component:()=>import(/*webpackChunkName:"productCate"*/'@/views/pms/productCate/add') 
		  },
  		  {
  			  path:'productAttr',
  			  name:'productAttr',
  			  meta:{title:"商品类型",icon:'icon-haofangtuo400iconfontzhuzhaileixing'},
  			  component:()=>import(/*webpackChunkName:"productAttr"*/'@/views/pms/productAttr/index') 
  		  },
  		  {
  			  path:'brand',
  			  name:'brand',
  			  meta:{title:"品牌管理",icon:'icon-pinpaitemai'},
  			  component:()=>import(/*webpackChunkName:"brand"*/'@/views/pms/brand/index') 
  		  },
			{
			  path:'addBrand',
			  name:'addBrand',
			  hidden:true,
			  meta:{title:"添加品牌",icon:'icon-pinpaitemai'},
			  component:()=>import(/*webpackChunkName:"brand"*/'@/views/pms/brand/add') 
			}
  	  ]
  }
]

const router = new VueRouter({
  routes
})

export default router
