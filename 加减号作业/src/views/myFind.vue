<template>
	<div>
		<div class='find'>
			<b>发现</b>
			<div>+</div>
			<span>🔍</span>
		</div>
		<nav>
			<router-link to="/myFind/recommend">推荐</router-link>
			<router-link to="/myFind/follow">关注</router-link>
			<router-link to="/myFind/onecity">同城</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		data:function(){
			return {
				
			}
		},
		mounted:function(){
			axios.post("https://www.jvhv.com/siteindex.php/Trends/Index.html",{
				p:1
			}).then((data)=>{
				console.log(data);
			})
		}
	}
</script>

<style lang='scss'>
	.find{
		&::after{
			content: "";
			display: block;
			clear: both;
		}
		b{position: absolute;width:80px;left:50%;margin-left:-40px;line-height: 35px}
		div{float: right;font-size: 35px;line-height: 35px;}
		span{float: right;line-height: 35px}
	}
	nav{
		display: flex;justify-content: space-around;height:40px;line-height: 40px;
		a{
			text-decoration: none;
			color: #999;
			&.router-link-exact-active{
				color:blue;
				border-bottom: 2px solid blue;
			}
		}
	}
</style>
