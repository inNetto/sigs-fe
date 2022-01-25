<template>
  <q-modal ref="modal" >
    <q-tabs v-model="selectedTab">
      <!-- Tabs - notice slot="title" -->
      <q-tab default slot="title" name="tab-1" label="Inclusão" icon="add" />
      <q-tab slot="title" name="tab-2" label="Edição" icon="edit" />
      <!-- Targets -->
      <q-tab-pane name="tab-1" :keepAlive="true">
        <table class="q-table striped" ref="table">
          <thead>
            <tr>
              <th>Dia</th>
              <th>Amanda</th>
              <th>Barbara</th>
              <th>Patty</th>
              <th>Mere</th>
              <th>Gabi</th>
              <th>Ariane</th>
              <th>Campo Grande</th>
              <th>Santa Cruz</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dados, index) in dadosSinteticosInclusao" :key="index">
              <td class="text-left">{{$moment(index).format('DD/MM/YYYY')}}</td>
              <td class="text-right">{{dados.amanda || '-'}}</td>
              <td class="text-right">{{dados.barbara || '-'}}</td>
              <td class="text-right">{{dados.patty || '-'}}</td>
              <td class="text-right">{{dados.mere || '-'}}</td>
              <td class="text-right">{{dados.gabi || '-'}}</td>
              <td class="text-right">{{dados.ariane || '-'}}</td>
              <td class="text-right">{{dados.campogrande || '-'}}</td>
              <td class="text-right">{{dados.santacruz || '-'}}</td>
            </tr>
          </tbody>
        </table>
      </q-tab-pane>
      <q-tab-pane name="tab-2" :keepAlive="true">
        <table class="q-table striped" ref="update">
          <thead>
            <tr>
              <th>Dia</th>
              <th>Amanda</th>
              <th>Barbara</th>
              <th>Patty</th>
              <th>Mere</th>
              <th>Gabi</th>
              <th>Ariane</th>
              <th>Campo Grande</th>
              <th>Santa Cruz</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dados, index) in dadosSinteticosEdicao" :key="index">
              <td class="text-left">{{$moment(index).format('DD/MM/YYYY')}}</td>
              <td class="text-right">{{dados.amanda || '-'}}</td>
              <td class="text-right">{{dados.barbara || '-'}}</td>
              <td class="text-right">{{dados.patty || '-'}}</td>
              <td class="text-right">{{dados.mere || '-'}}</td>
              <td class="text-right">{{dados.gabi || '-'}}</td>
              <td class="text-right">{{dados.ariane || '-'}}</td>
              <td class="text-right">{{dados.campogrande || '-'}}</td>
              <td class="text-right">{{dados.santacruz || '-'}}</td>
            </tr>
          </tbody>
        </table>
      </q-tab-pane>
    </q-tabs>
    <div class="bg-light text-right" style="padding: 10px">
      <q-btn color="blue" icon="print" @click="print">Imprimir</q-btn>
      <q-btn color="secondary" icon="close" @click="close">Fechar</q-btn>
    </div>
    <q-inner-loading :visible="loading">
      <q-spinner-hourglass size="50px" color="primary" />
    </q-inner-loading>
  </q-modal>
</template>

<script>
export default {
  data () {
    return {
      selectedTab: 'tab-1',
      loading: false
    }
  },
  props: {
    dadosSinteticosInclusao: {
      required: true
    },
    dadosSinteticosEdicao: {
      required: true
    }
  },
  methods: {
    open () {
      this.$refs.modal.open()
    },
    close () {
      this.$refs.modal.close()
    },
    print () {
      this.selectedTab = 'tab-2'
      this.loading = true
      setTimeout(() => {
        const newWin = window.open('')
        newWin.document.write(`<h2>Novos cadastros</h2>`)
        newWin.document.write(this.$refs.table.outerHTML)
        newWin.document.write(`<h2>Cadastros atualizados</h2>`)
        newWin.document.write(this.$refs.update.outerHTML)
        newWin.print()
        newWin.close()
        this.loading = false
        this.selectedTab = 'tab-1'
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>

