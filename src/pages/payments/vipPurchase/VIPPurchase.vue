<template>
  <div>
    <a-card>
      <div>
        <a-form :form="form" layout="horizontal">
          <a-row>
            <a-col :md="7" :sm="24">
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
            <a-col :md="7" :sm="24">
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
            <a-col :md="7" :sm="24">
              <a-form-item
                :label="$ta('user|id')"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-input 
                  style="width: 100%" 
                  :placeholder="$ta('input|user|id')"
                  v-decorator="['userID', {rules: [{ required: false}]}]"
                />
              </a-form-item>
            </a-col>
            <a-col :md="3" :sm="24">
              <a-form-item>
                <span style="float: right;">
                  <a-button type="primary">查询</a-button>
                  <a-button @click="reset" style="margin-left: 8px">重置</a-button>
                </span>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <!-- <div slot="action" slot-scope="{record}">
          <a @click="showDetailModal(record)" style="margin-right: 8px">
            {{$ta('user|details')}}
          </a>
          <a v-if="record.status === '等待支付'" @click="showManualModal(record)">
            {{$ta('manual|replenish')}}
          </a>
        </div> -->
      </standard-table>
    </a-card>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import { columns, dataSource } from './data.js'

export default {
  name: 'VIPPurchase',
  i18n: require('./i18n'),
  components: {StandardTable},
  data () {
    return {
      form: this.$form.createForm(this),
      columns: columns,
      dataSource: dataSource,
      visible: false,
      user: {},
    }
  },
  methods: {
    showManualModal (data) {
      console.log(data)
      this.$confirm({
        title: '手动补单',
        content: (<div style="color: red">你确定要进行手动补单操作吗？？</div>),
        okText: '确 定',
        cancelText: '取 消',
        async onOk() {
          try {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random()>0.5? resolve:reject, 1000)
            })
          } catch(e) {
            return console.log('Oops errors!')
          }
        },
        onCancel() {},
      });
    },
    reset () {
      this.form.resetFields()
    }
  }
}
</script>