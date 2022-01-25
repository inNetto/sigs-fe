<template>
  <g-card
    :titulo="$route.meta.name"
    :contentPadding="true"
    subtitulo="Gere um relatório pelos filtros"
    titleClass="bg-blue-8"
    titleSize="col-xs-10 col-sm-8 col-md-6 col-lg-6"
    actionsClass="bg-light"
  >
    <template slot="content">
      <div class="row xs-gutter">
        <div class="col-5">
          <q-input
            float-label="Nome"
            v-model="nome"
            :max-length="50"
          ></q-input>
        </div>
        <div class="col-2">
          <q-input
            float-label="Dia"
            type="number"
            v-model="dia"
            :min="1"
            :max="31"
          ></q-input>
        </div>
        <div class="col-3">
          <q-select
            id="select-mes"
            float-label="Mês"
            type="list"
            v-model="mes"
            :options="mesesOrganizados"
          ></q-select>
        </div>
        <div class="col-2">
          <q-input
            float-label="Ano"
            type="number"
            v-model="ano"
            :min="1900"
            :max="anoMaximo"
          ></q-input>
        </div>
      </div>
      <div class="row xs-gutter">
        <div class="col">
          <q-select
            float-label="Sexo"
            type="list"
            v-model="sexo"
            :options="optionsSexo"
          ></q-select>
        </div>
        <div class="col">
          <q-input
            float-label="Rua"
            v-model="rua"
            :max-length="35"
          ></q-input>
        </div>
        <div class="col">
          <q-input
            float-label="Cep"
            v-model="cep"
            :max-length="11"
          ></q-input>
        </div>
        <div class="col">
          <q-input
            float-label="Bairro"
            v-model="bairro"
            :max-length="35"
          ></q-input>
        </div>
        <div class="col">
          <q-input
            float-label="Município"
            v-model="municipio"
            :max-length="35"
          ></q-input>
        </div>
      </div>
    </template>
    <div slot="actions">
      <q-btn
        color="primary"
        @click="filtrar()"
      >Filtrar</q-btn>
      <q-btn
        color="warning"
        @click="limpar()"
      >Limpar</q-btn>
    </div>
  </g-card>
</template>
<script>
import GCard from '@/gCard.vue'
import { format } from 'quasar'
const { capitalize } = format
export default {
  components: {
    GCard
  },
  data () {
    return {
      listaMeses: this.$moment.months(),

      nome: '',
      sexo: 'A',

      rua: '',
      cep: '',
      bairro: '',
      municipio: '',

      dia: '',
      mes: '',
      ano: '',

      anoMaximo: 2020,
      optionsSexo: [
        {
          label: 'Ambos', value: 'A'
        },
        { label: 'Masculino', value: 'M' },
        { label: 'Feminino', value: 'F' }
      ]
    }
  },
  computed: {
    mesesOrganizados () {
      return this.listaMeses.map((mes, index) => {
        return { label: capitalize(mes), value: index }
      })
    }
  },
  methods: {
    filtrar () {
      const dados = {
        nome: this.nome,
        sexo: this.sexo,

        rua: this.rua,
        cep: this.cep,
        bairro: this.bairro,
        municipio: this.municipio,
        dia: this.adicionaZeroNoDia(this.dia),
        mes: this.adicionaZeroNoMes(this.mes),
        ano: this.ano
      }
      Object.keys(dados).forEach((key) => (dados[key] === '') && delete dados[key])

      this.$emit('filtrar', dados)
    },
    limpar () {
      this.nome = ''
      this.sexo = 'A'
      this.atendimento = ''
      this.centroSocial = ''

      this.rua = ''
      this.cep = ''
      this.bairro = ''
      this.municipio = ''

      this.dia = ''
      this.mes = ''
      this.ano = ''
    },
    adicionaZeroNoDia (dia) {
      if (dia < 10 && dia !== '') {
        return `0${dia}`
      }

      return dia
    },
    adicionaZeroNoMes (mes) {
      if (mes === '') {
        return mes
      }

      mes++
      if (mes < 10) {
        return `0${mes}`
      }
    }
  }
}
</script>
<style scoped></style>