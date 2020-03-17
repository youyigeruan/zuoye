<template>
	<div>
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
			<span class="el-icon-tickets"></span>数据列表
			<el-button style="float: right; padding: 3px 0" type="text" class="button-right">添加</el-button>
		  </div>
		  <el-table
		      :data="tableData"		 
		      border
			  ref="multipleTable"
			  tooltip-effect="dark"
			  @selection-change="handleSelectionChange"
		      style="width: 100%">
			  <el-table-column
			        type="selection"
			        width="55">
			  </el-table-column>
		      <el-table-column
		        prop="id"
		        label="编号"
		        width="90">
		      </el-table-column>
			  <el-table-column
			    prop="name"
			    label="品牌名称">			   
			  </el-table-column>
			  <el-table-column
			    prop="first_letter"
			    label="品牌首字母"
			    width="120">
			  </el-table-column>
			  <el-table-column
			    prop="sort"
			    label="排序"
			    width="120">
			  </el-table-column>
			  <el-table-column			    
			    label="品牌制造商"
			    width="120">
				<template slot-scope="scope">
					<el-switch
					  v-model="!!scope.row.factory_status"
					  active-color="#13ce66"
					  inactive-color="#ff4949">
					</el-switch>
				</template>
			  </el-table-column>
			  <el-table-column			    
			    label="是否显示"
			    width="120">
				<template slot-scope="scope">
					<el-switch
					  v-model="!!scope.row.factory_status"
					  active-color="#13ce66"
					  inactive-color="#ff4949">
					</el-switch>
				</template>
			  </el-table-column>
			  <el-table-column			    
			    label="相关"
			    width="120">
				<template slot-scope="scope">
					<p>商品：{{scope.row.product_count}}</p>
					<p>评价：{{scope.row.product_comment_count}}</p>
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
	import {fetchList,fetchCateList,fetchBrandList,fetchAttrList} from "../../../api/product.js";
	// import {fetchList,fetchCateList,fetchBrandList} from '../../../api/product';
	export default{
		data:function(){
			return {
				tableData:[],
				baseData:[],
				total:0,
				pageSize:5,
				pageNum:1
			}
		},
		mounted:function(){
			this.getBrandList();
			setTimeout(()=>{
				this.handleSizeChange(this.pageSize);
			},400)
			
			
			// fetchBrandList().then((data)=>{
			// 	console.log(data);
			// 	this.tableData = data.data;
				// var arr = ["一级","二级","三级"];
				// for(var i=0;i<this.tableData.length;i++){
				// 	this.tableData[i].levelStr = arr[this.tableData[i].level];
				// 	this.tableData[i].show_status = !!this.tableData[i].show_status;
				// }
				// this.tableData.splice(1,0);
			// })		
		},
		// filters:{
		// 	changeNum:function(params){
		// 		var arr = ["一级","二级","三级"];
		// 		return arr[params]
		// 	}
		// }
		methods:{
			toggleSelection(rows) {
			        if (rows) {
			          rows.forEach(row => {
			            this.$refs.multipleTable.toggleRowSelection(row);
			          });
			        } else {
			          this.$refs.multipleTable.clearSelection();
			        }
			      },
			      handleSelectionChange(val) {
			        this.multipleSelection = val;
			},
			getBrandList:function(){
				fetchBrandList().then((data)=>{
					console.log(data);
					this.baseData = data.data;
					// var arr = ["一级","二级","三级"];
					// for(var i=0;i<this.tableData.length;i++){
					// 	this.tableData[i].levelStr = arr[this.tableData[i].level];
					// 	this.tableData[i].show_status = !!this.tableData[i].show_status;
					// }
					// this.tableData.splice(1,0);
				})
			},
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
			}
		}
			
	}
</script>

<style>
	.marginB{margin-bottom: 50px; text-align:right;}
</style>
