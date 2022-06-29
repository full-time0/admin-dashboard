<template>
  <div>
    <a-card>
      <div>
        <a-form :form="form" layout="horizontal">
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item
                :label="$ta('user|phone')"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-input 
                  style="width: 100%" 
                  :placeholder="$ta('input|user|phone')"
                  v-decorator="['phone', {rules: [{ required: false}]}]"
                />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                :label="$ta('general|agent|name')"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-select 
                    :placeholder="$ta('select|general|agent|name')"
                    v-decorator="['generalAgentName', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="普通H5注册">普通H5注册</a-select-option>
                    <a-select-option value="网站测试会员">网站测试会员</a-select-option>
                  </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                :wrapperCol="{span: 10}"
              >
                <span style="float: right;">
                  <a-button type="primary">查询</a-button>
                  <a-button @click="reset" style="margin-left: 8px">重置</a-button>
                </span>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div>
        <a-row :gutter="16">
          <a-col :span="3">
            <a-statistic :title="$ta('deposit|total')" :value="0" />
          </a-col>
          <a-col :span="3">
            <a-statistic :title="$ta('withdrawal|total')" :value="parseFloat(100).toFixed(2)" />
          </a-col>
          <a-col :span="3">
            <a-statistic :title="$ta('profit|total')" :value="parseFloat(-100).toFixed(2)" />
          </a-col>
          <a-col :span="3">
            <a-statistic :title="$ta('ongoing|total')" :value="0" />
          </a-col>
        </a-row>
      </div>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="action" slot-scope="{record}">
          <a @click="showAgencyDetail(record)" style="margin-right: 8px">
            {{$ta('agent|details')}}
          </a>
        </div>
      </standard-table>
    </a-card>
    <agency-detail :visible="visible" :info="info" />
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import AgencyDetail from './AgencyDetail'
import { columns, dataSource } from './data.js'

export default {
  name: 'Agency',
  i18n: require('./i18n'),
  components: {StandardTable, AgencyDetail},
  data () {
    return {
      form: this.$form.createForm(this),
      columns: columns,
      dataSource: dataSource,
      visible: false,
      info: {},
    }
  },
  methods: {
    showAgencyDetail (data) {
      console.log(data)
      this.visible = !this.visible
    },
    reset () {
      this.form.resetFields()
    }
  }
}
</script>