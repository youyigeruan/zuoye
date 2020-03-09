<template>
	<div>
		<div class="wrap">
			<div class="con" v-for="(item,index) in recommendList">
				<template v-if="index%2 == 0">
					<div :style="{background:'url('+item.tre_img[0].url+')',backgroundSize:'cover'}" class="img" v-if="item.tre_img"></div>
					<p class="p">{{item.tre_descr}}</p>
					<div class="inner">
						<div class="headimg"><img :src="item.user.headimgurl[0].url" alt="" v-if="item.user.headimgurl"></div>
						<p>{{item.user.name}} <span>👍{{item.goodCnt}}</span></p>
					</div>
				</template>
				<template v-else>
					<p class="p">{{item.tre_descr}}</p>
					<div class="inner">
						<div class="headimg"><img :src="item.user.headimgurl[0].url" alt="" v-if="item.user.headimgurl"></div>
						<p>{{item.user.name}} <span>👍{{item.goodCnt}}</span></p>
					</div>
					<div :style="{background:'url('+item.tre_img[0].url+')',backgroundSize:'cover'}" class="img" v-if="item.tre_img"></div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		name:"myrecom",
		data:function(){
			return {
				recommendList:[],
				imgurl:[],
				followList:[]
			}
		},
		mounted:function(){
			axios.post("https://www.jvhv.com/siteindex.php/Trends/SameCity.html",{
				p:1
			}).then((data)=>{
				console.log(data);
				this.recommendList = data.data.data.list;
				
				
			})
		}
	}
</script>

<style lang="scss">
	.wrap{
		margin-bottom:60px;
		display: flex;flex-wrap: wrap;justify-content: space-between;
		.con{
			width: 48%;
			.img{
				width: 100%;height:180px;
			}
			.p{
				max-height: 20px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.inner{
				display: flex;
				.headimg{
					flex:0 0 40px;
					width:40px;height: 40px;border-radius: 3px;overflow: hidden;
					img{width:100%;}
				}
				p{
					flex:1 1 100%;
					
					span{float:right;}
				}
			}
		}
	}
</style>
