<template>
  <a-modal
    :title="payment === undefined ? '新增分组' : $ta('modify|payment|config')"
    v-model="isVisible"
    width="46%"
    @ok="saveAs"
  >
    <a-form :form="form" layout="horizontal">
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('merchant|id')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['merchantID', {rules: [{ required: true, message: $ta('input|merchant|id'), whitespace: true}]}]"
              :placeholder="$ta('input|merchant|id')" 
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('merchant|key')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            >
            <a-input
              allowClear
              v-decorator="['merchantKey', {rules: [{ required: true, message: $ta('input|merchant|key'), whitespace: true}]}]"
              :placeholder="$ta('input|merchant|key')" 
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('weights')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            >
            <a-input
              allowClear
              v-decorator="['weights', {rules: [{ required: true, message: $ta('input|weights'), whitespace: true}]}]"
              :placeholder="$ta('input|weights')" 
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('payment|type')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            has-feedback
            :validate-status="payment && payment.payType !== null ? 'success': ''"
          >
            <a-select
              v-decorator="['paymentType', {rules: [{ required: true, message: $ta('select|payment|type')}]}]"
              :placeholder="$ta('select|payment|type')"
            >
              <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
                {{ option.text }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('collection|rate')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            >
            <a-input
              allowClear
              addon-after="%"
              v-decorator="['collectionRate', {rules: [{ required: true, message: $ta('input|collection|rate'), whitespace: true}]}]"
              :placeholder="$ta('input|collection|rate')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('payment|rate')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              addon-after="%"
              v-decorator="['paymentRate', {rules: [{ required: true, message: $ta('input|payment|rate'), whitespace: true}]}]"
              :placeholder="$ta('input|payment|rate')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('max|deposit|amount')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            >
            <a-input
              allowClear
              v-decorator="['maxDepositAmount', {rules: [{ required: true, message: $ta('input|max|deposit|amount'), whitespace: true}]}]"
              :placeholder="$ta('input|max|deposit|amount')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('min|deposit|amount')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['minDepositAmount', {rules: [{ required: true, message: $ta('input|min|deposit|amount'), whitespace: true}]}]"
              :placeholder="$ta('input|min|deposit|amount')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('pay|gateway')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            >
            <a-input
              allowClear
              v-decorator="['payGateway', {rules: [{ required: true, message: $ta('input|pay|gateway'), whitespace: true}]}]"
              :placeholder="$ta('input|pay|gateway')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('payment|gateway')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['paymentGateway', {rules: [{ required: true, message: $ta('input|payment|gateway'), whitespace: true}]}]"
              :placeholder="$ta('input|payment|gateway')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('max|withdrawal|amount')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            >
            <a-input
              allowClear
              v-decorator="['maxWithdrawAmount', {rules: [{ required: true, message: $ta('input|max|withdrawal|amount'), whitespace: true}]}]"
              :placeholder="$ta('input|max|withdrawal|amount')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('min|withdrawal||amount')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['minWithdrawAmount', {rules: [{ required: true, message: $ta('input|min|withdrawal||amount'), whitespace: true}]}]"
              :placeholder="$ta('input|min|withdrawal||amount')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('deposit|amount')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            >
            <a-input
              allowClear
              v-decorator="['depositAmount', {rules: [{ required: true, message: $ta('input|deposit|amount'), whitespace: true}]}]"
              :placeholder="$ta('input|deposit|amount')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('deposit|type')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['depositType', {rules: [{ required: false, message: $ta('input|deposit|type'), whitespace: true}]}]"
              :placeholder="$ta('input|deposit|type')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('withdrawal|type')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            >
            <a-input
              allowClear
              v-decorator="['withdrawType', {rules: [{ required: false, message: $ta('input|withdrawal|type'), whitespace: true}]}]"
              :placeholder="$ta('input|withdrawal|type')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('pay|alias')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['payAlias', {rules: [{ required: false, message: $ta('input|pay|alias'), whitespace: true}]}]"
              :placeholder="$ta('input|pay|alias')"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item
            :label="$ta('payment|key')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
            >
            <a-input
              allowClear
              v-decorator="['paymentKey', {rules: [{ required: false, message: $ta('input|payment|key'), whitespace: true}]}]"
              :placeholder="$ta('input|payment|key')"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :label="$ta('other|key')"
            :labelCol="{span: 6}"
            :wrapperCol="{span: 18}"
          >
            <a-input
              allowClear
              v-decorator="['otherKey', {rules: [{ required: false, message: $ta('input|other|key'), whitespace: true}]}]"
              :placeholder="$ta('input|other|key')"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-transfer 
      :listStyle="{width: '47%', height: '300px'}"
      :titles="transferTitles"
      :searchPlaceholder="searchPlaceholder"
      :dataSource="mockData" 
      :targetKeys="targetKeys"
      :render="item => item.title"
      :onChange="onChange"
    />
  </a-modal>
</template>

<script>

const transferTitles = ['银行卡', '已添加银行卡']
const searchPlaceholder = '请输入搜索内容'

export default {
  name: 'PaymentModal',
  i18n: require('./i18n'),
  props: {
    visible: Boolean,
    payment: {
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
    this.getMock()
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      console.log(this.payment)
      if (this.payment !== undefined && this.payment !== null) {
        this.form.getFieldDecorator('merchantID', { initialValue: this.payment?.merchantID })
        this.form.getFieldDecorator('merchantKey', { initialValue: this.payment?.merchantKey })
        this.form.getFieldDecorator('weights', { initialValue: this.payment?.weights })
        this.form.getFieldDecorator('paymentType', { initialValue: this.payment?.paymentType })
        this.form.getFieldDecorator('collectionRate', { initialValue: this.payment?.collectionRate })
        this.form.getFieldDecorator('paymentRate', { initialValue: this.payment?.paymentRate })
        this.form.getFieldDecorator('maxDepositAmount', { initialValue: this.payment?.maxDepositAmount })
        this.form.getFieldDecorator('minDepositAmount', { initialValue: this.payment?.minDepositAmount })
        this.form.getFieldDecorator('payGateway', { initialValue: this.payment?.payGateway })
        this.form.getFieldDecorator('paymentGateway', { initialValue: this.payment?.paymentGateway })
        this.form.getFieldDecorator('maxWithdrawAmount', { initialValue: this.payment?.maxWithdrawAmount })
        this.form.getFieldDecorator('minWithdrawAmount', { initialValue: this.payment?.minWithdrawAmount })
        this.form.getFieldDecorator('depositAmount', { initialValue: this.payment?.depositAmount })
        this.form.getFieldDecorator('depositType', { initialValue: this.payment?.depositType })
        this.form.getFieldDecorator('withdrawType', { initialValue: this.payment?.withdrawType })
        this.form.getFieldDecorator('payAlias', { initialValue: this.payment?.payAlias })
        this.form.getFieldDecorator('paymentKey', { initialValue: this.payment?.paymentKey })
        this.form.getFieldDecorator('otherKey', { initialValue: this.payment?.otherKey })
      } else {
        this.form.getFieldDecorator('merchantID', { initialValue: null })
        this.form.getFieldDecorator('merchantKey', { initialValue: null })
        this.form.getFieldDecorator('weights', { initialValue: null })
        this.form.getFieldDecorator('paymentType', { initialValue: null })
        this.form.getFieldDecorator('collectionRate', { initialValue: null })
        this.form.getFieldDecorator('paymentRate', { initialValue: null })
        this.form.getFieldDecorator('maxDepositAmount', { initialValue: null })
        this.form.getFieldDecorator('minDepositAmount', { initialValue: null })
        this.form.getFieldDecorator('payGateway', { initialValue: null })
        this.form.getFieldDecorator('paymentGateway', { initialValue: null })
        this.form.getFieldDecorator('maxWithdrawAmount', { initialValue: null })
        this.form.getFieldDecorator('minWithdrawAmount', { initialValue: null })
        this.form.getFieldDecorator('depositAmount', { initialValue: null })
        this.form.getFieldDecorator('depositType', { initialValue: null })
        this.form.getFieldDecorator('withdrawType', { initialValue: null })
        this.form.getFieldDecorator('payAlias', { initialValue: null })
        this.form.getFieldDecorator('paymentKey', { initialValue: null })
        this.form.getFieldDecorator('otherKey', { initialValue: null })
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
    getMock() {
      const targetKeys = [];
      const mockData = [
        {key: '0', title: 'Agricultural Development Bank of Ghana'},
        {key: '1', title: 'uniBank（Ghana）Limited'},
        {key: '2', title: 'Ecobank Ghana'},
        {key: '3', title: 'GCB Bank Limited'},
        {key: '4', title: 'MTN'},
        {key: '5', title: 'National Investment Bank'},
        {key: '6', title: 'Société Générale Ghana Ltd'},
        {key: '7', title: 'Universal Merchant Bank'},
        {key: '8', title: 'Zenith Bank of Ghana'},
        {key: '9', title: 'Barclays Bank of Ghana'},
        {key: '10', title: 'Vodafone'},
        {key: '11', title: 'AirtelTigo'},
      ];
      this.mockData = mockData
      this.targetKeys = targetKeys
    },
    onChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys
    },
  }
}
</script>