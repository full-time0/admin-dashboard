<template>
  <a-row :gutter="16">
    <a-col :md="12" :sm="24">
      <a-card :title="$ta('payment|channel|deposit')" :loading="loading1">
        <a slot="extra" @click="refresh('deposit')">{{$t('refresh')}}</a>
        <a-form :form="form1" layout="horizontal">
          <a-row>
            <a-col :md="12" :sm="24">
              <a-form-item
                :label="$ta('date')"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-range-picker 
                  style="width: 100%"
                  v-decorator="['date', {rules: [{ required: false}]}]"
                />
              </a-form-item>
            </a-col>
            <a-col :md="12" :sm="24">
              <a-form-item
                :wrapperCol="{span: 15, offset: 1}"
              >
                <span style="float: right; margin-top: 3px;">
                  <a-button type="primary">查询</a-button>
                  <a-button @click="reset('deposit')" style="margin-left: 8px">重置</a-button>
                </span>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <a-row :gutter="16">
          <a-col :span="3">
            <a-statistic :title="$ta('total|amount')" :value="0" />
          </a-col>
          <a-col :span="3">
            <a-statistic :title="$ta('third|service|fee')" :value="0" />
          </a-col>
        </a-row>
        <standard-table
          :scroll="{ x: false }"
          :bordered="true"
          :columns="columns"
          :dataSource="dataSource"
          :pagination="{showSizeChanger: true, pageSize: 10}"
        >
        </standard-table>
      </a-card>
    </a-col>
    <a-col :md="12" :sm="24">
      <a-card :title="$ta('payment|channel|withdrawal')" :loading="loading2">
        <a slot="extra" @click="refresh('withdraw')">{{$t('refresh')}}</a>
        <a-form :form="form2" layout="horizontal">
          <a-row>
            <a-col :md="12" :sm="24">
              <a-form-item
                :label="$ta('date')"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-range-picker 
                  style="width: 100%"
                  v-decorator="['date', {rules: [{ required: false}]}]"
                />
              </a-form-item>
            </a-col>
            <a-col :md="12" :sm="24">
              <a-form-item
                :wrapperCol="{span: 15, offset: 1}"
              >
                <span style="float: right; margin-top: 3px;">
                  <a-button type="primary">查询</a-button>
                  <a-button @click="reset('withdraw')" style="margin-left: 8px">重置</a-button>
                </span>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <a-row :gutter="16">
          <a-col :span="3">
            <a-statistic :title="$ta('total|amount')" :value="0" />
          </a-col>
          <a-col :span="3">
            <a-statistic :title="$ta('third|service|fee')" :value="0" />
          </a-col>
        </a-row>
        <standard-table
          :scroll="{ x: false }"
          :bordered="true"
          :columns="columns"
          :dataSource="dataSource"
          :pagination="{showSizeChanger: true, pageSize: 10}"
        >
        </standard-table>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import { columns, dataSource } from './data.js'

export default {
  name: 'PaymentChannel',
  i18n: require('./i18n'),
  components: {StandardTable},
  data () {
    return {
      form1: this.$form.createForm(this),
      form2: this.$form.createForm(this),
      columns: columns,
      dataSource: dataSource,
      loading1: false,
      loading2: false,
    }
  },
  methods: {
    refresh (val) {
      if (val === 'deposit') {
        this.loading1 = true
        setTimeout(() => this.loading1 = false, 3000)
      } else {
        this.loading2 = true
        setTimeout(() => this.loading2 = false, 3000)
      }
    },
    reset (val) {
      if (val === 'deposit') {
      this.form1.resetFields()
      } else {
        this.form2.resetFields()
      }
    }
  }
}
</script>