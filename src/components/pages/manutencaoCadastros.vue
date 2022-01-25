<template>
  <q-tabs align="justify">
    <q-tab
      default
      :count="totais.numeros"
      slot="title"
      name="tab-3"
      icon="repeat one"
      label="Números"
    />
    <!-- Targets -->
    <q-tab-pane
      name="tab-3"
      :keep-alive="true"
    >
      <tabela-dados
        @atualizar-totais="getRegistros()"
        api="/manutencao/numero"
      ></tabela-dados>
    </q-tab-pane>
  </q-tabs>
</template>

<script>
import TabelaDados from '../tabelaDados.vue'
export default {
  name: 'ManutencaoCadastros',
  components: {
    TabelaDados
  },
  data () {
    return {
      totais: {
        numeros: 0
      }
    }
  },
  mounted () {
    this.getRegistros()
  },
  methods: {
    getRegistros () {
      this.$bus.$emit('loading')
      this.$http.get('/manutencao/numero/1')
        .then(response => {
          this.$bus.$emit('loading')
          this.totais.numeros = response.data
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    }
  }
}
</script>

<style scoped>
.q-tab-pane {
  padding: 0;
}
</style>
