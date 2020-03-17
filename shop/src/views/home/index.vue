<template>
	<div class="app-container">
		<!--订单销售额统计-->
		<div class="total-layout">
			<el-row>
			  <el-col :span="8" class="total-box">
					<div class="grid-content bg-purple total-box1 ">
						<img :src="img1"  />
						<div>
							<div>今日订单总数</div>
							<div>200</div>
						</div>
					</div>
			  </el-col>
			  <el-col :span="8" class="total-box">
				  <div class="grid-content bg-purple total-box1 ">
					<img :src="img3"  />
					<div>
						<div>今日销售总额</div>
						<div>￥5000</div>
					</div>	
				  </div>
			</el-col>
			  <el-col :span="8" class="total-box">
				  <div class="grid-content bg-purple total-box1 ">
					<img :src="img2"  />
					<div>
					<div>昨日销售总额</div>
					<div>￥3000</div>
					</div>
				  </div>
			  </el-col>
			</el-row>
		</div>
		
		<!--待处理事务-->
		<div class="un-handle-layout">
			<div class="un-handle-title">待处理事务</div>
			<div class="un-handle-con">
				<el-row :gutter="20">
					<el-col :span="8" v-for="(item,index) in PendingArr" :key="index">
						<div class="un-handle-item">
							<span>{{item.name}}</span>
							<span class="font-red">({{item.count}})</span>
						</div>	
					</el-col>
				</el-row>
			</div>
		</div>
		
		<!--商品总览-->
		<el-row>
		  <el-col :span="12" class="goodsbox">
			  <div class="grid-content bg-purple">
				  <div class="goodslayout">
					  <div class="title">商品总览</div>
					  <div class="contents">
						  <ul>
							<li v-for="(item,index) in goodslayout">
								<div>
									<p class="goods-red">{{item.num}}</p>
									<p>{{item.status}}</p>
								</div>
								
							</li>
						  </ul>
					  </div>
				  </div>
			</div>
		  </el-col>
		  <el-col :span="12" class="goodsbox">
			  <div class="grid-content bg-purple-light">
				  <div class="goodslayout">
							  <div class="title">用户总览</div>
							  <div class="contents">
								  <ul>
									<li v-for="(item,index) in goodslayout">
										<div>
											<p class="goods-red">{{item.num}}</p>
											<p>{{item.status}}</p>
										</div>
										
									</li>
								  </ul>
							  </div>
				  </div>
			</div>
		  </el-col>
		</el-row>
		<div class="orders">
			<div class="orders-title">订单统计</div>
			<div class="orders-content">
				<el-row>
				  <el-col :span="4" class="orders-wrap">
					  <div class="grid-content bg-purple-dark orders-menu">
						  <ul>
						  	<li v-for="(item,index) in TongjiArr">
								<p>{{item.name}}</p>
								<p class="orders-item">{{item.num}}</p>
								<p>
									<span class="up" v-if="item.up >= 0">{{item.up}}</span>
									<span class="down" v-else>{{item.up}}</span>
									%{{item.type}}
								</p>
							</li>
						  </ul>
					  </div>
				  </el-col>
				  <el-col :span="20">
					  <div id="container" style="height: 400px">
					  	
					  	
					  </div>
					  <div class="grid-content bg-purple-dark">
						  
					  </div>
				  </el-col>
				</el-row>
			</div>
		</div>
		
		
		<!--用户总览-->
		
		
		<!--订单统计-->
	</div>
</template>

<script>
	var  colors = ['#5793f3', '#d14a61', '#675bba'];
	import img1 from '@/assets/images/home_order.png';
	import img2 from '@/assets/images/home_yesterday_amount.png';
	import img3 from '@/assets/images/home_today_amount.png';
	export default {
		name:'home',
		data:function(){
			return {
				img1,
				img2,
				img3,
				//待处理事务
				PendingArr:[
					{"name":"待付款订单","count":10},
					{"name":"已完成订单","count":5},
					{"name":"待确认收货订单","count":20},
					{"name":"待发货订单","count":30},
					{"name":"新缺货登记","count":6},
					{"name":"待处理退款申请","count":8},
					{"name":"已发货订单","count":12},
					{"name":"待处理退货订单","count":9},
					{"name":"广告位即将到期","count":10},
				],
				//商品总览
				goodslayout:[
					{num:100,status:"已下架"},
					{num:400,status:"已上架"},
					{num:50,status:"库存紧张"},
					{num:500,status:"全部商品"},				
				],
				userslayout:[
					{num:100,status:"今日新增"},
					{num:200,status:"昨日新增"},
					{num:1000,status:"本月新增"},
					{num:5000,status:"会员总数"},
				],
				//订单统计
				TongjiArr:[
					{"name":"本月订单统计","num":10000,"up":"+10","type":"同比上月"},
					{"name":"本周订单总数","num":1000,"up":"-10","type":"同比上周"},
					{"name":"本月销售总额","num":100000,"up":"+10","type":"同比上月"},
					{"name":"本周销售总额","num":50000,"up":"-10","type":"同比上周"},
				],
				//图表的数据
				chartData:{
					columns: ['date', 'orderCount','orderAmount'],
					rows: [
					   {date: '2018-11-01', orderCount: 10, orderAmount: 1093},
					  {date: '2018-11-02', orderCount: 20, orderAmount: 2230},
					  {date: '2018-11-03', orderCount: 33, orderAmount: 3623},
					  {date: '2018-11-04', orderCount: 50, orderAmount: 6423},
					  {date: '2018-11-05', orderCount: 80, orderAmount: 8492},
					  {date: '2018-11-06', orderCount: 60, orderAmount: 6293},
					  {date: '2018-11-07', orderCount: 20, orderAmount: 2293},
					  {date: '2018-11-08', orderCount: 60, orderAmount: 6293},
					  {date: '2018-11-09', orderCount: 50, orderAmount: 5293},
					  {date: '2018-11-10', orderCount: 30, orderAmount: 3293},
					  {date: '2018-11-11', orderCount: 20, orderAmount: 2293},
					  {date: '2018-11-12', orderCount: 80, orderAmount: 8293},
					  {date: '2018-11-13', orderCount: 100, orderAmount: 10293},
					  {date: '2018-11-14', orderCount: 10, orderAmount: 1293},
					  {date: '2018-11-15', orderCount: 40, orderAmount: 4293}
					]
				},
				
				option:{
				    color: colors,
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross'
				        }
				    },
					 toolbox: {
							feature: {
								dataView: {show: true, readOnly: false},
								restore: {show: true},
								saveAsImage: {show: true}
							}
						},
				    legend: {
				        data:['订单数量', '订单金额']
				    },
				    grid: {
				        top: 70,
				        bottom: 50,
						left:70
				    },
				    xAxis: [
				        {
				            type: 'category',
				            axisTick: {
				                alignWithLabel: true
				            },
				            axisLine: {
				                onZero: false,
				                lineStyle: {
				                    color: colors[1]
				                }
				            },
				            axisPointer: {
				                label: {
				                    formatter: function (params) {
				                        return '订单金额  ' + params.value
				                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
				                    }
				                }
				            },
				            data: ['2018-11-01', '2018-11-02', '2018-11-03', '2018-11-04', '2018-11-05', '2018-11-06', '2018-11-07', '2018-11-08', '2018-11-09', '2018-11-10', '2018-11-11', '2018-11-12', '2018-11-13', '2018-11-14', '2018-11-15']
				        }
				        // {
				        //     type: 'category',
				        //     axisTick: {
				        //         alignWithLabel: true
				        //     },
				        //     axisLine: {
				        //         onZero: false,
				        //         lineStyle: {
				        //             color: colors[0]
				        //         }
				        //     },
				        //     axisPointer: {
				        //         label: {
				        //             formatter: function (params) {
				        //                 return '订单数量  ' + params.value
				        //                     + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
				        //             }
				        //         }
				        //     },
				        //     data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
				        // }
				    ],
				    yAxis: [
				         {
				                    type: 'value',
				                    name: '订单金额',
				                    min: 0,
				                    max: 10300,
				                    position: 'left',
				                    axisLine: {
				                        lineStyle: {
				                            color: colors[0]
				                        }
				                    },
				                    axisLabel: {
				                        formatter: '{value} 元'
				                    }
				                },
						 {
						            type: 'value',
						            name: '订单数量',
						            min: 0,
						            max: 100,
						            position: 'right',
						            axisLine: {
						                lineStyle: {
						                    color: colors[1]
						                }
						            },
						            axisLabel: {
						                formatter: '{value} 单'
						            }
						        }
				    ],
				    series: [
				        
				        {
				            name: '订单金额',
				            type: 'line',
							
				            smooth: true,
				            data: [1092,1000,2345,567,1234,1092,100,2345,4567,1234,1092,1000,2345,4567,1234]
				        },
						{
						    name: '订单数量',
						    type: 'line',
						    yAxisIndex: 1,
						    smooth: true,
						    data: [10,20,33,45,90,87,120,34,56,98,12,69,34,90,100]
						},
				    ]
				}
			}
		},
		mounted:function(){
			var num=[],count=[];
			for(var i = 0;i<this.chartData.rows.length;i++){
				num.push(this.chartData.rows[i].orderAmount);
				count.push(this.chartData.rows[i].orderCount);
			}
			this.option.series[0].data = num;
			this.option.series[1].data = count;
			this.seven_chart = this.echarts.init(document.getElementById("container"));
			// 把配置和数据放这里
			this.seven_chart.setOption(this.option)  ;     
		}
	}
</script>

<style lang="scss">
	.app-container{
		margin-top:20px;
		margin-left:10px;
		margin-right:10px;
		.total-layout{
			.total-box{
				width:30%;
				height:80px;
				border:1px solid #ccc;
				border-radius: 10px;
				margin-left:10px;
				margin-right:10px;
				.total-box1 {
					display: flex; 
					flex-wrap: nowrap; 
					flex-direction: row;
					justify-content: space-around;
					padding:10px;
					img{
						width:40px;
						height:40px;
					}
				}
			}
		}
		//待处理事务的样式
		.un-handle-layout{
			border:1px solid #ccc; 
			margin-top:20px;
			margin-left:10px;
			margin-right:10px;
			.un-handle-title{
				padding-left:20px;
				background: lightblue;
				height:40px;
				line-height: 40px;
			}
			.un-handle-con{
				margin-left:20px;
				margin-right:20px;
				margin-bottom:20px;
				.un-handle-item{
					border-bottom:1px solid #ccc;
					height:40px;
					line-height:40px;
					margin-right:10px;
					display: flex;
					flex-wrap: nowrap; 
					flex-direction: row;
					justify-content: space-between;
				}
			}
			
		
		}
		
		
	}
	.font-red{color:red;}
	.goodsbox{padding:20px 10px;}
	.goodslayout{
		border:1px solid #aaa;
		.title{
			height:40px;background:#999;line-height:40px;
		}
		.contents{
			height:100px;
			ul{
				display: flex;justify-content: space-around;align-items:center;height:100px;padding:0 50px;
				li{
					height:50px;
					div{
						
						.goods-red{
							color:red;font-size: 24px;
						}
						p{font-size: 12px;text-align: center;}
					}
				}
				
			}
		}
	}
	.orders{
		border: 1px solid #ccc;margin:0 10px;
		.orders-title{
			height:50px;background:#ccc;line-height:50px;			
		}
		.orders-content{
			.orders-wrap{border-right:1px solid #ccc;}
			.orders-menu{
				
				ul{
					li{
						margin:15px 20px;
						p{font-size: 12px;margin:5px 0;}
						.orders-item{
							font-size: 24px;
						}
						.up{color:green;}
						.down{color:red;}
					}
				}
			}
		}
	}
</style>
