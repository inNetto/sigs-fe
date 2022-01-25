<template>
  <q-field :icon="icon" :error-label="errorMessageFormated">
    <q-datetime clear-label="Limpar" :min="min" :max="max" type="date" @blur="validation.$touch" :error="validation.$error" :float-label="label" :value="value" :format="format" ok-label="Confirma" cancel-label="Cancela" @input="change($event)"></q-datetime>
  </q-field>
</template>

<script type="text/javascript">
  export default {
    props: {
      min: { type: Date },
      max: { type: Date },
      icon: { type: String },
      format: {
        type: String,
        default () {
          return 'DD/MM/YYYY'
        }
      },
      validation: {
        type: Object,
        required: true
      },
      value: { required: true },
      validationMessages: {},
      label: {}
    },
    computed: {
      errorMessageFormated () {
        let msg = ''
        Object.keys(this.validationMessages).forEach(item => {
          if (!this.validation[item]) {
            msg += this.validationMessages[item]
          }
        })
        return msg
      }
    },
    methods: {
      change (value) {
        this.validation.$touch()
        this.$emit('input', value)
      }
    }
  }
</script>
<style scoped>

</style>
