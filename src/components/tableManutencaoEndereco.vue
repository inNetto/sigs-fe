<template>
  <q-card>
    <q-card-main class="bg-white">
      <q-data-table
        :data="dados.data"
        :config="config"
        :columns="columns"
      >
        <div
          slot="selection"
          slot-scope="selection"
        >
          <q-btn
            color="primary"
            @click="deleteRow(selection.rows)"
          >
            <i>Deletar linha</i>
          </q-btn>
        </div>
        <template
          slot='col-action'
          slot-scope='cell'
        >
          <q-btn
            icon="delete"
            color="negative"
            @click="deleteRow(cell.row.pessoa_id)"
          >
          </q-btn>
        </template>
      </q-data-table>
    </q-card-main>
  </q-card>
</template>
<script>
import { toast } from '../helper/notification'
export default {
  data () {
    return {
      dados: [],
      idsSelecionados: [],
      config: {
        rowHeight: '60px',
        title: 'Lista de endereços sem número',
        columnPicker: true,
        selection: 'multiple',
        messages: {
          noData: 'Sem dados a serem exibidos.'
        },
        labels: {
          columns: 'Colunas',
          allCols: 'Todas',
          rows: 'Linhas',
          all: 'Todos',
          clear: 'Desmarcar todos',
          selected: {
            singular: 'Item selecionado.',
            plural: 'Itens selecionados.'
          }
        }
      },
      columns: [
        {
          label: 'Cep',
          field: 'cep',
          width: '40px'
        },
        {
          label: 'Rua',
          field: 'rua',
          width: '120px'
        },
        {
          label: 'Número',
          field: 'numero',
          width: '40px'
        },
        {
          label: 'Bairro',
          field: 'bairro',
          width: '80px'
        },
        {
          label: 'Complemento',
          field: 'complemento',
          width: '60px'
        },
        {
          label: 'Município',
          field: 'municipio',
          width: '80px'
        },
        {
          label: 'Ações',
          field: 'action',
          width: '50px'
        }
      ]
    }
  },
  mounted () {
    this.buscarDados()
  },
  methods: {
    deleteRow (selection) {
      this.$bus.$emit('loading')
      let sucesso = true

      if (!(typeof selection === 'object')) {
        let array = []
        array.push({ data: { pessoa_id: `${selection}` } })
        selection = array
      }

      selection.forEach(element => {
        this.$http
          .delete(`pessoas/${element.data.pessoa_id}`)
          .then(response => {
            this.buscarDados()
          })
          .catch(() => {
            sucesso = false
          })
      })
      if (!sucesso) {
        toast('Nem todos os cadastros foram deletados!', 'negative')
      }
      toast('Cadastros deletados com sucesso!', 'positive')
    },
    buscarDados () {
      this.$bus.$emit('loading')
      this.$http.get(`/manutencao/numero`)
        .then(response => {
          this.dados = response.data
          this.$v.$touch()
          this.$bus.$emit('loading')
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    }
  }
}
</script>
<style scoped>
.q-card-main {
  padding: 3px;
}
</style>