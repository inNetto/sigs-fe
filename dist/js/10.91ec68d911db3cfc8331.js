webpackJsonp([10],{441:function(n,t,e){function a(n){o||e(534)}var o=!1,s=e(6)(e(536),e(542),a,"data-v-1e2d5e03",null);s.options.__file="C:\\laragon\\www\\html\\src\\components\\pages\\consultaDados.vue",s.esModule&&Object.keys(s.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] consultaDados.vue: functional components are not supported with templates, they should use render functions."),n.exports=s.exports},450:function(n,t,e){function a(n){o||e(451)}var o=!1,s=e(6)(e(453),e(454),a,"data-v-68cd846f",null);s.options.__file="C:\\laragon\\www\\html\\src\\components\\gCard.vue",s.esModule&&Object.keys(s.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] gCard.vue: functional components are not supported with templates, they should use render functions."),n.exports=s.exports},451:function(n,t,e){var a=e(452);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=e(8).default;o("040a96e4",a,!1,{})},452:function(n,t,e){t=n.exports=e(7)(!1),t.push([n.i,"\n.bg-light[data-v-68cd846f] {\r\n  padding-left: 2.5%;\n}\n.g-card-title[data-v-68cd846f] {\r\n  position: relative;\r\n  bottom: 20px;\r\n  margin-left: 5%;\r\n  color: #fff;\n}\n.q-card-main-padding[data-v-68cd846f] {\r\n  padding: 0px 50px 25px 50px;\n}\r\n",""])},453:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{icon:String,titulo:String,subtitulo:String,titleSize:String,titleClass:String,actionsClass:String,contentPadding:Boolean}}},454:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("q-card",{staticClass:"bg-white"},[e("div",{staticClass:"row"},[e("div",{class:n.titleSize},[e("q-card",{staticClass:"g-card-title",class:n.titleClass},[e("q-card-title",[e("span",[n._v(n._s(n.titulo))]),n._v(" "),e("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[n._v(n._s(n.subtitulo))])])],1)],1)]),n._v(" "),e("q-card-main",{class:n.contentPadding?"q-card-main-padding":""},[n._t("content")],2),n._v(" "),e("q-card-actions",{class:n.actionsClass},[n._t("actions")],2)],1)},staticRenderFns:[]},n.exports.render._withStripped=!0},534:function(n,t,e){var a=e(535);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=e(8).default;o("ad899c34",a,!1,{})},535:function(n,t,e){t=n.exports=e(7)(!1),t.push([n.i,"\n.q-card-main[data-v-1e2d5e03] {\r\n  padding: 3px;\n}\n.caption[data-v-1e2d5e03] {\r\n  margin: 3 px 0 0 0;\r\n  line-height: 4px;\n}\r\n",""])},536:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(19),s=a(o),i=e(537),l=a(i);t.default={components:{Filtros:l.default},data:function(){return{dadosFiltrados:{data:[]},filtros:{},page:1,columns:[{label:"Nome",field:"nome",title:"Nome",visible:!0,width:"15%",sort:!0},{label:"Sexo",field:"sexo",visible:!0,width:"60px"},{label:"Aniversário",field:"data_nascimento",title:"Nascimento",visible:!0},{label:"Residencial",field:"telefone1",title:"Tel. 1",visible:!0},{label:"Celular",field:"telefone2",title:"Tel. 2",visible:!0},{label:"Cep",field:"cep",visible:!0,width:"80px",sort:!0},{label:"Rua",field:"rua",visible:!0},{label:"Nº",field:"numero",title:"Número",width:"60px",visible:!0},{label:"Complemento",field:"complemento",title:"Compl.",visible:!1},{label:"Bairro",field:"bairro"},{label:"Atendimento",field:"atendimento"},{label:"Dt. Atendimento",field:"dt_atendimento"}],config:{rowHeight:"40px",title:"Pessoas Encontradas",columnPicker:!0,messages:{noData:"Sem dados a serem exibidos.",noDataAfterFiltering:"<i>warning</i> Nenhuma pessoa encontrada para os filtros escolhidos."},labels:{columns:"Colunas",allCols:"Todas",rows:"Linhas",clear:"Limpar",search:"Buscar",all:"All"}}}},watch:{page:function(){this.filtros.page=this.page,this.get(this.filtros)}},computed:{filteredColumns:function(){return this.$refs.table.columnSelection.filter(function(n){return"sexo"!==n}).join(",")},maxPages:function(){return Math.ceil(this.dadosFiltrados.total/this.dadosFiltrados.per_page)||1},queryParamFiltros:function(){var n=this;return(0,s.default)(this.filtros).map(function(t){return t+"="+n.filtros[t]}).join("&")},backEnd:function(){return"http://sigs.ong.br/api/public/api/"},sortTable:function(){return this.$refs.table.sorting.field||""}},methods:{filtrar:function(n){n.page=this.page,this.filtros=n,this.get(n)},downloadXls:function(){window.open(this.backEnd+"pessoas/all/excel?"+this.queryParamFiltros+"&columns="+this.filteredColumns+"&sort="+this.sortTable,"_blank")},downloadPdf:function(){window.open(this.backEnd+"pessoas/all/pdf?"+this.queryParamFiltros+"&columns="+this.filteredColumns+"&sort="+this.sortTable,"_blank")},get:function(n){var t=this;this.$bus.$emit("loading"),this.$http.request({url:"/pessoas",params:n}).then(function(n){t.$bus.$emit("loading"),t.dadosFiltrados=n.data}).catch(function(){t.$bus.$emit("loading")})},converteParamestrosParaString:function(){var n="";for(var t in this.moreParams)""!==this.moreParams[t]&&(n+=t+"="+this.moreParams[t]);return n}}}},537:function(n,t,e){function a(n){o||e(538)}var o=!1,s=e(6)(e(540),e(541),a,"data-v-c9294a7a",null);s.options.__file="C:\\laragon\\www\\html\\src\\components\\filtros.vue",s.esModule&&Object.keys(s.esModule).some(function(n){return"default"!==n&&"__"!==n.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] filtros.vue: functional components are not supported with templates, they should use render functions."),n.exports=s.exports},538:function(n,t,e){var a=e(539);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=e(8).default;o("3504c3ee",a,!1,{})},539:function(n,t,e){t=n.exports=e(7)(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},540:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(19),s=a(o),i=e(450),l=a(i),r=e(13),c=r.format.capitalize;t.default={components:{GCard:l.default},data:function(){return{listaMeses:this.$moment.months(),nome:"",sexo:"A",rua:"",cep:"",bairro:"",municipio:"",dia:"",mes:"",ano:"",anoMaximo:2020,optionsSexo:[{label:"Ambos",value:"A"},{label:"Masculino",value:"M"},{label:"Feminino",value:"F"}]}},computed:{mesesOrganizados:function(){return this.listaMeses.map(function(n,t){return{label:c(n),value:t}})}},methods:{filtrar:function(){var n={nome:this.nome,sexo:this.sexo,rua:this.rua,cep:this.cep,bairro:this.bairro,municipio:this.municipio,dia:this.adicionaZeroNoDia(this.dia),mes:this.adicionaZeroNoMes(this.mes),ano:this.ano};(0,s.default)(n).forEach(function(t){return""===n[t]&&delete n[t]}),this.$emit("filtrar",n)},limpar:function(){this.nome="",this.sexo="A",this.atendimento="",this.centroSocial="",this.rua="",this.cep="",this.bairro="",this.municipio="",this.dia="",this.mes="",this.ano=""},adicionaZeroNoDia:function(n){return n<10&&""!==n?"0"+n:n},adicionaZeroNoMes:function(n){return""===n?n:(n++,n<10?"0"+n:void 0)}}}},541:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("g-card",{attrs:{titulo:n.$route.meta.name,contentPadding:!0,subtitulo:"Gere um relatório pelos filtros",titleClass:"bg-blue-8",titleSize:"col-xs-10 col-sm-8 col-md-6 col-lg-6",actionsClass:"bg-light"}},[e("template",{slot:"content"},[e("div",{staticClass:"row xs-gutter"},[e("div",{staticClass:"col-5"},[e("q-input",{attrs:{"float-label":"Nome","max-length":50},model:{value:n.nome,callback:function(t){n.nome=t},expression:"nome"}})],1),n._v(" "),e("div",{staticClass:"col-2"},[e("q-input",{attrs:{"float-label":"Dia",type:"number",min:1,max:31},model:{value:n.dia,callback:function(t){n.dia=t},expression:"dia"}})],1),n._v(" "),e("div",{staticClass:"col-3"},[e("q-select",{attrs:{id:"select-mes","float-label":"Mês",type:"list",options:n.mesesOrganizados},model:{value:n.mes,callback:function(t){n.mes=t},expression:"mes"}})],1),n._v(" "),e("div",{staticClass:"col-2"},[e("q-input",{attrs:{"float-label":"Ano",type:"number",min:1900,max:n.anoMaximo},model:{value:n.ano,callback:function(t){n.ano=t},expression:"ano"}})],1)]),n._v(" "),e("div",{staticClass:"row xs-gutter"},[e("div",{staticClass:"col"},[e("q-select",{attrs:{"float-label":"Sexo",type:"list",options:n.optionsSexo},model:{value:n.sexo,callback:function(t){n.sexo=t},expression:"sexo"}})],1),n._v(" "),e("div",{staticClass:"col"},[e("q-input",{attrs:{"float-label":"Rua","max-length":35},model:{value:n.rua,callback:function(t){n.rua=t},expression:"rua"}})],1),n._v(" "),e("div",{staticClass:"col"},[e("q-input",{attrs:{"float-label":"Cep","max-length":11},model:{value:n.cep,callback:function(t){n.cep=t},expression:"cep"}})],1),n._v(" "),e("div",{staticClass:"col"},[e("q-input",{attrs:{"float-label":"Bairro","max-length":35},model:{value:n.bairro,callback:function(t){n.bairro=t},expression:"bairro"}})],1),n._v(" "),e("div",{staticClass:"col"},[e("q-input",{attrs:{"float-label":"Município","max-length":35},model:{value:n.municipio,callback:function(t){n.municipio=t},expression:"municipio"}})],1)])]),n._v(" "),e("div",{attrs:{slot:"actions"},slot:"actions"},[e("q-btn",{attrs:{color:"primary"},on:{click:function(t){n.filtrar()}}},[n._v("Filtrar")]),n._v(" "),e("q-btn",{attrs:{color:"warning"},on:{click:function(t){n.limpar()}}},[n._v("Limpar")])],1)],2)},staticRenderFns:[]},n.exports.render._withStripped=!0},542:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("filtros",{ref:"filter",on:{filtrar:n.filtrar}}),n._v(" "),e("q-card",[e("q-card-main",{staticClass:"bg-white"},[e("q-data-table",{ref:"table",attrs:{columns:n.columns,data:n.dadosFiltrados.data,config:n.config},scopedSlots:n._u([{key:"col-sexo",fn:function(t){return[null==t.row.sexo?e("span",[n._v("N/D")]):"M"==t.row.sexo?e("q-btn",{attrs:{small:"",color:"primary"}},[e("q-icon",{attrs:{name:"fa-mars"}})],1):e("q-btn",{attrs:{small:"",color:"pink"}},[e("q-icon",{attrs:{name:"fa-venus"}})],1)]}}])})],1),n._v(" "),e("q-card-actions",{staticClass:"bg-light row items-center "},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.dadosFiltrados.total>0,expression:"this.dadosFiltrados.total > 0"}],staticClass:"col"},[e("p",{staticClass:"caption"},[n._v("\n          Exibindo de\n          "),e("span",{staticClass:"text-bold text-secondary"},[n._v(n._s(n.dadosFiltrados.from))]),n._v("\n          a\n          "),e("span",{staticClass:"text-bold text-secondary"},[n._v(n._s(n.dadosFiltrados.to))])]),n._v(" "),e("p",{staticClass:"caption"},[n._v("\n          Total\n          "),e("span",{staticClass:"text-bold text-secondary"},[n._v(n._s(n.dadosFiltrados.total))]),n._v("\n          pessoas\n        ")])]),n._v(" "),e("div",{staticClass:"col"},[e("q-pagination",{directives:[{name:"show",rawName:"v-show",value:this.dadosFiltrados.total>10,expression:"this.dadosFiltrados.total > 10"}],attrs:{max:n.maxPages},model:{value:n.page,callback:function(t){n.page=t},expression:"page"}})],1),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.dadosFiltrados.total>0,expression:"this.dadosFiltrados.total > 0"}],staticClass:"col"},[e("q-btn",{attrs:{color:"red",icon:"fa-file-pdf-o"},on:{click:n.downloadPdf}},[n._v("Pdf")]),n._v(" "),e("q-btn",{attrs:{color:"green",icon:"fa-file-excel-o"},on:{click:n.downloadXls}},[n._v("Excel")])],1)])],1)],1)},staticRenderFns:[]},n.exports.render._withStripped=!0}});