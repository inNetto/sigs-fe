<template>
  <div class="relative-position">
    <g-card
      :titulo="$route.meta.name"
      :contentPadding="true"
      subtitulo="Selecione os filtros e envie o pedido"
      titleClass="bg-blue-8"
      titleSize="col-xs-10 col-sm-8 col-md-6 col-lg-6"
      actionsClass="bg-light"
    >
      <template slot="content">
        <div class="row sm-gutter">
          <div
            class="col-md-6 col-lg-12 col-xl-5"
            data-intro='Selecione os meses ou não selecione nada para TODOS'
          >
            <q-select
              color="secondary"
              v-model="meses"
              float-label="Selecione os meses"
              multiple
              chips
              toggle
              :options="listaMeses"
            />
          </div>
        </div>
        <div class="row sm-gutter">
          <div class="col-md-6 col-lg-12 col-xl-5">
            <q-range
              v-model="rangeDias"
              :disable="dias.length > 0"
              color="secondary"
              :min="1"
              :step="1"
              :max="31"
              label-always
              data-intro='Defina um range de dias'
            ></q-range>
            <q-chip color="primary">
              Selecionado os dias entre {{rangeDias.min}} e {{rangeDias.max}}
            </q-chip>
          </div>
          <div class="col-md-6 col-lg-12 col-xl-5 offset-xl-2">
            <q-range
              v-model="rangeAnos"
              :disable="anos.length > 0"
              color="secondary"
              :min="1900"
              :step="1"
              :max="2017"
              label-always
              data-intro='Defina um range de anos'
            ></q-range>
            <q-chip color="primary">
              Selecionado os anos entre {{rangeAnos.min}} e {{rangeAnos.max}}
            </q-chip>
          </div>
        </div>
        <div class="row  margin-top">
          <div class="col col-settings">
            <q-collapsible
              icon="settings"
              label="Configurações de margem"
            >
              <q-list>
                <q-item>
                  <q-item-side icon="keyboard_arrow_up" />
                  <q-item-main>
                    <q-slider
                      v-model="margemSuperior"
                      :min="-10"
                      :max="50"
                      label-always
                    />
                    <q-tooltip>
                      Margem Superior
                    </q-tooltip>
                  </q-item-main>
                </q-item>
                <q-item>
                  <q-item-side icon="keyboard_arrow_left" />
                  <q-item-main>
                    <q-slider
                      v-model="margemEsquerda"
                      :max="50"
                      label-always
                    />
                    <q-tooltip>
                      Margem Esquerda
                    </q-tooltip>
                  </q-item-main>
                </q-item>
                <q-item>
                  <q-item-side icon="keyboard_arrow_right" />
                  <q-item-main>
                    <q-slider
                      v-model="margemDireita"
                      :max="50"
                      label-always
                    />
                    <q-tooltip>
                      Margem Direita
                    </q-tooltip>
                  </q-item-main>
                </q-item>
                <q-item>
                  <q-item-side icon="font_download" />
                  <q-item-main>
                    <q-slider
                      v-model="tamanhoFonte"
                      :max="50"
                      label-always
                    />
                    <q-tooltip>
                      Tamanho da fonte
                    </q-tooltip>
                  </q-item-main>
                </q-item>
              </q-list>
            </q-collapsible>
          </div>
        </div>
      </template>
      <div slot="actions">
        <q-btn
          icon-right="send"
          @click="enviar"
          color="blue-8"
          data-intro='Clique em enviar para receber seu PDF com as etiquetas'
        >Enviar</q-btn>
        <q-btn
          icon-right="clear"
          @click="limpar"
          color="faded"
        >Limpar todos os campos</q-btn>
      </div>
    </g-card>
  </div>
</template>
<script>
import GCard from '@/gCard.vue'
import tiposAtendimentoMixin from '../../helper/tiposAtendimentoComboMixin'
import centroSocialMixin from '../../helper/centroSocialComboMixin'
export default {
  mixins: [tiposAtendimentoMixin, centroSocialMixin],
  components: {
    GCard
  },
  mounted () {
    this.getTiposAtendimento()
    this.getCentrosSociais()
  },
  computed: {
    listaMeses () {
      return this.$moment.months().map((mes, index) => { return { label: mes, value: ++index } })
    },
    listaAnos () {
      return this.range(1900, 2017).map(year => { return { label: year.toString(), value: year } })
    },
    listaDias () {
      return this.range(1, 31).map(day => { return { label: day.toString(), value: day } })
    }
  },
  data () {
    return {
      margemEsquerda: 5,
      margemDireita: 7,
      margemSuperior: 12,
      tamanhoFonte: 6,
      removerDataAniversario: false,
      ordenacao: 'aniversario',
      bairrosIniciando: '',
      centroSocial: '',
      atendimento: '',
      meses: [],
      anos: [],
      dias: [],
      rangeDias: {
        min: 1,
        max: 31
      },
      rangeAnos: {
        min: 1900,
        max: parseInt(this.$moment().format('YYYY'))
      }
    }
  },
  methods: {
    addTextoNaBusca () {
      this.$refs.chips.add()
    },
    limpar () {
      this.removerDataAniversario = false
      this.ordenacao = 'aniversario'
      this.meses = []
      this.anos = []
      this.rangeDias = {
        min: 1,
        max: 31
      }
      this.rangeAnos = {
        min: 1900,
        max: parseInt(this.$moment().format('YYYY'))
      }
    },
    enviar () {
      this.$bus.$emit('loading')
      this.$http.request({ url: '/etiqueta/gerar', data: this.$data, responseType: 'blob', method: 'POST' })
        .then(response => {
          this.$bus.$emit('loading')
          const blob = new Blob([response.data], { type: 'application/zip' })
          const link = document.createElement('a')
          var URL = window.URL || window.webkitURL

          link.href = URL.createObjectURL(blob)
          link.download = 'etiquetas.zip'
          link.click()
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    },
    range (start, end) { return [...Array(1 + end - start).keys()].map(v => start + v) }
  }
}
</script>

<style scoped>
.margin-top {
  margin-top: 15px;
}
</style>