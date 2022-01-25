<template>
  <div>
    <filtros
      ref="filter"
      @filtrar="filtrar"
    />
    <q-card>
      <q-card-main class="bg-white">
        <q-data-table
          ref="table"
          :columns="columns"
          :data="dadosFiltrados.data"
          :config="config"
        >
          <template
            slot="col-sexo"
            slot-scope="cell"
          >
            <span v-if="cell.row.sexo == null">N/D</span>
            <q-btn
              v-else-if="cell.row.sexo == 'M'"
              small
              color="primary"
            >
              <q-icon name="fa-mars" />
            </q-btn>
            <q-btn
              v-else="cell.row.sexo == null"
              small
              color="pink"
            >
              <q-icon name="fa-venus" />
            </q-btn>
          </template>
        </q-data-table>
      </q-card-main>
      <q-card-actions class="bg-light row items-center ">
        <div
          class="col"
          v-show="this.dadosFiltrados.total > 0"
        >
          <p class="caption">
            Exibindo de
            <span class="text-bold text-secondary">{{ dadosFiltrados.from }}</span>
            a
            <span class="text-bold text-secondary">{{ dadosFiltrados.to }}</span>

          </p>
          <p class="caption">
            Total
            <span class="text-bold text-secondary">{{ dadosFiltrados.total }}</span>
            pessoas
          </p>
        </div>
        <div class="col">
          <q-pagination
            v-model="page"
            :max="maxPages"
            v-show="this.dadosFiltrados.total > 10"
          />
        </div>
        <div
          class="col"
          v-show="this.dadosFiltrados.total > 0"
        >
          <q-btn
            color="red"
            icon="fa-file-pdf-o"
            @click="downloadPdf"
          >Pdf</q-btn>
          <q-btn
            color="green"
            icon="fa-file-excel-o"
            @click="downloadXls"
          >Excel</q-btn>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import Filtros from '../filtros'
export default {
  components: {
    Filtros
  },
  data () {
    return {
      dadosFiltrados: {
        data: []
      },
      filtros: {},
      page: 1,
      columns: [
        { label: 'Nome', field: 'nome', title: 'Nome', visible: true, width: '15%', sort: true },
        { label: 'Sexo', field: 'sexo', visible: true, width: '60px' },
        { label: 'Aniversário', field: 'data_nascimento', title: 'Nascimento', visible: true },
        { label: 'Residencial', field: 'telefone1', title: 'Tel. 1', visible: true },
        { label: 'Celular', field: 'telefone2', title: 'Tel. 2', visible: true },
        { label: 'Cep', field: 'cep', visible: true, width: '80px', sort: true },
        { label: 'Rua', field: 'rua', visible: true },
        { label: 'Nº', field: 'numero', title: 'Número', width: '60px', visible: true },
        { label: 'Complemento', field: 'complemento', title: 'Compl.', visible: false },
        { label: 'Bairro', field: 'bairro' },
        { label: 'Atendimento', field: 'atendimento' },
        { label: 'Dt. Atendimento', field: 'dt_atendimento' }
      ],
      config: {
        rowHeight: '40px',
        title: 'Pessoas Encontradas',
        columnPicker: true,
        messages: {
          noData: 'Sem dados a serem exibidos.',
          noDataAfterFiltering: '<i>warning</i> Nenhuma pessoa encontrada para os filtros escolhidos.'
        },
        labels: {
          columns: 'Colunas',
          allCols: 'Todas',
          rows: 'Linhas',
          clear: 'Limpar',
          search: 'Buscar',
          all: 'All'
        }
      }
    }
  },
  watch: {
    page () {
      this.filtros.page = this.page
      this.get(this.filtros)
    }
  },
  computed: {
    filteredColumns () {
      return this.$refs.table.columnSelection
        .filter(column => column !== 'sexo')
        .join(',')
    },
    maxPages () {
      return Math.ceil(this.dadosFiltrados.total / this.dadosFiltrados.per_page) || 1
    },
    queryParamFiltros () {
      return Object
        .keys(this.filtros)
        .map(key => `${key}=${this.filtros[key]}`)
        .join('&')
    },
    backEnd () {
      return process.env.API_URL
    },
    sortTable () {
      return this.$refs.table.sorting.field || ''
    }
  },
  methods: {
    filtrar (dados) {
      dados.page = this.page
      this.filtros = dados
      this.get(dados)
    },
    downloadXls () {
      window.open(`${this.backEnd}pessoas/all/excel?${this.queryParamFiltros}&columns=${this.filteredColumns}&sort=${this.sortTable}`, '_blank')
    },
    downloadPdf () {
      window.open(`${this.backEnd}pessoas/all/pdf?${this.queryParamFiltros}&columns=${this.filteredColumns}&sort=${this.sortTable}`, '_blank')
    },
    get (dados) {
      this.$bus.$emit('loading')
      this.$http.request({ url: '/pessoas', params: dados })
        .then(response => {
          this.$bus.$emit('loading')
          this.dadosFiltrados = response.data
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    },
    converteParamestrosParaString () {
      let string = ''
      for (const coluna in this.moreParams) {
        if (this.moreParams[coluna] !== '') {
          string += `${coluna}=${this.moreParams[coluna]}`
        }
      }
      return string
    }
  }
}
</script>

<style scoped>
.q-card-main {
  padding: 3px;
}
.caption {
  margin: 3 px 0 0 0;
  line-height: 4px;
}
</style>