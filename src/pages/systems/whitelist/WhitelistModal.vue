<template>
  <a-modal
    width="35%"
    :title="whitelist === undefined ? $ta('new|ip') : $ta('modify|ip')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('ip')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          allowClear
          v-decorator="['ip', {rules: [{ required: true, message: $ta('input|ip'), whitespace: true}]}]"
          :placeholder="$ta('input|ip')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('remark')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-textarea 
          v-decorator="['remark', {rules: [{ required: false, message: $ta('input|remark'), whitespace: true}]}]"
          :placeholder="$ta('input|remark')"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'WhitelistModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    whitelist: {
      type: Object,
    },
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
    }
  },
  mounted() {
    // this.getMock()
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.whitelist !== undefined && this.whitelist !== null) {
        this.form.getFieldDecorator('ip', { initialValue: this.whitelist?.ip })
        this.form.getFieldDecorator('remark', { initialValue: this.whitelist?.remark })
      } else {
        this.form.getFieldDecorator('ip', { initialValue: null })
        this.form.getFieldDecorator('remark', { initialValue: null })
      }
    },
  },
  methods: {
    saveAs (e) {
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