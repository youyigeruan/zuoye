<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
			<img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
	  		<div>首页</div>
	  </router-link> 
      <router-link to="/myfind">
			<img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
			<div>发现</div>
	  </router-link>
	  <router-link to="/mymessage">
	  			<img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
	  			<div>消息</div>	  
	  </router-link>
	  <router-link to="/myme">
			<img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
			<div>我的</div>	  
	  </router-link>
	  
	  </div>
	   <router-view />
    </div>
   
  </div>
</template>

<style lang="scss">
ul,li{list-style: none;}
a{text-decoration: none;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
	font-size:12px;
	position: fixed;
	bottom:0;
	  left:0;
	  right:0;
	  height:50px;
	  border-top:1px solid #ccc;
	  display: flex;
	  flex-direction: row;
	  flex-wrap: nowrap;
	  justify-content: space-around;
	  a{
		  color:#000;
		  img{width:27px;height:27px;}
		  div{height:23px;}
		  &:hover{color:#000;text-decoration: none;}
	  }
}
</style>
