<template>
	<div>
		<div class="head">
			<span>厦门↓</span>
			<input type="text" placeholder="请输入搜索关键词" class="input">
		</div>
		<div class="swiper-container">
		    <!-- Additional required wrapper -->
		    <div class="swiper-wrapper">
		        <!-- Slides -->
		        <div class="swiper-slide" v-for="(item,index) in topHead"><img :src="item.adlist_img" alt="" ></div>
		        
		        ...
		    </div>
		    <!-- If we need pagination -->
		    <div class="swiper-pagination"></div>				    
		</div>
		<div class="icon">
			<div v-for="(item,index) in icon">
				<router-link :to="'/myten/'+item.CategoryOrder">
					<img :src="require('../assets/'+(index+1)+'.png')" alt="">
					<p>{{item.CategoryName}}</p>
				</router-link>
			</div>
		</div>
		<div class="favor">
			<h2>为您精选</h2>
			<div class="course">
				
				<div v-for="(item,index) in course">
					<router-link :to="'/myitem/'+item.pro_id">
						<div class="imgwrap"><img :src="item.pro_img[0].url" alt=""></div>
						<h3>{{item.pro_name}}</h3>
						<p>{{item.pro_Joiner}}人已参加</p>
					</router-link>
				</div>
			</div>
		</div>
		<div class="top5Con">
			<h2>本周最受欢迎TOP5</h2>
			<ul class="top5list">
				<li v-for="(item,index) in top5Arr">
					<router-link :to="'/myitem/'+item.pro_id">
						<div class="top5_img"><img :src="item.pro_img[0].url" alt=""></div>
						<div class="top5_text">
							<div>{{item.pro_name}}</div>
							<div>{{item.pro_Joiner}}人已参加</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	import axios from "axios";
	export default{
		name:"myMain",
		data:function(){
			return {
				top5Arr:[],
				topHead:[],
				icon:[],
				course:[]
			}
			
		},
		mounted:function(){
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res)=>{
				console.log(res);
				this.topHead = res.data.data.top_ad.list;
				this.icon = res.data.data.iconList;
				this.course = res.data.data.CourseforYou;
				this.top5Arr = res.data.data.CourseTop5;
				
			})
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
				autoplay:2000,
				speed:1000,
				observer:true,
				observeParents:true,
				pagination : '.swiper-pagination'
			  })  
		}
	}
</script>

<style lang="scss" scoped="scoped">
	*{margin:0;padding:0;}
	.head{
		background:blue;color:white;text-align: left;line-height: 25px;
		padding-left:10px;font-size: 14px;
		input{
			width:70%;height: 20px;border-radius: 2px;margin-left:15px;border:none;
		}
	}
	.swiper-container{
		width:100%;border-top:10px #ccc solid;
		.swiper-wrapper{
			width:100%;
			.swiper-slide{
				width:100%;
				img{width:100%;height:200px;}
			}
		}
	}
	.icon{
		display: flex;flex-wrap: wrap;border-top:10px #ccc solid;padding:20px 0;
		div{
			width:20%;text-align: center;
			img{width:45px;}
		}
	}
	.favor{border-top:10px #ccc solid;
		h2{text-align: left;}
	}
	.course{
		text-align: left;
		display: flex;flex-wrap: wrap;justify-content: space-between;
		
		div{
			flex:0 0 48%;
			.imgwrap{
				border-radius: 5px;overflow: hidden;height: 110px;
				img{width:100%;height:110px;}				
				}
			h3{font-weight: bold;}
			p{font-size: 12px;color:#aaa;}
			}
	}
	.top5Con{
		width:90%;height:400px;background:#004b9e;border-radius: 10px;margin:auto;margin-top:20px;
		margin-bottom:60px;
	}
	.top5Con h2{color:#fff;padding:20px;}
	.top5list{background:#fff;margin:10px;height:300px;border-radius: 10px;}
	.top5list li a{
		display: flex;flex-direction:row ;flex-wrap: nowrap;height:60px;
		padding:6px;border-bottom:1px solid #ddd;
	}
	.top5list li a .top5_img{width:30%;}
		.top5list li a .top5_img img{width: 80%; height: 50px;}			
		.top5list li a .top5_text{width: 70%;}
</style>
