<template>
  <div>
    <a-card>
      <div :class="advanced ? 'search' : null">
        <a-form :form="form" layout="horizontal">
          <div :class="advanced ? null: 'fold'">
            <a-row>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('transaction|uniqueNum')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|transaction|uniqueNum')"
                    v-decorator="['transNum', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('member|phone')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|member|phone')"
                    v-decorator="['phone', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('withdrawal|status')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('select|withdrawal|status')"
                    v-decorator="['withdrawStatus', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="普通H5注册">普通H5注册</a-select-option>
                    <a-select-option value="网站测试会员">网站测试会员</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('payment|channel')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('select|payment|channel')"
                    v-decorator="['paymentChannel', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="普通H5注册">普通H5注册</a-select-option>
                    <a-select-option value="网站测试会员">网站测试会员</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('payout|method')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('select|payout|method')"
                    v-decorator="['payMethod', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="普通H5注册">普通H5注册</a-select-option>
                    <a-select-option value="网站测试会员">网站测试会员</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('arrival|time')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-range-picker 
                    style="width: 100%"
                    v-decorator="['arrTime', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('withdrawal|time')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-range-picker 
                    style="width: 100%"
                    v-decorator="['withdrawTime', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('agent|name')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|agent|name')"
                    v-decorator="['agentName', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('register|source')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('select|register|source')"
                    v-decorator="['regSrc', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="启用">启用</a-select-option>
                    <a-select-option value="禁用">禁用</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
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
        <a-space class="operator" size="large">
          <a-dropdown>
            <a-menu @click="handleMenuClick" slot="overlay">
              <a-menu-item key="audit">{{$t('audit')}}</a-menu-item>
            </a-menu>
            <a-button type="primary">
              批量操作 <a-icon type="down" />
            </a-button>
          </a-dropdown>
          <a-statistic title="订单总额" :precision="2" :value="parseFloat(10879206.1).toFixed(2)" />
          <a-statistic title="订单数量" :value="1434" />
          <a-statistic title="三方服务费总额" :value="parseFloat(10368.81).toFixed(2)" />
        </a-space>
      </div>
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
        <div slot="paymentStatus" slot-scope="{text}">
          <a-tag :color="text === '已支付' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="status" slot-scope="{text}">
          <a-tag :color="text === '待审核' ? '#464660' : text === '失败' ? '#FF4848' : '#FF6B6B'">
            {{text}}
          </a-tag>
        </div>
        <div slot="agentAudit" slot-scope="{text}">
          <a-tag :color="text === '已确认' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="generalAgentAudit" slot-scope="{text}">
          <a-tag :color="text === '已确认' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}" v-if="record.status === '待审核'">
          <a @click="showOrderDetail(record)" style="margin-right: 8px">
            <a-icon type="check-square" />{{$ta('audit')}}
          </a>
          <a @click="showLockModal(record)">
            <a-icon type="key" />{{$t('lock')}}
          </a>
        </div>
      </standard-table>
    </a-card>
    <audit-modal :visible="visible" :user="user"></audit-modal>
    <order-detail :visible="oVisible" :user="user"></order-detail>
    <lock-modal :visible="LVisible" :user="user"></lock-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import AuditModal from './AuditModal'
import OrderDetail from './OrderDetail'
import LockModal from './LockModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'Withdrawal',
  i18n: require('./i18n'),
  components: {StandardTable, AuditModal, OrderDetail, LockModal},
  data () {
    return {
      form: this.$form.createForm(this),
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      selectedRows: [],
      visible: false,
      oVisible: false,
      LVisible: false,
      user: {},
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
    showAuditModal () {
      this.visible = !this.visible
    },
    showOrderDetail (user) {
      console.log(user)
      this.user = user
      this.oVisible = !this.oVisible
    },
    showLockModal (data) {
      console.log(data)
      this.LVisible = !this.LVisible
    },
    handleMenuClick (e) {
      console.log(e.key)
      if (e.key === 'audit') {
        if (this.selectedRows.length === 0) {
          this.$message.warning('请选择需要审核的行');
        } else {
          this.showAuditModal()
        }
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
