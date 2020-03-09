<template>
	<div>
		
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" >
					<img :src="swiperArr" alt=""/>
				</div>	
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<nav class="nav">
			<router-link to="/myten/mycourse/">课程</router-link>
			<router-link to="/myten/myaddr/">场馆</router-link>
			<router-link to="/myten/mycoach/">教练</router-link>
			
		</nav>
		<router-view></router-view>
		
		
		<!-- <div class="course">
			<h3>课程信息</h3>
			<div class="coursewrap">
				<div class="img"><img src="" alt=""></div>
				<p>{{}}<span>{{}}</span></p>
			</div>
		</div>
		<div class="choose">
			<h3>精选课程 <span><a href="#">全部</a></span></h3>
			<ul>
				<li>
					<div class="left">
						<b></b>
						<p>有效期：{{}}</p>
						<p>时间：{{}}</p>
						<p>场地：{{}}</p>
						<p>价格：<span class="red"></span>元 <del>原价{{}}</del></p>
					</div>
					<div class="right"><img src="" alt=""></div>
				</li>
				<hr>
			</ul>
			<div><a href="#">查看更多课程</a></div>
		</div> -->
		
	</div>
</template>

<script>
	import axios from "axios";
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.css";
	export default{
		data:function(){
			return{
				swiperArr:[]
			}
		},
		mounted:function(){
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Index2",{
				class:this.$route.params.class,
				fid:""
			}).then((data)=>{
				console.log(data);
				this.swiperArr = data.data.data.top_ad.list[0].adlist_img;
				console.log(this.swiperArr);
			})
		}
	}
</script>

<style lang="scss">
	*{padding:0;margin:0;}
	ul,li{list-style:none;}
	.swiper-container{
		.swiper-wrapper{
			width:100%;
			.swiper-slide{
				img{width:100%;height:200px;}
			}
		}
	}
	.nav{
		display: flex;justify-content: space-around;
		a{
			text-decoration: none;color:black;
			&.router-link-exact-active{
				color:blue;border-bottom: 2px solid blue;
			}
		}
	}
</style>
