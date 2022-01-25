<template>
  <div>
    <g-card
      :titulo="$route.meta.name"
      :contentPadding="true"
      subtitulo="Edite uma pessoa"
      titleClass="bg-blue-8"
      titleSize="col-xs-10 col-sm-8 col-md-6 col-lg-6"
      actionsClass="bg-light"
    >
      <div
        slot="content"
        v-if="pessoaSelecionada.nome"
      >
        <div class="row">
          <div class="col">
            <q-input
              float-label="Nome"
              v-model="pessoaSelecionada.nome"
            ></q-input>
          </div>
          <div class="quote float-right">
            Cadastro em : <span class="text-bold">{{dataInclusao}}</span>
          </div>
        </div>
        <formulario
          ref="formulario"
          :pessoa="pessoaSelecionada"         
          v-on:valido="setValido"
          v-if="pessoaSelecionada.id"
          @pessoaFoiAlterada="setPessoaFoiAlterada"         
        ></formulario>

      </div>
      <q-transition
        enter="fadeIn"
        leave="fadeOut"
        slot="actions"
      >
        <div class="row xs-gutter">
          <div class="col-auto">
            <q-btn
              icon="save"
              color="green"
              :disabled="!valido"
              @click="salvar"
            >Salvar</q-btn>
          </div>          
          <div class="col-auto">
            <q-btn
              icon="delete_forever"
              color="red"
              @click="deletar"
            >Deletar</q-btn>
          </div>
        </div>
      </q-transition>
    </g-card>    
  </div>
</template>
<script>
import { Dialog, Toast } from 'quasar'
import Formulario from '../formulario/formulario.vue'
import methodsMixin from '../formulario/methodsMixin'
import GCard from '@/gCard.vue'
import VMasker from 'vanilla-masker'
import { mapGetters } from 'vuex'
export default {
  components: {
    Formulario, GCard
  },
  mixins: [methodsMixin],
  data () {
    return {
      pessoaFoiAlterada: false,
      pessoaSelecionada: {
        telefone: '',
        data_nascimento: '',
        endereco: {
          cep: '',
          rua: '',
          bairro: '',
          municipio: '',
          lat: '',
          lng: ''
        }
      },
      valido: false
    }
  },
  mounted () {
    this.getPessoa()
  },
  computed: {
    ...mapGetters(['getUserProfile']),
    id () {
      return this.$route.params.id
    },
    dataInclusao () {
      return this.$moment(this.pessoaSelecionada.dt_inclusao).format('DD/MM/YYYY')
    }
  },
  methods: {
    setValido (value) {
      this.valido = value
    },
    getPessoa () {
      this.$bus.$emit('loading')
      this.$http.get(`/pessoas/${this.id}`)
        .then(response => {
          this.$bus.$emit('loading')
          this.pessoaSelecionada = response.data[0]
          if (this.pessoaSelecionada.telefone) { this.pessoaSelecionada.telefone = VMasker.toPattern(this.pessoaSelecionada.telefone, '(99) 99999-9999') }
        })
    },
    deletar () {
      const vm = this
      Dialog.create({
        title: 'Confirmar',
        message: 'Deletar esta pessoa ?',
        buttons: [
          { label: 'Não', color: 'primary' },
          { label: 'Sim', color: 'negative', handler () { vm.deletarPessoaDoBanco() } }
        ]
      })
    },
    deletarPessoaDoBanco () {
      this.$bus.$emit('loading')
      this.$http
        .delete(`pessoas/${this.$router.currentRoute.params.id}`)
        .then(response => {
          this.$bus.$emit('loading')
          Toast.create.positive(
            { html: 'Pessoa Deletada com sucesso!', timeout: 2500, color: '#fff' }
          )
          this.$router.push({ name: 'cadastro' })
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    },
    salvar () {
      this.$bus.$emit('loading')
      this.pessoaSelecionada.user_id = this.getUserProfile.id
      this.$http.put(`pessoas/${this.pessoaSelecionada.id}`, this.getValorAsalvar())
        .then(response => {
          this.$bus.$emit('loading')
          Toast.create.positive(
            { html: 'Pessoa atualizada com sucesso!', timeout: 2500 }
          )
        })
        .catch(error => {
          this.$bus.$emit('loading')
          this.notificacaoFalha(error)
        })
    },
    getValorAsalvar () {
      if (this.pessoaFoiAlterada) {
        let dados = Object.assign({}, this.pessoaSelecionada)
        dados = {
          ...dados
        }
        return dados
      }

      if (this.pessoaFoiAlterada) {
        let dados = Object.assign({}, this.pessoaSelecionada)
        return dados
      }

      let dados = Object.assign({}, this.atendimento)
      dados = {
        ...this.pessoaSelecionada,
        ...dados,
        user_id: this.getUserProfile.id,
        atendimento: true
      }
      return dados
    },

    notificacaoFalha (error) {
      let msg = ''
      Object.keys(error.response.data).forEach(function (key) {
        msg += error.response.data[key] + '<br />'
      })
      Toast.create.negative({ html: msg })
    },
    setPessoaFoiAlterada (value) {
      this.pessoaFoiAlterada = value
    }
  }
}
</script>

<style scoped>
</style>