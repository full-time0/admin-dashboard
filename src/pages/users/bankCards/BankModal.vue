<template>
  <a-modal
    :title="bank === undefined ? '新增银行卡' : '修改银行卡'"
    v-model="isVisible"
    @ok="addNewBank"
  >
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$t('phone')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 17}"
      >
        <a-input
          allowClear
          v-decorator="['phone', {rules: [{ required: true, message: $ta('input|phone'), whitespace: true}]}]"
          :placeholder="$ta('input|phone')"
        />
      </a-form-item>
      <a-form-item
        :label="$t('accountBank')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 17}"
        has-feedback
        :validate-status="bank && bank.accountBank !== null ? 'success': ''"
        >
        <a-select
          v-decorator="['accountBank', {rules: [{ required: true, message: $ta('select|accountBank')}]}]"
          :placeholder="$ta('select|accountBank')"
        >
          <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
            {{ option.text }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label="$t('accountOwner')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 17}"
      >
        <a-input
          allowClear
          v-decorator="['accountOwner', {rules: [{ required: true, message: $ta('input|accountOwner'), whitespace: true}]}]"
          :placeholder="$ta('input|accountOwner')" 
        />
      </a-form-item>
      
      <a-form-item
        :label="$ta('bank|cardNum')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 17}"
      >
        <a-input
          allowClear
          v-decorator="['bankCardNum', {rules: [{ required: true, message: $ta('input|bank|cardNum'), whitespace: true}]}]"
          :placeholder="$ta('input|bank|cardNum')"
        />
      </a-form-item>
      <a-form-item
        :label="$ta('bank|reserved|phone')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 17}"
      >
        <a-input
          allowClear
          v-decorator="['bankReservedMobile', {rules: [{ required: true, message: $ta('input|bank|reserved|phone'), whitespace: true}]}]"
          :placeholder="$ta('input|bank|reserved|phone')"
        />
      </a-form-item>
      <a-form-item
        label="IFSC"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 17}"
      >
        <a-input
          allowClear
          v-decorator="['ifsc', {rules: [{ required: false, message: $t('input') + 'IFSC CODE', whitespace: true}]}]"
          :placeholder="$t('input') + 'IFSC CODE'"
        />
      </a-form-item>
      <a-form-item
        :label="$t('status')"
        :labelCol="{span: 6}"
        :wrapperCol="{span: 15}"
      >
        <a-radio-group
          v-decorator="['status', {rules: [{ required: true, message: $ta('select')}]}]"
        >
          <a-radio value="启用">{{$t('enable')}}</a-radio>
          <a-radio value="禁用">{{$t('disable')}}</a-radio>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>

export default {
  name: 'BankModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    bank: {
      type: Object,
    },
  },
  data() {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
      options: [
        { text: 'PTT', value: '1' },
        { text: 'Koop Bank', value: '2' },
        { text: 'Banco GNB', value: '3' },
        { text: 'CPF', value: '4' },
      ]
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      if (this.bank !== undefined && this.bank !== null) {
        this.form.getFieldDecorator('phone', { initialValue: this.bank?.memberPhone })
        this.form.getFieldDecorator('accountBank', { initialValue: this.bank?.accountBank })
        this.form.getFieldDecorator('accountOwner', { initialValue: this.bank?.accountOwner })
        this.form.getFieldDecorator('bankCardNum', { initialValue: this.bank?.bankCardNum })
        this.form.getFieldDecorator('bankReservedMobile', { initialValue: this.bank?.bankReservedMobile })
        this.form.getFieldDecorator('ifsc', { initialValue: this.bank?.ifsc })
        this.form.getFieldDecorator('status', { initialValue: this.bank?.status })
      } else {
        this.form.getFieldDecorator('phone', { initialValue: null })
        this.form.getFieldDecorator('accountBank', { initialValue: null })
        this.form.getFieldDecorator('accountOwner', { initialValue: null })
        this.form.getFieldDecorator('bankCardNum', { initialValue: null })
        this.form.getFieldDecorator('bankReservedMobile', { initialValue: null })
        this.form.getFieldDecorator('ifsc', { initialValue: null })
        this.form.getFieldDecorator('status', { initialValue: null })
      }
    },
  },
  methods: {
    addNewBank (e) {
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