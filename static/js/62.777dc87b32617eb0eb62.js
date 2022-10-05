webpackJsonp([62],{e0qR:function(e,t){},wNnO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mvHQ"),o=a.n(l),r={name:"QueryValveCurrentDataForSa",data:function(){var e=this,t=function(t,a,l){0!==a.trim().length&&0==e.customGlobal.isnumberandfloat(a)?l(new Error("回水温度区间必须是数字或浮点数")):l()},a=function(t,a,l){0!==a.trim().length&&0==e.customGlobal.isnumberandfloat(a)?l(new Error("阀门开度区间必须是数字或浮点数")):l()};return{drawerVisible1:!1,cardBodyHeight:!0,cardBodyStyle:"padding-top:10px;padding-bottom:10px;",icon1:"el-icon-caret-top",tableData:[],multipleSelection:[],sortOrderCol:"",colsChecked:["vi_setup_position","vi_describe","vci_back_water_value","vci_entry_water_value","vci_open_value","vci_setting_open_value","vci_g_address","vci_c_address","vci_v_address","vci_sendcmd_writetime","vci_writetime"],colsMap:[{caption:"安装地址",value:"vi_setup_position",isShow:!0},{caption:"阀门描述",value:"vi_describe",isShow:!0},{caption:"回水温度",value:"vci_back_water_value",isShow:!0},{caption:"进水温度",value:"vci_entry_water_value",isShow:!0},{caption:"实际开度",value:"vci_open_value",isShow:!0},{caption:"设定开度",value:"vci_setting_open_value",isShow:!0},{caption:"网关地址",value:"vci_g_address",isShow:!0},{caption:"集中器地址",value:"vci_c_address",isShow:!0},{caption:"阀门地址",value:"vci_v_address",isShow:!0},{caption:"下达采集回水温度指令时间",value:"vci_sendcmd_writetime",isShow:!0},{caption:"回水温度入库时间",value:"vci_writetime",isShow:!0}],queryParam:{totalRow:0,currentPage:1,pageSize:this.customGlobal.pageSize},ruleForm:{vi_setup_position:"",valve_currentdata_backwater_1:"",valve_currentdata_backwater_2:"",valve_openvalue_1:"",valve_openvalue_2:""},rules:{vi_setup_position:[],valve_currentdata_backwater_1:[{validator:t,trigger:"change"}],valve_currentdata_backwater_2:[{validator:t,trigger:"change"}],valve_openvalue_1:[{validator:a,trigger:"change"}],valve_openvalue_2:[{validator:a,trigger:"change"}]}}},mounted:function(){},methods:{confCardBodyHeigth:function(){!1===this.cardBodyHeight?(this.cardBodyHeight=!0,this.cardBodyStyle="padding-top:10px;padding-bottom:10px;",this.icon1="el-icon-caret-top"):(this.cardBodyHeight=!1,this.cardBodyStyle="padding-top:0px;padding-bottom:0px;",this.icon1="el-icon-caret-bottom"),console.info("confCardBodyHeigth:"+this.cardBodyHeight)},queryValveCurrentData:function(e){var t=this,a=this,l={perPageSize:this.queryParam.pageSize,currentPage:1===e?1:this.queryParam.currentPage,vi_setup_position:this.ruleForm.vi_setup_position,valve_currentdata_backwater_1:this.ruleForm.valve_currentdata_backwater_1,valve_currentdata_backwater_2:this.ruleForm.valve_currentdata_backwater_2,valve_openvalue_1:this.ruleForm.valve_openvalue_1,valve_openvalue_2:this.ruleForm.valve_openvalue_2},r=this.$loading({lock:!0,text:"查询中...",target:".main",spinner:"el-icon-loading",background:"rgba(0, 0, 0, .7)"});this.customGlobal.postHttpClient(this.customGlobal.serverUrl.postQueryValveCurrentDataList,this.customGlobal.serverUrl.baseURI,{"Content-Type":"application/x-www-form-urlencoded"},this.qs.stringify({jsondata:o()(l)})).then(function(e){console.log("异步调用成功返回:"+o()(e)),"success"==e.data.status?(r.close(),a.tableData=e.data.rows,a.queryParam.totalRow=e.data.total):(console.info("查询失败"),r.close(),a.tableData=[],t.$alert(e.data.msg,"查询失败",{confirmButtonText:"确定",callback:function(a){console.info("data:"+o()(e.data)),"请登录认证"===e.data.msg&&"failed"===e.data.status&&t.$router.replace({path:"/login"})}})),t.drawerVisible1=!1},function(e){console.log("异步调用出错:"+o()(e)),r.close(),t.drawerVisible1=!1,a.tableData=[],t.$alert(o()(e.message),"查询出错!",{confirmButtonText:"确定",callback:function(e){}})}).catch(function(e){console.log("异步调用失败返回:"+o()(e)),r.close(),t.drawerVisible1=!1,a.tableData=[],t.$alert(o()(e.message),"查询出错",{confirmButtonText:"确定",callback:function(e){}})})},colCheckCommand:function(){var e=this;console.info("colsChecked："+this.colsChecked),this.colsMap.filter(function(t){console.info("遍历"+t.value),-1!==e.colsChecked.indexOf(t.value)?(console.info("选中集合中存在"+t.value),t.isShow=!0):t.isShow=!1}),console.info("colsList:"+o()(this.colsMap))},sortColumn:function(e){console.log("已经排序项："+o()(e));var t="";null!=e.order&&("descending"===e.order?t="desc":"ascending"===e.order&&(t="asc"),console.info("属性名称："+e.prop+",排序方式："+e.order),this.sortOrderCol=e.prop+" "+t,console.info("用户选择排序列："+this.sortOrderCol))},handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.queryParam.pageSize=e,this.queryValveCurrentData(1)},handleCurrentChange:function(e){console.log("当前页: "+e),this.queryParam.currentPage=e,this.queryValveCurrentData(e)},handleSelectionChange:function(e){this.multipleSelection=e,console.info("选择的行："+o()(this.multipleSelection))}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{md:24}},[a("div",{staticStyle:{float:"right","margin-right":"20px"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(t){e.drawerVisible1=!0}}},[e._v("查询数据")]),e._v(" "),a("el-dropdown",{attrs:{"hide-on-click":!1,_style:"float:right;margin-right: 20px;"}},[a("el-button",{attrs:{type:"primary",size:"small",title:"显示隐藏列"}},[a("i",{staticClass:"el-icon-s-grid "},[e._v("动态列")])]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-scrollbar",{staticStyle:{height:"40vh",width:"150px"}},[a("el-checkbox-group",{model:{value:e.colsChecked,callback:function(t){e.colsChecked=t},expression:"colsChecked"}},e._l(e.colsMap,function(t){return a("el-dropdown-item",{key:t.value},[a("el-checkbox",{key:t.value,attrs:{label:t.value},on:{change:e.colCheckCommand}},[e._v(e._s(t.caption))])],1)}),1)],1)],1)],1)],1)])],1),e._v(" "),a("el-card",{staticStyle:{display:"flex","justify-content":"center"}},[a("el-table",{ref:"multipleTable",attrs:{border:"",data:e.tableData,"tooltip-effect":"dark","row-style":{height:"10px"},"cell-style":{padding:"5px 0px"},"header-cell-style":{background:"#4B86BC",color:"#ffffff",borderRight:"1px solid #E3E5EB"}},on:{"sort-change":e.sortColumn,"selection-change":e.handleSelectionChange}},[e.colsMap[0].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vi_setup_position",label:"安装地址",align:"center","show-overflow-tooltip":"",width:"120"}}):e._e(),e._v(" "),e.colsMap[1].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vi_describe",label:"阀门描述",align:"center","show-overflow-tooltip":"",width:"120"}}):e._e(),e._v(" "),e.colsMap[2].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vci_back_water_value",label:"回水温度",align:"center","show-overflow-tooltip":"",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[void 0===t.row.vci_back_water_value?a("el-tag",{attrs:{type:"success",effect:"dark",size:"mini"}},[e._v("未知")]):a("el-tag",{attrs:{type:"success",effect:"dark",size:"mini"}},[e._v(e._s(t.row.vci_back_water_value))])]}}],null,!1,2921212697)}):e._e(),e._v(" "),e.colsMap[3].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vci_entry_water_value",label:"进水温度",align:"center","show-overflow-tooltip":"",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[void 0===t.row.vci_entry_water_value?a("el-tag",{attrs:{type:"warning",effect:"dark",size:"mini"}},[e._v("未知")]):a("el-tag",{attrs:{type:"warning",effect:"dark",size:"mini"}},[e._v(e._s(t.row.vci_entry_water_value))])]}}],null,!1,1325621529)}):e._e(),e._v(" "),e.colsMap[4].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vci_open_value",label:"实际开度",align:"center","show-overflow-tooltip":"",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[void 0===t.row.vci_open_value?a("el-tag",{attrs:{type:"primary",effect:"dark",size:"mini"}},[e._v("未知")]):a("el-tag",{attrs:{type:"primary",effect:"dark",size:"mini"}},[e._v(e._s(t.row.vci_open_value))])]}}],null,!1,1091331737)}):e._e(),e._v(" "),e.colsMap[5].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vci_setting_open_value",label:"设定开度",align:"center","show-overflow-tooltip":"",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[void 0===t.row.vci_setting_open_value?a("el-tag",{attrs:{type:"default",effect:"dark",size:"mini"}},[e._v("未知")]):a("el-tag",{attrs:{type:"default",effect:"dark",size:"mini"}},[e._v(e._s(t.row.vci_setting_open_value))])]}}],null,!1,4035609305)}):e._e(),e._v(" "),e.colsMap[6].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vci_g_address",label:"网关地址",align:"center","show-overflow-tooltip":"",width:"100"}}):e._e(),e._v(" "),e.colsMap[7].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vci_c_address",label:"集中器地址",align:"center","show-overflow-tooltip":"",width:"100"}}):e._e(),e._v(" "),e.colsMap[8].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vci_v_address",label:"阀门地址",align:"center","show-overflow-tooltip":"",width:"100"}}):e._e(),e._v(" "),e.colsMap[9].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vci_sendcmd_writetime",_label:"下达指令时间",align:"center","show-overflow-tooltip":"",width:"100"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下达采集回水温度指令时间",placement:"top"}},[a("span",{staticStyle:{display:"block",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","word-break":"keep-all"}},[e._v("下达采集回水温度指令时间")])])]}},{key:"default",fn:function(t){return[t.row.vci_sendcmd_writetime>t.row.vci_writetime?a("el-tag",{staticStyle:{display:"inline-block","word-wrap":"break-word","white-space":"normal"},attrs:{type:"danger",effect:"dark",size:"mini"}},[e._v(e._s(t.row.vci_sendcmd_writetime))]):a("span",{staticStyle:{display:"inline-block","word-wrap":"break-word","white-space":"normal"},attrs:{size:"mini"}},[e._v(e._s(t.row.vci_sendcmd_writetime))])]}}],null,!1,1358614303)}):e._e(),e._v(" "),e.colsMap[10].isShow?a("el-table-column",{attrs:{fixed:"",prop:"vci_writetime",label:"回水温度入库时间",align:"center","show-overflow-tooltip":"",width:"100"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"回水温度入库时间",placement:"top"}},[a("span",{staticStyle:{display:"block",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","word-break":"keep-all"}},[e._v("回水温度入库时间")])])]}}],null,!1,2572829935)}):e._e()],1)],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.queryParam.currentPage,"page-sizes":[10,20,50,100,200],"page-size":e.queryParam.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.queryParam.totalRow},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-drawer",{ref:"drawer",staticStyle:{"margin-left":"20%",width:"60%","margin-right":"20%"},attrs:{visible:e.drawerVisible1,direction:"ttb",wrapperClosable:!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.drawerVisible1=t}}},[a("span",{staticStyle:{"text-align":"left"},attrs:{slot:"title"},slot:"title"},[e._v("查询条件")]),e._v(" "),a("el-form",{ref:"ruleForm2",staticStyle:{"text-align":"left","font-size":"20px","font-weight":"bold"},attrs:{"label-position":"left",model:e.ruleForm,rules:e.rules,"label-width":"130px"}},[a("el-card",{attrs:{shadow:"always","body-style":e.cardBodyStyle}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.cardBodyHeight,expression:"cardBodyHeight"}]},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{md:12}},[a("el-form-item",{attrs:{label:"阀门安装地址",prop:"vi_setup_position"}},[a("el-input",{model:{value:e.ruleForm.vi_setup_position,callback:function(t){e.$set(e.ruleForm,"vi_setup_position",t)},expression:"ruleForm.vi_setup_position"}})],1)],1),e._v(" "),a("el-col",{attrs:{md:12}},[a("el-form-item",{attrs:{label:"回水温度区间"}},[a("el-col",{staticStyle:{width:"45%",padding:"0px"},attrs:{span:5}},[a("el-form-item",{attrs:{prop:"valve_currentdata_backwater_1",rules:this.rules.valve_currentdata_backwater_1}},[a("el-input",{attrs:{placeholder:"数字或浮点数"},model:{value:e.ruleForm.valve_currentdata_backwater_1,callback:function(t){e.$set(e.ruleForm,"valve_currentdata_backwater_1",t)},expression:"ruleForm.valve_currentdata_backwater_1"}})],1)],1),e._v(" "),a("el-col",{staticStyle:{width:"10%",padding:"0px"},attrs:{span:2}},[a("i",{staticClass:"el-icon-minus",staticStyle:{"text-align":"center",width:"100%",padding:"0px"}})]),e._v(" "),a("el-col",{staticStyle:{width:"45%",padding:"0px"},attrs:{md:5}},[a("el-form-item",{attrs:{prop:"valve_currentdata_backwater_2",rules:this.rules.valve_currentdata_backwater_2}},[a("el-input",{attrs:{placeholder:"数字或浮点数"},model:{value:e.ruleForm.valve_currentdata_backwater_2,callback:function(t){e.$set(e.ruleForm,"valve_currentdata_backwater_2",t)},expression:"ruleForm.valve_currentdata_backwater_2"}})],1)],1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{md:12}},[a("el-form-item",{attrs:{label:"阀门开度区间"}},[a("el-col",{staticStyle:{width:"45%",padding:"0px"},attrs:{span:5}},[a("el-form-item",{attrs:{prop:"valve_openvalue_1",rules:this.rules.valve_openvalue_1}},[a("el-input",{attrs:{placeholder:"数字或浮点数"},model:{value:e.ruleForm.valve_openvalue_1,callback:function(t){e.$set(e.ruleForm,"valve_openvalue_1",t)},expression:"ruleForm.valve_openvalue_1"}})],1)],1),e._v(" "),a("el-col",{staticStyle:{width:"10%",padding:"0px"},attrs:{span:2}},[a("i",{staticClass:"el-icon-minus",staticStyle:{"text-align":"center",width:"100%",padding:"0px"}})]),e._v(" "),a("el-col",{staticStyle:{width:"45%",padding:"0px"},attrs:{md:5}},[a("el-form-item",{attrs:{prop:"valve_openvalue_2",rules:this.rules.valve_openvalue_2}},[a("el-input",{attrs:{placeholder:"数字或浮点数"},model:{value:e.ruleForm.valve_openvalue_2,callback:function(t){e.$set(e.ruleForm,"valve_openvalue_2",t)},expression:"ruleForm.valve_openvalue_2"}})],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{md:12}},[a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(t){return e.queryValveCurrentData(1)}}},[e._v("查询")])],1)],1),e._v(" "),a("el-row",{attrs:{gutter:24,_type:"flex",_justify:"space-around"}})],1)])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(r,i,!1,function(e){a("e0qR")},null,null);t.default=n.exports}});
//# sourceMappingURL=62.777dc87b32617eb0eb62.js.map