<template>
  <a-modal
    width="45%"
    :title="$ta('order|details')"
    v-model="isVisible"
    @close="onClose"
  >
    <a-descriptions :title="$ta('withdrawal|details')" bordered style="margin-bottom: 20px">
      <a-descriptions-item :label="$ta('member|name')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('member|balance')">
       test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('actual|withdrawal|amount')">
       test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('handle|fee')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('apply|withdrawal|amount')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$t('firstPay')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('apply|time')" :span="2">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('member|phone')">
        test
      </a-descriptions-item>
    </a-descriptions>
    <a-descriptions :title="$ta('profit|info')" bordered style="margin-bottom: 20px">
      <a-descriptions-item :label="$ta('today|deposit')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$t('totalDeposit')">
       test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('today|deposit|frequency')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('total|deposit|frequency')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('today|withdrawal')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('total|withdrawal')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('today|withdrawal|frequency')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('total|deposit|frequency')" :span="2">
        test
      </a-descriptions-item>
    </a-descriptions>
    <a-descriptions :title="$ta('withdrawal|account')" bordered :column="2" style="margin-bottom: 20px">
      <a-descriptions-item :label="$ta('depositary|bank')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('depositary|fullName')">
       test
      </a-descriptions-item>
      <a-descriptions-item :label="$ta('bank|account')">
        test
      </a-descriptions-item>
      <a-descriptions-item :label="$t('phone')">
        test
      </a-descriptions-item>
      <a-descriptions-item label="IFSC Code" :span="2">
        test
      </a-descriptions-item>
    </a-descriptions>
    <a-form :form="form" layout="horizontal">
      <a-form-item
        :label="$ta('front|order|remark')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-textarea
          rows="1" 
          v-decorator="['frontOrderRemark', {rules: [{ required: false, message: $ta('input|front|order|remark'), whitespace: true}]}]"
          :placeholder="$ta('input|front|order|remark')" 
        />
      </a-form-item>
      <a-form-item
        :label="$ta('backstage|order|remark')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-textarea
          rows="1" 
          v-decorator="['backOrderRemark', {rules: [{ required: false, message: $ta('input|backstage|order|remark'), whitespace: true}]}]"
          :placeholder="$ta('input|backstage|order|remark')"
        />
      </a-form-item>
      <a-form-item
        :label="$ta('user|remark')"
        :labelCol="{span: 4}"
        :wrapperCol="{span: 18}"
      >
        <a-textarea
          rows="1" 
          v-decorator="['userRemark', {rules: [{ required: false, message: $ta('input|user|remark'), whitespace: true}]}]"
          :placeholder="$ta('input|user|remark')"
        />
      </a-form-item>
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
    <template slot="footer">
      <a-button type="danger" @click="onClose">
        {{$ta('no|pass')}}
      </a-button>
      <a-button type="primary" @click="onClose">
        {{$t('pass')}}
      </a-button>
      <a-button @click="onClose">
        {{$ta('manual|payout')}}
      </a-button>
    </template>
  </a-modal>
</template>

<script>

export default {
  name: 'OrderDetail',
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
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
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
    onClose() {
      this.isVisible = !this.isVisible;
    },
  }
}
</script>