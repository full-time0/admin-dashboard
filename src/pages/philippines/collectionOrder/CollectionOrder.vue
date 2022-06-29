<template>
  <div>
    <a-card>
      <div :class="advanced ? 'search' : null">
        <a-form :form="form" layout="horizontal">
          <div :class="advanced ? null: 'fold'">
            <a-row>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('merchant|order|No')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|merchant|order|No')"
                    v-decorator="['merchantOrderNum', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('pay|status')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-select
                    v-decorator="['payStatus', {rules: [{ required: false}]}]"
                    :placeholder="$ta('select|pay|status')"
                  >
                    <a-select-option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
                      {{ option.text }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  label="Ref No"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input') + 'Ref No'" 
                    v-decorator="['refNum', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('platform|order|No')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-input 
                    :placeholder="$ta('input|platform|order|No')" 
                    v-decorator="['platformOrderNum', {rules: [{ required: false}]}]"
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
                    v-decorator="['createdAt', {rules: [{ required: false}]}]"
                  />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item
                  :label="$ta('billing|time')"
                  :labelCol="{span: 5}"
                  :wrapperCol="{span: 18, offset: 1}"
                >
                  <a-range-picker 
                    style="width: 100%"
                    v-decorator="['billingTime', {rules: [{ required: false}]}]"
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
  name: 'CollectionOrder',
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
  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>
