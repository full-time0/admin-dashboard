<template>
  <div>
    <a-card>
      <div :class="advanced ? 'search' : null">
        <a-form :form="form" layout="horizontal">
          <div :class="advanced ? null: 'fold'">
            <a-row>
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
                  :label="$ta('deposit|status')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('select|deposit|status')"
                    v-decorator="['depositStatus', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="普通H5注册">普通H5注册</a-select-option>
                    <a-select-option value="网站测试会员">网站测试会员</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('order|number')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|order|number')"
                    v-decorator="['orderNum', {rules: [{ required: false}]}]"
                  />
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
                  :label="$ta('arrival|method')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('select|arrival|method')"
                    v-decorator="['arrivalMethod', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="普通H5注册">普通H5注册</a-select-option>
                    <a-select-option value="网站测试会员">网站测试会员</a-select-option>
                  </a-select>
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
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('deposit|time')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-range-picker 
                    style="width: 100%"
                    v-decorator="['depositTime', {rules: [{ required: false}]}]"
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
            <a-row v-if="advanced">
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
              <a-menu-item key="20">20S自动刷新</a-menu-item>
              <a-menu-item key="30">30S自动刷新</a-menu-item>
              <a-menu-item key="60">60S自动刷新</a-menu-item>
              <a-menu-item key="0">不自动刷新</a-menu-item>
            </a-menu>
            <a-button type="primary">{{$t('timeRefresh')}} <a-icon type="sync"/></a-button>
          </a-dropdown>
          <a-statistic title="订单总额" :precision="2" :value="parseFloat(28358190).toFixed(2)" />
          <a-statistic title="订单数量" :value="130" />
          <a-statistic title="三方服务费总额" :value="parseFloat(0).toFixed(2)" />
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
        <div slot="arrMethod" slot-scope="{text}">
          <a-tag :color="text === '三方回调' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="status" slot-scope="{text}">
          <a-tag :color="text === '充值成功' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showDetailModal(record)" style="margin-right: 8px">
            {{$ta('user|details')}}
          </a>
          <a v-if="record.status === '等待支付'" @click="showManualModal(record)">
            {{$ta('manual|replenish')}}
          </a>
        </div>
      </standard-table>
    </a-card>
    <detail-drawer :visible="visible" :user="user" />
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import DetailDrawer from './DetailDrawer'
import { columns, dataSource } from './data.js'

export default {
  name: 'Deposit',
  i18n: require('./i18n'),
  components: {StandardTable, DetailDrawer},
  data () {
    return {
      form: this.$form.createForm(this),
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      selectedRows: [],
      visible: false,
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
    showDetailModal (user) {
      console.log(user)
      this.user = user
      this.visible = !this.visible
    },
    handleMenuClick (e) {
      console.log(e.key)
      
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
