<template>
  <div>
    <div class="row xs-gutter" >
      <div class="col-6" v-for="(pessoa, index) in pessoas.pessoas" :key="index">
        <q-card class="bg-white" >
          <q-card-main>
            <blockquote class="text-right">
              <small>Cadastro em : <span class="text-bold">{{$moment(pessoa.dt_inclusao).format('DD/MM/YYYY')}}</span> 
</small>
            </blockquote>
            <div class="col-auto">
              <!-- <q-field :error="$v.dados.data.$each[index].cep.$error" error-label="Mínimo 8. Obrigatório."> -->
                <q-input float-label="Nome" v-model="pessoa.nome" 
                        max-lenght="8"
                        
                ></q-input>
              <!-- </q-field> -->
            </div>
            <div class="col-auto">
              <q-field >
                <q-input float-label="Data de nascimento" v-model="pessoa.data_nascimento"
                        max-lenght="8"
                        >
                        </q-input>
              </q-field>
            </div>
            <div class="col-auto">
              <!-- <q-field :error="$v.dados.data.$each[index].rua.$error" error-label="Obrigatório."> -->
                <q-input float-label="Documento" v-model="pessoa.documento"
                        max-lenght="8"
                        ></q-input>
              <!-- </q-field> -->
            </div>
            <div class="col-auto">
              <!-- <q-field :error="$v.dados.data.$each[index].rua.$error" error-label="Obrigatório."> -->
                <q-input float-label="Email" v-model="pessoa.email"
                        ></q-input>
              <!-- </q-field> -->
            </div>
            <div class="col-auto">
              <!-- <q-field :error="$v.dados.data.$each[index].rua.$error" error-label="Obrigatório."> -->
                <q-input float-label="Telefone Residencial" v-model="pessoa.telefone1"
                        max-lenght="8"
                        ></q-input>
              <!-- </q-field> -->
            </div>
            <div class="col-auto">
              <!-- <q-field :error="$v.dados.data.$each[index].rua.$error" error-label="Obrigatório."> -->
                <q-input float-label="Telefone Celular" v-model="pessoa.telefone2"
                        max-lenght="8"
                        ></q-input>
              <!-- </q-field> -->
            </div>
             <div class="col-auto">
                  <g-select label="Sexo"
                    v-model="pessoa.sexo" 
                    type="option"
                    :options="optionsSexo"
                    ></g-select>
            </div>


            <div class="row wrap sm-gutter" id="endereco">
              <div class="col-4">
                <g-input label="Cep" 
                    v-model="pessoa.endereco.cep" :max-length="9" >
                  </g-input>
              </div>
              <div class="col-8">
                <g-input label="Rua"
                        v-model="pessoa.endereco.rua">
                </g-input>
              </div>
              <div class="row wrap sm-gutter">
                <div class="col-4">
                  <g-input label="Número"
                          v-model="pessoa.endereco.numero" >
                  </g-input>
                </div>
                <div class="col-8">
                <g-input label="Município" 
                  v-model="pessoa.endereco.municipio" 
                  :max-length="25" >
                </g-input>
                </div>
              </div>
          </div>
          <div class="row wrap sm-gutter">
            <div class="col-6 ">
              <q-input float-label="Bairro" v-model="pessoa.endereco.bairro" :max-length="25" :validate="pessoa.endereco.bairro"></q-input>
            </div>
            <div class="col-6">
              <q-input float-label="Sub. Bairro" v-model="pessoa.endereco.sub_bairro" :max-length="25"></q-input>
            </div>
          </div>
          <div class="row sm-gutter">
            <div class="col">
              <q-input float-label="Complemento" v-model="pessoa.endereco.complemento"></q-input>
            </div>
          </div>
          <div>
            <q-btn icon="done" color="green" @click="atualizarPessoa(pessoa)">Corrigir</q-btn>
            <q-btn icon="delete" color="negative" @click="removerPessoa(pessoa)">Remover</q-btn>
            <q-btn color="secondary" @click="openModal(pessoa)">Listar Atendimentos</q-btn>
            <modal-atendimentos
              slot="content" 
              :options-tipo-atendimento="optionsTipoAtendimento"
              :options-centros-sociais="optionsCentrosSociais" 
              :options-cursos="optionsCursos" 
              :ref="`modal${[pessoa.id]}`" 
              :id="pessoa.id" v-if="pessoa.id"
            ></modal-atendimentos>     
          </div>
          </q-card-main>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import ModalAtendimentos from '../modalAtendimentos.vue'
// import { Dialog } from 'quasar'
import { mapGetters } from 'vuex'
import { toast } from '../../helper/notification'
import methodsMixin from '../formulario/methodsMixin'
export default {
  mixins: [methodsMixin],
  components: {
    ModalAtendimentos
  },
  mounted () {
    this.getTiposAtendimento()
    this.getCentrosSociais()
    this.getCursos()
  },
  props: {
    pessoas: Object,
    page: Number
  },
  data: () => ({
    tiposAtendimento: [],
    centrosSociais: [],
    cursos: [],
    validationMessages: {
      pessoa: {
        data_nascimento: { required: 'Data de nascimento é obrigatória.', minLength: 'Complete o telefone.' },
        sexo: { required: 'Sexo é obrigatório.' }
      }
    },
    optionsSexo: [
      { label: 'Masculino', value: 'M' },
      { label: 'Feminino', value: 'F' }]
  }),
  computed: {
    ...mapGetters(['getUserProfile']),
    optionsTipoAtendimento () {
      return [
        { label: '', value: '' },
        ...this.tiposAtendimento.map(tipo => { return { label: tipo.nome, value: tipo.id } })
      ]
    },
    optionsCentrosSociais () {
      return this.centrosSociais.map(tipo => { return { label: tipo.nome, value: tipo.id } })
    },
    optionsCursos () {
      return this.cursos.map(tipo => { return { label: tipo.nome, value: tipo.id } })
    }
  },
  watch: {
  },
  methods: {
    removerPessoa (pessoa) {
      this.$bus.$emit('loading')
      this.$http
        .delete(`pessoas/${pessoa.id}`)
        .then(response => {
          this.$bus.$emit('loading')
          toast('Pessoa Deletada com sucesso!', 'positive')
          this.$emit('atualizar')
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    },
    atualizarPessoa (pessoa) {
      this.$bus.$emit('loading')
      pessoa.user_id = this.getUserProfile.id
      this.$http.put(`pessoas/${pessoa.id}`, pessoa)
        .then(response => {
          this.$bus.$emit('loading')
          toast('Pessoa atualizada com sucesso!', 'positive')
        })
        .catch(error => {
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
    openModal (pessoa) {
      this.$refs[`modal${pessoa.id}`][0].open()
    }
  }
}
</script>

<style scoped>
</style>
