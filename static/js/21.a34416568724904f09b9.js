webpackJsonp([21,5],{KYd8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("mvHQ"),n=o.n(i),a=o("wfkr"),r=o("Vhou"),s={name:"Example3",components:{Example4:a.default},data:function(){return{dialogFormVisible1:!1,activeName:"1",editableTabs:[],communityRows:[],icon1:"el-icon-caret-left",showTree:!0,currentSelTreeNodeId:"",treeData:[{id:"0",caption:"智慧供热平台",type:"0",detail:[{id:"100",caption:"热力公司1",type:"1",detail:[{id:"100_1",caption:"热力分公司1_1",type:"2",detail:[{id:"100_1_1",caption:"热力所1",type:"3",detail:[{id:"SI_1",caption:"换热站1",type:"4"},{id:"SI_6",caption:"换热站2",type:"4"}]},{id:"100_1_2",caption:"热力所2",type:"3"}]},{id:"100_2",caption:"热力分公司1_2",type:"2"}]},{id:"200",caption:"热力公司2",type:"1",detail:[{id:"200_1",caption:"热力分公司2_1",type:"2"},{id:"200_2",caption:"热力分公司2_2",type:"2"}]}]}]}},destroyed:function(){r.a.$off("globalMsg2")},created:function(){},mounted:function(){var e=this;r.a.$on("globalMsg2",function(t){console.log("监听到的消息："+t),console.info("curid:"+t.curid),console.info("method:"+t.method),console.info("layer:"+t.layer),console.info("target:"+t.target),console.info("caption:"+t.target.caption),"1"===t.method?e.addTreeNode(t.curid,t.target,t.layer):"2"===t.method?e.modifyTreeNode(t.curid,t.target):"3"===t.method&&e.delTreeNode(t.curid)})},methods:{queryCommunity:function(e){var t=this,i=this;this.editableTabs=[],console.info("当前ID："+e.id);var a={ci_station_id:e.id},s=this.$loading({lock:!0,text:"查询中...",target:".main",spinner:"el-icon-loading",background:"rgba(0, 0, 0, .7)"});this.customGlobal.postHttpClient(this.customGlobal.serverUrl.postQueryCommunityKV,this.customGlobal.serverUrl.orgBaseURI,{"Content-Type":"application/x-www-form-urlencoded"},this.qs.stringify({jsondata:n()(a)})).then(function(e){if(console.log("异步调用成功返回:"+n()(e)),"success"==e.data.status){s.close(),t.communityRows=e.data.rows,t.communityRows.length>0&&(t.communityRows[0].status=!0,t.activeName=t.communityRows[0].ci_uuid,r.a.$emit("globalMsgForCommunityBuilder",{community:{ci_uuid:t.communityRows[0].ci_uuid,ci_community_name:t.communityRows[0].ci_community_name},builder:{bi_build_number:"",bi_uuid:""}}));for(var a=0;a<t.communityRows.length;a++){t.editableTabs.push({title:t.communityRows[a].ci_community_name,name:t.communityRows[a].ci_uuid,show:t.communityRows[a].status,content:function(){return o.e(1).then(o.bind(null,"HNKV")).catch(function(e){t.$message({type:"error",showClose:!0,duration:0,dangerouslyUseHTMLString:!0,message:'<spand style="color:black;">出错了：'+e+"</spand>"})})}})}}else console.info("查询失败"),s.close(),i.communityRows=[],t.$alert(e.data.msg,"查询失败",{confirmButtonText:"确定",callback:function(o){console.info("data:"+n()(e.data)),"请登录认证"===e.data.msg&&"failed"===e.data.status&&t.$router.replace({path:"/login"})}})},function(e){console.log("异步调用出错:"+n()(e)),s.close(),i.communityRows=[],t.$alert(n()(e.message),"查询出错!",{confirmButtonText:"确定",callback:function(e){}})}).catch(function(e){console.log("异步调用失败返回:"+n()(e)),s.close(),i.communityRows=[],t.$alert(n()(e.message),"查询出错",{confirmButtonText:"确定",callback:function(e){}})})},showOrgInfo:function(e){this.dialogFormVisible1=!0,console.info("选择换热站："+n()(e)),this.queryCommunity(e)},showHiddenTree:function(){this.showTree?this.icon1="el-icon-caret-right":this.icon1="el-icon-caret-left",this.showTree=!this.showTree,console.info("是否显示："+this.showTree)},handleTreeNodeClick:function(e,t){var o=[],i=[];if(o.push(this.$refs.org_tree.getCurrentNode().caption),i.push(this.$refs.org_tree.getCurrentNode().id),this.getTreeNodeParentCaption(o,i,this.$refs.org_tree.getCurrentNode()),5==this.$refs.org_tree.getNode(this.$refs.org_tree.getCurrentNode()).level);else if(this.currentSelTreeNodeId!==this.$refs.org_tree.getCurrentKey()){this.currentSelTreeNodeId=this.$refs.org_tree.getCurrentKey();for(var n=0;n<o.length;n++)o[n]=this.customGlobal.encrypt(o[n],this.customGlobal.cryptoKey);this.$router.push({name:"org_query1",path:"/org_query1",query:{orgid:this.currentSelTreeNodeId,caption:o.reverse(),id:i.reverse()}})}},getTreeNodeParentCaption:function(e,t,o){for(var i=this.$refs.org_tree.getNode(o),n=i.level,a=1;a<n;)void 0!==i.parent&&(e.push(i.parent.label),t.push(i.parent.key),i=this.$refs.org_tree.getNode(i.parent),a++);return{label:e,key:t}},addTreeNode:function(e,t,o){this.customGlobal.checkPermissionId(e,this.treeData,t,o,"1")},delTreeNode:function(e){this.customGlobal.checkPermissionId(e,this.treeData,{},"1","3")},modifyTreeNode:function(e,t){this.customGlobal.checkPermissionId(e,this.treeData,t,"1","2")},trigerChildObj:function(e,t){console.info("点击tab.name:"+e.name),r.a.$emit("globalMsgForCommunityBuilder",{community:{ci_uuid:e.name,ci_community_name:e.label},builder:{bi_build_number:"",bi_uuid:""}})}}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-card",{attrs:{shadow:"always"}},[o("el-container",{staticStyle:{width:"100%",border:"1px solid #eee"}},[e.showTree?o("el-aside",{staticStyle:{height:"calc(100vh)","background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[e.showTree?o("el-tree",{ref:"org_tree",staticStyle:{height:"calc(100vh)"},attrs:{data:e.treeData,"default-expand-all":"","node-key":"id","highlight-current":"",props:{children:"detail",label:"caption"}},on:{"node-click":e.handleTreeNodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,n=t.data;return o("span",{},[o("span",{staticStyle:{"font-size":"14px"}},[e._v(e._s(i.label))]),e._v(" "),5===i.level?o("span",[o("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.showOrgInfo(n)}}},[e._v("选择")])],1):e._e()])}}],null,!1,2163708616)}):e._e()],1):e._e(),e._v(" "),o("el-container",{staticStyle:{width:"100%",border:"1px solid #eee"}},[o("el-aside",{staticStyle:{height:"calc(100vh)","background-color":"rgb(238, 241, 246)"},attrs:{width:"25px"}},[o("i",{class:e.icon1,staticStyle:{height:"100%",display:"flex",width:"25px","flex-direction":"row","justify-content":"center","align-items":"center"},on:{click:e.showHiddenTree}})]),e._v(" "),o("el-main",{staticStyle:{height:"100%","padding-top":"0px"}},[o("example4")],1)],1)],1)],1),e._v(" "),o("el-dialog",{attrs:{visible:e.dialogFormVisible1,"close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1},on:{"update:visible":function(t){e.dialogFormVisible1=t}}},[o("div",{staticStyle:{"text-align":"left","font-size":"20px","font-weight":"bold"},attrs:{slot:"title"},slot:"title"},[o("span",[e._v("共["+e._s(this.communityRows.length)+"]个小区")])]),e._v(" "),o("el-tabs",{staticStyle:{height:"400px"},attrs:{type:"border-card","tab-position":"left"},on:{"tab-click":e.trigerChildObj},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.editableTabs,function(t,i){return o("el-tab-pane",{key:t.name,staticStyle:{width:"100%"},attrs:{label:t.title,name:t.name}},[o("el-tooltip",{staticClass:"item-tabs",attrs:{slot:"label",effect:"dark",content:t.title,placement:"left"},slot:"label"},[o("span",[e._v(e._s(t.title))])]),e._v(" "),t.show?o(t.content,{ref:t.name,refInFor:!0,tag:"component",attrs:{pri_detail:{communityObj:{id:t.name,title:t.title}}},on:{parent_method:function(t){e.dialogFormVisible1=!1}}}):e._e()],1)}),1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible1=!1}}},[e._v("关 闭")])],1)],1)],1)},staticRenderFns:[]};var c=o("VU/8")(s,l,!1,function(e){o("uD8O")},null,null);t.default=c.exports},lV43:function(e,t){},uD8O:function(e,t){},wfkr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"Example4",components:{CommunityBuilderSetInfo:o("rb/Q").default},mounted:function(){},created:function(){console.info("传递参数："+this.$route.query),this.init()},data:function(){return{editableTabsValue:"1",editableTabs:[],vueObj:[{caption:"热力集团",id:"1",vue:"/index/right/Example5.vue",show:!0},{caption:"热力分公司",id:"2",vue:"/index/right/Example6.vue",show:!1}]}},watch:{},methods:{showPublicMsg:function(e,t){t(this.$refs.cb.showPublicInfo())},showQuery:function(){console.info("this.$route.query:"+this.$route.query.orgid),console.info("this.$route.query:"+this.customGlobal.decrypt(this.$route.query.caption,this.customGlobal.cryptoKey)),console.info("this.$route.query:"+this.$route.query.id)},init:function(){for(var e=this,t=function(){var t=e.vueObj[i].vue;e.editableTabs.push({title:e.vueObj[i].caption,name:e.vueObj[i].id,content:function(){return o("aLCr")("./components"+t).catch(function(t){e.$message({type:"error",showClose:!0,duration:0,dangerouslyUseHTMLString:!0,message:'<spand style="color:black;">出错了：'+t+"</spand>"})})}})},i=0;i<this.vueObj.length;i++)t()},trigerChildObj:function(e,t){console.info("tab.name:"+e.name);for(var o=0;o<this.vueObj.length;o++)this.vueObj[o].show=!1;this.vueObj[e.name-1].show=!0}}},n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"_margin-left":"20px"}},[o("el-tabs",{style:{height:"200px"},on:{"tab-click":e.trigerChildObj},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,function(t,i){return o("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[e.vueObj[i].show?o(t.content,{tag:"component",attrs:{pri_detail:{treeNodeCaptions:e.$route.query.caption,treeNodeIds:e.$route.query.id,treeNodeOrgId:e.$route.query.orgid}},on:{parent_method:e.showPublicMsg}}):e._e()],1)}),1),e._v(" "),o("community-builder-set-info",{ref:"cb"})],1)},staticRenderFns:[]};var a=o("VU/8")(i,n,!1,function(e){o("lV43")},"data-v-ff7d0b9a",null);t.default=a.exports}});
//# sourceMappingURL=21.a34416568724904f09b9.js.map