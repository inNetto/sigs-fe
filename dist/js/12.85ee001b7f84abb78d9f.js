webpackJsonp([12],{444:function(t,e,n){function o(t){a||n(551)}var a=!1,s=n(6)(n(553),n(554),o,"data-v-9629454e",null);s.options.__file="C:\\laragon\\www\\html\\src\\components\\pages\\heatMap.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] heatMap.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},450:function(t,e,n){function o(t){a||n(451)}var a=!1,s=n(6)(n(453),n(454),o,"data-v-68cd846f",null);s.options.__file="C:\\laragon\\www\\html\\src\\components\\gCard.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] gCard.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},451:function(t,e,n){var o=n(452);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n(8).default;a("040a96e4",o,!1,{})},452:function(t,e,n){e=t.exports=n(7)(!1),e.push([t.i,"\n.bg-light[data-v-68cd846f] {\r\n  padding-left: 2.5%;\n}\n.g-card-title[data-v-68cd846f] {\r\n  position: relative;\r\n  bottom: 20px;\r\n  margin-left: 5%;\r\n  color: #fff;\n}\n.q-card-main-padding[data-v-68cd846f] {\r\n  padding: 0px 50px 25px 50px;\n}\r\n",""])},453:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{icon:String,titulo:String,subtitulo:String,titleSize:String,titleClass:String,actionsClass:String,contentPadding:Boolean}}},454:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticClass:"bg-white"},[n("div",{staticClass:"row"},[n("div",{class:t.titleSize},[n("q-card",{staticClass:"g-card-title",class:t.titleClass},[n("q-card-title",[n("span",[t._v(t._s(t.titulo))]),t._v(" "),n("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(t.subtitulo))])])],1)],1)]),t._v(" "),n("q-card-main",{class:t.contentPadding?"q-card-main-padding":""},[t._t("content")],2),t._v(" "),n("q-card-actions",{class:t.actionsClass},[t._t("actions")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},551:function(t,e,n){var o=n(552);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n(8).default;a("6c68d6a3",o,!1,{})},552:function(t,e,n){e=t.exports=n(7)(!1),e.push([t.i,"\n#map[data-v-9629454e] {\n  height: 500px;\n}\n",""])},553:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(450),a=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={components:{GCard:a.default},data:function(){return{map:"",heatMap:"",geoCodes:[]}},mounted:function(){var t=this,e=document.createElement("script");e.type="text/javascript",e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDq5duXvEI1xkPpEVMFedDCzI3yknQE4z8&libraries=visualization&callback=window.initMap",document.body.appendChild(e),window.initMap=function(){t.getGeoCodes()}},computed:{geoCodesOrganizados:function(){return this.geoCodes.map(function(t){return new google.maps.LatLng(t.lat,t.lng)})}},methods:{getGeoCodes:function(){var t=this;this.$bus.$emit("loading"),this.$http.get("/endereco/geocodes").then(function(e){t.geoCodes=e.data,t.initMap(),t.$bus.$emit("loading")}).catch(function(){t.$bus.$emit("loading")})},initMap:function(){this.map=new google.maps.Map(document.getElementById("map"),{zoom:10,center:{lat:-22.8509452,lng:-43.5524372},mapTypeId:"satellite"}),this.heatmap=new google.maps.visualization.HeatmapLayer({data:this.geoCodesOrganizados,map:this.map}),this.heatmap.set("maxIntensity",7)}}}},554:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g-card",{attrs:{titulo:t.$route.meta.name,contentPadding:!0,titleClass:"bg-blue-8",titleSize:"col-xs-10 col-sm-8 col-md-6 col-lg-6",actionsClass:"bg-light"}},[n("div",{attrs:{slot:"content",id:"map"},slot:"content"})])},staticRenderFns:[]},t.exports.render._withStripped=!0}});