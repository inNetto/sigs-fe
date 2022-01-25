<template>
  <g-card :titulo="$route.meta.name" :contentPadding="true" subtitulo="Selecione o ano" titleClass="bg-blue-8" titleSize="col-xs-10 col-sm-8 col-md-6 col-lg-6" actionsClass="bg-light">
    <template slot="content">
      <div class="row">
        <div class="col-4">
          <q-select float-label="Ano" placeholder="Selecione o ano desejado" v-model="anoSelecionado" :options="anos" @input="buscarDados"></q-select>
        </div>
        <div class="col-4">
          <q-btn color="red" @click="exportarPdf" v-show="anoSelecionado">PDf</q-btn>
        </div>
        <table id="table" class="hidden">
          <thead>
            <tr>
                <th>Mês</th>
                <th>Novos</th>
                <th>Editados</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(linha,index) in dados.totalInclusaoPorMes">
                <td class="capitalize">{{buscarMesPeloNumero(linha.mes)}}</td>
                <td>{{linha.contagem}}</td>
                <td>{{dados.totalEdicaoPorMes[index] ? dados.totalEdicaoPorMes[index].contagem : '-'}}</td>
            </tr>
          </tbody>
        </table>

        <table width="100%" border="1" cellspacing="0" cellpadding="0" id="logins-1" class="hidden">
          <thead>
            <tr>
              <td rowspan="2" align="center" valign="top">Usuario</td>
              <td colspan="2" align="center" valign="top" v-for="mes in mesesJanJunho" class="capitalize">{{mes}}</td>
            </tr>
            <tr>
              <td align="center" valign="top" v-for="index in this.$lodash.range(1, 13)">
                {{index % 2 != 0 ? 'Cad.' : 'Edit.'}}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario, index, key) in dadosProdutividadePorLogin">
              <td>{{index}}</td>
              <td>{{getDadosMesPeloIndex(usuario, '01').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '01').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '02').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '02').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '03').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '03').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '04').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '04').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '05').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '05').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '06').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '06').totalAtualizacoes }}</td>
            </tr>
          </tbody>
        </table>

        <table width="100%" border="1" cellspacing="0" cellpadding="0" id="logins-2" class="hidden">
          <thead>
            <tr>
              <td rowspan="2" align="center" valign="top">Usuario</td>
              <td colspan="2" align="center" valign="top" v-for="mes in mesesJulhoDezembro" class="capitalize">{{mes}}</td>
            </tr>
            <tr>
              <td align="center" valign="top" v-for="index in this.$lodash.range(1, 13)">
                {{index % 2 != 0 ? 'Cad.' : 'Edit.'}}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario, index, key) in dadosProdutividadePorLogin">
              <td>{{index}}</td>
              <td>{{getDadosMesPeloIndex(usuario, '07').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '07').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '08').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '08').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '09').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '09').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '10').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '10').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '11').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '11').totalAtualizacoes }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '12').totalCadastros }}</td>
              <td>{{getDadosMesPeloIndex(usuario, '12').totalAtualizacoes }}</td>
            </tr>
          </tbody>
        </table>

      </div>

      <dados :ano-selecionado="anoSelecionado" :dados="dados"></dados>
    </template>
  </g-card>
</template>

<script>
import GCard from '@/gCard.vue'
import Dados from '../dados.vue'
import JsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  components: {
    GCard, Dados
  },
  data () {
    return {
      isLoading: false,
      anoSelecionado: '',
      dados: '',
      dadosProdutividadePorLogin: [],
      mesesJanJunho: this.$moment.months().slice(0, 6),
      mesesJulhoDezembro: this.$moment.months().slice(6, 12)
    }
  },
  computed: {
    anos () {
      let year = this.$moment().year()
      return this.$lodash.range(2016, ++year)
        .map((ano, index) => ({ value: ano, label: `${ano}` }))
    }
  },
  methods: {
    exportarPdf () {
      let doc = new JsPDF()

      doc.text(`Produtividade geral no ano de ${this.anoSelecionado}`, 14, 20)
      doc.text(`Total Cadastrado: ${this.dados.totalInclusao}`, 14, 30)
      doc.text(`Total Editado: ${this.dados.totalEdicao}`, 14, 37)
      doc.autoTable({html: '#table', startY: 40})

      doc.text(`Por Usuário`, 14, 95)
      doc.autoTable({html: '#logins-1', startY: 100})
      doc.autoTable({html: '#logins-2', startY: 160})

      // doc.autoTable({html: '#logins', startY: 40})

      doc.save('a4.pdf')
    },
    buscarMesPeloNumero (numero) {
      return this.$moment().month(--numero).format('MMMM')
    },
    buscarDados () {
      this.totalCadastroPorAno()
      this.produtividadePorLogin()
    },
    totalCadastroPorAno () {
      this.$bus.$emit('loading')
      this.$http.get(`/relatorio/total-cadastro-por-ano/${this.anoSelecionado}`)
        .then(response => {
          this.dados = response.data
          this.$bus.$emit('loading')
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    },
    produtividadePorLogin () {
      this.$bus.$emit('loading')
      this.$http.get(`/relatorio/total-producao-por-usuario/${this.anoSelecionado}`)
        .then(response => {
          this.dadosProdutividadePorLogin = response.data
          this.$bus.$emit('loading')
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    },
    getDadosMesPeloIndex (dadosMes, index) {
      return dadosMes.find(mes => index === mes.mes) || {
        'totalAtualizacoes': '-',
        'totalCadastros': '-'
      }
    }
  }
}
</script>

<style scoped>

</style>