<template>
  <div>
    <q-field :icon="icon" :error-label="errorMessageFormated">
      <q-input v-model="model" 
      :value="value" 
      :error="hasValidation ? validation.$error : false"
      @blur="hasValidation ? validation.$touch: ''"
      :float-label="label"
      @change="change" 
      :max-length="maxLength"
      >
      </q-input>
    </q-field>
  </div>
</template>

<script>
  import { QInput, QField } from 'quasar'
  export default {
    components: {
      QInput, QField
    },
    mounted () {
      this.model = this.value
    },
    watch: {
      value () {
        this.model = this.value
      }
    },
    props: {
      maxLength: Number,
      icon: String,
      count: Number,
      validation: {
        type: Object || undefined
      },
      value: {},
      validationMessages: {},
      label: {}
    },
    computed: {
      hasValidation () {
        return this.validation
      },
      errorMessageFormated () {
        if (!this.hasValidation) {
          return ''
        }
        let msg = ''
        Object.keys(this.validationMessages).forEach(item => {
          if (!this.validation[item]) {
            msg += this.validationMessages[item]
          }
        })
        return msg
      }
    },
    data () {
      return {
        model: ''
      }
    },
    methods: {
      change (value) {
        if (this.hasValidation) {
          this.validation.$touch()
        }
        this.$emit('input', value)
      }
    }
  }
</script>
<style scoped>

</style>
