<template>
  <a-modal
    :title="gift === undefined ? $ta('new|signin|package') : $ta('modify|signin|package')"
    v-model="isVisible"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$ta('name')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          allowClear
          v-decorator="['name', {rules: [{ required: true, message: $ta('input|name'), whitespace: true}]}]"
          :placeholder="$ta('input|name')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('stock')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          allowClear
          v-decorator="['stock', {rules: [{ required: true, message: $ta('input|stock'), whitespace: true}]}]"
          :placeholder="$ta('input|stock')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('product|amount')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          allowClear
          v-decorator="['amount', {rules: [{ required: true, message: $ta('input|product|amount'), whitespace: true}]}]"
          :placeholder="$ta('input|product|amount')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('everyday|rebate|amount')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          allowClear
          v-decorator="['rebate', {rules: [{ required: true, message: $ta('input|everyday|rebate|amount'), whitespace: true}]}]"
          :placeholder="$ta('input|everyday|rebate|amount')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('payback_period')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-input
          allowClear
          v-decorator="['period', {rules: [{ required: true, message: $ta('input|payback_period'), whitespace: true}]}]"
          :placeholder="$ta('input|payback_period')" 
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
        this.form.getFieldDecorator('name', { initialValue: this.gift?.name })
        this.form.getFieldDecorator('stock', { initialValue: this.gift?.stock })
        this.form.getFieldDecorator('amount', { initialValue: this.gift?.neededAmount })
        this.form.getFieldDecorator('rebate', { initialValue: this.gift?.rebate })
        this.form.getFieldDecorator('period', { initialValue: this.gift?.period })
      } else {
        this.form.getFieldDecorator('name', { initialValue: null })
        this.form.getFieldDecorator('stock', { initialValue: null })
        this.form.getFieldDecorator('amount', { initialValue: null })
        this.form.getFieldDecorator('rebate', { initialValue: null })
        this.form.getFieldDecorator('period', { initialValue: null })
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