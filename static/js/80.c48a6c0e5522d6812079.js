webpackJsonp([80],{"+684":function(e,t){},"0GJW":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"JTopoExample",mounted:function(){this.initTopo()},data:function(){return{selectBtn:"select",sceneModel:"nodrag",currentNode:void 0,currentContainer:void 0,dialogFormVisible1:!1,publicScene:null}},methods:{changeBtn:function(e){"edit"===e?(this.selectBtn="edit",this.publicScene.mode="edit"):"select"===e&&(this.selectBtn="select",this.publicScene.mode="select")},initTopo:function(){var e=document.getElementById("canvas"),t=new JTopo.Stage(e);t.eagleEye.visible=!0;var o=new JTopo.Scene(t);o.alpha=1,o.backgroundColor="63,74,89",o.mode=this.sceneModel;var i=new JTopo.Node("huangwei");i.fillColor="0,0,255",i.setLocation(80,80),i.setSize(32,32),i.text="hw",i.textOffsetY=-37,i.myType="device",i.serializedProperties.push("myType"),i.alarm="二级告警",i.alarmColor="0,255,0",i.shadow=!0,i.shadowColor="0,0,255",i.shadowOffsetX=3,i.shadowOffsetY=6,i.borderWidth=1,i.borderColor=JTopo.util.randomColor(),o.add(i);var n=new JTopo.CircleNode("node");n.radius=24,n.alpha=.7,n.fillColor="0, 0, 255",n.setLocation(350,400),n.textPosition="Middle_Center",o.add(n),this.createlinkNode(i,n,"上行",o);var a=new JTopo.TextNode("This is a text node.");a.font="bold 16px 微软雅黑",a.setLocation(317,250),o.add(a);var r=new JTopo.LinkNode("超链接：http://www.jtopo.com");r.href="http://www.jtopo.com",r.target="_blank",r.font="italic bold 16px 微软雅黑",r.visitedColor="0,0,255",r.shadowOffsetX=5,r.shadowOffsetY=16,r.setLocation(250,360),o.add(r);var l=new JTopo.PieChartNode;l.shadow=!1,l.radius=100,l.colors=["#3666B0","#2CA8E0","#77D1F6"],l.datas=[.3,.3,.4],l.titles=["A","B","C"],l.setLocation(300,203),this.createNode("动态",10,10,32,32,o),o.add(l),i.dbclick(function(e){console.log("双击："+e.target.myType)}),this.createContainer(10,10,180,90,"19.1",o),this.publicScene=o},createNode:function(e,t,o,i,n,a){var r=this,l=new JTopo.Node(e);return l.setLocation(t,o),l.setSize(i,n),l.showSelected=!1,l.paintSelected=function(e){0!=this.showSelected&&(e.save(),e.beginPath(),e.strokeStyle="rgba(218,221,221, 0)",e.fillStyle="rgba(218,221,221,0)",e.arc(0,0,this.width/2+3,0,2*Math.PI,!1),e.fill(),e.stroke(),e.closePath(),e.restore())},l.addEventListener("dbclick",function(e){l.dragable=!l.dragable,r.currentNode=e.target,r.currentContainer=void 0,console.info("text："+r.currentNode.text),r.dialogFormVisible1=!0,r.publicScene.remove(l)}),a.add(l),l},createlinkNode:function(e,t,o,i){var n=new JTopo.CurveLink(e,t,o);return n.arrowsRadius=10,n.lineWidth=3,n.bundleOffset=60,n.bundleGap=20,n.textOffsetY=3,n.dashedPattern=5,n.direction="horizontal",n.strokeColor="255,255,0",i.add(n),n},createContainer:function(e,t,o,i,n,a){var r=this,l=new JTopo.Container(n);l.textPosition="Middle_Center",l.fontColor="100,255,0",l.font="18pt 微软雅黑",l.fillColor="10,10,100",l.borderColor="255,0,0",l.setBound(e,t,o,i);var s=JTopo.layout.GridLayout(4,3);l.layout=s;var d=this.createNode("张三",10,10,10,10,a),c=this.createNode("101室",70,10,10,10,a);return l.add(d),l.add(c),l.addEventListener("dbclick",function(e){l.dragable=!l.dragable,r.currentContainer=e.target,r.currentNode=void 0,console.info("text："+r.currentContainer.text),r.dialogFormVisible1=!0,r.publicScene.remove(l),r.publicScene.remove(d),r.publicScene.remove(c)}),a.add(l),l}}},n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-container",[o("el-aside",{attrs:{width:"60px"}},[o("div",[o("span",[e._v("工具")]),e._v(" "),o("el-radio-group",{model:{value:e.selectBtn,callback:function(t){e.selectBtn=t},expression:"selectBtn"}},[o("el-radio-button",{attrs:{label:"select",type:"primary",border:"",size:"small",icon:"el-icon-position"},nativeOn:{click:function(t){return e.changeBtn("select")}}},[o("i",{staticClass:"el-icon-position"})]),e._v(" "),o("el-radio-button",{attrs:{label:"edit",type:"primary",border:"",size:"small",icon:"el-icon-rank"},nativeOn:{click:function(t){return e.changeBtn("edit")}}},[o("i",{staticClass:"el-icon-rank"})])],1)],1)]),e._v(" "),o("el-main",{staticStyle:{display:"flex","align-items":"flex-start",padding:"0px",margin:"0px"}},[o("canvas",{attrs:{width:"1000",height:"1000",id:"canvas"}})])],1),e._v(" "),o("el-dialog",{attrs:{visible:e.dialogFormVisible1,"close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!0},on:{"update:visible":function(t){e.dialogFormVisible1=t}}},[o("div",{staticStyle:{"text-align":"left","font-size":"20px","font-weight":"bold"},attrs:{slot:"title"},slot:"title"},[o("span",[e._v(e._s(void 0!==this.currentNode?this.currentNode.text:""))]),e._v(" "),o("span",[e._v(e._s(void 0!==this.currentContainer?this.currentContainer.text:""))])])])],1)},staticRenderFns:[]};var a=o("VU/8")(i,n,!1,function(e){o("+684")},"data-v-05e2aaac",null);t.default=a.exports}});
//# sourceMappingURL=80.c48a6c0e5522d6812079.js.map