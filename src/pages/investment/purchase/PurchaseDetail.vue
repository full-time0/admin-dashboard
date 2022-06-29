<template>
  <a-modal
    :title="$ta('order|details')"
    v-model="isVisible"
    width="80%"
    @ok="onOk"
  >
    <a-card>
      <div>
        <standard-table
          :scroll="{ x: true }"
          :bordered="true"
          :columns="purchaseColumns"
          :dataSource="dataSource"
          :pagination="{showSizeChanger: true, pageSize: 10}"
        >
          <div slot="isDividend" slot-scope="{text}">
            <a-tag :color="text !== '未分红' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="type" slot-scope="{text}">
            <a-tag :color="text === '返本记录' ? 'green' : 'blue'">
              {{text}}
            </a-tag>
          </div>
        </standard-table>
      </div>
    </a-card>
  </a-modal>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import { purchaseColumns } from './data.js'

export default {
  name: 'PurchaseDetail',
  i18n: require('./i18n'),
  components: {StandardTable},
  props: {
    visible: Boolean,
    purchase: {
      type: Object,
    },
  },
  data() {
    return {
      isVisible: false,
      purchaseColumns: purchaseColumns,
      dataSource: [],
    }
  },
  watch: {
    deep: true,
    immediate: true,
    visible() {
      this.isVisible = !this.isVisible
      for (let i = 16; i < 18; i++) {
        this.dataSource.push({
            key: i,
            no: i,
            price: '20',
            dividendAmount: '2',
            dividendRate: '0.1',
            isDividend: '未分红',
            dividendTime: '2022-6-26 13:42:21',
            type: '分红记录',
            purchaseOrderNum: 'LC2022040810210199',
        })
      }
    },
  },
  methods: {
    onOk() {
      this.isVisible = !this.isVisible
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