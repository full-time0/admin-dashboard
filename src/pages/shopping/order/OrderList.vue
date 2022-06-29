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
                    :placeholder="$ta('input|member|phone')"
                    v-decorator="['memberPhone', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('status')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select
                    v-decorator="['status', {rules: [{ required: false}]}]"
                    :placeholder="$ta('select|status')"
                  >
                    <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
                      {{ option.text }}
                    </a-select-option>
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
                    :placeholder="$ta('input|order|number')" 
                    v-decorator="['orderNum', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('create|date')"
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
                  :label="$ta('member|id')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|member|id')" 
                    v-decorator="['memberID', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('member|nickname')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|member|nickname')" 
                    v-decorator="['memberName', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('agent|name')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|agent|name')"
                    v-decorator="['agentName', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </div>
          <span style="float: right; margin-top: 3px;">
            <a-button type="primary">{{$t('inquire')}}</a-button>
            <a-button @click="reset" style="margin-left: 8px">{{$t('reset')}}</a-button>
            <a @click="toggleAdvanced" style="margin-left: 8px">
              {{advanced ? '收起' : '展开'}}
              <a-icon :type="advanced ? 'up' : 'down'" />
            </a>
          </span>
        </a-form>
      </div>
      <div>
        <a-space class="operator">
          <!-- <a-button @click="showOrderModal()" type="primary"><a-icon type="plus" />{{$t('new')}}</a-button> -->
          <a-dropdown>
            <a-menu @click="handleMenuClick" slot="overlay">
              <a-menu-item key="delete">{{$ta('batch|delete')}}</a-menu-item>
              <a-menu-item key="return">{{$ta('batch|return')}}</a-menu-item>
              <a-menu-item key="rebate">{{$ta('batch|rebate')}}</a-menu-item>
            </a-menu>
            <a-button type="primary">
              {{$ta('batch|operate')}}<a-icon type="down" />
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
          <!-- <div slot="picture" slot-scope="{text}"> -->
          <div slot="picture">
            <a type="primary" @click="showImg(text)">
              <img src="@/storage/uploads/activity/activity-1.png" style="width: 40px">
            </a>
          </div>
          <div slot="isReturn" slot-scope="{text}">
            <a-tag :color="text === '是' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="isRebate" slot-scope="{text}">
            <a-tag :color="text === '是' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="status" slot-scope="{text}">
            <a-tag :color="text === '已完成' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="action" slot-scope="{record}">
            <a v-if="record.status !== '已完成'" @click="showOrderModal(record)">
              <a-icon type="edit"/>{{$t('edit')}}
            </a>
          </div>
        </standard-table>
      </div>
    </a-card>
    <a-modal v-model="show" :footer="null" :centered="true" width="30%">
      <img src="@/storage/uploads/activity/activity-1.png" style="width: 100%">
    </a-modal>
    <order-modal :visible="visible" :order="order"></order-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import OrderModal from './OrderModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'OrderList',
  i18n: require('./i18n'),
  components: {StandardTable, OrderModal},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      order: {},
      show: false,
      advanced: false,
      columns: columns,
      dataSource: dataSource,
      selectedRows: [],
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
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
    showOrderModal (order) {
      this.order = order
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
