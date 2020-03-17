<template>
	<div>
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
			<span class="el-icon-tickets"></span>修改商品分类信息
			<!-- <el-button style="float: right; padding: 3px 0" type="text" class="button-right">添加</el-button> -->
		  </div>
		  <el-form  :model="listQuery" label-width="80px"  class="product-form">
		    <el-form-item label="分类名称:">
		     <el-input class="input-width"  v-model="listQuery.name" ></el-input>
		    </el-form-item>
			<el-form-item label="上级分类:">
			  <el-select v-model="listQuery.parent_id" placeholder="请选择分类"  class="input-width" >
			       <el-option v-for="item in selectList"
				   :key = "item.id" :label="item.name" :value="item.id"
				   ></el-option>
			     </el-select>
			</el-form-item>
			<el-form-item label="数量单位:">
			 <el-input class="input-width"  v-model="listQuery.product_unit" ></el-input>
			</el-form-item>
			<el-form-item label="排序:">
			 <el-input class="input-width"  v-model="listQuery.sort" ></el-input>
			</el-form-item>
			 <el-form-item label="是否显示">
			    <el-radio-group v-model="listQuery.show_status">
			      <el-radio label="是"></el-radio>
			      <el-radio label="否"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			   <el-form-item label="是否显示在导航栏">
			      <el-radio-group v-model="listQuery.nav_status">
			        <el-radio label="是"></el-radio>
			        <el-radio label="否"></el-radio>
			      </el-radio-group>
			    </el-form-item>
				<el-form-item label="关键词:">
				 <el-input class="input-width"  v-model="listQuery.keywords" ></el-input>
				</el-form-item>
				<el-form-item label="分类描述">
				    <el-input type="textarea" v-model="listQuery.description"></el-input>
				  </el-form-item>
			    <el-form-item>
					<el-button type="primary" @click="creatACate">提交</el-button>
					<el-button>重置</el-button>
				</el-form-item>
		  </el-form>
		</el-card>
	</div>
</template>

<script>
	import {fetchList,fetchCateList,fetchBrandList,createCate} from "../../../api/product.js";
	export default{
		name:"creatCate",
		data:function(){
			return {
				listQuery:{
					description: '',//描述
					icon: '',//小图标
					keywords: '',//关键词
					name: '',//名称
					nav_status: 0,//是否显示在导航
					parent_id: 0,//上级节点id
					product_unit: '',//数量单位
					product_count: 0,//商品数量
					show_status: 0,//是否显示
					sort: 0,//排序
					level:1//0表示一级分类 1表示二级分类
				},
				rules:[],
				selectList:[]
			}
		},
		mounted:function(){
			this.getCateList();
		},
		methods:{
			getCateList:function(){
				fetchCateList().then((data)=>{
					console.log(data);
					this.selectList = data.data;
				})
			},
			creatACate:function(){
				createCate(this.listQuery).then(res=>{
							console.log(res);
							if(res.type ==='success'){//添加成功
								this.$message({
									message:'成功添加商品',
									duration:1000,
									type:'success'
								})
								//跳转到列表页
								this.$router.push('/pms/product');
							}
						});
			}
		}
	}
</script>

<style>
	.product-form{
		width:600px;margin:0 auto;
	}
</style>
