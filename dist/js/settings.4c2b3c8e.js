(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"settings"}},[l("b-container",[l("b-row",[l("b-col",{attrs:{cols:"12"}},[l("b-table",{attrs:{items:e.items,fields:e.fields},on:{"row-clicked":e.selectAlarm},scopedSlots:e._u([{key:"cell(file)",fn:function(e){return[l("audio",{attrs:{controls:"",src:"./sounds/"+e.item.file}})]}},{key:"cell(select)",fn:function(t){return[t.item.file===e.alarm?l("font-awesome-icon",{attrs:{icon:["fas","check"]}}):e._e()]}}])})],1)],1)],1)],1)},s=[],a={name:"Settings",data:function(){return{items:[{name:"鬧鈴",file:"alarm1.mp3"},{name:"yay",file:"yay.mp3"}],fields:[{key:"name",label:"名稱"},{key:"file",label:"預覽"},{key:"select",label:"選擇"}]}},computed:{alarm:function(){return this.$store.state.alarm}},methods:{selectAlarm:function(e){this.$store.commit("selectAlarm",e.file)}}},i=a,r=l("2877"),c=Object(r["a"])(i,n,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=settings.4c2b3c8e.js.map