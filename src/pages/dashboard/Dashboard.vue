<template>
  <div class="Dashboard">
    <a-card style="margin-top: 24px" :bordered="true" :body-style="{padding: '24px'}">
      <a-form @submit="handleSubmit" :form="form">
        <a-row >
          <a-col :md="8" :sm="24">
            <a-form-item
              :label="$t('date')"
              :labelCol="{span: 3}"
              :wrapperCol="{span: 18}"
            >
              <a-range-picker 
                style="width: 100%"
                v-decorator="['date', {rules: [{ required: false}]}]"
              />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item
              :label="$t('registeredSrc')"
              :labelCol="{span: 8}"
              :wrapperCol="{span: 15}"
            >
              <a-select
                :placeholder="$ta('choose')"
                v-decorator="['regSrc', {rules: [{ required: false, message: $ta('choose')}]}]"
              >
                <a-select-option value="普通H5注册">普通H5注册</a-select-option>
                <a-select-option value="网站测试会员">网站测试会员</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="4" :sm="24">
            <a-form-item>
              <a-button type="primary">查询</a-button>
              <a-button @click="reset" style="margin-left: 8px">重置</a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
    <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
      <a-tab-pane loading="true" :tab="$t('generalStatistics')" key="1">
        <general />
      </a-tab-pane>
      <a-tab-pane :tab="$t('orderStatistics')" key="2">
        <order />
      </a-tab-pane>
      <a-tab-pane :tab="$t('memberStatistics')" key="3">
        <member />
      </a-tab-pane>
      <a-tab-pane :tab="$t('summaryOfDepositsAndWithdrawls')" key="4">
        <summary-of />
      </a-tab-pane>
      <!-- <a-tab-pane :tab="$t('agentRelationshipDiagram')" key="5">
        <diagram />
      </a-tab-pane> -->
    </a-tabs>
  </div>
</template>

<script>
import General from './General'
import Order from './Order'
import Member from './Member'
import SummaryOf from './SummaryOf'
import Diagram from './Diagram'

export default {
  name: 'Dashboard',
  i18n: require('./i18n'),
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  components: {General, Order, Member, SummaryOf, Diagram},
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    reset () {
      this.form.resetFields()
    }
  }
}
</script>