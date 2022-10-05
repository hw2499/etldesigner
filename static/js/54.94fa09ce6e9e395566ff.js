webpackJsonp([54],{c1MH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),o=a.n(i),s={name:"TransactionRecord",data:function(){return{dialogVisible:!1,dialogVisibleMsg:{},rules:[{required:!0,message:"核销码不能为空"},{type:"number",message:"请输入7位纯数字核销码。"}],queryMsg:{code:""},formData:{tableData:[{key:"订单号",value:"mbs_out_trade_no"},{key:"核销码",value:"code"},{key:"商品名称",value:"mbgi_goods_name"},{key:"规格",value:"mbgi_goods_describer"},{key:"商户名称",value:"mbmi_mer_name"},{key:"支付金额（元）",value:"mbs_money_1",show:!0},{key:"核销人",value:"cui_realname"},{key:"核销时间",value:"mbs_check_writetime"}]},tableData:[],queryParam:{totalRow:0,currentPage:1,pageSize:this.customGlobal.pageSize}}},created:function(){this.queryParam.currentPage=1,this.query_name()},methods:{handleSizeChange:function(t){this.queryParam.pageSize=t,this.query_name()},handleCurrentChange:function(t){this.queryParam.currentPage=t,this.query_name()},query_name:function(){var t=this,e=this;e.tableData=[];var a={perPageSize:e.queryParam.pageSize,currentPage:e.queryParam.currentPage,obj_bank_center_id:e.customGlobal.userInfoExt.cui_bank_center_id,obj_province_id:e.customGlobal.userInfoExt.cui_province_id,obj_city_id:e.customGlobal.userInfoExt.cui_city_id,obj_county_id:e.customGlobal.userInfoExt.cui_county_id,obj_station_id:e.customGlobal.userInfoExt.cui_station_id},i=this.$loading({lock:!0,text:"提交中...",target:".main",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0)"});this.customGlobal.postHttpClient(this.customGlobal.serverUrl.Write_off_delivery_flow_select,this.customGlobal.serverUrl.orgBaseURI,{"Content-Type":"application/x-www-form-urlencoded"},this.qs.stringify({jsondata:o()(a)})).then(function(a){"success"===a.data.status?(i.close(),e.tableData=a.data.rows,e.tableData.forEach(function(e){var a="2"+e.mbs_out_trade_no.substring(e.mbs_out_trade_no.length-6);t.$set(e,"code",a)}),e.queryParam.totalRow=a.data.total):(console.info("查询失败"),i.close(),"请登录认证"===a.data.msg&&t.$router.push({path:"/login"}))},function(e){i.close(),t.$alert(o()(e.message),"查询失败!",{confirmButtonText:"确定",callback:function(t){}})}).catch(function(e){console.log("异步调用失败返回:"+o()(e)),i.close(),t.$alert(o()(e.message),"查询失败",{confirmButtonText:"确定",callback:function(t){}})})},query_name1:function(t){var e=this;this.$refs[t].validate(function(t){if(t){if(e.queryMsg.code.length<7)return void e.$alert("核销码错误，请输入正确核销码","提示信息",{confirmButtonText:"确定",callback:function(t){}});var a=e,i={perPageSize:"1",currentPage:"1",obj_bank_center_id:a.customGlobal.userInfoExt.cui_bank_center_id,obj_province_id:a.customGlobal.userInfoExt.cui_province_id,obj_city_id:a.customGlobal.userInfoExt.cui_city_id,obj_county_id:a.customGlobal.userInfoExt.cui_county_id,obj_station_id:a.customGlobal.userInfoExt.cui_station_id,write_off_code:e.queryMsg.code},s=e.$loading({lock:!0,text:"提交中...",target:".main",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0)"});e.customGlobal.postHttpClient(e.customGlobal.serverUrl.Verification_write_off_code,e.customGlobal.serverUrl.orgBaseURI,{"Content-Type":"application/x-www-form-urlencoded"},e.qs.stringify({jsondata:o()(i)})).then(function(t){if(s.close(),console.log("res.status==",t.data.status),"success"==t.data.status)if(t.data.rows.length>0){var a=t.data.rows[0].mbs_sale_status;t.data.rows[0].mbs_sale_mode;if("3"==t.data.rows[0].mbs_sale_mode)return void e.$alert("请到"+t.data.rows[0].mbmi_mer_name+"处核销","提示信息",{confirmButtonText:"确定",callback:function(t){}});if("2"==a||"6"==a||"12"==a){if(e.dialogVisible=!0,e.dialogVisibleMsg=t.data.rows[0]?t.data.rows[0]:{},e.dialogVisibleMsg.mbs_out_trade_no){var i="2"+e.dialogVisibleMsg.mbs_out_trade_no.substring(e.dialogVisibleMsg.mbs_out_trade_no.length-6);e.$set(e.dialogVisibleMsg,"code",i)}}else"3"!=a&&"7"!=a||e.$alert("该核销码已使用过","提示信息",{confirmButtonText:"确定",callback:function(t){}})}else e.$alert("当前核销码不存在请重新输入","提示信息",{confirmButtonText:"确定",callback:function(t){}});console.log(t,"-==-="),s.close(),"请登录认证"===t.data.msg&&e.$router.push({path:"/login"})}).catch(function(t){s.close(),e.$alert("核销错误，请稍后再试","提示信息",{confirmButtonText:"确定",callback:function(t){}})})}})},query_name11:function(){var t=this;if(this.queryMsg.code.length<7)this.$alert("核销码错误，请输入正确核销码","提示信息",{confirmButtonText:"确定",callback:function(t){}});else{this.dialogVisible=!1;var e={obj_bank_center_id:this.customGlobal.userInfoExt.cui_bank_center_id,obj_province_id:this.customGlobal.userInfoExt.cui_province_id,obj_city_id:this.customGlobal.userInfoExt.cui_city_id,obj_county_id:this.customGlobal.userInfoExt.cui_county_id,obj_station_id:this.customGlobal.userInfoExt.cui_station_id,write_off_code:this.queryMsg.code,mbs_check_cui_id:this.customGlobal.userInfoExt.cui_uuid},a=this.$loading({lock:!0,text:"提交中...",target:".main",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0)"});this.customGlobal.postHttpClient(this.customGlobal.serverUrl.Commodity_code_input_write_off,this.customGlobal.serverUrl.orgBaseURI,{"Content-Type":"application/x-www-form-urlencoded"},this.qs.stringify({jsondata:o()(e)})).then(function(e){t.$alert(e.data.msg||"核销成功","提示信息",{confirmButtonText:"确定",callback:function(t){}}),t.query_name(),a.close(),"请登录认证"===e.data.msg&&t.$router.push({path:"/login"})})}},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},sortColumn:function(t){var e="";null!=t.order?("descending"===t.order?e="desc":"ascending"===t.order&&(e="asc"),this.sortOrderCol=t.prop+" "+e):this.sortOrderCol=""}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"TransactionRecord"},[a("el-card",[a("div",{staticStyle:{display:"flex",width:"100%",height:"50px","padding-left":"5px",margin:"10px 0 20px"}},[a("div",{staticStyle:{display:"flex",width:"400px",position:"relative"}},[a("el-form",{ref:"queryMsg",staticClass:"demo-ruleForm",attrs:{model:t.queryMsg,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"核销码：",prop:"code",rules:t.rules}},[a("el-input",{staticStyle:{width:"275px"},attrs:{maxlength:7},model:{value:t.queryMsg.code,callback:function(e){t.$set(t.queryMsg,"code",t._n(e))},expression:"queryMsg.code"}})],1)],1)],1),t._v(" "),a("div",{staticStyle:{height:"40px","margin-left":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.query_name1("queryMsg")}}},[t._v("核销")])],1)]),t._v(" "),a("el-table",{ref:"tableData",staticClass:"account-plat-fixed-right account-plat-fixed",attrs:{border:"",data:t.tableData,"tooltip-effect":"dark","row-style":{height:"10px"},"cell-style":{padding:"5px 0px"},"header-cell-style":{background:"#4B86BC",color:"#ffffff",borderRight:"1px solid #E3E5EB",padding:"0px",height:"45px","line-height":"45px"}},on:{"sort-change":t.sortColumn}},[a("el-table-column",{attrs:{fixed:"",align:"center",type:"index",label:"序号",width:"50"}}),t._v(" "),t._l(t.formData.tableData,function(e,i){return a("el-table-column",{key:i,attrs:{prop:e.value,label:e.key,align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(i){return[e.identification?a("div",["1"===i.row[e.value]?a("el-tag",{attrs:{size:"small",effect:"dark",type:""}},[t._v(t._s(e.list[0]))]):t._e(),t._v(" "),"2"===i.row[e.value]?a("el-tag",{attrs:{size:"small",effect:"dark",type:"warning"}},[t._v(t._s(e.list[1])+"\n            ")]):t._e(),t._v(" "),"3"===i.row[e.value]?a("el-tag",{attrs:{size:"small",effect:"dark",type:"success"}},[t._v(t._s(e.list[2])+"\n            ")]):t._e()],1):e.show?a("div",[t._v("\n            "+t._s((1*i.row[e.value]).toFixed(2))+"\n          ")]):a("div",[t._v("\n            "+t._s(i.row[e.value])+"\n          ")])]}}],null,!0)})})],2),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{background:"","current-page":t.queryParam.currentPage,"page-sizes":[10,20,50,100,200],"page-size":t.queryParam.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.queryParam.totalRow},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"详情",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",[a("el-image",{staticStyle:{width:"150px",height:"150px"},attrs:{src:t.dialogVisibleMsg.mbgi_goods_img_path,fit:"fill"}}),t._v(" "),a("div",{staticClass:"detailsCss"},[t._v("商品名称："+t._s(t.dialogVisibleMsg.mbgi_goods_name||""))]),t._v(" "),a("div",{staticClass:"detailsCss"},[t._v("规格："+t._s(t.dialogVisibleMsg.mbgi_goods_describer))]),t._v(" "),a("div",{staticClass:"detailsCss"},[t._v("实付："+t._s(t.dialogVisibleMsg.mbs_money_1))]),t._v(" "),a("div",{staticClass:"detailsCss"},[t._v("核销码："+t._s(t.dialogVisibleMsg.code))]),t._v(" "),a("div",{staticStyle:{width:"300px",display:"flex","justify-content":"space-between",margin:"20px auto 0"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{width:"100px"},attrs:{size:"small",type:"primary"},on:{click:t.query_name11}},[t._v("核销")]),t._v(" "),a("el-button",{staticStyle:{width:"100px"},attrs:{size:"small",type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")])],1)],1)])],1)},staticRenderFns:[]};var n=a("VU/8")(s,l,!1,function(t){a("hR8d")},"data-v-4c6cb05b",null);e.default=n.exports},hR8d:function(t,e){}});
//# sourceMappingURL=54.94fa09ce6e9e395566ff.js.map