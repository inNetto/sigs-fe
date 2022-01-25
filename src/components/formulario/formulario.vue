
<template>
  <div id="formulario">
    <div class="row wrap sm-gutter">
      <div class="col ">
        <g-input
          label="Data de Nascimento"
          v-model="maskedDataNascimento"
          :max-length="10"
          :validation="$v.pessoa.data_nascimento"
          :validation-messages="validationMessages.pessoa.data_nascimento"
        ></g-input>
        <q-input
          float-label="Naturalidade"
          v-model="pessoa.naturalidade"
          :max-length="16"
        ></q-input>
      </div>
      <div class="col ">
        <q-input
          float-label="Cpf"
          v-model="pessoa.cpf"          
          :max-length="11"
        ></q-input>
        <q-input
          float-label="Documento Alternativo"
          v-model="pessoa.doc_alternativo"
          :max-length="25"
        ></q-input>
      </div>
    </div>
    <div class="row wrap sm-gutter">
      <div class="col ">
        <g-input
          label="Telefone"
          v-model="maskedCelular"
          :max-length="15"
          :validation="$v.pessoa.telefone"
          :validation-messages="validationMessages.pessoa.telefone"
        ></g-input>
      </div>
      <div class="col ">
        <g-select
          label="Sexo"
          v-model="pessoa.sexo"
          :validation="$v.pessoa.sexo"
          type="option"
          :validation-messages="validationMessages.pessoa.sexo"
          :options="optionsSexo"
        ></g-select>
      </div>
    </div>
      <div class="row wrap sm-gutter">
      <div class="col ">
        <g-select
          label="Profissão"
          v-model="pessoa.profissao"          
          type="option"          
          :options="profissoes.profissoes"
        ></g-select>
      </div>
      <div class="col ">
        <g-select
          label="Escoladirade"
          v-model="pessoa.escolaridade"          
          type="option"          
          :options="optionsEscolaridade"
        ></g-select>
      </div>
      <div class="col ">
        <g-select
          label="Estado civil"
          v-model="pessoa.estado_civil"  
           :options="optionsEstadoCivil"        
          type="option"
        ></g-select>  
      </div>
      <div class="col ">
        <g-select
          label="Cor / Raça"
          v-model="pessoa.cor"         
          type="option"          
          :options="optionsCor"
        ></g-select>
      </div>
    </div>
    <div
      class="row wrap sm-gutter"
      id="endereco"
    >
      <div class="col-xs-12 col-sm-6 col-md-3">
        <g-input
          label="Cep"
          v-model="maskedCep"
          :max-length="9"
          :validation="$v.pessoa.endereco.cep"
          :validation-messages="validationMessages.pessoa.endereco.cep"
        >
        </g-input>
      </div>
      <div class="col-xs-12 col-sm-10 col-md-7">
        <g-input
          label="Rua"
          v-model="pessoa.endereco.rua"
          :validation="$v.pessoa.endereco.rua"
          :validation-messages="validationMessages.pessoa.endereco.rua"
        >
        </g-input>
      </div>
      <div class="col-xs-12 col-sm-2 col-md-2">
        <g-input
          label="Número"
          v-model="pessoa.endereco.numero"
          :validation="$v.pessoa.endereco.numero"
          :validation-messages="validationMessages.pessoa.endereco.numero"
        >
        </g-input>
      </div>
    </div>
    <div class="row wrap sm-gutter">
      <div class="col-xs-12 col-sm-12 col-md-4">
        <g-input
          label="Município"
          v-model="pessoa.endereco.municipio"
          :max-length="25"
          :validation="$v.pessoa.endereco.municipio"
          :validation-messages="validationMessages.pessoa.endereco.municipio"
        >
        </g-input>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 ">
        <q-input
          float-label="Bairro"
          v-model="pessoa.endereco.bairro"
          :max-length="25"
          :validate="$v.pessoa.endereco.bairro"
        ></q-input>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4">
        <q-input
          float-label="Sub. Bairro"
          v-model="pessoa.endereco.sub_bairro"
          :max-length="25"
        ></q-input>
      </div>
    </div>
    <div class="row sm-gutter">
      <div class="col">
        <q-input
          float-label="Complemento"
          v-model="pessoa.endereco.complemento"
        ></q-input>
      </div>
    </div>
  </div>

</template>
<script>
import methodsMixin from './methodsMixin'
import masksMixin from './computedMasksMixin.js'
import { required, minLength } from 'vuelidate/lib/validators'
import profissoes from './profissoes.js'
export default {
  props: {
    pessoa: Object
  },
  mixins: [methodsMixin, masksMixin],
  mounted () {
    this.$watch('$v.$invalid', () => { this.$emit('valido', !this.$v.$invalid) })
    if (this.pessoa.nome) {
      this.$v.$touch()
      this.$emit('valido', !this.$v.$invalid)
    }
    this.pessoaInalterada = Object.assign({}, this.pessoa)
  },
  watch: {
    'pessoa.endereco.cep' () {
      if (this.$v.pessoa.endereco.cep.minLength) {
        this.buscaCep()
      }
    },
    pessoaFoiAlterada () {
      this.$emit('pessoaFoiAlterada', this.pessoaFoiAlterada)
      this.$v.$touch()
    }
  },
  computed: {
    pessoaFoiAlterada () {
      return !this.$lodash.isEqual(this.pessoa, this.pessoaInalterada)
    }
  },
  data () {
    return {
      profissoes,
      validationMessages: {
        pessoa: {
          data_nascimento: { required: 'Data de nascimento é obrigatória.', minLength: 'Complete o telefone.' },
          sexo: { required: 'Sexo é obrigatório.' },
          endereco: {
            cep: { required: 'Cep é obrigatório.', minLength: 'Complete o cep.' },
            rua: { required: 'Rua é obrigatoria.' },
            numero: { required: 'Número é obrigatório.' },
            municipio: { required: 'Município é obrigatório.' }
          }

        }
      },
      optionsSexo: [
        { label: 'Masculino', value: 'M' },
        { label: 'Feminino', value: 'F' }
      ],
      optionsEstadoCivil: [
        { label: 'Solteiro', value: '0' },
        { label: 'Casado', value: '1' },
        { label: 'Separado', value: '2' },
        { label: 'Divorciado', value: '3' },
        { label: 'Viúvo', value: 'viuvo' }
      ],
      optionsCor: [
        { label: 'Branco', value: '0' },
        { label: 'Pardo', value: '1' },
        { label: 'Preto', value: '2' },
        { label: 'Amarelo', value: '3' },
        { label: 'Indígena', value: '4' },
        { label: 'Não sabe', value: '5' }
      ],
      optionsEscolaridade: [
        { label: 'Primeiro Grau', value: '0' },
        { label: 'Segundo Grau', value: '1' },
        { label: 'Graduação', value: '2' },
        { label: 'Pós Graduação', value: '3' },
        { label: 'Mestrado', value: '4' },
        { label: 'Doutorado', value: '5' }
      ],
      pessoaInalterada: {}
    }
  },
  validations () {
    if (!this.pessoaFoiAlterada) {
      return {
        pessoa: {
          endereco: {}
        }
      }
    }
    return {
      pessoa: {
        data_nascimento: { required, minLength: minLength(10) },
        sexo: { required },
        endereco: {
          cep: { required, minLength: minLength(8) },
          rua: { required },
          numero: { required },
          municipio: { required },
          bairro: { required }
        }
      }
    }
  }
}
</script>
<style scoped>
#formulario,
#endereco{
  margin-top: 5%;
}
</style>
