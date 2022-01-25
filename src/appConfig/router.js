import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from './store'
Vue.use(VueRouter)

/* eslint-disable */
function load (component) {
  return () => import(`@/pages/${component}.vue`)
}

const router = new VueRouter({
  mode: 'history',
  base: '/html/',
  routes: [
    {
      path: '/login',
      caseSensitive: true,
      component: load('login'),
      meta: { requiresAuth: false, help: false }
    },
    {
      path: '',
      name: 'home',
      component: load('home'),
      meta: { requiresAuth: true },
      meta: { name: 'Inicio', help: false }
    },
    {
      path: '/cadastro-pessoa',
      name: 'cadastro',
      component: load('cadastrarPessoa'),
      meta: { name: 'Cadastro de pessoas', backButton: true }
    },
    {
      path: '/editar-pessoa/:id',
      name: 'edicao',
      component: load('editarPessoa'),
      meta: { name: 'Editar pessoa', backButton: true }
    },
    {
      path: '/mala-aniversario',
      name: 'mala-aniversario',
      component: load('PageMalaAniversario'),
      meta: { name: 'Impressão de etiquetas', help: true }
    },
    {
      path: '/mala-campanha',
      name: 'mala-campanha',
      component: load('PageMalaCampanha'),
      meta: { name: 'Impressão de etiquetas', help: true }
    },
    {
      path: '/produtividade',
      name: 'produtividade',
      component: load('relatorioProdutividade'),
      meta: { name: 'Relatório de produtividade', backButton: true }
    },
    {
      path: '/consulta',
      name: 'consulta',
      component: load('consultaDados'),
      meta: { name: 'Relatório de consulta', backButton: true }
    },
    {
      path: '/mapa-calor',
      name: 'heat',
      component: load('heatMap'),
      meta: { name: 'Mapa de calor', backButton: true }
    },
    { path: '/manutencao-cadastros', name: 'manutencao-cadastros', component: load('manutencaoCadastros'), meta: { backButton: true } },
    { path: '/manutencao-numero', name: 'manutencao-numero', component: load('PageManutencaoEnderecos'), meta: { backButton: true } },
    {
      path: '/manutencao-duplicidades', name: 'manutencao-duplicidades', component: load('PageManutencaoDuplicidades'), meta: { backButton: true },
    },
    {
      path: '/manutencao-cursos', name: 'manutencao-cursos', component: load('manutencaoCursos'), meta: { backButton: true, name: 'Manutenção de cursos' }
    },
    {
      path: '/manutencao-tipos-atendimento', name: 'manutencao-tipos-atendimento', component: load('manutencaoTiposAtendimento'), meta: { name: 'Manutenção de atendimentos', backButton: true }
    },
    {
      path: '/extrato-pagamentos', component: load('extratoPagamento'), meta: { backButton: true }
    },
    {
      path: '/page', component: load('Page'), meta: { backButton: true }
    },
    {
      path: '/callback',
      component: load('callback'),
      meta: { backButton: false }
    },
    { path: '*', component: load('Error404') }
  ]
})

router.beforeEach((to, from, next) => {
  next()
  // let accessToken = store.state.userProfile
  // // ESTANDO LOGEADO
  // if (!accessToken.nome && !to.meta.requiresAuth) {
  //   next('/login')
  // } else {
  //   next()
  // }
})

export default router
