<template>
  <q-tabs align="justify">
    <q-tab default slot="title" :count="pessoasPossiveis.datas.total" name="tab-1" icon="fa-clone" label="Pessoas possivelmente duplicadas"/>
    <!-- Targets -->
    <q-tab-pane name="tab-1" :keep-alive="true" >
      <table-pessoas-duplicadas 
        :pessoas="pessoasPossiveis" 
        :page.sync="page"
        @atualizar="getPessoasPossiveis"
        ></table-pessoas-duplicadas>
    </q-tab-pane>
      <div class="row text-center">
        <div class="col bg-white ">
          <q-pagination v-model="page" :max="paginas" />
        </div>
      </div>
  </q-tabs>
</template>

<script>
  import TablePessoasDuplicadas from '../tables/TablePessoasDuplicadas'
  export default {
    name: 'PageManutencaoDuplicidades',
    components: {
      TablePessoasDuplicadas
    },
    data: () => ({
      pessoasPossiveis: {
        datas: {},
        pessoas: []
      },
      page: 1
    }),
    mounted () {
      this.getPessoasPossiveis()
    },
    computed: {
      paginas () {
        return parseInt(this.pessoasPossiveis.datas.total / this.pessoasPossiveis.datas.per_page) || 1
      }
    },
    watch: {
      page () {
        this.getPessoasPossiveis()
      }
    },
    methods: {
      getPessoasPossiveis () {
        this.$bus.$emit('loading')
        this.$http.get(`/pessoas/filter-duplicidade/${this.page}`)
          .then(response => {
            this.$bus.$emit('loading')
            this.pessoasPossiveis = response.data
            this.pessoasPossiveis.pessoas.forEach(element => {
              if (!element.endereco) {
                element.endereco = { }
              }
            })
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
