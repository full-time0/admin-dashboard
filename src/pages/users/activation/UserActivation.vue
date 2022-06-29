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
                  :label="$t('state')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select 
                    :placeholder="$ta('select|state')"
                    v-decorator="['state', {rules: [{ required: false}]}]"
                  >
                    <a-select-option value="待审核">待审核</a-select-option>
                    <a-select-option value="审核通过">审核通过</a-select-option>
                    <a-select-option value="审核失败">审核失败</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('userId')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    style="width: 100%" 
                    :placeholder="$ta('input|userId')"
                    v-decorator="['userId', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('created|time')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-range-picker 
                    style="width: 100%"
                    v-decorator="['createdAt', {rules: [{ required: false}]}]"
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
          <div slot="action" slot-scope="{record}">
            <a @click="showEditModal(record)" style="margin-right: 8px">
              <a-icon type="edit"/>编辑
            </a>
            <a-dropdown>
              <a-menu @click="handleMenuClick" slot="overlay">
                <a-menu-item key="delete">
                  <a-popconfirm title="你确定要封禁此用户吗?" cancelText="取 消" okText="确 定">
                    {{$t('delete')}}
                  </a-popconfirm>
                </a-menu-item>
                <a-menu-item key="funding">{{$ta('fund|detail')}}</a-menu-item>
                <a-menu-item key="agency">{{$ta('agency|detail')}}</a-menu-item>
              </a-menu>
              <a>
                更多 <a-icon type="down" />
              </a>
            </a-dropdown>
            <!-- <router-link :to="`/list/query/detail/${record.key}`" >详情</router-link> -->
          </div>
        </standard-table>
      </div>
    </a-card>
    <edit-modal :visible="visible" :user="user"></edit-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import EditModal from './EditModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'UserActivation',
  i18n: require('./i18n'),
  components: {StandardTable, EditModal},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      user: {},
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
    showEditModal (user) {
      this.user = user
      this.visible = !this.visible
    },
    handleMenuClick (e) {
      console.log(e.key)
      // if (e.key === 'funding') {
      // }
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
