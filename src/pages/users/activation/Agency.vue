<template>
  <a-card>
    <div :class="advanced ? 'search' : null">
      <a-form layout="horizontal">
        <div :class="advanced ? null: 'fold'">
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="会员手机号"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-input-number style="width: 100%" placeholder="请输入会员手机号" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="账号状态"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-select placeholder="账号">
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
                <a-input style="width: 100%" placeholder="请输入" />
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
                <a-range-picker style="width: 100%"/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="注册来源"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-select placeholder="请选择">
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
                <a-input placeholder="请输入" />
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
                <a-input style="width: 100%" placeholder="请输入" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item
                label="代理"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-select placeholder="请选择代理">
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
                <a-input style="width: 100%" placeholder="请输入" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row v-if="advanced">
            <a-col :md="8" :sm="24">
              <a-form-item
                label="会员ID"
                :labelCol="{span: 5}"
                :wrapperCol="{span: 18, offset: 1}"
              >
                <a-input-number style="width: 100%" placeholder="请输入会员id" />
              </a-form-item>
            </a-col>
          </a-row>
        </div>
        <span style="float: right; margin-top: 3px;">
          <a-button type="primary">查询</a-button>
          <a-button style="margin-left: 8px">重置</a-button>
          <a @click="toggleAdvanced" style="margin-left: 8px">
            {{advanced ? '收起' : '展开'}}
            <a-icon :type="advanced ? 'up' : 'down'" />
          </a>
        </span>
      </a-form>
    </div>
    <div>
      <a-space class="operator">
        <a-button @click="addNew" type="primary"><a-icon type="plus" /> 新增会员</a-button>
        <a-button @click="addNew"><a-icon type="plus" /> 新增测试会员</a-button>
        <a-dropdown>
          <a-menu @click="handleMenuClick" slot="overlay">
            <a-menu-item key="delete">删除</a-menu-item>
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
          <a-tag :color="text === 'Enable' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="transactionStatus" slot-scope="{text}">
          <a-tag :color="text === 'Allow' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="isDeposit" slot-scope="{text}">
          <a-tag :color="text === 'Yes' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="isWithdraw" slot-scope="{text}">
          <a-tag :color="text === 'Yes' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="userStatus" slot-scope="{text}">
          <a-tag :color="text === 'Normal' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a style="margin-right: 8px">
            <a-icon type="edit"/>编辑
          </a>
          <a-dropdown>
            <a-menu @click="handleMenuClick" slot="overlay">
              <a-menu-item @click="deleteRecord(record.key)" key="delete">删除</a-menu-item>
              <a-menu-item key="funding">资金详情</a-menu-item>
              <a-menu-item key="agency">代理详情</a-menu-item>
            </a-menu>
            <a>
              更多 <a-icon type="down" />
            </a>
          </a-dropdown>
          <!-- <router-link :to="`/list/query/detail/${record.key}`" >详情</router-link> -->
        </div>
        <template slot="statusTitle">
          <a-icon @click.native="onStatusTitleClick" type="info-circle" />
        </template>
      </standard-table>
    </div>
  </a-card>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import { columns, dataSource } from './data.js'

export default {
  name: 'UserList',
  components: {StandardTable},
  data () {
    return {
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      selectedRows: []
    }
  },
  authorize: {
    deleteRecord: 'delete'
  },
  methods: {
    deleteRecord(key) {
      this.dataSource = this.dataSource.filter(item => item.key !== key)
      this.selectedRows = this.selectedRows.filter(item => item.key !== key)
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    remove () {
      this.dataSource = this.dataSource.filter(item => this.selectedRows.findIndex(row => row.key === item.key) === -1)
      this.selectedRows = []
    },
    onClear() {
      this.$message.info('您清空了勾选的所有行')
    },
    onStatusTitleClick() {
      this.$message.info('你点击了状态栏表头')
    },
    onChange() {
      this.$message.info('表格状态改变了')
    },
    onSelectChange() {
      this.$message.info('选中行改变了')
    },
    addNew () {
      this.dataSource.unshift({
        key: this.dataSource.length,
        no: 'NO ' + this.dataSource.length,
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: '2018-07-26'
      })
    },
    handleMenuClick (e) {
      if (e.key === 'delete') {
        this.remove()
      }
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
