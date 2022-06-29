<template>
  <a-modal
    :title="$ta('batch|approval')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$ta('payBehalf|passage')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
        >
        <a-select
          v-decorator="['payChannel', {rules: [{ required: true, message: $ta('select|payBehalf|passage')}]}]"
          :placeholder="$ta('select|payBehalf|passage')"
        >
          <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
            {{ option.text }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'AuditModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    user: {
      type: Object,
    },
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
      options: [
        { text: 'Nigeria-CftPay', value: 'Nigeria-CftPay' },
        { text: 'Pt_UsdtPay', value: 'Pt_UsdtPay' },
        { text: 'Usdt-ShineuPay', value: 'Usdt-ShineuPay' },
        { text: 'Gstpay', value: 'Gstpay' }
      ]
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
    saveAs (e) {
      e.preventDefault()
    },
  }
}
</script>