<template>
  <a-modal
    :title="which === 'gift' ? $t('giveGift') : which === 'up' ? $t('up') : $t('down')"
    v-model="isVisible"
    @ok="addNewUser"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="which === 'gift' ? $t('giveGift') : which === 'up' ? $t('up') : $t('down')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['value', {rules: [{ required: true, message: $ta('input'), whitespace: true}]}]"
          :placeholder="$ta('input')" 
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'OperateModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    id: Number,
    which: String,
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
    },
  },
  methods: {
    addNewUser (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.isVisible = !this.isVisible
          console.log('Received values of form: ', values)
        }
      })
      
    },
  }
}
</script>