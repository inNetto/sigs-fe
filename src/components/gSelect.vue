<template>
  <q-field :icon="icon" :error-label="errorMessageFormated">
    <q-select :filter="filter" 
      filter-placeholder="Filtrar" 
      :type="type"
      @blur="hasValidation ? validation.$touch: ''"
      :error="hasValidation ? validation.$error : false"
      :options="options"
      :float-label="label" 
      :value="value" 
      @input="change($event)"
    >
  </q-select>
  </q-field>
</template>
<script>
export default {
  props: {
    filter: {
      type: Boolean
    },
    icon: {
      type: String
    },
    validation: {
      type: Object || undefined
    },
    value: {
      required: true
    },
    type: {
      required: true
    },
    validationMessages: {},
    label: {},
    options: {}
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
    return {}
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
