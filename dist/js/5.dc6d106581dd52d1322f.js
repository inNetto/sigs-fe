webpackJsonp([5],{440:function(e,a,l){function o(e){t||l(530)}var t=!1,n=l(6)(l(532),l(533),o,"data-v-2d448a3b",null);n.options.__file="C:\\laragon\\www\\html\\src\\components\\pages\\cadastrarPessoa.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] cadastrarPessoa.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},450:function(e,a,l){function o(e){t||l(451)}var t=!1,n=l(6)(l(453),l(454),o,"data-v-68cd846f",null);n.options.__file="C:\\laragon\\www\\html\\src\\components\\gCard.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] gCard.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},451:function(e,a,l){var o=l(452);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var t=l(8).default;t("040a96e4",o,!1,{})},452:function(e,a,l){a=e.exports=l(7)(!1),a.push([e.i,"\n.bg-light[data-v-68cd846f] {\r\n  padding-left: 2.5%;\n}\n.g-card-title[data-v-68cd846f] {\r\n  position: relative;\r\n  bottom: 20px;\r\n  margin-left: 5%;\r\n  color: #fff;\n}\n.q-card-main-padding[data-v-68cd846f] {\r\n  padding: 0px 50px 25px 50px;\n}\r\n",""])},453:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:{icon:String,titulo:String,subtitulo:String,titleSize:String,titleClass:String,actionsClass:String,contentPadding:Boolean}}},454:function(e,a,l){e.exports={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("q-card",{staticClass:"bg-white"},[l("div",{staticClass:"row"},[l("div",{class:e.titleSize},[l("q-card",{staticClass:"g-card-title",class:e.titleClass},[l("q-card-title",[l("span",[e._v(e._s(e.titulo))]),e._v(" "),l("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v(e._s(e.subtitulo))])])],1)],1)]),e._v(" "),l("q-card-main",{class:e.contentPadding?"q-card-main-padding":""},[e._t("content")],2),e._v(" "),l("q-card-actions",{class:e.actionsClass},[e._t("actions")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},455:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=l(39);a.default={methods:{buscaCep:function(){var e=this;this.$bus.$emit("loading"),fetch("https://viacep.com.br/ws/"+this.pessoa.endereco.cep+"/json").then(function(a){a.json().then(function(a){if(a.erro)return e.notificaCepNaoEncontrado(),void e.$bus.$emit("loading");e.pessoa.endereco.rua=a.logradouro,e.pessoa.endereco.municipio=a.localidade,e.pessoa.endereco.bairro=a.bairro,e.$bus.$emit("loading")})}).catch(function(){e.$bus.$emit("loading")})},notificaCepNaoEncontrado:function(){(0,o.toast)("Nada encontrado para este cep","negative")},getTiposAtendimento:function(){var e=this;this.$http.get("tipos_atendimento").then(function(a){e.tiposAtendimento=a.data.data}).catch(function(e){console.log(e)})},getCentrosSociais:function(){var e=this;this.$http.get("centros_sociais").then(function(a){e.centrosSociais=a.data.data}).catch(function(e){console.log(e)})},getCursos:function(){var e=this;this.$http.get("cursoss").then(function(a){e.cursos=a.data.data}).catch(function(e){console.log(e)})}}}},457:function(e,a,l){var o,t;!function(n,i){o=i,void 0!==(t="function"==typeof o?o.call(a,l,a,e):o)&&(e.exports=t)}(0,function(){var e=[9,16,17,18,36,37,38,39,40,91,92,93],a=function(a){for(var l=0,o=e.length;l<o;l++)if(a==e[l])return!1;return!0},l=function(e){return e=e||{},e={delimiter:e.delimiter||".",lastOutput:e.lastOutput,precision:e.hasOwnProperty("precision")?e.precision:2,separator:e.separator||",",showSignal:e.showSignal,suffixUnit:e.suffixUnit&&" "+e.suffixUnit.replace(/[\s]/g,"")||"",unit:e.unit&&e.unit.replace(/[\s]/g,"")+" "||"",zeroCents:e.zeroCents},e.moneyPrecision=e.zeroCents?0:e.precision,e},o=function(e,a,l){for(;a<e.length;a++)"9"!==e[a]&&"A"!==e[a]&&"S"!==e[a]||(e[a]=l);return e},t=function(e){this.elements=e};t.prototype.unbindElementToMask=function(){for(var e=0,a=this.elements.length;e<a;e++)this.elements[e].lastOutput="",this.elements[e].onkeyup=!1,this.elements[e].onkeydown=!1,this.elements[e].value.length&&(this.elements[e].value=this.elements[e].value.replace(/\D/g,""))},t.prototype.bindElementToMask=function(e){for(var l=this,o=function(o){o=o||window.event;var t=o.target||o.srcElement;a(o.keyCode)&&setTimeout(function(){l.opts.lastOutput=t.lastOutput,t.value=n[e](t.value,l.opts),t.lastOutput=t.value,t.setSelectionRange&&l.opts.suffixUnit&&t.setSelectionRange(t.value.length,t.value.length-l.opts.suffixUnit.length)},0)},t=0,i=this.elements.length;t<i;t++)this.elements[t].lastOutput="",this.elements[t].onkeyup=o,this.elements[t].value.length&&(this.elements[t].value=n[e](this.elements[t].value,this.opts))},t.prototype.maskMoney=function(e){this.opts=l(e),this.bindElementToMask("toMoney")},t.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},t.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},t.prototype.maskPattern=function(e){this.opts={pattern:e},this.bindElementToMask("toPattern")},t.prototype.unMask=function(){this.unbindElementToMask()};var n=function(e){if(!e)throw new Error("VanillaMasker: There is no element to bind.");var a="length"in e?e.length?e:[]:[e];return new t(a)};return n.toMoney=function(e,a){if(a=l(a),a.zeroCents){a.lastOutput=a.lastOutput||"";var o="("+a.separator+"[0]{0,"+a.precision+"})",t=new RegExp(o,"g"),n=e.toString().replace(/[\D]/g,"").length||0,i=a.lastOutput.toString().replace(/[\D]/g,"").length||0;e=e.toString().replace(t,""),n<i&&(e=e.slice(0,e.length-1))}var s=e.toString().replace(/[\D]/g,""),r=new RegExp("^(0|\\"+a.delimiter+")"),u=new RegExp("(\\"+a.separator+")$"),d=s.substr(0,s.length-a.moneyPrecision),c=d.substr(0,d.length%3),v=new Array(a.precision+1).join("0");d=d.substr(d.length%3,d.length);for(var b=0,p=d.length;b<p;b++)b%3==0&&(c+=a.delimiter),c+=d[b];c=c.replace(r,""),c=c.length?c:"0";var m="";if(!0===a.showSignal&&(m=e<0||e.startsWith&&e.startsWith("-")?"-":""),!a.zeroCents){var f=s.length-a.precision,g=s.substr(f,a.precision),h=g.length;v=(v+g).slice(-(a.precision>h?a.precision:h))}return(a.unit+m+c+a.separator+v).replace(u,"")+a.suffixUnit},n.toPattern=function(e,a){var l,t="object"==typeof a?a.pattern:a,n=t.replace(/\W/g,""),i=t.split(""),s=e.toString().replace(/\W/g,""),r=s.replace(/\W/g,""),u=0,d=i.length,c="object"==typeof a?a.placeholder:void 0;for(l=0;l<d;l++){if(u>=s.length){if(n.length==r.length)return i.join("");if(void 0!==c&&n.length>r.length)return o(i,l,c).join("");break}if("9"===i[l]&&s[u].match(/[0-9]/)||"A"===i[l]&&s[u].match(/[a-zA-Z]/)||"S"===i[l]&&s[u].match(/[0-9a-zA-Z]/))i[l]=s[u++];else if("9"===i[l]||"A"===i[l]||"S"===i[l])return void 0!==c?o(i,l,c).join(""):i.slice(0,l).join("")}return i.join("").substr(0,l)},n.toNumber=function(e){return e.toString().replace(/(?!^-)[^0-9]/g,"")},n.toAlphaNumeric=function(e){return e.toString().replace(/[^a-z0-9 ]+/i,"")},n})},466:function(e,a,l){function o(e){t||l(467)}var t=!1,n=l(6)(l(469),l(472),o,"data-v-3cdada87",null);n.options.__file="C:\\laragon\\www\\html\\src\\components\\formulario\\formulario.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] formulario.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},467:function(e,a,l){var o=l(468);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var t=l(8).default;t("594847a4",o,!1,{})},468:function(e,a,l){a=e.exports=l(7)(!1),a.push([e.i,"\n#formulario[data-v-3cdada87],\r\n#endereco[data-v-3cdada87]{\r\n  margin-top: 5%;\n}\r\n",""])},469:function(e,a,l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var t=l(201),n=o(t),i=l(455),s=o(i),r=l(470),u=o(r),d=l(204),c=l(471),v=o(c);a.default={props:{pessoa:Object},mixins:[s.default,u.default],mounted:function(){var e=this;this.$watch("$v.$invalid",function(){e.$emit("valido",!e.$v.$invalid)}),this.pessoa.nome&&(this.$v.$touch(),this.$emit("valido",!this.$v.$invalid)),this.pessoaInalterada=(0,n.default)({},this.pessoa)},watch:{"pessoa.endereco.cep":function(){this.$v.pessoa.endereco.cep.minLength&&this.buscaCep()},pessoaFoiAlterada:function(){this.$emit("pessoaFoiAlterada",this.pessoaFoiAlterada),this.$v.$touch()}},computed:{pessoaFoiAlterada:function(){return!this.$lodash.isEqual(this.pessoa,this.pessoaInalterada)}},data:function(){return{profissoes:v.default,validationMessages:{pessoa:{data_nascimento:{required:"Data de nascimento é obrigatória.",minLength:"Complete o telefone."},sexo:{required:"Sexo é obrigatório."},endereco:{cep:{required:"Cep é obrigatório.",minLength:"Complete o cep."},rua:{required:"Rua é obrigatoria."},numero:{required:"Número é obrigatório."},municipio:{required:"Município é obrigatório."}}}},optionsSexo:[{label:"Masculino",value:"M"},{label:"Feminino",value:"F"}],optionsEstadoCivil:[{label:"Solteiro",value:"0"},{label:"Casado",value:"1"},{label:"Separado",value:"2"},{label:"Divorciado",value:"3"},{label:"Viúvo",value:"viuvo"}],optionsCor:[{label:"Branco",value:"0"},{label:"Pardo",value:"1"},{label:"Preto",value:"2"},{label:"Amarelo",value:"3"},{label:"Indígena",value:"4"},{label:"Não sabe",value:"5"}],optionsEscolaridade:[{label:"Primeiro Grau",value:"0"},{label:"Segundo Grau",value:"1"},{label:"Graduação",value:"2"},{label:"Pós Graduação",value:"3"},{label:"Mestrado",value:"4"},{label:"Doutorado",value:"5"}],pessoaInalterada:{}}},validations:function(){return this.pessoaFoiAlterada?{pessoa:{data_nascimento:{required:d.required,minLength:(0,d.minLength)(10)},sexo:{required:d.required},endereco:{cep:{required:d.required,minLength:(0,d.minLength)(8)},rua:{required:d.required},numero:{required:d.required},municipio:{required:d.required},bairro:{required:d.required}}}}:{pessoa:{endereco:{}}}}}},470:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=l(457),t=function(e){return e&&e.__esModule?e:{default:e}}(o);a.default={computed:{maskedCelular:{get:function(){return null==this.pessoa.telefone?"":t.default.toPattern(this.pessoa.telefone,"(99) 99999-9999")},set:function(e){this.pessoa.telefone=e}},maskedDataNascimento:{get:function(){return null==this.pessoa.data_nascimento?"":t.default.toPattern(this.pessoa.data_nascimento,"99/99/9999")},set:function(e){this.pessoa.data_nascimento=e}},maskedCep:{get:function(){return null==this.pessoa.endereco.cep?"":t.default.toPattern(this.pessoa.endereco.cep,"99999-999")},set:function(e){this.pessoa.endereco.cep=e.replace("-","")}},maskedDataAtendimento:{get:function(){return null==this.atendimento.data_atendimento?"":t.default.toPattern(this.atendimento.data_atendimento,"99/99/9999")},set:function(e){this.atendimento.data_atendimento=e}}}}},471:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={profissoes:[{value:"389",label:"Administrador de Rede"},{value:"5",label:"Administrador(a)"},{value:"405",label:"Administrador(a) de Banco de Dados"},{value:"64",label:"Administrador(a) de Empresas"},{value:"192",label:"Administrador(a) de Recursos Humanos"},{value:"293",label:"Administrador(a) Hospitalar"},{value:"188",label:"Administradora de Serviços do Lar"},{value:"3",label:"Advogado(a)"},{value:"410",label:"Agente Ambiental"},{value:"32",label:"Agricultor(a)"},{value:"102",label:"Agrônomo(a)"},{value:"110",label:"Agropecuarista"},{value:"278",label:"Ajudante de Caminhão"},{value:"251",label:"Ajudante de Composição"},{value:"254",label:"Ajudante de Foguista"},{value:"253",label:"Ajudante de Vidreiro"},{value:"130",label:"Almoxarife"},{value:"285",label:"Analista"},{value:"104",label:"Analista Administrativo (a)"},{value:"66",label:"Analista Contábil"},{value:"376",label:"Analista de Administração de Pessoal"},{value:"244",label:"Analista de Captação"},{value:"220",label:"Analista de Contratos"},{value:"247",label:"Analista de Controladoria"},{value:"71",label:"Analista de Controle Interno"},{value:"23",label:"Analista de Crédito"},{value:"16",label:"Analista de Custos"},{value:"375",label:"Analista de Departamento Pessoal"},{value:"401",label:"Analista de Exportação"},{value:"237",label:"Analista de Faturamento"},{value:"248",label:"Analista de IT"},{value:"79",label:"Analista de Laboratório"},{value:"213",label:"Analista de Logística"},{value:"325",label:"Analista de Marketing"},{value:"215",label:"Analista de Negócios"},{value:"217",label:"Analista de Orçamentos"},{value:"100",label:"Analista de Organização e Métodos"},{value:"238",label:"Analista de Pessoal"},{value:"113",label:"Analista de Recursos Humanos"},{value:"406",label:"Analista de Remuneração Senior"},{value:"36",label:"Analista de Sistemas"},{value:"321",label:"Analista de Suporte Administrativo"},{value:"304",label:"Analista de Suporte Pleno"},{value:"363",label:"Analista de Tecidos"},{value:"134",label:"Analista de Vendas"},{value:"65",label:"Analista Financeiro"},{value:"135",label:"Analista Fiscal"},{value:"245",label:"Analista Senior de Previdência Privada"},{value:"208",label:"Analista Tributária"},{value:"277",label:"Apicultor(a)"},{value:"96",label:"Aposentado(a)"},{value:"190",label:"Armador de Pesca"},{value:"126",label:"Arquiteto(a)"},{value:"123",label:"Artesão(ã)"},{value:"18",label:"Assistente Administrativo"},{value:"408",label:"Assistente Comercial"},{value:"326",label:"Assistente Contábil"},{value:"232",label:"Assistente de Contas"},{value:"10",label:"Assistente de Departamento Pessoal"},{value:"55",label:"Assistente de Escritório"},{value:"59",label:"Assistente de Faturamento"},{value:"236",label:"Assistente de Gerencia de R.H."},{value:"182",label:"Assistente de Hotelaria Hospitalar"},{value:"85",label:"Assistente de Planejamento"},{value:"402",label:"Assistente de Processo"},{value:"317",label:"Assistente de Produção"},{value:"60",label:"Assistente de Recursos Humanos"},{value:"360",label:"Assistente de Suprimentos"},{value:"56",label:"Assistente Financeiro"},{value:"61",label:"Assistente Jurídico"},{value:"48",label:"Assistente Social"},{value:"283",label:"Assistente Técnico Operacional"},{value:"193",label:"Atendente"},{value:"398",label:"Ator"},{value:"397",label:"Atriz"},{value:"118",label:"Auditor(a)"},{value:"209",label:"Auditor(a) Fiscal"},{value:"171",label:"Autônomo(a)"},{value:"199",label:"Aux. de Serviços Gerais"},{value:"274",label:"Auxiliar Acadêmico"},{value:"17",label:"Auxiliar Administrativo"},{value:"12",label:"Auxiliar Contábil"},{value:"255",label:"Auxiliar de Compras"},{value:"334",label:"Auxiliar de Cozinha"},{value:"381",label:"Auxiliar de Departamento de Crédito"},{value:"380",label:"Auxiliar de Departamento Financeiro"},{value:"365",label:"Auxiliar de Departamento Fiscal"},{value:"187",label:"Auxiliar de eletricista"},{value:"181",label:"Auxiliar de Enfermagem"},{value:"94",label:"Auxiliar de Escritório"},{value:"83",label:"Auxiliar de Inspeção de Qualidade"},{value:"275",label:"Auxiliar de Laboratório"},{value:"97",label:"Auxiliar de Produção"},{value:"257",label:"Auxiliar de Registro de Saúde"},{value:"6",label:"Auxiliar de RH"},{value:"261",label:"Auxiliar de Serviços"},{value:"84",label:"Auxiliar Financeiro"},{value:"250",label:"Auxiliar Operacional"},{value:"52",label:"Auxiliar Técnico"},{value:"98",label:"Avicultor( a )"},{value:"266",label:"Bailarina (o)"},{value:"29",label:"Bancário(a)"},{value:"354",label:"Biólogo(a)"},{value:"90",label:"Biomédico (a)"},{value:"386",label:"Cabeleireiro(a)"},{value:"189",label:"Caminhoneiro (a)"},{value:"286",label:"carregador"},{value:"22",label:"Catador(a)"},{value:"249",label:"Catraqueiro"},{value:"307",label:"Chefe da Secretaria de Expediente"},{value:"328",label:"Chefe de Recursos Humanos"},{value:"115",label:"Chefe de Serviços de Transporte"},{value:"30",label:"Cirurgião(ã) Dentista"},{value:"409",label:"Citricultor(a)"},{value:"125",label:"Coletor(a) de Material Reciclável"},{value:"15",label:"Comerciante"},{value:"50",label:"Comerciário(a)"},{value:"68",label:"Comprador(a)"},{value:"175",label:"Comunicador(a) Social"},{value:"366",label:"Condutor(a) Autônomo(a)"},{value:"89",label:"Condutor(a) Escolar"},{value:"374",label:"Conferente"},{value:"289",label:"construtor"},{value:"191",label:"Consultor(a) Administrativo"},{value:"184",label:"Consultor(a) de Vendas"},{value:"9",label:"Contabilista"},{value:"49",label:"Contador(a)"},{value:"336",label:"Contramestre"},{value:"70",label:"Controller"},{value:"210",label:"Coordenador(a)"},{value:"67",label:"Coordenador(a) Administrativo Pessoal"},{value:"211",label:"Coordenador(a) de Atendimento"},{value:"219",label:"Coordenador(a) de Controladoria"},{value:"200",label:"Coordenador(a) de Controle de Qualidade"},{value:"72",label:"Coordenador(a) de Controle Interno"},{value:"359",label:"Coordenador(a) de Engenharia Industrial"},{value:"404",label:"Coordenador(a) de Exportação"},{value:"316",label:"Coordenador(a) de Impostos"},{value:"77",label:"Coordenador(a) de Instrumentos"},{value:"295",label:"Coordenador(a) de Manutenção"},{value:"131",label:"Coordenador(a) de Produção"},{value:"310",label:"Coordenador(a) de Projetos"},{value:"395",label:"Coordenador(a) de Recursos Humanos"},{value:"212",label:"Coordenador(a) de Suprimentos"},{value:"197",label:"Coordenador(a) de Transportes"},{value:"327",label:"Coordenador(a) de Vendas"},{value:"370",label:"Coordenador(a) Pedagógico(a)"},{value:"264",label:"Coreógrafo"},{value:"225",label:"Corretor(a) de Imóveis"},{value:"88",label:"Corretor(a) de Seguros"},{value:"19",label:"Costureiro(a)"},{value:"333",label:"Cozinheiro(a)"},{value:"223",label:"Cronoanalista"},{value:"332",label:"Cuidador(a) de idoso"},{value:"265",label:"Dançarina"},{value:"227",label:"Delegado"},{value:"25",label:"Dentista"},{value:"344",label:"Desenvolvedor de Arte"},{value:"345",label:"Desenvolvedor de Produtos Texteis"},{value:"367",label:"Despachante"},{value:"353",label:"Digitador(a)"},{value:"226",label:"Diretor"},{value:"243",label:"Diretor (a) Executivo (a)"},{value:"262",label:"Diretor de Escola"},{value:"218",label:"Diretor de Recursos Humanos"},{value:"378",label:"Diretor(a) de Assuntos Técnicos"},{value:"319",label:"Diretor(a) de Criação"},{value:"320",label:"Diretor(a) de Produções"},{value:"329",label:"Diretor(a) de Relações Públicas"},{value:"379",label:"Diretor(a) de Relações Públicas e Sociais"},{value:"288",label:"Do lar"},{value:"45",label:"Economista"},{value:"74",label:"Eletricista"},{value:"47",label:"Eletricitário"},{value:"202",label:"Embalador(a)"},{value:"185",label:"Embalador(a) de Produtos"},{value:"124",label:"Empregada Doméstica"},{value:"87",label:"Empresário(a)"},{value:"42",label:"Empresário(a) Rural"},{value:"234",label:"Encarregado Automotivo"},{value:"235",label:"Encarregado de Controladoria"},{value:"207",label:"Encarregado(a)"},{value:"318",label:"Encarregado(a) de Mídia"},{value:"26",label:"Enfermeiro(a)"},{value:"1",label:"Engenheiro(a)"},{value:"368",label:"Engenheiro(a) Administrador(a)"},{value:"44",label:"Engenheiro(a) Agrônomo(a)"},{value:"93",label:"Engenheiro(a) Civil"},{value:"169",label:"Engenheiro(a) de Alimentos"},{value:"400",label:"Engenheiro(a) de Desenvolvimento Ambiental"},{value:"315",label:"Engenheiro(a) de Segurança do Trabalho"},{value:"299",label:"Engenheiro(a) Eletricista"},{value:"172",label:"Engenheiro(a) Florestal"},{value:"168",label:"Engenheiro(a) Mecânico"},{value:"308",label:"Engenheiro(a) Naval"},{value:"312",label:"Engenheiro(a) Químico(a)"},{value:"372",label:"Escrevente Técnico Judiciário"},{value:"229",label:"Escrituraria"},{value:"11",label:"Escriturario(a)"},{value:"399",label:"Especialista em Banco de Dados"},{value:"260",label:"Estudante"},{value:"14",label:"Farmacêutica(o)"},{value:"362",label:"Faturista"},{value:"291",label:"faxineira (o)"},{value:"127",label:"Ferramenteiro"},{value:"323",label:"Ferroviário"},{value:"27",label:"Fisioterapeuta"},{value:"305",label:"Floricultor(a)"},{value:"196",label:"Fotógrafo(a)"},{value:"174",label:"Funcionário(a) Público(a)"},{value:"292",label:"funileiro"},{value:"313",label:"Geógrafo(a)"},{value:"330",label:"Geólogo(a)"},{value:"373",label:"Gerente"},{value:"69",label:"Gerente de Área"},{value:"382",label:"Gerente de Contabilidade"},{value:"119",label:"Gerente de Crédito e Cobrança"},{value:"411",label:"Gerente de Faturamento"},{value:"120",label:"Gerente de Recursos Humanos"},{value:"117",label:"Gerente de Serviços de Transporte"},{value:"306",label:"Gerente de Sistemas"},{value:"350",label:"Gerente de Tecnologa da Informação"},{value:"246",label:"Gerente de Tributário"},{value:"177",label:"Gerente de Vendas"},{value:"114",label:"Gerente de Vendas Distribuidores"},{value:"233",label:"Gerente Departamento de Compra"},{value:"230",label:"Gerente Financeiro"},{value:"394",label:"Gerente Operacional"},{value:"133",label:"Gerente Regional de Vendas"},{value:"111",label:"Gestor(a) de Logística"},{value:"314",label:"Gestor(a) de Negócios"},{value:"86",label:"Gestor(a) de Projetos"},{value:"324",label:"Gestor(a) Financeiro"},{value:"335",label:"Impressor"},{value:"51",label:"Industriário(a)"},{value:"128",label:"Inspetor de Qualidade"},{value:"73",label:"Instrumentista"},{value:"35",label:"Intérprete"},{value:"287",label:"Jardineiro"},{value:"4",label:"Jornalista"},{value:"179",label:"Lavrador(a)"},{value:"203",label:"Líder de Embalagem"},{value:"204",label:"Líder de Higienização"},{value:"107",label:"Líder de Recepção"},{value:"392",label:"Marceneiro"},{value:"297",label:"Matemático(a)"},{value:"112",label:"Mecânico"},{value:"270",label:"Mecânico de Manutenção"},{value:"2",label:"Medico(a)"},{value:"284",label:"Médico(a) Pediátrico(a)"},{value:"33",label:"Médico(a) Veterinário(a)"},{value:"53",label:"Metalúrgico"},{value:"92",label:"Militar"},{value:"388",label:"Ministro Religioso"},{value:"20",label:"Motorista"},{value:"43",label:"Nutricionista"},{value:"91",label:"Odontólogo (a)"},{value:"180",label:"Oficial de Cartório"},{value:"369",label:"Oficial de Justiça"},{value:"121",label:"Oficial de Promotoria"},{value:"80",label:"Oleiro(a)"},{value:"129",label:"Operador (a)"},{value:"99",label:"Operador (a) de Crédito Rural"},{value:"242",label:"Operador de Caldeira"},{value:"343",label:"Operador de Conicaleira"},{value:"341",label:"Operador de Máquina"},{value:"342",label:"Operador de Texturização"},{value:"201",label:"Operador(a) de Caldeira"},{value:"78",label:"Operador(a) de Forming"},{value:"351",label:"Operador(a) de Imagem"},{value:"268",label:"Operador(a) de Máquinas"},{value:"205",label:"Orientador(a) Educacional"},{value:"40",label:"Pecuarista"},{value:"263",label:"Pedagogo(a)"},{value:"290",label:"pedreiro"},{value:"252",label:"Pedreiro Refratarista"},{value:"76",label:"Planejador(a) de Manutenção"},{value:"95",label:"Policial"},{value:"122",label:"Policial Rodoviário"},{value:"331",label:"Porteiro(a)"},{value:"198",label:"Prensista"},{value:"267",label:"Produtor (a)"},{value:"195",label:"Produtor(a) Agropecuário"},{value:"41",label:"Produtor(a) Rural"},{value:"24",label:"Professor(a)"},{value:"356",label:"Profissional Liberal"},{value:"38",label:"Programador(a)"},{value:"46",label:"Psicólogo(a)"},{value:"167",label:"Publicitário(a)"},{value:"309",label:"Químico(a)"},{value:"279",label:"Reciclador(a)"},{value:"186",label:"Reciclador(a) Ambiental Autônomo(a)"},{value:"340",label:"Recobridor"},{value:"8",label:"Representante Comercial"},{value:"358",label:"Secretária Bilíngue"},{value:"216",label:"Secretária de Diretoria"},{value:"280",label:"Secretária Executiva"},{value:"7",label:"Secretária(o)"},{value:"377",label:"Securitário(a)"},{value:"387",label:"Segurança"},{value:"108",label:"Selecionador(a)"},{value:"391",label:"Serralherio"},{value:"109",label:"Servidor(a) Público(a)"},{value:"173",label:"Sociólogo"},{value:"28",label:"Supervisor(a)"},{value:"170",label:"Supervisor(a) Administrativo"},{value:"407",label:"Supervisor(a) de Adminstração de Pessoal"},{value:"396",label:"Supervisor(a) de Atendimento"},{value:"221",label:"Supervisor(a) de Compras"},{value:"222",label:"Supervisor(a) de Custos"},{value:"303",label:"Supervisor(a) de Elétrica e Instrumentação"},{value:"271",label:"Supervisor(a) de Manufatura"},{value:"384",label:"Supervisor(a) de Manutenção Industrial"},{value:"364",label:"Supervisor(a) de Matéria-Prima"},{value:"116",label:"Supervisor(a) de Operações"},{value:"403",label:"Supervisor(a) de Produção"},{value:"241",label:"Supervisor(a) de Recursos Humanos"},{value:"357",label:"Supervisor(a) de Suprimentos"},{value:"206",label:"Supervisor(a) de Tesouraria"},{value:"228",label:"Supervisor(a) Financeiro"},{value:"383",label:"Supervisor(a) Fiscal"},{value:"298",label:"Tabelião"},{value:"31",label:"Taxista"},{value:"338",label:"Tecelão"},{value:"269",label:"Técinico em Kaizen"},{value:"259",label:"Técnica Agropecuária"},{value:"106",label:"Técnico (a) Administrativo (a)"},{value:"258",label:"Técnico de Métodos Gráficos"},{value:"224",label:"Técnico de Operação de Usina Hidrelétrica"},{value:"346",label:"Técnico de Tinturaria"},{value:"21",label:"Técnico em Informática"},{value:"37",label:"Técnico em Processamento"},{value:"101",label:"Técnico(a) Agrícola"},{value:"281",label:"Técnico(a) de Enfermagem"},{value:"183",label:"Técnico(a) de Gesso"},{value:"273",label:"Técnico(a) de Manutenção Elétrico"},{value:"296",label:"Técnico(a) de Processos"},{value:"63",label:"Técnico(a) em Contabilidade"},{value:"214",label:"Técnico(a) em Edificações"},{value:"371",label:"Técnico(a) em Eletrônica"},{value:"39",label:"Técnico(a) em Informática"},{value:"178",label:"Técnico(a) em Meio Ambiente"},{value:"82",label:"Técnico(a) em Plástico"},{value:"282",label:"Técnico(a) em Radiologia Médica"},{value:"132",label:"Técnico(a) em Segurança do Trabalho"},{value:"355",label:"Técnico(a) Mecânico(a)"},{value:"302",label:"Técnico(a) Químico Industrial"},{value:"272",label:"Tecnólogo do Produto Sênior"},{value:"231",label:"Tecnólogo em Gestão Financeira"},{value:"256",label:"Tecnólogo em Telecomunicações"},{value:"311",label:"Tecnólogo(a)"},{value:"294",label:"Tecnólogo(a) de Processo de Produção"},{value:"276",label:"Tecnólogo(a) em Processamento de Dados"},{value:"81",label:"Tecnólogo(a) Mecânico"},{value:"194",label:"Telefonista"},{value:"337",label:"Tintureiro"},{value:"393",label:"Torneiro Mecânico"},{value:"34",label:"Tradutor(a)"},{value:"339",label:"Urdidor"},{value:"301",label:"Vendedor(a)"},{value:"75",label:"Vidreiro(a)"},{value:"300",label:"Vigilante"},{value:"390",label:"Web Designer"},{value:"54",label:"Zootécnico(a)"}]}},472:function(e,a,l){e.exports={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{attrs:{id:"formulario"}},[l("div",{staticClass:"row wrap sm-gutter"},[l("div",{staticClass:"col "},[l("g-input",{attrs:{label:"Data de Nascimento","max-length":10,validation:e.$v.pessoa.data_nascimento,"validation-messages":e.validationMessages.pessoa.data_nascimento},model:{value:e.maskedDataNascimento,callback:function(a){e.maskedDataNascimento=a},expression:"maskedDataNascimento"}}),e._v(" "),l("q-input",{attrs:{"float-label":"Naturalidade","max-length":16},model:{value:e.pessoa.naturalidade,callback:function(a){e.$set(e.pessoa,"naturalidade",a)},expression:"pessoa.naturalidade"}})],1),e._v(" "),l("div",{staticClass:"col "},[l("q-input",{attrs:{"float-label":"Cpf","max-length":11},model:{value:e.pessoa.cpf,callback:function(a){e.$set(e.pessoa,"cpf",a)},expression:"pessoa.cpf"}}),e._v(" "),l("q-input",{attrs:{"float-label":"Documento Alternativo","max-length":25},model:{value:e.pessoa.doc_alternativo,callback:function(a){e.$set(e.pessoa,"doc_alternativo",a)},expression:"pessoa.doc_alternativo"}})],1)]),e._v(" "),l("div",{staticClass:"row wrap sm-gutter"},[l("div",{staticClass:"col "},[l("g-input",{attrs:{label:"Telefone","max-length":15,validation:e.$v.pessoa.telefone,"validation-messages":e.validationMessages.pessoa.telefone},model:{value:e.maskedCelular,callback:function(a){e.maskedCelular=a},expression:"maskedCelular"}})],1),e._v(" "),l("div",{staticClass:"col "},[l("g-select",{attrs:{label:"Sexo",validation:e.$v.pessoa.sexo,type:"option","validation-messages":e.validationMessages.pessoa.sexo,options:e.optionsSexo},model:{value:e.pessoa.sexo,callback:function(a){e.$set(e.pessoa,"sexo",a)},expression:"pessoa.sexo"}})],1)]),e._v(" "),l("div",{staticClass:"row wrap sm-gutter"},[l("div",{staticClass:"col "},[l("g-select",{attrs:{label:"Profissão",type:"option",options:e.profissoes.profissoes},model:{value:e.pessoa.profissao,callback:function(a){e.$set(e.pessoa,"profissao",a)},expression:"pessoa.profissao"}})],1),e._v(" "),l("div",{staticClass:"col "},[l("g-select",{attrs:{label:"Escoladirade",type:"option",options:e.optionsEscolaridade},model:{value:e.pessoa.escolaridade,callback:function(a){e.$set(e.pessoa,"escolaridade",a)},expression:"pessoa.escolaridade"}})],1),e._v(" "),l("div",{staticClass:"col "},[l("g-select",{attrs:{label:"Estado civil",options:e.optionsEstadoCivil,type:"option"},model:{value:e.pessoa.estado_civil,callback:function(a){e.$set(e.pessoa,"estado_civil",a)},expression:"pessoa.estado_civil"}})],1),e._v(" "),l("div",{staticClass:"col "},[l("g-select",{attrs:{label:"Cor / Raça",type:"option",options:e.optionsCor},model:{value:e.pessoa.cor,callback:function(a){e.$set(e.pessoa,"cor",a)},expression:"pessoa.cor"}})],1)]),e._v(" "),l("div",{staticClass:"row wrap sm-gutter",attrs:{id:"endereco"}},[l("div",{staticClass:"col-xs-12 col-sm-6 col-md-3"},[l("g-input",{attrs:{label:"Cep","max-length":9,validation:e.$v.pessoa.endereco.cep,"validation-messages":e.validationMessages.pessoa.endereco.cep},model:{value:e.maskedCep,callback:function(a){e.maskedCep=a},expression:"maskedCep"}})],1),e._v(" "),l("div",{staticClass:"col-xs-12 col-sm-10 col-md-7"},[l("g-input",{attrs:{label:"Rua",validation:e.$v.pessoa.endereco.rua,"validation-messages":e.validationMessages.pessoa.endereco.rua},model:{value:e.pessoa.endereco.rua,callback:function(a){e.$set(e.pessoa.endereco,"rua",a)},expression:"pessoa.endereco.rua"}})],1),e._v(" "),l("div",{staticClass:"col-xs-12 col-sm-2 col-md-2"},[l("g-input",{attrs:{label:"Número",validation:e.$v.pessoa.endereco.numero,"validation-messages":e.validationMessages.pessoa.endereco.numero},model:{value:e.pessoa.endereco.numero,callback:function(a){e.$set(e.pessoa.endereco,"numero",a)},expression:"pessoa.endereco.numero"}})],1)]),e._v(" "),l("div",{staticClass:"row wrap sm-gutter"},[l("div",{staticClass:"col-xs-12 col-sm-12 col-md-4"},[l("g-input",{attrs:{label:"Município","max-length":25,validation:e.$v.pessoa.endereco.municipio,"validation-messages":e.validationMessages.pessoa.endereco.municipio},model:{value:e.pessoa.endereco.municipio,callback:function(a){e.$set(e.pessoa.endereco,"municipio",a)},expression:"pessoa.endereco.municipio"}})],1),e._v(" "),l("div",{staticClass:"col-xs-12 col-sm-12 col-md-4 "},[l("q-input",{attrs:{"float-label":"Bairro","max-length":25,validate:e.$v.pessoa.endereco.bairro},model:{value:e.pessoa.endereco.bairro,callback:function(a){e.$set(e.pessoa.endereco,"bairro",a)},expression:"pessoa.endereco.bairro"}})],1),e._v(" "),l("div",{staticClass:"col-xs-12 col-sm-12 col-md-4"},[l("q-input",{attrs:{"float-label":"Sub. Bairro","max-length":25},model:{value:e.pessoa.endereco.sub_bairro,callback:function(a){e.$set(e.pessoa.endereco,"sub_bairro",a)},expression:"pessoa.endereco.sub_bairro"}})],1)]),e._v(" "),l("div",{staticClass:"row sm-gutter"},[l("div",{staticClass:"col"},[l("q-input",{attrs:{"float-label":"Complemento"},model:{value:e.pessoa.endereco.complemento,callback:function(a){e.$set(e.pessoa.endereco,"complemento",a)},expression:"pessoa.endereco.complemento"}})],1)])])},staticRenderFns:[]},e.exports.render._withStripped=!0},530:function(e,a,l){var o=l(531);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var t=l(8).default;t("0b166c37",o,!1,{})},531:function(e,a,l){a=e.exports=l(7)(!1),a.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},532:function(e,a,l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var t=l(28),n=o(t),i=l(19),s=o(i),r=l(466),u=o(r),d=l(450),c=o(d),v=l(455),b=o(v),p=l(39),m=l(20);a.default={components:{Formulario:u.default,GCard:c.default},mixins:[b.default],data:function(){return{terms:"",pessoasBuscadas:[],showFormulario:!1,pessoaSelecionada:{telefone:"",data_nascimento:"",endereco:{cep:"",rua:"",bairro:"",municipio:""}},valido:!1}},watch:{terms:function(){this.terms.length<4&&(this.showFormulario=!1)}},methods:{search:function(e,a){var l=this;this.searching=!0,this.$http.get("/pessoas/like/"+this.nomeParaQuery).then(function(e){l.pessoasBuscadas=e.data,l.showFormulario=l.terms.length>3&&0===l.pessoasBuscadas.length,a(l.pessoasOrganizadas)}).catch(function(){})},salvar:function(){var e=this;this.$bus.$emit("loading"),this.pessoaSelecionada.nome=this.terms,this.pessoaSelecionada.user_id=this.getUserProfile.id,this.$http.post("pessoas",this.pessoaSelecionada).then(function(a){e.$bus.$emit("loading"),e.reset(),(0,p.toast)("Pessoa cadastrada com sucesso!","positive")}).catch(function(a){e.$bus.$emit("loading"),e.notificacaoFalha(a)})},selected:function(e){this.terms=e.label,this.$router.push({name:"edicao",params:{id:e.value}})},setValido:function(e){this.valido=e},loading:function(){this.$emit("loading")},notificacaoFalha:function(e){var a="";(0,s.default)(e.response.data).forEach(function(l){a+=e.response.data[l]+"<br />"}),(0,p.toast)(a,"negative")},reset:function(){this.showFormulario=!1,this.terms="",this.pessoaSelecionada={telefone:"",data_nascimento:"",endereco:{cep:"",rua:"",bairro:"",municipio:""}}}},computed:(0,n.default)({},(0,m.mapGetters)(["getUserProfile"]),{nomeParaQuery:function(){return this.terms.split(" ").join("_")},pessoasOrganizadas:function(){return this.pessoasBuscadas.map(function(e){return{label:e.nome,sublabel:"Aniversário: "+e.data_nascimento,value:e.id}})}})}},533:function(e,a,l){e.exports={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("g-card",{attrs:{titulo:e.$route.meta.name,contentPadding:!0,subtitulo:"Cadastre uma nova pessoa",titleClass:"bg-blue-8",titleSize:"col-xs-10 col-sm-8 col-md-6 col-lg-6",actionsClass:"bg-light"}},[l("div",{staticClass:"row",attrs:{slot:"content"},slot:"content"},[l("div",{staticClass:"col-6"},[l("q-search",{attrs:{color:"secondary",placeholder:"Busque a pessoa pelo nome"},model:{value:e.terms,callback:function(a){e.terms=a},expression:"terms"}},[l("q-autocomplete",{attrs:{debounce:0,"min-characters":3,"max-results":15},on:{search:e.search,selected:e.selected}})],1)],1)]),e._v(" "),l("q-transition",{attrs:{slot:"content",enter:"fadeInDown",leave:"fadeOutUp"},slot:"content"},[e.showFormulario?l("formulario",{attrs:{pessoa:e.pessoaSelecionada},on:{valido:e.setValido}}):e._e()],1),e._v(" "),l("q-transition",{attrs:{slot:"actions",enter:"fadeIn",leave:"fadeOut"},slot:"actions"},[e.showFormulario?l("div",{staticClass:"row xs-gutter"},[l("div",{staticClass:"col-auto"},[l("q-btn",{attrs:{icon:"save",color:"green",disabled:!e.valido},on:{click:e.salvar}},[e._v("Salvar")])],1)]):e._e()])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});