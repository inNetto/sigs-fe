<template>
  <div>
    <g-card
      :titulo="$route.meta.name"
      :contentPadding="true"
      subtitulo="Cadastre uma nova pessoa"
      titleClass="bg-blue-8"
      titleSize="col-xs-10 col-sm-8 col-md-6 col-lg-6"
      actionsClass="bg-light"
    >
      <div
        class="row"
        slot="content"
      >
        <div class="col-6">
          <q-search
            color="secondary"
            v-model="terms"
            placeholder="Busque a pessoa pelo nome"
          >
            <q-autocomplete
              @search="search"
              :debounce="0"
              :min-characters="3"
              :max-results="15"
              @selected="selected"
            />
          </q-search>
        </div>
      </div>
      <q-transition
        enter="fadeInDown"
        leave="fadeOutUp"
        slot="content"
      >
        <formulario          
          v-if="showFormulario"
          :pessoa="pessoaSelecionada"
          v-on:valido="setValido"
        ></formulario>
      </q-transition>
      <q-transition
        enter="fadeIn"
        leave="fadeOut"
        slot="actions"
      >
        <div
          class="row xs-gutter"
          v-if="showFormulario"
        >
          <div class="col-auto">
            <q-btn
              icon="save"
              color="green"
              :disabled="!valido"
              @click="salvar"
            >Salvar</q-btn>
          </div>         
        </div>
      </q-transition>
    </g-card>    
  </div>
</template>

<script>
import Formulario from '../formulario/formulario.vue'
import GCard from '@/gCard.vue'
import methodsMixin from '../formulario/methodsMixin'
import { toast } from '../../helper/notification'
import { mapGetters } from 'vuex'
export default {
  components: {
    Formulario, GCard
  },
  mixins: [methodsMixin],
  data: () => ({
    terms: '',
    pessoasBuscadas: [],
    showFormulario: false,
    pessoaSelecionada: {
      telefone: '',
      data_nascimento: '',
      endereco: {
        cep: '',
        rua: '',
        bairro: '',
        municipio: ''
      }
    },
    valido: false
  }),
  watch: {
    terms () {
      if (this.terms.length < 4) {
        this.showFormulario = false
      }
    }
  },
  methods: {
    search (terms, done) {
      this.searching = true
      this.$http.get(`/pessoas/like/${this.nomeParaQuery}`)
        .then(response => {
          this.pessoasBuscadas = response.data
          this.showFormulario = this.terms.length > 3 && this.pessoasBuscadas.length === 0
          done(this.pessoasOrganizadas)
        })
        .catch(() => { })
    },
    salvar () {
      this.$bus.$emit('loading')
      this.pessoaSelecionada.nome = this.terms
      this.pessoaSelecionada.user_id = this.getUserProfile.id
      this.$http.post('pessoas', this.pessoaSelecionada)
        .then(response => {
          this.$bus.$emit('loading')
          this.reset()
          toast('Pessoa cadastrada com sucesso!', 'positive')
        })
        .catch(error => {
          this.$bus.$emit('loading')
          this.notificacaoFalha(error)
        })
    },
    selected (pessoa) {
      this.terms = pessoa.label
      this.$router.push({
        name: 'edicao',
        params: { id: pessoa.value }
      })
    },
    setValido (value) {
      this.valido = value
    },
    loading () {
      this.$emit('loading')
    },
    notificacaoFalha (error) {
      let msg = ''
      Object.keys(error.response.data).forEach(function (key) {
        msg += error.response.data[key] + '<br />'
      })
      toast(msg, 'negative')
    },
    reset () {
      this.showFormulario = false
      this.terms = ''
      this.pessoaSelecionada = {
        telefone: '',
        data_nascimento: '',
        endereco: {
          cep: '',
          rua: '',
          bairro: '',
          municipio: ''
        }
      }
    }
  },
  computed: {
    ...mapGetters(['getUserProfile']),
    nomeParaQuery () {
      return this.terms.split(' ').join('_')
    },
    pessoasOrganizadas () {
      return this.pessoasBuscadas.map(pessoa => {
        return {
          label: pessoa.nome,
          sublabel: `Aniversário: ${pessoa.data_nascimento}`,
          value: pessoa.id
        }
      })
    }
  }
}
</script>

<style scoped>
</style>