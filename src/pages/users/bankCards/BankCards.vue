<template>
  <div>
    <a-card>
      <a-form :form="form" layout="horizontal">
        <a-row>
          <a-col :md="6" :sm="24">
            <a-form-item
              label="会员手机号"
              :labelCol="{span: 5}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-input 
                style="width: 100%" 
                placeholder="请输入会员手机号"
                v-decorator="['memberPhone', {rules: [{ required: false}]}]"
              />
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item
              label="开户人"
              :labelCol="{span: 5}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-input 
                style="width: 100%" 
                placeholder="请输入开户人姓名"
                v-decorator="['accountOwner', {rules: [{ required: false}]}]"
              />
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <a-form-item
              label="银行账号"
              :labelCol="{span: 5}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-input 
                style="width: 100%" 
                placeholder="请输入银行账号"
                v-decorator="['bankCardNum', {rules: [{ required: false}]}]"
              />
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="24">
            <span style="float: right; margin-top: 3px;">
              <a-button @click="showBankModal()"><a-icon type="plus" /> 新增</a-button>
              <a-button type="primary" style="margin-left: 8px">查询</a-button>
              <a-button @click="reset" style="margin-left: 8px">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="status" slot-scope="{text}">
          <a-tag :color="text === '启用' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showBankModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>编辑
          </a>
        </div>
      </standard-table>
    </a-card>
    <bank-modal :visible="isVisible" :bank="bank"></bank-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import BankModal from './BankModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'BankCards',
  components: {StandardTable, BankModal},
  data () {
    return {
      form: this.$form.createForm(this),
      columns: columns,
      dataSource: dataSource,
      bank: {},
      isVisible: false,
    }
  },
  methods: {
    filter (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.isVisible = !this.isVisible
          console.log('Received values of form: ', values)
        }
      })
      
    },
    showBankModal (bank) {
      this.bank = bank
      this.isVisible = !this.isVisible
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
  .operator{
    margin-bottom: 18px;
  }
  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>
