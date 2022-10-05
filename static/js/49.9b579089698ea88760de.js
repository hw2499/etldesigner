webpackJsonp([49],{C4t8:function(t,i){},kkUU:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("fZjL"),n=e.n(o),a=e("BO1k"),s=e.n(a),c=e("mvHQ"),r=e.n(c),l=e("Wxq9"),m=(e("Vhou"),{name:"OrgInfoCommunity",components:{},data:function(){return{companyIds:[],childCompanyIds:[],instituteIds:[],stationIds:[],community:{},dataQuery:{},treeDataStatus:{},treeData:[],treeDataOptions:[],showTree:!0,tmpCaption:[],options:l.regionData,selectedOptions:[],buildTypeoptions:[{value:"1",label:"居住建筑"},{value:"2",label:"公共建筑"},{value:"3",label:"混合建筑"}],ballShow:!1,menuLeft:"-180",menuLeft2:"80",menuWidth:"80px",floatDivWidth:70,floatRightValue:"50px",floatTopValue:"55px",ballIcon:"el-icon-more",tableDialgTitle:"",communityDialogFormVisible:!1,communityForm:{ci_uuid:"",ci_company_id:"",ci_company_name:"",ci_child_community_id:"",ci_child_community_name:"",ci_institute_id:"",ci_institute_name:"",ci_station_id:"",ci_station_name:"",ci_community_name:"",ci_address:"",ci_province:"",ci_city:"",ci_country:"",ci_longitude:"",ci_latitude:"",ci_build_area:"",ci_build_type:"",ci_memo:"",ci_writetime:"",flag:""},treeNodeInfo:{treeNodeOrgId:"",treeNodeCaptions:""},cardBodyHeight:!0,cardBodyStyle:"padding-top:10px;padding-bottom:10px;",icon1:"el-icon-caret-top",tableData:[],multipleSelection:[],sortOrderCol:"",colsChecked:["ci_community_name","tbi_count","tpui_count","ci_build_area","ci_build_type","ci_province","ci_city","ci_country","ci_address","ci_longitude","ci_latitude","ci_memo"],colsMap:[{caption:"小区名称",value:"ci_community_name",isShow:!0},{caption:"楼栋数量",value:"tbi_count",isShow:!0},{caption:"用户数量",value:"tpui_count",isShow:!0},{caption:"建筑面积",value:"ci_build_area",isShow:!0},{caption:"建筑类型",value:"ci_build_type",isShow:!0},{caption:"所属省份",value:"ci_province",isShow:!0},{caption:"所属城市",value:"ci_city",isShow:!0},{caption:"所属区县",value:"ci_country",isShow:!0},{caption:"小区位置",value:"ci_address",isShow:!0},{caption:"经度",value:"ci_longitude",isShow:!0},{caption:"纬度",value:"ci_latitude",isShow:!0},{caption:"备注",value:"ci_memo",isShow:!0}],queryParam:{totalRow:0,currentPage:1,pageSize:this.customGlobal.pageSize},ruleForm:{ci_community_name:"",ci_province:""},communityFormRules:{selectedOptions:[{validator:function(t,i,e){0===i.trim().length?e(new Error("所属区域不可为空")):e()},trigger:"blur"}],ci_community_name:[{validator:function(t,i,e){0===i.trim().length?e(new Error("小区名称不可为空")):e()},trigger:"blur"}]},rules:{}}},mounted:function(){console.info("Mounted_OrgInfoCompany:"+this.pri_detail.treeNodeOrgId),this.getQueryDetail()},created:function(){this.initOrgTemplateInfo(),this.assembleCompanyArray()},props:{pri_detail:{type:Object,default:function(){return{treeNodeCaptions:[],treeNodeIds:[],treeNodeOrgId:"",treeNodeType:[],currentTreeNode:{}}}}},watch:{pri_detail:function(t,i){console.info("watch_OrgInfoCompany点击树节点查询【热力公司】新值:"+t.treeNodeOrgId+",旧值："+i.treeNodeOrgId),t.treeNodeOrgId!==i.treeNodeOrgId||t.cbInfo!==i.cbInfo&&(this.dataQuery=this.pri_detail.cbInfo),this.cbList(),this.reQueryValveCurrentData()}},directives:{trigger:{inserted:function(t,i){console.log("inserted:"+t.id),"ballBtn"===t.id&&t.click()}},drag:function(t){var i=t,e="";document.onselectstart=function(){return!1},i.onmousedown=function(t){var o=t.clientX-i.offsetLeft,n=t.clientY-i.offsetTop;return document.getElementById("dragbtn").setAttribute("data-flag",!1),document.getElementById("dragbtn").setAttribute("show2",i.offsetLeft),e=(new Date).getTime(),document.onmousemove=function(t){var e=t.clientX-o,a=t.clientY-n;e<=0?e=0:e>=document.documentElement.clientWidth-i.clientWidth&&(e=document.documentElement.clientWidth-i.clientWidth),document.getElementById("dragbtn").setAttribute("show2",e.toString()),a<=0?a=0:a>=document.documentElement.clientHeight-i.clientHeight&&(a=document.documentElement.clientHeight-i.clientHeight),i.style.left=e+"px",i.style.top=a+"px"},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null,(new Date).getTime()-e<200&&document.getElementById("dragbtn").setAttribute("data-flag",!0)},!1}}},methods:{assembleCompanyArray:function(){var t=this.customGlobal.userOrgan,i=JSON.parse(r()(this.customGlobal.permissionKeyOrganKey.orgkey));if("0"!==this.customGlobal.userInfoExt.cui_type||"0"!==this.customGlobal.userInfoExt.cui_org_type){var e=!0,o=!1,a=void 0;try{for(var c,l=s()(n()(i));!(e=(c=l.next()).done);e=!0){var m=c.value;this.selectOrgIds(t,m)}}catch(t){o=!0,a=t}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}else this.selectAdminOrgIds(t)},selectOrgIds:function(t,i){for(var e=0;e<t.length;e++){if(t[e].id===i&&t[e].type>=this.customGlobal.userInfoExt.cui_type)switch(t[e].type){case 1:this.companyIds.push(t[e].id);break;case 2:this.childCompanyIds.push(t[e].id);break;case 3:this.instituteIds.push(t[e].id);break;case 4:this.stationIds.push(t[e].id)}t[e].detail&&this.selectOrgIds(t[e].detail,i)}},selectAdminOrgIds:function(t){for(var i=0;i<t.length;i++){switch(t[i].type){case 1:this.companyIds.push(t[i].id);break;case 2:this.childCompanyIds.push(t[i].id);break;case 3:this.instituteIds.push(t[i].id);break;case 4:this.stationIds.push(t[i].id)}t[i].detail&&this.selectAdminOrgIds(t[i].detail)}},cbList:function(){if(void 0!==this.pri_detail.treeNodeType){this.tmpCaption=[];for(var t=0;t<this.pri_detail.treeNodeType.length;t++)this.tmpCaption[t]=this.customGlobal.decrypt(this.pri_detail.treeNodeCaptions[t],this.customGlobal.cryptoKey)}console.info("面包屑"+this.tmpCaption)},getQueryDetail:function(){void 0!==this.pri_detail.treeNodeOrgId?(console.info("点击Tab标签页OrgInfoCompany查询【热力公司】,获取值:"+this.pri_detail.treeNodeOrgId),this.cbList()):console.info("当前没有选择任何组织机构ID，查询所有[热力公司]信息"),this.queryValveCurrentData()},handleChange:function(){for(var t="",i=0;i<this.selectedOptions.length;i++)l.CodeToText[this.selectedOptions[i]]+",",t+=this.selectedOptions[i]+",";var e=t.split(",");this.communityForm.ci_province=e[0],this.communityForm.ci_city=e[1],this.communityForm.ci_country=e[2]},handleChangeQy:function(t){if(this.treeDataOptions.length>1)for(var i=0;i<this.treeDataOptions.length;i++)this.treeDataOptions[i]+","},confCardBodyHeigth:function(){!1===this.cardBodyHeight?(this.cardBodyHeight=!0,this.cardBodyStyle="padding-top:10px;padding-bottom:10px;",this.icon1="el-icon-caret-top"):(this.cardBodyHeight=!1,this.cardBodyStyle="padding-top:0px;padding-bottom:0px;",this.icon1="el-icon-caret-bottom"),console.info("confCardBodyHeigth:"+this.cardBodyHeight)},colCheckCommand:function(){var t=this;console.info("colsChecked："+this.colsChecked),this.colsMap.filter(function(i){console.info("遍历"+i.value),-1!==t.colsChecked.indexOf(i.value)?(console.info("选中集合中存在"+i.value),i.isShow=!0):i.isShow=!1}),console.info("colsList:"+r()(this.colsMap))},reQueryValveCurrentData:function(){this.queryParam.currentPage=1,this.queryValveCurrentData()},queryValveCurrentData:function(){var t=this;console.info("组织机构ID："+this.treeNodeInfo.treeNodeOrgId);var i=this,e="",o="",n="",a="",s="";if(void 0!==this.pri_detail.treeNodeType){var c=this.pri_detail.treeNodeType.length,l=this.pri_detail.treeNodeType[c-1];"1"===l?e=this.pri_detail.treeNodeIds[c-1]:"2"===l?o=this.pri_detail.treeNodeIds[c-1]:"3"===l?n=this.pri_detail.treeNodeIds[c-1]:"4"===l&&(a=this.pri_detail.treeNodeIds[c-1])}void 0!==this.dataQuery.community&&(s=this.dataQuery.community.ci_uuid);var m={perPageSize:this.queryParam.pageSize,currentPage:this.queryParam.currentPage,ci_community_name:this.ruleForm.ci_community_name,ci_province:this.ruleForm.ci_province,ci_company_id:e,ci_child_company_id:o,ci_institute_id:n,ci_station_id:a,ci_community_uuid:s,stationIds:this.stationIds};""!==this.sortOrderCol&&(m.orderby=this.sortOrderCol),this.customGlobal.postHttpClient(this.customGlobal.serverUrl.residentialQuarters_query,this.customGlobal.serverUrl.orgBaseURI,{"Content-Type":"application/x-www-form-urlencoded"},this.qs.stringify({jsondata:r()(m)})).then(function(e){console.log("异步调用成功返回:"+r()(e)),"success"==e.data.status?(i.tableData=e.data.rows,i.queryParam.totalRow=e.data.total):(console.info("查询失败"),i.tableData=[],t.$alert(e.data.msg,"查询失败",{confirmButtonText:"确定",callback:function(i){console.info("data:"+r()(e.data)),"请登录认证"===e.data.msg&&"failed"===e.data.status&&t.$router.replace({path:"/login"})}}))},function(e){console.log("异步调用出错:"+r()(e)),i.tableData=[],t.$alert(r()(e.message),"查询出错!",{confirmButtonText:"确定",callback:function(t){}})}).catch(function(e){console.log("异步调用失败返回:"+r()(e)),i.tableData=[],t.$alert(r()(e.message),"查询出错",{confirmButtonText:"确定",callback:function(t){}})})},sortColumn:function(t){console.log("已经排序项："+r()(t));var i="";null!=t.order?("descending"===t.order?i="desc":"ascending"===t.order&&(i="asc"),console.info("属性名称："+t.prop+",排序方式："+t.order),this.sortOrderCol="vci."+t.prop+" "+i,console.info("用户选择排序列："+this.sortOrderCol),this.queryValveCurrentData()):this.sortOrderCol=""},provinceFormat:function(t,i){var e=l.CodeToText[t.ci_province];return""!=t.ci_province?e:"未知"},cityFormat:function(t,i){var e=l.CodeToText[t.ci_city];return""!=t.ci_city?e:"未知"},countryFormat:function(t,i){var e=l.CodeToText[t.ci_country];return""!=t.ci_country?e:"未知"},handleSizeChange:function(t){console.log("每页 "+t+" 条"),this.queryParam.pageSize=t,this.queryValveCurrentData()},handleCurrentChange:function(t){console.log("当前页: "+t),this.queryParam.currentPage=t,this.queryValveCurrentData()},handleSelectionChange:function(t){this.multipleSelection=t,console.info("选择的行："+r()(this.multipleSelection))},resetForm:function(t){this.$refs[t].resetFields(),this.selectedOptions=[]},cancelForm:function(t){this.$refs[t].resetFields(),this.$refs[t].clearValidate(),this.communityDialogFormVisible=!1},clearQuery:function(t){this.$refs[t].resetFields()},openBox:function(){if(1!=document.getElementById("dragbtn").getAttribute("data-flag")){"el-icon-more"===this.ballIcon?this.ballIcon="el-icon-right":this.ballIcon="el-icon-more";var t=this.$refs.ballBtn.$el.getBoundingClientRect().x,i=document.documentElement.clientWidth;this.ballShow=!this.ballShow,document.getElementById("buttonMenuCommunity").style.left=t>i/2?this.menuLeft+"px":Math.abs(this.menuLeft2)+"px"}},handleAddRow:function(){if(console.log("新增小区"),void 0!==this.pri_detail.treeNodeType){var t=this.pri_detail.treeNodeType.length;if("4"!==this.pri_detail.treeNodeType[t-1])return this.$alert("请选择换热站","新增提示!",{dangerouslyUseHTMLString:!0}),!1;var i="",e="",o="",n="";"0"!==this.customGlobal.userInfoExt.cui_type?2===t&&"4"===this.pri_detail.treeNodeType[1]?(i=this.pri_detail.treeNodeIds[0],n=this.pri_detail.treeNodeIds[1]):3===t&&"2"===this.pri_detail.treeNodeType[1]&&"4"===this.pri_detail.treeNodeType[2]?(i=this.pri_detail.treeNodeIds[0],e=this.pri_detail.treeNodeIds[1],n=this.pri_detail.treeNodeIds[2]):3===t&&"3"===this.pri_detail.treeNodeType[1]&&"4"===this.pri_detail.treeNodeType[2]?(i=this.pri_detail.treeNodeIds[0],o=this.pri_detail.treeNodeIds[1],n=this.pri_detail.treeNodeIds[2]):(i=this.pri_detail.treeNodeIds[0],e=this.pri_detail.treeNodeIds[1],o=this.pri_detail.treeNodeIds[2],n=this.pri_detail.treeNodeIds[3]):3===this.pri_detail.treeNodeType.length&&"4"===this.pri_detail.treeNodeType[2]?(i=this.pri_detail.treeNodeIds[1],n=this.pri_detail.treeNodeIds[2]):4===this.pri_detail.treeNodeType.length&&"2"===this.pri_detail.treeNodeType[2]&&"4"===this.pri_detail.treeNodeType[3]?(i=this.pri_detail.treeNodeIds[1],e=this.pri_detail.treeNodeIds[2],n=this.pri_detail.treeNodeIds[3]):4===this.pri_detail.treeNodeType.length&&"3"===this.pri_detail.treeNodeType[2]&&"4"===this.pri_detail.treeNodeType[3]?(i=this.pri_detail.treeNodeIds[1],o=this.pri_detail.treeNodeIds[2],n=this.pri_detail.treeNodeIds[3]):(i=this.pri_detail.treeNodeIds[1],e=this.pri_detail.treeNodeIds[2],o=this.pri_detail.treeNodeIds[3],n=this.pri_detail.treeNodeIds[4]),this.tableDialgTitle="新增小区",this.communityForm.ci_company_id=i,this.communityForm.ci_child_company_id=e,this.communityForm.ci_institute_id=o,this.communityForm.ci_station_id=n,this.treeDataOptions=[],"0"!==this.customGlobal.userInfoExt.cui_type?(this.treeDataOptions[0]=this.communityForm.ci_company_id,""!==this.communityForm.ci_child_company_id&&""!==this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[1]=this.communityForm.ci_child_company_id,this.treeDataOptions[2]=this.communityForm.ci_institute_id,this.treeDataOptions[3]=this.communityForm.ci_station_id):""===this.communityForm.ci_child_company_id&&""!==this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[1]=this.communityForm.ci_institute_id,this.treeDataOptions[2]=this.communityForm.ci_station_id):""!==this.communityForm.ci_child_company_id&&""===this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[1]=this.communityForm.ci_child_company_id,this.treeDataOptions[2]=this.communityForm.ci_station_id):this.treeDataOptions[1]=this.communityForm.ci_station_id):(this.treeDataOptions[0]="0",this.treeDataOptions[1]=this.communityForm.ci_company_id,""!==this.communityForm.ci_child_company_id&&""!==this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[2]=this.communityForm.ci_child_company_id,this.treeDataOptions[3]=this.communityForm.ci_institute_id,this.treeDataOptions[4]=this.communityForm.ci_station_id):""===this.communityForm.ci_child_company_id&&""!==this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[2]=this.communityForm.ci_institute_id,this.treeDataOptions[3]=this.communityForm.ci_station_id):""!==this.communityForm.ci_child_company_id&&""===this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[2]=this.communityForm.ci_child_company_id,this.treeDataOptions[3]=this.communityForm.ci_station_id):this.treeDataOptions[2]=this.communityForm.ci_station_id),this.communityForm.ci_community_name="",this.communityForm.ci_address="",this.communityForm.ci_province="",this.communityForm.ci_city="",this.communityForm.ci_country="",this.communityForm.ci_longitude="",this.communityForm.ci_latitude="",this.communityForm.ci_build_area="",this.communityForm.ci_build_type="",this.communityForm.ci_memo="",this.selectedOptions=[],this.communityForm.ci_uuid=this.customGlobal.genLogicNo("CI"),this.communityDialogFormVisible=!0,this.communityForm.flag="1"}else this.$alert("请选择换热站","新增提示",{dangerouslyUseHTMLString:!0})},handleEditRow:function(t,i){console.log("修改小区"+r()(i)),this.tableDialgTitle="修改小区 ["+i.ci_community_name+"]",this.communityForm.ci_community_name=i.ci_community_name,this.communityForm.ci_company_id=i.ci_company_id,this.communityForm.ci_child_company_id=i.ci_child_company_id,this.communityForm.ci_institute_id=i.ci_institute_id,this.communityForm.ci_station_id=i.ci_station_id,this.communityForm.ci_address=i.ci_address,this.communityForm.ci_build_type=i.ci_build_type,this.treeDataOptions=[],"0"!==this.customGlobal.userInfoExt.cui_type?(this.treeDataOptions[0]=this.communityForm.ci_company_id,""!==this.communityForm.ci_child_company_id&&""!==this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[1]=this.communityForm.ci_child_company_id,this.treeDataOptions[2]=this.communityForm.ci_institute_id,this.treeDataOptions[3]=this.communityForm.ci_station_id):""===this.communityForm.ci_child_company_id&&""!==this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[1]=this.communityForm.ci_institute_id,this.treeDataOptions[2]=this.communityForm.ci_station_id):""!==this.communityForm.ci_child_company_id&&""===this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[1]=this.communityForm.ci_child_company_id,this.treeDataOptions[2]=this.communityForm.ci_station_id):this.treeDataOptions[1]=this.communityForm.ci_station_id):(this.treeDataOptions[0]="0",this.treeDataOptions[1]=this.communityForm.ci_company_id,""!==this.communityForm.ci_child_company_id&&""!==this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[2]=this.communityForm.ci_child_company_id,this.treeDataOptions[3]=this.communityForm.ci_institute_id,this.treeDataOptions[4]=this.communityForm.ci_station_id):""===this.communityForm.ci_child_company_id&&""!==this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[2]=this.communityForm.ci_institute_id,this.treeDataOptions[3]=this.communityForm.ci_station_id):""!==this.communityForm.ci_child_company_id&&""===this.communityForm.ci_institute_id&&""!==this.communityForm.ci_station_id?(this.treeDataOptions[2]=this.communityForm.ci_child_company_id,this.treeDataOptions[3]=this.communityForm.ci_station_id):this.treeDataOptions[2]=this.communityForm.ci_station_id),this.communityForm.ci_province=i.ci_province,this.communityForm.ci_city=i.ci_city,this.communityForm.ci_country=i.ci_country,this.selectedOptions=[],this.selectedOptions[0]=this.communityForm.ci_province,this.selectedOptions[1]=this.communityForm.ci_city,this.selectedOptions[2]=this.communityForm.ci_country,this.communityForm.ci_longitude=i.ci_longitude,this.communityForm.ci_latitude=i.ci_latitude,this.communityForm.ci_build_area=i.ci_build_area,this.communityForm.ci_contact_name=i.ci_contact_name,this.communityForm.ci_contact_phone=i.ci_contact_phone,this.communityForm.ci_memo=i.ci_memo,this.communityForm.ci_uuid=i.ci_uuid,this.communityForm.flag="2",this.communityDialogFormVisible=!0},handleDeleteRow:function(t,i){var e=this;console.log("行号："+t+",行内容："+r()(i)),this.communityForm.tbi_count=i.tbi_count,0!==i.tbi_count||0!==i.tpui_count?this.$alert('当前要删除小区[<span style="color:red;font-size: 20px;">'+i.ci_community_name+"</span>]的楼栋或用户数量不为零，不可以删除","删除提示",{dangerouslyUseHTMLString:!0}):this.$confirm('请再次确认是否要删除[<span style="color:red;">'+i.ci_community_name+"</span>]该行记录?","删除提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,closeOnClickModal:!1,closeOnPressEscape:!1}).then(function(){var t={ci_uuid:i.ci_uuid};e.customGlobal.postHttpClient(e.customGlobal.serverUrl.residentialQuarters_delete,e.customGlobal.serverUrl.orgBaseURI,{"Content-Type":"application/x-www-form-urlencoded"},e.qs.stringify({jsondata:r()(t)})).then(function(t){console.log("异步调用成功返回:"+r()(t)),"success"==t.data.status?(e.$message({type:"success",showClose:!0,duration:3e3,dangerouslyUseHTMLString:!0,message:'<span style="color:black;">基础信息 ['+i.ci_community_name+"] 删除成功 </span>"}),e.reQueryValveCurrentData()):(console.info("删除失败"),e.$alert(t.data.msg,"删除失败",{confirmButtonText:"确定",callback:function(i){console.info("data:"+r()(t.data)),"请登录认证"===t.data.msg&&e.$router.push({path:"/login"})}}))},function(t){console.log("异步调用出错:"+r()(t)),e.$alert(r()(t.message),"删除出错!",{confirmButtonText:"确定",callback:function(t){}})}).catch(function(t){console.log("异步调用失败返回:"+r()(t)),e.$alert(r()(t.message),"删除出错",{confirmButtonText:"确定",callback:function(t){}})})}).catch(function(t){console.log("取消删除:"+r()(t)),e.$message({type:"info",showClose:!0,duration:3e3,dangerouslyUseHTMLString:!0,message:"已取消删除"})})},submitForm:function(t){var i=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var e=i,o={ci_uuid:e.communityForm.ci_uuid,ci_company_id:e.communityForm.ci_company_id,ci_child_company_id:e.communityForm.ci_child_company_id,ci_institute_id:e.communityForm.ci_institute_id,ci_station_id:e.communityForm.ci_station_id,ci_community_name:e.communityForm.ci_community_name,ci_address:e.communityForm.ci_address,ci_province:e.communityForm.ci_province,ci_city:e.communityForm.ci_city,ci_country:e.communityForm.ci_country,ci_build_area:e.communityForm.ci_build_area,ci_build_type:e.communityForm.ci_build_type,ci_longitude:e.communityForm.ci_longitude,ci_latitude:e.communityForm.ci_latitude,ci_memo:e.communityForm.ci_memo,flag:e.communityForm.flag},n=i.$loading({lock:!0,text:"提交中...",target:".main",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0)"});"1"===e.communityForm.flag?(i.customGlobal.postHttpClient(i.customGlobal.serverUrl.residentialQuarters_add,i.customGlobal.serverUrl.orgBaseURI,{"Content-Type":"application/x-www-form-urlencoded"},i.qs.stringify({jsondata:r()(o)})).then(function(t){console.log("异步调用成功返回:"+r()(t)),"success"==t.data.status?(i.communityDialogFormVisible=!1,n.close(),i.$message({type:"success",showClose:!0,duration:3e3,dangerouslyUseHTMLString:!0,message:'<span style="color:black;">基础信息 ['+e.communityForm.ci_community_name+"] 新增成功 </span>"}),i.queryValveCurrentData()):(console.info("新增失败"),n.close(),i.$alert(t.data.msg,"新增失败",{confirmButtonText:"确定",callback:function(e){console.info("data:"+r()(t.data)),"请登录认证"===t.data.msg&&i.$router.push({path:"/login"})}}))},function(t){console.log("异步调用出错:"+r()(t)),n.close(),i.$alert(r()(t.message),"新增出错!",{confirmButtonText:"确定",callback:function(t){}})}).catch(function(t){console.log("异步调用失败返回:"+r()(t)),n.close(),i.$alert(r()(t.message),"新增出错",{confirmButtonText:"确定",callback:function(t){}})}),i.queryValveCurrentData()):(i.customGlobal.postHttpClient(i.customGlobal.serverUrl.residentialQuarters_update,i.customGlobal.serverUrl.orgBaseURI,{"Content-Type":"application/x-www-form-urlencoded"},i.qs.stringify({jsondata:r()(o)})).then(function(t){console.log("异步调用成功返回:"+r()(t)),"success"==t.data.status?(i.communityDialogFormVisible=!1,n.close(),i.$message({type:"success",showClose:!0,duration:3e3,dangerouslyUseHTMLString:!0,message:'<span style="color:black;">基础信息 ['+e.communityForm.ci_community_name+"] 修改成功 </span>"}),i.queryValveCurrentData()):(console.info("修改失败"),n.close(),i.$alert(t.data.msg,"修改失败",{confirmButtonText:"确定",callback:function(e){console.info("data:"+r()(t.data)),"请登录认证"===t.data.msg&&i.$router.push({path:"/login"})}}))},function(t){console.log("异步调用出错:"+r()(t)),n.close(),i.$alert(r()(t.message),"修改出错!",{confirmButtonText:"确定",callback:function(t){}})}).catch(function(t){console.log("异步调用失败返回:"+r()(t)),n.close(),i.$alert(r()(t.message),"修改出错",{confirmButtonText:"确定",callback:function(t){}})}),i.queryValveCurrentData())})},removeTreeNode:function(t,i){var e=t.parent,o=e.data.detail||e.data,n=o.findIndex(function(t){return t.id===i.id});o.splice(n,1)},initTreeDataStatus:function(t,i){var e=i.node,o=i.data;i.store;if("{}"===r()(this.treeDataStatus))return t("span",{style:"font-size:14px;"},[t("span",[o.caption])]);var a=!1,c=!0,l=!1,m=void 0;try{for(var u,d=s()(n()(this.treeDataStatus));!(c=(u=d.next()).done);c=!0){var _=u.value;if(o.id===_)return t("span",[t("span",[o.caption])])}}catch(t){l=!0,m=t}finally{try{!c&&d.return&&d.return()}finally{if(l)throw m}}!1===a&&this.removeTreeNode(e,o)},initOrgTemplateInfo:function(){var t=this,i=this.$loading({lock:!0,text:"查询中...",target:".main",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0)"});this.customGlobal.postHttpClient(this.customGlobal.serverUrl.postQueryOrganTemplate,this.customGlobal.serverUrl.orgBaseURI,{"Content-Type":"application/x-www-form-urlencoded"},this.qs.stringify({jsondata:r()({config:"all",username:this.customGlobal.userInfoExt.cui_login_id})})).then(function(e){console.log("异步调用成功返回:"+r()(e)),"success"==e.data.status?("0"!==t.customGlobal.userInfoExt.cui_type?t.treeData=JSON.parse(e.data.organ).detail:t.treeData=[JSON.parse(e.data.organ)],t.treeDataStatus=JSON.parse(e.data.orgkey),i.close()):(console.info("查询失败"),t.treeData=[JSON.parse(e.data.organ)],t.treeDataStatus=JSON.parse(e.data.orgkey),i.close())},function(e){console.log("异步调用出错:"+r()(e)),i.close(),t.$alert(r()(e.message),"查询出错!",{confirmButtonText:"确定",callback:function(t){}})}).catch(function(e){console.log("异步调用失败返回:"+r()(e)),i.close(),t.$alert(r()(e.message),"查询出错",{confirmButtonText:"确定",callback:function(t){}})})}}}),u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("el-form",{ref:"ruleForm2",staticClass:"community-formitem",staticStyle:{"text-align":"left","font-size":"20px","font-weight":"bold"},attrs:{"label-position":"left",model:t.ruleForm,rules:t.rules,"label-width":"130px"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-card",{staticClass:"community-card1 community-card2",attrs:{shadow:"always","body-style":t.cardBodyStyle}},[e("div",{staticStyle:{"font-size":"14px","font-weight":"bold"},attrs:{slot:"header"},on:{click:t.confCardBodyHeigth},slot:"header"},[e("el-row",{on:{click:t.confCardBodyHeigth}},[e("el-col",{attrs:{md:23}},[e("el-breadcrumb",{staticStyle:{padding:"5px"},attrs:{"separator-class":"el-icon-arrow-right"}},t._l(this.tmpCaption,function(i,o){return e("el-breadcrumb-item",{key:o},[t._v(t._s(i))])}),1)],1),t._v(" "),e("el-col",{attrs:{md:1},on:{click:t.confCardBodyHeigth}},[e("el-link",{staticStyle:{float:"right","text-decoration":"none","font-size":"20px",height:"10px","line-height":"10px"},attrs:{icon:t.icon1,underline:!1}})],1)],1)],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cardBodyHeight,expression:"cardBodyHeight"}]},[e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{md:12}},[e("el-form-item",{attrs:{label:"小区名称",prop:"ci_community_name"}},[e("el-input",{model:{value:t.ruleForm.ci_community_name,callback:function(i){t.$set(t.ruleForm,"ci_community_name",i)},expression:"ruleForm.ci_community_name"}})],1)],1),t._v(" "),e("el-col",{attrs:{md:12}},[e("el-button",{staticStyle:{float:"right","margin-left":"5px"},attrs:{type:"primary"},on:{click:function(i){return t.clearQuery("ruleForm2")}}},[t._v("清空")]),t._v(" "),e("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.queryValveCurrentData}},[t._v("查询")])],1)],1)],1)])],1),t._v(" "),e("el-card",[e("div",{staticStyle:{position:"relative"},attrs:{id:"dragbtn"}},[e("div",{directives:[{name:"drag",rawName:"v-drag"}],style:{width:"62px",right:this.floatRightValue,top:this.floatTopValue,"border-radius":"50%",position:"fixed","padding-left":"0px","padding-top":"8px",cursor:"pointer","z-index":"888"},attrs:{draggable:"false"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.ballShow,expression:"ballShow"}],style:{display:"flex","justify-content":"space-between",position:"absolute",left:this.menuLeft,width:this.menuWidth,top:" 10px"},attrs:{id:"buttonMenuCommunity"}},[e("div",{staticStyle:{float:"right","margin-right":"20px"}},[e("el-dropdown",{attrs:{"hide-on-click":!1,_style:"float:right;margin-right: 20px;"}},[e("el-button",{attrs:{type:"primary",size:"small",title:"显示隐藏列"}},[e("i",{staticClass:"el-icon-s-grid "},[t._v("动态列")])]),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-scrollbar",{staticStyle:{height:"40vh",width:"150px"}},[e("el-checkbox-group",{model:{value:t.colsChecked,callback:function(i){t.colsChecked=i},expression:"colsChecked"}},t._l(t.colsMap,function(i){return e("el-dropdown-item",{key:i.value},[e("el-checkbox",{key:i.value,attrs:{disabled:i.disabled,label:i.value},on:{change:t.colCheckCommand}},[t._v(t._s(i.caption))])],1)}),1)],1)],1)],1)],1),t._v(" "),e("div",{staticStyle:{float:"right","margin-right":"20px"}},[e("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(i){return i.stopPropagation(),t.handleAddRow()}}},[e("i",{staticClass:"el-icon-document-add"},[t._v("新增")])])],1)]),t._v(" "),e("el-tooltip",{attrs:{content:"展开与隐藏功能按钮",placement:"top"}},[e("el-button",{directives:[{name:"trigger",rawName:"v-trigger"}],ref:"ballBtn",class:[!0===t.ballShow?"fadeIn":"fadeOut"],attrs:{id:"ballBtn",type:"primary",icon:this.ballIcon,circle:""},on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.openBox(i)}}})],1)],1)]),t._v(" "),e("el-table",{ref:"multipleTable",staticClass:"new-table-fixed-right new-table-fixed",attrs:{border:"",data:t.tableData,"tooltip-effect":"dark","row-style":{height:"10px"},"cell-style":{padding:"5px 0px"},"header-cell-style":{background:"#4B86BC",color:"#ffffff",borderRight:"1px solid #E3E5EB",padding:"0px",height:"45px","line-height":"45px"}},on:{"sort-change":t.sortColumn,"selection-change":t.handleSelectionChange}},[t.colsMap[0].isShow?e("el-table-column",{attrs:{fixed:"",prop:"ci_community_name",label:"小区名称",align:"center","show-overflow-tooltip":"",width:"150"}}):t._e(),t._v(" "),t.colsMap[1].isShow?e("el-table-column",{attrs:{prop:"tbi_count",label:"楼栋数量",align:"center","show-overflow-tooltip":"",width:"100"},scopedSlots:t._u([{key:"default",fn:function(i){return[0!==i.row.tbi_count?e("el-tag",{attrs:{type:"success",effect:"dark",size:"small"}},[t._v(t._s(i.row.tbi_count))]):e("el-tag",{attrs:{type:"info",effect:"dark",size:"small"}},[t._v(t._s(i.row.tbi_count))])]}}],null,!1,3043551810)}):t._e(),t._v(" "),t.colsMap[2].isShow?e("el-table-column",{attrs:{prop:"tpui_count",label:"用户数量",align:"center","show-overflow-tooltip":"",width:"100"},scopedSlots:t._u([{key:"default",fn:function(i){return[0!==i.row.tpui_count?e("el-tag",{attrs:{type:"success",effect:"dark",size:"small"}},[t._v(t._s(i.row.tpui_count))]):e("el-tag",{attrs:{type:"info",effect:"dark",size:"small"}},[t._v(t._s(i.row.tpui_count))])]}}],null,!1,3214270181)}):t._e(),t._v(" "),t.colsMap[3].isShow?e("el-table-column",{attrs:{prop:"ci_build_area",label:"建筑面积",align:"center","show-overflow-tooltip":"",width:"80"}}):t._e(),t._v(" "),t.colsMap[4].isShow?e("el-table-column",{attrs:{prop:"ci_build_type",label:"建筑类型",align:"center","show-overflow-tooltip":"",width:"80"},scopedSlots:t._u([{key:"default",fn:function(i){return["1"===i.row.ci_build_type?e("el-tag",{attrs:{type:"success",effect:"dark",size:"mini"}},[t._v("居住建筑")]):t._e(),t._v(" "),"2"===i.row.ci_build_type?e("el-tag",{attrs:{type:"success",effect:"dark",size:"mini"}},[t._v("公共建筑")]):t._e(),t._v(" "),"3"===i.row.ci_build_type?e("el-tag",{attrs:{type:"success",effect:"dark",size:"mini"}},[t._v("混合建筑")]):t._e()]}}],null,!1,3132610718)}):t._e(),t._v(" "),t.colsMap[5].isShow?e("el-table-column",{attrs:{prop:"ci_province",label:"所属省份",align:"center","show-overflow-tooltip":"",width:"80",formatter:t.provinceFormat}}):t._e(),t._v(" "),t.colsMap[6].isShow?e("el-table-column",{attrs:{prop:"ci_city",label:"所属城市",align:"center","show-overflow-tooltip":"",width:"80",formatter:t.cityFormat}}):t._e(),t._v(" "),t.colsMap[7].isShow?e("el-table-column",{attrs:{prop:"ci_country",label:"所属区县",align:"center","show-overflow-tooltip":"",width:"80",formatter:t.countryFormat}}):t._e(),t._v(" "),t.colsMap[8].isShow?e("el-table-column",{attrs:{prop:"ci_address",label:"小区位置",align:"center","show-overflow-tooltip":"",width:"120"}}):t._e(),t._v(" "),t.colsMap[9].isShow?e("el-table-column",{attrs:{prop:"ci_longitude",label:"经度",align:"center","show-overflow-tooltip":"",width:"80"}}):t._e(),t._v(" "),t.colsMap[10].isShow?e("el-table-column",{attrs:{prop:"ci_latitude",label:"纬度",align:"center","show-overflow-tooltip":"",width:"80"}}):t._e(),t._v(" "),t.colsMap[11].isShow?e("el-table-column",{attrs:{prop:"ci_memo",label:"备注",align:"center","show-overflow-tooltip":"",width:"150"}}):t._e(),t._v(" "),e("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-tooltip",{attrs:{content:"编辑",placement:"top"}},[e("el-button",{directives:[{name:"show",rawName:"v-show",value:"00-0"!==i.row.uuid&&"00-1"!==i.row.uuid,expression:"scope.row.uuid!=='00-0' && scope.row.uuid!=='00-1'"}],attrs:{type:"primary",icon:"el-icon-edit",circle:"",size:"mini"},nativeOn:{click:function(e){return e.stopPropagation(),t.handleEditRow(i.$index,i.row)}}})],1),t._v(" "),e("el-tooltip",{attrs:{content:"删除",placement:"top"}},[e("el-button",{directives:[{name:"show",rawName:"v-show",value:"00-0"!==i.row.uuid&&"00-1"!==i.row.uuid,expression:"scope.row.uuid!=='00-0' && scope.row.uuid!=='00-1'"}],attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},nativeOn:{click:function(e){return e.stopPropagation(),t.handleDeleteRow(i.$index,i.row)}}})],1)]}}])})],1)],1),t._v(" "),e("el-pagination",{attrs:{background:"","current-page":t.queryParam.currentPage,"page-sizes":[10,20,50,100,200],"page-size":t.queryParam.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.queryParam.totalRow},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),e("el-dialog",{attrs:{visible:t.communityDialogFormVisible,"close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1},on:{"update:visible":function(i){t.communityDialogFormVisible=i}}},[e("div",{staticStyle:{"text-align":"left","font-size":"20px","font-weight":"bold"},attrs:{slot:"title"},slot:"title"},[e("span",[t._v(t._s(this.tableDialgTitle))])]),t._v(" "),e("el-form",{ref:"communityForm",staticClass:"community-formitem",staticStyle:{"text-align":"left","font-size":"20px","font-weight":"bold"},attrs:{"label-position":"left",model:t.communityForm,rules:t.communityFormRules,"label-width":"130px"}},[e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{md:24}},[e("el-form-item",{attrs:{label:"所属组织机构",prop:"ci_company_name",rules:this.communityFormRules.ci_company_name}},[t.showTree?e("el-tree",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"org_tree",attrs:{data:t.treeData,"node-key":"id","highlight-current":"",props:{children:"detail",label:"caption"},"render-content":t.initTreeDataStatus}}):t._e(),t._v(" "),e("el-cascader",{attrs:{id:"el-cascader1",options:t.treeData,props:{children:"detail",label:"caption",value:"id",checkStrictly:!0,expandTrigger:"hover"},disabled:"",filterable:"",clearable:""},on:{change:t.handleChangeQy},model:{value:t.treeDataOptions,callback:function(i){t.treeDataOptions=i},expression:"treeDataOptions"}})],1)],1)],1),t._v(" "),e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{md:12}},[e("el-form-item",{attrs:{label:"所属区域",prop:"ci_province",rules:this.communityFormRules.ci_province}},[e("el-cascader",{attrs:{id:"el-cascader",options:t.options,props:{expandTrigger:"hover"},filterable:"",clearable:""},on:{change:t.handleChange},model:{value:t.selectedOptions,callback:function(i){t.selectedOptions=i},expression:"selectedOptions"}})],1)],1),t._v(" "),e("el-col",{attrs:{md:12}},[e("el-form-item",{attrs:{label:"小区名称",prop:"ci_community_name",rules:this.communityFormRules.ci_community_name}},[e("el-input",{staticClass:"el-input",model:{value:t.communityForm.ci_community_name,callback:function(i){t.$set(t.communityForm,"ci_community_name",i)},expression:"communityForm.ci_community_name"}})],1)],1)],1),t._v(" "),e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{md:12}},[e("el-form-item",{attrs:{label:"建 筑 面 积",prop:"ci_build_area",rules:this.communityFormRules.ci_build_area}},[e("el-input",{model:{value:t.communityForm.ci_build_area,callback:function(i){t.$set(t.communityForm,"ci_build_area",i)},expression:"communityForm.ci_build_area"}})],1)],1),t._v(" "),e("el-col",{attrs:{md:12}},[e("el-form-item",{attrs:{label:"建 筑 类 型",prop:"ci_build_type",rules:this.communityFormRules.ci_build_type}},[e("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.communityForm.ci_build_type,callback:function(i){t.$set(t.communityForm,"ci_build_type",i)},expression:"communityForm.ci_build_type"}},t._l(t.buildTypeoptions,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1),t._v(" "),e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{md:12}},[e("el-form-item",{attrs:{label:"经   度",prop:"ci_longitude",rules:this.communityFormRules.ci_longitude}},[e("el-input",{model:{value:t.communityForm.ci_longitude,callback:function(i){t.$set(t.communityForm,"ci_longitude",i)},expression:"communityForm.ci_longitude"}})],1)],1),t._v(" "),e("el-col",{attrs:{md:12}},[e("el-form-item",{attrs:{label:"纬   度",prop:"ci_latitude",rules:this.communityFormRules.ci_latitude}},[e("el-input",{model:{value:t.communityForm.ci_latitude,callback:function(i){t.$set(t.communityForm,"ci_latitude",i)},expression:"communityForm.ci_latitude"}})],1)],1)],1),t._v(" "),e("el-row",{attrs:{gutter:24}},[e("el-col",{attrs:{md:12}},[e("el-form-item",{attrs:{label:"小区地址",prop:"ci_address",rules:this.communityFormRules.ci_address}},[e("el-input",{attrs:{type:"textarea",rows:2,resize:"none"},model:{value:t.communityForm.ci_address,callback:function(i){t.$set(t.communityForm,"ci_address",i)},expression:"communityForm.ci_address"}})],1)],1),t._v(" "),e("el-col",{attrs:{md:12}},[e("el-form-item",{attrs:{label:"备注",prop:"ci_memo",rules:this.communityFormRules.ci_memo}},[e("el-input",{attrs:{type:"textarea",rows:2,resize:"none"},model:{value:t.communityForm.ci_memo,callback:function(i){t.$set(t.communityForm,"ci_memo",i)},expression:"communityForm.ci_memo"}})],1)],1)],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(i){return t.resetForm("communityForm")}}},[t._v("重 置")]),t._v(" "),e("el-button",{on:{click:function(i){return t.cancelForm("communityForm")}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.submitForm("communityForm")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=e("VU/8")(m,u,!1,function(t){e("C4t8")},"data-v-57e502a8",null);i.default=d.exports}});
//# sourceMappingURL=49.9b579089698ea88760de.js.map