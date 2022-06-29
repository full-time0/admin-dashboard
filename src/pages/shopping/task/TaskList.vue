<template>
  <div>
    <a-card>
      <div :class="advanced ? 'search' : null">
        <a-form :form="form" layout="horizontal">
          <div :class="advanced ? null: 'fold'">
            <a-row>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('phone')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|phone')"
                    v-decorator="['phone', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('order|status')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select
                    v-decorator="['status', {rules: [{ required: false}]}]"
                    :placeholder="$ta('select|order|status')"
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
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('create|time')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-range-picker 
                    style="width: 100%"
                    v-decorator="['time', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('user|nickname')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|user|nickname')" 
                    v-decorator="['userName', {rules: [{ required: false}]}]"
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
            <a-popconfirm title="你确定要取消此订单吗?" cancelText="取 消" okText="确 定">
              <a v-if="record.status !== '已完成'" href="#" style="margin-right: 8px">
                {{$ta('cancel|task')}}
              </a>
            </a-popconfirm>
            <a v-if="record.status !== '已完成'" style="margin-right: 8px">
              <router-link :to="`/shopping/product-list/?id=${record.key}`" >{{$ta('add|product')}}</router-link>
            </a>
            <a-popconfirm title="你确定要冻结此任务吗?" cancelText="取 消" okText="确 定">
              <a v-if="record.status !== '已完成'" href="#" style="margin-right: 8px">
                {{$t('freeze')}}
              </a>
            </a-popconfirm>
            <a @click="showOrderDetail(record)">
              {{$ta('order|details')}}
            </a>
          </div>
        </standard-table>
      </div>
    </a-card>
    <a-modal v-model="show" :footer="null" :centered="true" width="30%">
      <img src="@/storage/uploads/activity/activity-1.png" style="width: 100%">
    </a-modal>
    <order-detail :visible="visible" :order="order"></order-detail>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import OrderDetail from './OrderDetail'
import { columns, dataSource } from './data.js'

export default {
  name: 'TaskList',
  i18n: require('./i18n'),
  components: {StandardTable, OrderDetail},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      order: {},
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
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    showOrderDetail (order) {
      this.order = order
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
