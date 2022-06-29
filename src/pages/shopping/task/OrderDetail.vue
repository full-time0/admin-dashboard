<template>
  <a-modal
    :title="$ta('order|details')"
    v-model="isVisible"
    width="80%"
    @ok="onOk"
  >
    <a-card>
      <div>
        <a-space class="operator">
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
          :columns="orderColumns"
          :dataSource="dataSource"
          :selectedRows.sync="selectedRows"
          :pagination="{showSizeChanger: true, pageSize: 10}"
          @selectedRowChange="onSelectChange"
        >
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
            <a :v-show="false" @click="showProductModal(record)">
              <a-icon type="edit"/>{{$t('modify')}}
            </a>
          </div>
        </standard-table>
      </div>
    </a-card>
    <a-modal v-model="show" :footer="null" :centered="true" width="30%">
      <img src="@/storage/uploads/activity/activity-1.png" style="width: 100%">
    </a-modal>
  </a-modal>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import { orderColumns } from './data.js'

export default {
  name: 'OrderDetail',
  i18n: require('./i18n'),
  components: {StandardTable},
  props: {
    visible: Boolean,
    order: {
      type: Object,
    },
  },
  data() {
    return {
      isVisible: false,
      show: false,
      img: '',
      orderColumns: orderColumns,
      dataSource: [],
      selectedRows: [],
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      this.dataSource = [
        {
          key: this.order.key,
          no: this.order.i,
          orderNum: this.order.orderNum,
          userPhone: this.order.userPhone,
          remark: this.order.remark,
          picture: this.order.picture,
          price: this.order.price,
          totalPrice: this.order.totalPrice,
          isReturn: this.order.isReturn,
          isRebate: this.order.isRebate,
          status: this.order.status,
        }
      ]
    },
  },
  methods: {
    onOk() {
      this.isVisible = !this.isVisible
    },
    showImg (img) {
      this.img = img
      this.show = !this.show;
    },
    onSelectChange() {
      this.$message.info('选中行改变了')
    },
    handleMenuClick (e) {
      console.log(e.key)
      if (e.key === 'agency') {
        this.show = !this.show
      }
    },
  }
}
</script>

<style>
  .alert {
    display: none !important;
  }
  .operator{
    margin-bottom: 18px;
  }
</style>