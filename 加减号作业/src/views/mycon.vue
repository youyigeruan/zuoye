<template>
	<div>内容页
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in swiperArr">
					<img :src="item.url" :alt="item.name"/>
				</div>	
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<h1 v-if="kechengitem.pro_name !== undefined">{{kechengitem.pro_name}}</h1>
		<p>时间：{{kechengitem.pro_timestr}}</p>
		<p>有效期：{{kechengitem.pro_active_date_text}}|场地：{{kechengitem.pro_placestr}}</p>
		<p ><span class="price">{{kechengitem.pro_price}}</span>元</p>
		<div class="access">
			<h3>可预约场馆</h3>
			<ul>
				<li v-for="i in kechengitem.pro_gym_list">
					<img :src="i.gym_headimg[0].url" alt="">
					<p>{{i.gym_name}}</p>
					<p>{{i.gym_address}}</p>
					<p><span>{{i.gym_distance}}</span><button class="btn">导航</button></p>
				</li>
			</ul>
		</div>
		<div class="coach">
			<h2>可预约教练</h2>
			<div class="choose">
				<div @click="choosen(2)" :class="{'bd':choosenNum==2}">二星</div>
				<div @click="choosen(3)" :class="{'bd':choosenNum==3}">三星</div>
				<div @click="choosen(4)" :class="{'bd':choosenNum==4}">四星</div>
				<div @click="choosen(5)" :class="{'bd':choosenNum==5}">五星</div>
				
			</div>
			<div class="show" >
			<div v-for="it in coachArr" class="showit">
				<div class="round">
					<img :src="it.coach_headImg[0].url" alt="">
				</div>
				<p>{{it.coach_name}}</p>
				<p>好评率{{it.coach_rate}} 已上课{{it.coach_lesson_total}}节</p>
				<hr>
				<p>差点：{{it.coach_verge}}</p>
				
			</div>
			</div>
		</div>
		<div class="content">
			<h2>课程内容</h2>
			<ul v-for="">
				<li><p></p></li>
				<li ></li>
			</ul>
		</div>
		<div class="evaluate"><h2>会员评价</h2></div>
		<div class="hh">
			<h2>约课流程</h2>
			<div class="progress">
				<div>1.购买</div>
				<div>2.约课</div>
				<div>3.签到</div>
				<div>4.评价</div>
				<div>规则详情</div>
				
			</div>
			<div><span>联系客服</span><button class="buy">立即购买</button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import Swiper from 'swiper';
	//引入swiper的css
	import 'swiper/dist/css/swiper.css';
	export default{
		data:function(){
			return {
				kechengitem:[],
				swiperArr:[],
				choosenNum:2,
				coachArr:[]
			}
		},
		methods:{
		choosen:function(num){
			this.choosenNum = num;
			
			}	
		},
		watch:{
			choosenNum:function(newv){
				this.coachArr = [];
				for(var i = 0;i<this.kechengitem.pro_coach_list.length;i++ ){
					if(this.kechengitem.pro_coach_list[i].coach_grade == newv){
						this.coachArr.push(this.kechengitem.pro_coach_list[i]);
					}
				}
			}
		},
		mounted:function(){
			console.log(this.$route.params.content);
			let pid = this.$route.params.content;
			let params = new URLSearchParams();
			params.append('pro_id',pid);
			params.append('fid','');
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html",params).then((data)=>{
				console.log(data);
				this.kechengitem = data.data.data;
				this.swiperArr = data.data.data.pro_imglist
			})
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
				autoplay:2000,
				speed:1000,
				observer:true,
				observeParents:true,
				pagination : '.swiper-pagination',
				prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',
			  })
		}
	}
</script>

<style lang="scss" scoped="scoped">
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
.swiper-container {
			    width: 100%;
			    height: 200px;
			}  
			.swiper-container img{height:200px;width: 100%;}
			.price{color:red;font-size: 25px;font-weight: bold;}
			.access ul{display: flex;overflow: auto;width:100%;}
			.access ul li p:not(:last-of-type){height:40px;}
			.btn{float: right;background-color: blue;color:white;}
			.access ul li{margin:10px;border-radius: 10px;flex:0 0 50%;}
			.access ul li img{width:100%;height:150px;}
			.choose{display: flex;}
			.choose div{width:25%;text-align: center;}
			.bd{color: blue;font-size: 18px;font-weight: bold;}
			.show{display: flex;flex-wrap: nowrap;overflow: auto;justify-content: space-around;}
			.show .showit{width:50%;background:#ddd;text-align: center;overflow: hidden;flex:0 0 50%;margin:0 5px;height:240px;}
			.show div .round{width:80px;border-radius: 50%;margin:30px auto;overflow: hidden;}
			.show div .round img{width:80px;height:80px;}
			.progress{display: flex;justify-content: space-around;margin:60px 0;}
			.buy{width:50%;background:blue;color:white;float: right;}
			.access,.coach,.content,.evaluate,.hh{border-top:10px #ccc solid;}
			.coach{height:300px;}
</style>
