<template>
  <a-modal
    :title="article === undefined ? $ta('new|type') : $ta('modify|type')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$ta('article|type')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 20}"
      >
        <a-input
          allowClear
          v-decorator="['type', {rules: [{ required: true, message: $ta('input|article|type'), whitespace: true}]}]"
          :placeholder="$ta('input|article|type')" 
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'TypeModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    article: {
      type: Object,
    },
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.article !== undefined && this.article !== null) {
        this.form.getFieldDecorator('type', { initialValue: this.article?.name })
      } else {
        this.form.getFieldDecorator('type', { initialValue: null })
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