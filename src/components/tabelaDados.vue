<template>
  <div>
    <div class="row xs-gutter">
      <q-data-table
        :config="config"
        :data="dados.data"
        @selection="selection"
        :columns="columns"
      >

        <div
          slot="col-rua"
          slot-scope="cell"
        >
          <q-input
            :value="cell.data"
            float-label="Rua"
            v-model="cell.data"
            max-length="50"
            @blur="saveRua(cell)"
          ></q-input>
        </div>

        <div
          slot="col-numero"
          slot-scope="cell"
        >
          <q-input
            :value="cell.data"
            float-label="Numero"
            v-model="cell.data"
            max-length="8"
            @blur="saveNumero(cell)"
          ></q-input>
        </div>

        <div
          slot="col-complemento"
          slot-scope="cell"
        >
          <q-input
            :value="cell.data"
            float-label="Complemento"
            v-model="cell.data"
            max-length="80"
            @blur="saveComplemento(cell)"
          ></q-input>
        </div>

        <div
          slot="selection"
          slot-scope="selection"
        >
          <q-btn
            color="negative"
            @click="removerEndereco(selection)"
          >
            Deletar
          </q-btn>
        </div>
      </q-data-table>
    </div>
    <div class="row jusfity-center">
      <div class="col">
        <q-pagination
          v-model="page"
          :max="paginas"
        ></q-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { toast } from '../helper/notification'
export default {
  props: {
    api: String
  },
  mounted () {
    this.buscarDados()
  },
  data: () => ({
    page: 1,
    config: {
      title: 'Endereços com problemas no número',
      noHeader: false,
      leftStickyColumns: 0,
      rightStickyColumns: 2,
      rowHeight: '90px',
      responsive: true,
      selection: 'multiple'
    },
    selected: [],
    columns: [
      { label: 'Cep', field: 'cep', width: '40px' },
      { label: 'Rua', field: 'rua', width: '120px' },
      { label: 'Nº', field: 'numero', width: '40px' },
      { label: 'Complemento', field: 'complemento', width: '100px' },
      { label: 'Municipio', field: 'municipio', width: '70px' },
      { label: 'Bairro', field: 'bairro', width: '70px' }
    ],
    dados: []
  }),
  computed: {
    paginas () {
      return parseInt(this.dados.total / this.dados.per_page) || 1
    }
  },
  watch: {
    page () {
      this.buscarDados()
    }
  },
  methods: {
    selection (number, rows) {
      this.selected = rows
    },
    saveNumero (cell) {
      cell.row.numero = cell.data
      if (cell.row.numero !== null) {
        this.corrigirEndereco(cell.row)
      }
    },
    saveRua (cell) {
      if ((cell.row.rua !== cell.data) && (cell.row.rua !== null)) {
        this.corrigirEndereco(cell.row)
      }
    },
    saveComplemento (cell) {
      cell.row.complemento = cell.data

      if (cell.row.complemento !== null) {
        this.corrigirEndereco(cell.row)
      }
    },
    buscarDados () {
      this.$bus.$emit('loading')
      this.$http.get(`${this.api}?page=${this.page}`)
        .then(response => {
          this.dados = response.data
          this.$v.$touch()
          this.$bus.$emit('loading')
        })
        .catch((error) => {
          this.notificacaoFalha(error)
          this.$bus.$emit('loading')
        })
    },
    corrigirEndereco (registro) {
      this.$bus.$emit('loading')
      this.$http.put(`/endereco/${registro.id}`, registro)
        .then(response => {
          toast('Cadastro corrigido com sucesso!', 'positive')
          this.$bus.$emit('loading')
          this.buscarDados()
          this.$emit('atualizar-totais')
        })
        .catch((error) => {
          this.notificacaoFalha(error)
          this.$bus.$emit('loading')
        })
    },
    notificacaoFalha (error) {
      let msg = ''
      Object.keys(error.response.data).forEach(function (key) {
        msg += error.response.data[key] + '<br />'
      })
      toast(msg, 'negative')
    },
    removerEndereco () {
      let promisses = []
      this.selected.forEach(element => {
        promisses.push(this.$http.delete(`pessoas/${element.data.pessoa_id}`))
      })

      this.$bus.$emit('loading')
      Promise.all(promisses)
        .then(response => {
          this.$bus.$emit('loading')
          toast('Pessoas Deletada com sucesso!', 'positive')
          this.buscarDados()
          this.$emit('atualizar-totais')
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    }
  },
  validations: {
    dados: {
      data: {
        $each: {
          cep: { required, minLength: minLength(8) },
          rua: { required },
          numero: { required },
          bairro: { required },
          municipio: { required }
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
