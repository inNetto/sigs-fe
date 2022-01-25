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
          <div class="col-md-6 col-lg-12 col-xl-6">
            <q-select
              v-model="buscaBairro"
              :options="bairrosOpcoes"
              float-label="Tipo de busca no bairro"
              color="secondary"
            />
          </div>
          <div
            class="col-md-6 col-lg-12 col-xl-6"
            data-intro='Digite o nome de um bairro e aperte ENTER'
          >
            <q-chips-input
              ref="chips"
              color="secondary"
              @keydown.tab="addTextoNaBusca"
              v-model="bairros"
              float-label="Digite o nome dos bairros"
            />
          </div>
        </div>
        <div class="row sm-gutter">
          <div class="col">
            <p class="caption">Utilize algum combo pré definido de bairros :</p>
            <q-btn @click="setCombo(combo1)"> Combo 1
              <q-tooltip>
                {{ this.combo1 }}
              </q-tooltip>
            </q-btn>
          </div>
          <div class="col">
            <p class="caption">Selecione somente bairros cariocas :</p>
            <q-toggle v-model="cariocas">
            </q-toggle>
          </div>
        </div>
        <div class="row sm-gutter margin-top">
          <div class="col">
            <p class="caption">Bairros que comecem com as letras :</p>
            <q-radio
              v-model="bairrosIniciando"
              val="A"
              label="A-F"
            />
            <q-radio
              v-model="bairrosIniciando"
              val="G"
              label="G-M"
            />
            <q-radio
              v-model="bairrosIniciando"
              val="N"
              label="N-S"
            />
            <q-radio
              v-model="bairrosIniciando"
              val="T"
              label="T-Z"
            />
          </div>
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

        Cariocas: {{total}}
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
    this.getTotalCariocas()
  },
  data () {
    return {
      total: 0,
      cariocas: false,
      margemEsquerda: 5,
      margemDireita: 7,
      margemSuperior: 2,
      tamanhoFonte: 6,
      combo1: ['Paciência', 'Guaratiba', 'Cosmos', 'Anchieta', 'Campo Grande', 'Santa Cruz'],
      comboBairro: '',
      buscaBairro: 'buscar',
      bairrosOpcoes: [
        { label: 'Remover os bairros da busca', value: 'remover' },
        { label: 'Buscar somente por estes bairros', value: 'buscar' }
      ],
      removerDataAniversario: true,
      ordenacao: 'bairrocep',
      bairrosIniciando: '',
      bairros: []
    }
  },
  methods: {
    setCombo (combo) {
      this.bairros = Object.assign([], combo)
    },
    addTextoNaBusca () {
      this.$refs.chips.add()
    },
    limpar () {
      this.buscaBairro = 'buscar'
      this.comboBairro = ''
      this.centroSocial = ''
      this.atendimento = ''
      this.ordenacao = 'bairrocep'
      this.bairrosIniciando = ''
      this.bairros = []
      this.meses = []
      this.margemEsquerda = 5
      this.margemDireita = 7
      this.margemSuperior = 2
      this.tamanhoFonte = 6
    },
    getTotalCariocas () {
      this.$bus.$emit('loading')
      this.$http.request({ url: '/etiqueta/gerar', data: { findTotal: true, cariocas: true }, method: 'POST' })
        .then(response => {
          this.$bus.$emit('loading')
          this.total = response.data
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
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
    }
  }
}
</script>

<style scoped>
.margin-top {
  margin-top: 15px;
}
.col-settings .q-item {
  padding: 0px 16px;
}
</style>