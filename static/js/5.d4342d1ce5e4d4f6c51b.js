webpackJsonp([5],{lV43:function(e,t){},wfkr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"Example4",components:{CommunityBuilderSetInfo:n("rb/Q").default},mounted:function(){},created:function(){console.info("传递参数："+this.$route.query),this.init()},data:function(){return{editableTabsValue:"1",editableTabs:[],vueObj:[{caption:"热力集团",id:"1",vue:"/index/right/Example5.vue",show:!0},{caption:"热力分公司",id:"2",vue:"/index/right/Example6.vue",show:!1}]}},watch:{},methods:{showPublicMsg:function(e,t){t(this.$refs.cb.showPublicInfo())},showQuery:function(){console.info("this.$route.query:"+this.$route.query.orgid),console.info("this.$route.query:"+this.customGlobal.decrypt(this.$route.query.caption,this.customGlobal.cryptoKey)),console.info("this.$route.query:"+this.$route.query.id)},init:function(){for(var e=this,t=function(){var t=e.vueObj[o].vue;e.editableTabs.push({title:e.vueObj[o].caption,name:e.vueObj[o].id,content:function(){return n("aLCr")("./components"+t).catch(function(t){e.$message({type:"error",showClose:!0,duration:0,dangerouslyUseHTMLString:!0,message:'<spand style="color:black;">出错了：'+t+"</spand>"})})}})},o=0;o<this.vueObj.length;o++)t()},trigerChildObj:function(e,t){console.info("tab.name:"+e.name);for(var n=0;n<this.vueObj.length;n++)this.vueObj[n].show=!1;this.vueObj[e.name-1].show=!0}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"_margin-left":"20px"}},[n("el-tabs",{style:{height:"200px"},on:{"tab-click":e.trigerChildObj},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,function(t,o){return n("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[e.vueObj[o].show?n(t.content,{tag:"component",attrs:{pri_detail:{treeNodeCaptions:e.$route.query.caption,treeNodeIds:e.$route.query.id,treeNodeOrgId:e.$route.query.orgid}},on:{parent_method:e.showPublicMsg}}):e._e()],1)}),1),e._v(" "),n("community-builder-set-info",{ref:"cb"})],1)},staticRenderFns:[]};var a=n("VU/8")(o,i,!1,function(e){n("lV43")},"data-v-ff7d0b9a",null);t.default=a.exports}});
//# sourceMappingURL=5.d4342d1ce5e4d4f6c51b.js.map