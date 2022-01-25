<template>

    <q-data-table
      :data="data"
      :config="config"
      :columns="columns"
    >
      <template slot="col-message" slot-scope="cell">
        <span class="light-paragraph">{{cell.data}}</span>
      </template>
      <template slot="col-source" slot-scope="cell">
        <div v-if="cell.data === 'Audit'" class="my-label text-white bg-primary">
          Audit
          <q-tooltip>Some data</q-tooltip>
        </div>
        <div v-else class="my-label text-white bg-negative">{{cell.data}}</div>
      </template>

    </q-data-table>
</template>

<script>
export default {
  props: {
    data: Array
  },
  methods: {

  },
  beforeDestroy () {
    clearTimeout(this.timeout)
  },
  data () {
    return {
      config: {
        title: 'Tabela Produtividade',
        noHeader: false,
        leftStickyColumns: 0,
        rightStickyColumns: 2,
        rowHeight: '50px',
        responsive: true
      },
      columns: [
        {
          label: 'Úsuario',
          field: 'user',
          width: '80px'
        },
        {
          label: 'Cadastros',
          field: 'totalCadastros',
          width: '80px'
        },
        {
          label: 'Atualizações',
          field: 'totalAtualizacoes',
          width: '80px'
        }

      ]
    }
  }
}
</script>

<style lang="stylus">
.my-label
  padding 5px
  border-radius 3px
  display inline-block
</style>
