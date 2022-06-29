<template>
  <div>
    <a-card>
      <div :class="advanced ? 'search' : null">
        <a-form :form="form" layout="horizontal">
          <div :class="advanced ? null: 'fold'">
            <a-row>
              <a-col :md="8" :sm="24">
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
              <a-col :md="8" :sm="24">
                <a-form-item
                  label="账号状态"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    placeholder="账号"
                    v-decorator="['accoutStatus', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="启用">启用</a-select-option>
                    <a-select-option value="禁用">禁用</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  label="用户昵称"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    placeholder="请输入" 
                    v-decorator="['memberName', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
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
              <a-col :md="8" :sm="24">
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
              <a-col :md="8" :sm="24">
                <a-form-item
                  label="一级推荐人手机号"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    placeholder="请输入"
                    v-decorator="['firstPhone', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  label="备注"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    placeholder="请输入"
                    v-decorator="['remark', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  label="代理"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    placeholder="请选择代理"
                    v-decorator="['agent', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="启用">启用</a-select-option>
                    <a-select-option value="禁用">禁用</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  label="二级推荐人手机号"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    placeholder="请输入"
                    v-decorator="['secPhone', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </div>
          <span style="float: right; margin-top: 3px;">
            <a-button type="primary">查询</a-button>
            <a-button @click="reset" style="margin-left: 8px">重置</a-button>
            <a @click="toggleAdvanced" style="margin-left: 8px">
              {{advanced ? '收起' : '展开'}}
              <a-icon :type="advanced ? 'up' : 'down'" />
            </a>
          </span>
        </a-form>
      </div>
      <div>
        <standard-table
          :scroll="{ x: true }"
          :bordered="true"
          :columns="columns"
          :dataSource="dataSource"
          :selectedRows.sync="selectedRows"
          :pagination="{showSizeChanger: true, pageSize: 10}"
          @clear="onClear"
          @selectedRowChange="onSelectChange"
        >
          <div slot="loginStatus" slot-scope="{text}">
            <a-tag :color="text === '启用' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="transactionStatus" slot-scope="{text}">
            <a-tag :color="text === '允许' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="isDeposit" slot-scope="{text}">
            <a-tag :color="text === '是' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="isWithdraw" slot-scope="{text}">
            <a-tag :color="text === '是' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="action" slot-scope="{record}">
            <a @click="showEditModal(record.key)" style="margin-right: 8px">
              <a-icon type="gift"/>{{$t('codeRestrict')}}
            </a>
          </div>
        </standard-table>
      </div>
    </a-card>
    <edit-modal :visible="isVisible" :id="userID" :which="which"></edit-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import EditModal from './EditModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'CodingRestrictions',
  i18n: require('./i18n'),
  components: {StandardTable, EditModal},
  data () {
    return {
      form: this.$form.createForm(this),
      isVisible: false,
      userID: null,
      which: '',
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      selectedRows: []
    }
  },
  methods: {
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    onClear() {
      this.$message.info('您清空了勾选的所有行')
    },
    onSelectChange() {
      this.$message.info('选中行改变了')
    },
    showEditModal (id, which) {
      this.userID = id
      this.which = which
      this.isVisible = !this.isVisible
    },
    handleMenuClick (e) {
      console.log(e.key)
      if (e.key === 'delete') {
        // this.remove()
      }
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
