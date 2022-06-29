<template>
  <div>
    <a-card>
      <div>
        <a-form :form="form" layout="horizontal">
          <div>
            <a-row>
              <a-col :md="6" :sm="24">
                <a-form-item
                  :label="$ta('username')"
                  :labelCol="{span: 4}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|username')"
                    v-decorator="['userName', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item
                  :label="$ta('user|nickname')"
                  :labelCol="{span: 4}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|user|nickname')"
                    v-decorator="['nickName', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24">
                <a-form-item
                  :label="$ta('order|No')"
                  :labelCol="{span: 4}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|order|No')" 
                    v-decorator="['orderNum', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="6" :sm="24" align="center">
                <a-button type="primary">{{$t('inquire')}}</a-button>
                <a-button @click="reset" style="margin-left: 8px">{{$t('reset')}}</a-button>
              </a-col>
            </a-row>
          </div>
        </a-form>
      </div>
      <div>
        <standard-table
          :scroll="{ x: true }"
          :bordered="true"
          :columns="columns"
          :dataSource="dataSource"
          :pagination="{showSizeChanger: true, pageSize: 10}"
        >
          <div slot="vipLevel" slot-scope="{text}">
            <a-tag color="volcano">
              {{text}}
            </a-tag>
          </div>
          <div slot="remark" slot-scope="{text}">
            <a-tooltip>
              <template slot="title">
                {{text}}
              </template>
              {{text}}
            </a-tooltip>
          </div>
          <div slot="incomeMethod" slot-scope="{text}">
            <a-tag :color="text !== '到期还本还息' ? 'green' : 'blue'">
              {{text}}
            </a-tag>
          </div>
          <div slot="isReturn" slot-scope="{text}">
            <a-tag :color="text === '是' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="status" slot-scope="{text}">
            <a-tag :color="text !== '分红中' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="action" slot-scope="{record}">
            <a @click="showPurchaseDetail(record)">
              {{$ta('dividend|record')}}
            </a>
          </div>
        </standard-table>
      </div>
    </a-card>
    <purchase-detail :visible="visible" :purchase="purchase"></purchase-detail>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import PurchaseDetail from './PurchaseDetail'
import { columns, dataSource } from './data.js'

export default {
  name: 'PurchaseList',
  i18n: require('./i18n'),
  components: {StandardTable, PurchaseDetail},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      purchase: {},
      show: false,
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
    }
  },
  methods: {
    showPurchaseDetail (purchase) {
      this.purchase = purchase
      this.visible = !this.visible
    },
    reset () {
      this.form.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .search{
    margin-bottom: 54px;
  }
  .fold{
    width: calc(100% - 216px);
    display: inline-block
  }
  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>
