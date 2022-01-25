<template>
  <div class="relative-position">
    <div class="row">
      <div class="col-xl-6 col-lg-6">
        <g-card-icon title-class="bg-positive" icon="people" titulo="Total de pessoas" :conteudo="totalPessoas"/>
      </div>
      <div class="col-xl-6 col-lg-6">
        <g-card-icon
          title-class="bg-negative"
          icon="person_add"
          titulo="Cadastros hoje"
          :conteudo="totalCadastrosHoje"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 col-lg-6">
        <q-card class="bg-white">
          <q-card-main>
            <chart-aniversariantes :data="aniversariantesPorMes"/>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-xl-6 col-lg-6">
        <q-card class="bg-white">
          <q-card-main>
            <table-produtividade-usuarios :data="totalProducao"/>
          </q-card-main>
        </q-card>
      </div>
    </div>
    <div/>
    <q-inner-loading :visible="isLoading">
      <q-spinner-hourglass size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script>
import ChartAniversariantes from '@/chartAniversariantesPorMes'
import GCardIcon from '@/gCardIcon.vue'
import TableProdutividadeUsuarios from '@/dashboard/TableProdutividadeUsuarios.vue'
export default {
  'components': {
    GCardIcon,
    ChartAniversariantes,
    TableProdutividadeUsuarios
  },
  data () {
    return {
      totalPessoas: 0,
      totalCadastrosHoje: 0,
      aniversariantesPorMes: [],
      isLoading: false,
      totalProducao: []
    }
  },
  mounted () {
    this.$bus.$emit('loading')
    Promise.all([
      this.getTotalPessoas(),
      this.getTotalCadastrosHoje(),
      this.getBairrosAgrupados(),
      this.getTotalProducao()
    ])
      .then(response => {
        this.$bus.$emit('loading')
        this.setResponse(response)
      })
      .catch(() => {
        this.$bus.$emit('loading')
      })
  },
  'methods': {
    getTotalPessoas () {
      return this.$http.get('/pessoas/total')
    },
    getTotalCadastrosHoje () {
      return this.$http.get('/pessoas/total-cadastro-hoje')
    },
    getBairrosAgrupados () {
      return this.$http.get('/relatorio/aniversariantes-mes')
    },
    getTotalProducao () {
      return this.$http.get('/pessoas/total-producao-por-usuario')
    },
    setResponse (response) {
      this.totalPessoas = response[0].data
      this.totalCadastrosHoje = response[1].data
      this.aniversariantesPorMes = Object.values(response[2].data)
      this.totalProducao = response[3].data
    }
  }
}
</script>
<style scoped>

</style>
