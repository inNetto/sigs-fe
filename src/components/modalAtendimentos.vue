<template>
  <q-modal
    ref="modal"
    :content-css="{minWidth: '70vw'}"
    @open="listarAtendimentos"
  >
    <q-card
      class="no-margin"
      ref="atendimentos"
    >
      <q-card-title class="bg-primary text-white">
        Atendimentos
      </q-card-title>
      <q-card-main>
        <div
          v-for="(atendimento, index) in atendimentos"
          :key="index"
          class="linha-atendimento"
        >
          <div class="row gutter wrap">
            <div class="col">
              <q-select
                float-label="Atendimento"
                :value="atendimento.tipo_atendimento_id"
                v-model="atendimento.tipo_atendimento_id"
                :options="optionsTipoAtendimento"
              >
              </q-select>
            </div>
            <div class="col">
              <q-select
                float-label="Centro Social"
                :value="atendimento.centro_social_id"
                v-model="atendimento.centro_social_id"
                :options="optionsCentrosSociais"
              >
              </q-select>
            </div>
            <div class="col">
              <q-input
                float-label="Data do atendimento"
                v-model="atendimento.data"
                :max-length="10"
              ></q-input>
            </div>
            <div
              class="col "
              v-show="atendimento.tipo_atendimento_id == '6'"
            >
              <q-select
                float-label="Curso"
                v-model="atendimento.curso_id"
                :options="optionsCursos"
              ></q-select>
            </div>
            <div class="auto icones">
              <q-btn
                color="green"
                @click="atualizarAtendimento(atendimento)"
              >
                <q-icon name="done"></q-icon>
              </q-btn>
              <q-btn
                color="red"
                @click="deletarAtendimento(atendimento, index)"
              >
                <q-icon name="delete_forever"></q-icon>
              </q-btn>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <q-input
                float-label="Observação"
                type="text"
                v-model="atendimento.observacao"
              ></q-input>
            </div>
          </div>
        </div>
      </q-card-main>
    </q-card>
    <div
      class="bg-light text-right"
      style="padding: 10px"
    >
      <!--<q-btn color="blue" icon="print" @click="print">Imprimir</q-btn>-->
      <q-btn
        color="positive"
        icon="add"
        @click="novoAtendimento"
      >Novo atendimento</q-btn>
      <q-btn
        color="secondary"
        icon="close"
        @click="close"
      >Fechar</q-btn>
    </div>
    <q-inner-loading :visible="loading">
      <q-spinner-hourglass
        size="50px"
        color="primary"
      />
    </q-inner-loading>
  </q-modal>
</template>
<script>
import { toast } from '../helper/notification'
import VMasker from 'vanilla-masker'
export default {
  props: {
    id: Number,
    optionsTipoAtendimento: Array,
    optionsCentrosSociais: Array,
    optionsCursos: Array,
    ehCadastroNovo: Boolean
  },
  watch: {
    atendimentos: {
      handler: function () {
        this.atendimentos.forEach(atendimento => {
          if (atendimento.data) {
            atendimento.data = VMasker.toPattern(atendimento.data, '99/99/9999')
          }
          if (atendimento.tipo_atendimento_id !== 6) {
            delete atendimento.curso
          }
        })
      },
      deep: true
    }
  },
  data () {
    return {
      atendimentos: [],
      loading: false
    }
  },
  methods: {
    novoAtendimento () {
      this.atendimentos.push({})
    },
    listarAtendimentos () {
      if (this.ehCadastroNovo) return

      this.loading = true
      this.$refs.modal.open()
      this.$http
        .get(`atendimentos/${this.id}`)
        .then(response => {
          this.loading = false
          this.atendimentos = response.data
        })
        .catch(() => {
          this.loading = false
        })
    },
    atualizarAtendimento (atendimento) {
      if (this.ehCadastroNovo) {
        this.$emit('atendimentos', this.atendimentos)
        toast('Atendimento adicionado / atualizado com sucesso!', 'positive')
        return
      }

      let url = `/atendimentos/save`
      let method = 'POST'
      atendimento.pessoa_id = this.id

      if (atendimento.atendimento_id) {
        url += `/${atendimento.atendimento_id}`
        method = 'PUT'
      }
      this.loading = true
      this.$http
        .request({ url, data: atendimento, method })
        .then(response => {
          this.loading = false
          toast('Atendimento Atualizado com sucesso!', 'positive')
        })
        .catch(error => {
          this.loading = false
          this.notificacaoFalha(error)
        })
    },
    deletarAtendimento (atendimento, index) {
      if (this.ehCadastroNovo) {
        this.atendimentos.splice(index, 1)
        return
      }
      this.loading = true
      this.$http
        .request({ url: `/atendimentos/${atendimento.atendimento_id}`, data: atendimento, method: 'DELETE' })
        .then(response => {
          this.loading = false
          this.atendimentos.splice(index, 1)
          toast('Atendimento Removido com sucesso!', 'negative')
        })
        .catch(error => {
          this.loading = false
          this.notificacaoFalha(error)
        })
    },
    notificacaoFalha (error) {
      let msg = ''
      Object.keys(error.response.data).forEach(function (key) {
        msg += error.response.data[key] + '<br />'
      })
      toast(msg, 'negative')
    },
    open () {
      this.$refs.modal.open()
    },
    close () {
      this.$nextTick(() => {
        this.$refs.modal.active = false
        this.$refs.modal.toggleInProgress = false
      })
    },
    print () {
      this.loading = true
      setTimeout(() => {
        const newWin = window.open('')
        newWin.document.write(`<h2>Atendimentos realizados para</h2>`)
        newWin.document.write(this.$refs.atendimentos.outerHTML)
        newWin.print()
        newWin.close()
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
.q-card-main {
  padding: 2%;
}

.icones {
  margin-left: 15px;
  margin-top: 20px;
}

.linha-atendimento {
  margin-block: 25px;
  border-style: inset;
  padding: 10px;
}
</style>