<template>
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
              v-decorator="['phone', {rules: [{ required: false}]}]"
            />
          </a-form-item>
        </a-col>
        <a-col :md="8" :sm="24">
          <a-form-item
            label="注册日期"
            :labelCol="{span: 5}"
            :wrapperCol="{span: 18, offset: 1}"
          >
            <a-range-picker 
              style="width: 100%"
              v-decorator="['date', {rules: [{ required: false}]}]"
            />
          </a-form-item>
        </a-col>
        <a-col :md="6" :sm="24">
          <a-form-item
            label="注册来源"
            :labelCol="{span: 5}"
            :wrapperCol="{span: 18, offset: 1}"
          >
            <a-select 
              placeholder="请选择"
              v-decorator="['regSrc', {rules: [{ required: false}]}]"
            >
              <a-select-option value="普通H5注册">普通H5注册</a-select-option>
              <a-select-option value="网站测试会员">网站测试会员</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :md="3" :sm="24">
          <span style="float: right; margin-top: 3px;">
            <a-button type="primary">查询</a-button>
            <a-button @click="reset" style="margin-left: 8px">重置</a-button>
          </span>
        </a-col>
      </a-row>
    </a-form>
    <a-row type="flex">
      <a-statistic title="首充总额" :precision="2" :value="200" style="margin-right: 50px" />
      <a-statistic title="首充数量" :value="0" style="margin-right: 50px" />
    </a-row>
    <standard-table
      :scroll="{ x: true }"
      :bordered="true"
      :columns="columns"
      :dataSource="dataSource"
      :pagination="{showSizeChanger: true, pageSize: 10}"
    >
    </standard-table>
  </a-card>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import { columns, dataSource } from './data.js'

export default {
  name: 'FirstChargeList',
  components: {StandardTable},
  data () {
    return {
      form: this.$form.createForm(this),
      columns: columns,
      dataSource: dataSource,
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
