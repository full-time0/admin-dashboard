<template>
  <a-modal
    :title="gift === undefined ? $ta('new|recharge|gift') : $ta('modify|recharge|gift')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$ta('max|amount')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['maxAmount', {rules: [{ required: true, message: $ta('input|max|amount'), whitespace: true}]}]"
          :placeholder="$ta('input|max|amount')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('min|amount')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['minAmount', {rules: [{ required: true, message: $ta('input|min|amount'), whitespace: true}]}]"
          :placeholder="$ta('input|min|amount')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('gift|rate')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-input
          allowClear
          v-decorator="['giftRate', {rules: [{ required: true, message: $ta('input|gift|rate'), whitespace: true}]}]"
          :placeholder="$ta('input|gift|rate')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('remark')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
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

const transferTitles = ['银行卡', '已添加银行卡']
const searchPlaceholder = '请输入搜索内容'

export default {
  name: 'GiftModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    gift: {
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
      mockData: [],
      targetKeys: [],
      transferTitles,
      searchPlaceholder,
      loading: false,
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
      console.log(this.gift)
      if (this.gift !== undefined && this.gift !== null) {
        this.form.getFieldDecorator('maxAmount', { initialValue: this.gift?.maxAmount })
        this.form.getFieldDecorator('minAmount', { initialValue: this.gift?.minAmount })
        this.form.getFieldDecorator('giftRate', { initialValue: this.gift?.giftRate })
        this.form.getFieldDecorator('remark', { initialValue: this.gift?.remark })
      } else {
        this.form.getFieldDecorator('maxAmount', { initialValue: null })
        this.form.getFieldDecorator('minAmount', { initialValue: null })
        this.form.getFieldDecorator('giftRate', { initialValue: null })
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