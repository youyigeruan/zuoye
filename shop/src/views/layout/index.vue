<template>
	<div class="container">
		<mysidebar></mysidebar>
		<div class="main-container">
			<mynavbar></mynavbar>
			<router-view class="main-con"></router-view>
			
		</div>
	
	</div>
</template>

<script>
	import mysidebar from "./components/mysidebar.vue";
	import mynavbar from "./components/mynavbar.vue";
	
	export default {
		name:"layout",
		components:{
			mysidebar,
			mynavbar
		}
	  
	}
</script>

<style lang="scss">
	.container{
		// position:absolute;top:0;left:0;right:0;bottom:0;
		border:3px red solid;
		display: flex;
		.sidebar-container{
			width:200px;background:#555;color:white;line-height:50px;text-align: center;
		}
		.main-container{
			width:100%;
			.navbar-container{
				width:100%;display: flex;justify-content: space-between;
				height:50px;background:lightblue;line-height:50px;
				
			}
		}
	}
	
</style>
