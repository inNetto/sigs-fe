webpackJsonp([6],{437:function(t,a,e){function o(t){i||e(490)}var i=!1,n=e(6)(e(492),e(493),o,"data-v-5379a8a2",null);n.options.__file="C:\\laragon\\www\\html\\src\\components\\pages\\PageMalaCampanha.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] PageMalaCampanha.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},450:function(t,a,e){function o(t){i||e(451)}var i=!1,n=e(6)(e(453),e(454),o,"data-v-68cd846f",null);n.options.__file="C:\\laragon\\www\\html\\src\\components\\gCard.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] gCard.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},451:function(t,a,e){var o=e(452);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e(8).default;i("040a96e4",o,!1,{})},452:function(t,a,e){a=t.exports=e(7)(!1),a.push([t.i,"\n.bg-light[data-v-68cd846f] {\r\n  padding-left: 2.5%;\n}\n.g-card-title[data-v-68cd846f] {\r\n  position: relative;\r\n  bottom: 20px;\r\n  margin-left: 5%;\r\n  color: #fff;\n}\n.q-card-main-padding[data-v-68cd846f] {\r\n  padding: 0px 50px 25px 50px;\n}\r\n",""])},453:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{icon:String,titulo:String,subtitulo:String,titleSize:String,titleClass:String,actionsClass:String,contentPadding:Boolean}}},454:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-card",{staticClass:"bg-white"},[e("div",{staticClass:"row"},[e("div",{class:t.titleSize},[e("q-card",{staticClass:"g-card-title",class:t.titleClass},[e("q-card-title",[e("span",[t._v(t._s(t.titulo))]),t._v(" "),e("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(t.subtitulo))])])],1)],1)]),t._v(" "),e("q-card-main",{class:t.contentPadding?"q-card-main-padding":""},[t._t("content")],2),t._v(" "),e("q-card-actions",{class:t.actionsClass},[t._t("actions")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},456:function(t,a,e){"use strict";a.__esModule=!0;var o=e(458),i=function(t){return t&&t.__esModule?t:{default:t}}(o);a.default=function(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}return(0,i.default)(t)}},458:function(t,a,e){t.exports={default:e(459),__esModule:!0}},459:function(t,a,e){e(203),e(460),t.exports=e(3).Array.from},460:function(t,a,e){"use strict";var o=e(21),i=e(9),n=e(30),r=e(205),s=e(206),l=e(41),c=e(461),u=e(207);i(i.S+i.F*!e(208)(function(t){Array.from(t)}),"Array",{from:function(t){var a,e,i,d,m=n(t),p="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,b=void 0!==v,g=0,h=u(m);if(b&&(v=o(v,f>2?arguments[2]:void 0,2)),void 0==h||p==Array&&s(h))for(a=l(m.length),e=new p(a);a>g;g++)c(e,g,b?v(m[g],g):m[g]);else for(d=h.call(m),e=new p;!(i=d.next()).done;g++)c(e,g,b?r(d,v,[i.value,g],!0):i.value);return e.length=g,e}})},461:function(t,a,e){"use strict";var o=e(14),i=e(40);t.exports=function(t,a,e){a in t?o.f(t,a,i(0,e)):t[a]=e}},462:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e(456),i=function(t){return t&&t.__esModule?t:{default:t}}(o);a.default={data:function(){return{tiposAtendimento:[]}},computed:{optionsTipoAtendimento:function(){return[{label:"",value:""}].concat((0,i.default)(this.tiposAtendimento.map(function(t){return{label:t.nome,value:t.id}})))}},methods:{getTiposAtendimento:function(){var t=this;this.$bus.$emit("loading"),this.$http.get("tipos_atendimento").then(function(a){t.tiposAtendimento=a.data.data,t.$bus.$emit("loading")}).catch(function(a){t.$bus.$emit("loading"),console.log(a)})}}}},463:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{centrosSociais:[]}},computed:{optionsCentrosSociais:function(){return this.centrosSociais.map(function(t){return{label:t.nome,value:t.id}})}},methods:{getCentrosSociais:function(){var t=this;this.$bus.$emit("loading"),this.$http.get("centros_sociais").then(function(a){t.$bus.$emit("loading"),t.centrosSociais=a.data.data}).catch(function(a){t.$bus.$emit("loading"),console.log(a)})}}}},490:function(t,a,e){var o=e(491);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e(8).default;i("83edfa9e",o,!1,{})},491:function(t,a,e){a=t.exports=e(7)(!1),a.push([t.i,"\n.margin-top[data-v-5379a8a2] {\r\n  margin-top: 15px;\n}\n.col-settings .q-item[data-v-5379a8a2] {\r\n  padding: 0px 16px;\n}\r\n",""])},492:function(t,a,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var i=e(201),n=o(i),r=e(450),s=o(r),l=e(462),c=o(l),u=e(463),d=o(u);a.default={mixins:[c.default,d.default],components:{GCard:s.default},mounted:function(){this.getTiposAtendimento(),this.getCentrosSociais(),this.getTotalCariocas()},data:function(){return{total:0,cariocas:!1,margemEsquerda:5,margemDireita:7,margemSuperior:2,tamanhoFonte:6,combo1:["Paciência","Guaratiba","Cosmos","Anchieta","Campo Grande","Santa Cruz"],comboBairro:"",buscaBairro:"buscar",bairrosOpcoes:[{label:"Remover os bairros da busca",value:"remover"},{label:"Buscar somente por estes bairros",value:"buscar"}],removerDataAniversario:!0,ordenacao:"bairrocep",bairrosIniciando:"",bairros:[]}},methods:{setCombo:function(t){this.bairros=(0,n.default)([],t)},addTextoNaBusca:function(){this.$refs.chips.add()},limpar:function(){this.buscaBairro="buscar",this.comboBairro="",this.centroSocial="",this.atendimento="",this.ordenacao="bairrocep",this.bairrosIniciando="",this.bairros=[],this.meses=[],this.margemEsquerda=5,this.margemDireita=7,this.margemSuperior=2,this.tamanhoFonte=6},getTotalCariocas:function(){var t=this;this.$bus.$emit("loading"),this.$http.request({url:"/etiqueta/gerar",data:{findTotal:!0,cariocas:!0},method:"POST"}).then(function(a){t.$bus.$emit("loading"),t.total=a.data}).catch(function(){t.$bus.$emit("loading")})},enviar:function(){var t=this;this.$bus.$emit("loading"),this.$http.request({url:"/etiqueta/gerar",data:this.$data,responseType:"blob",method:"POST"}).then(function(a){t.$bus.$emit("loading");var e=new Blob([a.data],{type:"application/zip"}),o=document.createElement("a"),i=window.URL||window.webkitURL;o.href=i.createObjectURL(e),o.download="etiquetas.zip",o.click()}).catch(function(){t.$bus.$emit("loading")})}}}},493:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"relative-position"},[e("g-card",{attrs:{titulo:t.$route.meta.name,contentPadding:!0,subtitulo:"Selecione os filtros e envie o pedido",titleClass:"bg-blue-8",titleSize:"col-xs-10 col-sm-8 col-md-6 col-lg-6",actionsClass:"bg-light"}},[e("template",{slot:"content"},[e("div",{staticClass:"row sm-gutter"},[e("div",{staticClass:"col-md-6 col-lg-12 col-xl-6"},[e("q-select",{attrs:{options:t.bairrosOpcoes,"float-label":"Tipo de busca no bairro",color:"secondary"},model:{value:t.buscaBairro,callback:function(a){t.buscaBairro=a},expression:"buscaBairro"}})],1),t._v(" "),e("div",{staticClass:"col-md-6 col-lg-12 col-xl-6",attrs:{"data-intro":"Digite o nome de um bairro e aperte ENTER"}},[e("q-chips-input",{ref:"chips",attrs:{color:"secondary","float-label":"Digite o nome dos bairros"},on:{keydown:function(a){return"button"in a||!t._k(a.keyCode,"tab",9,a.key,"Tab")?t.addTextoNaBusca(a):null}},model:{value:t.bairros,callback:function(a){t.bairros=a},expression:"bairros"}})],1)]),t._v(" "),e("div",{staticClass:"row sm-gutter"},[e("div",{staticClass:"col"},[e("p",{staticClass:"caption"},[t._v("Utilize algum combo pré definido de bairros :")]),t._v(" "),e("q-btn",{on:{click:function(a){t.setCombo(t.combo1)}}},[t._v(" Combo 1\n            "),e("q-tooltip",[t._v("\n              "+t._s(this.combo1)+"\n            ")])],1)],1),t._v(" "),e("div",{staticClass:"col"},[e("p",{staticClass:"caption"},[t._v("Selecione somente bairros cariocas :")]),t._v(" "),e("q-toggle",{model:{value:t.cariocas,callback:function(a){t.cariocas=a},expression:"cariocas"}})],1)]),t._v(" "),e("div",{staticClass:"row sm-gutter margin-top"},[e("div",{staticClass:"col"},[e("p",{staticClass:"caption"},[t._v("Bairros que comecem com as letras :")]),t._v(" "),e("q-radio",{attrs:{val:"A",label:"A-F"},model:{value:t.bairrosIniciando,callback:function(a){t.bairrosIniciando=a},expression:"bairrosIniciando"}}),t._v(" "),e("q-radio",{attrs:{val:"G",label:"G-M"},model:{value:t.bairrosIniciando,callback:function(a){t.bairrosIniciando=a},expression:"bairrosIniciando"}}),t._v(" "),e("q-radio",{attrs:{val:"N",label:"N-S"},model:{value:t.bairrosIniciando,callback:function(a){t.bairrosIniciando=a},expression:"bairrosIniciando"}}),t._v(" "),e("q-radio",{attrs:{val:"T",label:"T-Z"},model:{value:t.bairrosIniciando,callback:function(a){t.bairrosIniciando=a},expression:"bairrosIniciando"}})],1),t._v(" "),e("div",{staticClass:"col col-settings"},[e("q-collapsible",{attrs:{icon:"settings",label:"Configurações de margem"}},[e("q-list",[e("q-item",[e("q-item-side",{attrs:{icon:"keyboard_arrow_up"}}),t._v(" "),e("q-item-main",[e("q-slider",{attrs:{min:-10,max:50,"label-always":""},model:{value:t.margemSuperior,callback:function(a){t.margemSuperior=a},expression:"margemSuperior"}}),t._v(" "),e("q-tooltip",[t._v("\n                    Margem Superior\n                  ")])],1)],1),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"keyboard_arrow_left"}}),t._v(" "),e("q-item-main",[e("q-slider",{attrs:{max:50,"label-always":""},model:{value:t.margemEsquerda,callback:function(a){t.margemEsquerda=a},expression:"margemEsquerda"}}),t._v(" "),e("q-tooltip",[t._v("\n                    Margem Esquerda\n                  ")])],1)],1),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"keyboard_arrow_right"}}),t._v(" "),e("q-item-main",[e("q-slider",{attrs:{max:50,"label-always":""},model:{value:t.margemDireita,callback:function(a){t.margemDireita=a},expression:"margemDireita"}}),t._v(" "),e("q-tooltip",[t._v("\n                    Margem Direita\n                  ")])],1)],1),t._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"font_download"}}),t._v(" "),e("q-item-main",[e("q-slider",{attrs:{max:50,"label-always":""},model:{value:t.tamanhoFonte,callback:function(a){t.tamanhoFonte=a},expression:"tamanhoFonte"}}),t._v(" "),e("q-tooltip",[t._v("\n                    Tamanho da fonte\n                  ")])],1)],1)],1)],1)],1)])]),t._v(" "),e("div",{attrs:{slot:"actions"},slot:"actions"},[e("q-btn",{attrs:{"icon-right":"send",color:"blue-8","data-intro":"Clique em enviar para receber seu PDF com as etiquetas"},on:{click:t.enviar}},[t._v("Enviar")]),t._v(" "),e("q-btn",{attrs:{"icon-right":"clear",color:"faded"},on:{click:t.limpar}},[t._v("Limpar todos os campos")]),t._v("\n\n      Cariocas: "+t._s(t.total)+"\n    ")],1)],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});