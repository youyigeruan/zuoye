<template>
	<div class="product-cate-con">
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
			<span class="el-icon-tickets"></span>数据列表
			<el-button style="float: right; padding: 3px 0" type="text" class="button-right" @click="toAddCate">添加</el-button>
			<el-button type="primary" class="product-btn margin-btn" v-if="parent_id" size="mini" @click="handleBack">返回上一级</el-button>
		  </div>
		 <!-- <div v-for="o in 4" :key="o" class="text item">
			{{'列表内容 ' + o }}
		  </div> -->
		  <el-table
		      :data="tableData"		 
		      border
		      style="width: 100%">
		      <el-table-column
		        prop="id"
		        label="编号"
		        width="120">
		      </el-table-column>
			  <el-table-column
			    prop="name"
			    label="分类名称"
			    width="120">
			  </el-table-column>
			  <el-table-column
			    prop="levelStr"
			    label="级别"
			    width="120">
			  </el-table-column>
			  <el-table-column
			    prop="product_count"
			    label="商品数量"
			    width="120">
			  </el-table-column>
			  <el-table-column
			    prop="product_unit"
			    label="数量单位"
			    width="180">
			  </el-table-column>
			  <el-table-column			    
			    label="是否显示"
			    width="90">
					<template slot-scope="scope">
						<el-switch
						  v-model="scope.show_status"
						  active-color="#13ce66"
						  inactive-color="#ff4949">
						</el-switch>
					</template>
			  </el-table-column>
			  <el-table-column
			    prop="sort"
			    label="排序"
			    width="120">
			  </el-table-column>
		      <el-table-column		       
		        label="设置"
		        width="90">
				<template slot-scope="scope">
				  <el-button @click="handleShowNextLevel(scope.row) " :disabled="scope.row.level | disableNextLevel">查看下级</el-button>
				</template>
		      </el-table-column>
		      <el-table-column		       
		        label="操作"
				width="180">
				<template slot-scope="scope">
				  <el-button >编辑</el-button>
				  <el-button type="danger">删除</el-button>
				</template>
		      </el-table-column>
		    </el-table>
		</el-card>
		<el-pagination class="marginB"
			 @size-change="handleSizeChange"
			 @current-change="handleCurrentChange"
			 :current-page="pageNum"
			 :page-sizes="[5,10,15]"
			 :page-size="pageSize"
			 layout="total, sizes, prev, pager, next, jumper"
			 :total="total">
		   </el-pagination>
	</div>
</template>

<script>
	import {fetchList,fetchCateList,fetchBrandList,fetchProductCate1or2} from "../../../api/product.js";
	// import {fetchList,fetchCateList,fetchBrandList} from '../../../api/product';
	export default{
		data:function(){
			return {
				tableData:[],
				baseData:[],
				total:0,
				pageSize:5,
				pageNum:0,
				list:[],
				parent_id:0,
			}
		},
		mounted:function(){
			// fetchCateList().then((data)=>{
			// 	console.log(data);
			// 	this.tableData = data.data;
			// 	var arr = ["一级","二级","三级"];
			// 	for(var i=0;i<this.tableData.length;i++){
			// 		this.tableData[i].levelStr = arr[this.tableData[i].level];
			// 		this.tableData[i].show_status = !!this.tableData[i].show_status;
			// 	}
			// 	this.tableData.splice(1,0);
			// })
			this.resetParentId();
			this.getList();
			setTimeout(()=>{
				this.handleSizeChange(this.pageSize);
			},400)
		},
		watch:{
			$route(route){
				//重新获取一下parent_id
				this.resetParentId();
				//获取数据
				this.getList();
				setTimeout(()=>{
					this.handleSizeChange(this.pageSize);
				},400)
			}
		},
		methods:{
			resetParentId:function(){
				if(this.$route.query.parentId != null){
					this.parent_id = this.$route.query.parentId;
				}else{
					this.parent_id = 0;
				}
			},
			getList:function(){
				fetchProductCate1or2(this.parent_id).then(res=>{
					console.log(res);
					// this.list = res.data;
					// this.total = res.total;
					this.baseData = res.data;
					var arr = ["一级","二级","三级"];
					for(var i=0;i<this.baseData.length;i++){
						this.baseData[i].levelStr = arr[this.baseData[i].level];
						this.baseData[i].show_status = !!this.baseData[i].show_status;
					}
				})
			},
			// getCateList:function(){
			// 	fetchCateList().then((data)=>{
			// 		console.log(data);
			// 		this.baseData = data.data;
			// 		var arr = ["一级","二级","三级"];
			// 		for(var i=0;i<this.baseData.length;i++){
			// 			this.baseData[i].levelStr = arr[this.baseData[i].level];
			// 			this.baseData[i].show_status = !!this.baseData[i].show_status;
			// 		}
			// 		this.baseData.splice(1,0);
			// 	})
			// },
			handleSizeChange:function(val){
				this.tableData = this.baseData;
				this.pageSize = val;
				this.total = this.tableData.length;
				this.pageNum = 1;
				this.tableData = this.tableData.slice(0,val)
			},
			handleCurrentChange:function(val){
				this.tableData = this.baseData;
				// this.pageSize = val;
				
				this.pageNum = val;
				this.tableData = this.tableData.slice((val-1)*this.pageSize,val*this.pageSize)
			},
			toAddCate:function(params){
				this.$router.push("/pms/addCate")
			},
			handleShowNextLevel:function(row){
				//路由跳转
				this.$router.push({path:'/pms/productCate',query:{parentId:row.id}});
				
			},
			//返回上一级
			handleBack:function(){
				this.$router.push({path:'/pms/productCate'});
			}
		},
		filters:{
			disableNextLevel:function(value){
				if(value == 0){//一级
					return false;
				}else{
					return true;
				}
			}
		}
			
		// filters:{
		// 	changeNum:function(params){
		// 		var arr = ["一级","二级","三级"];
		// 		return arr[params]
		// 	}
		// }
	}
</script>

<style lang="scss" scoped="scoped">
	.product-cate-con{
		margin:10px;
		.product-btn{float:right;}
		}
	.margin-btn{margin-right:10px;}	
	.marginB{margin-bottom: 50px; text-align:right;}
</style>
