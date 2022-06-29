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
                    v-decorator="['memberPhone', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('account|status')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('input|account|status')"
                    v-decorator="['accountStatus', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="启用">启用</a-select-option>
                    <a-select-option value="禁用">禁用</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('member|name')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|member|name')" 
                    v-decorator="['memberName', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('register|date')"
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
                  :label="$ta('register|source')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('input|register|source')"
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
                    placeholder="请输入一级推荐人手机号"
                    v-decorator="['firstPhone', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$t('remark')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|remark')"
                    v-decorator="['remark', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$t('agent')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('select|agent')"
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
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('member|id')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input-number 
                    style="width: 100%" 
                    :placeholder="$ta('input|member|id')"
                    v-decorator="['memId', {rules: [{ required: false}]}]"
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
        <a-space class="operator">
          <a-button @click="showUserModal()" type="primary"><a-icon type="plus" /> 新增会员</a-button>
          <a-button @click="showUserModal()"><a-icon type="plus" /> 新增测试会员</a-button>
          <a-dropdown>
            <a-menu @click="handleMenuClick" slot="overlay">
              <a-menu-item key="bulkDelete">删除</a-menu-item>
              <a-menu-item key="audit">审批</a-menu-item>
            </a-menu>
            <a-button>
              批量操作 <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </a-space>
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
          <div slot="isAgent" slot-scope="{text}">
            <a-tag :color="text === 'Yes' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
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
          <div slot="userStatus" slot-scope="{text}">
            <a-tag :color="text === '正常' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="action" slot-scope="{record}">
            <a @click="showUserModal(record)" style="margin-right: 8px">
              <a-icon type="edit"/>{{$t('edit')}}
            </a>
            <a-dropdown>
              <a-menu @click="handleMenuClick" slot="overlay">
                <a-menu-item key="delete">
                  <a-popconfirm title="你确定要封禁此用户吗?" cancelText="取 消" okText="确 定">
                    {{$t('delete')}}
                  </a-popconfirm>
                </a-menu-item>
                <a-menu-item key="funding">
                  <router-link :to="`/users/list/details/${record.key}`" >{{$ta('funds|details')}}</router-link>
                </a-menu-item>
                <a-menu-item key="agency">{{$ta('agent|details')}}</a-menu-item>
              </a-menu>
              <a>
                {{$t('more')}} <a-icon type="down" />
              </a>
            </a-dropdown>
          </div>
        </standard-table>
      </div>
    </a-card>
    <user-modal :visible="visible" :user="user"></user-modal>
    <agency-details :visible="show" :user="user"></agency-details>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import AgencyDetails from './AgencyDetails'
import UserModal from './UserModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'UserList',
  i18n: require('./i18n'),
  components: {StandardTable, AgencyDetails, UserModal},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      user: {},
      show: false,
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      selectedRows: []
    }
  },
  methods: {
    deleteUser (key) {
      this.dataSource = this.dataSource.filter(item => item.key !== key)
      this.selectedRows = this.selectedRows.filter(item => item.key !== key)
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    onClear() {
      this.$message.info('您清空了勾选的所有行')
    },
    onSelectChange() {
      this.$message.info('选中行改变了')
    },
    showUserModal (user) {
      this.user = user
      this.visible = !this.visible
    },
    handleMenuClick (e) {
      console.log(e.key)
      if (e.key === 'agency') {
        this.show = !this.show
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
