<template>
  <div>
    <a-card>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="isEnable" slot-scope="{text}">
          <a-tag :color="text === '是' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="collectionPaymentType" slot-scope="{text}">
          <a-tag :color="text === '可充值可提现' ? '#83C5BE' : 'rgb(45, 183, 245)'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showPaymentModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>{{$t('edit')}}
          </a>
          <a-popconfirm title="你确定要解封此支付吗?" cancelText="取 消" okText="确 定">
            <a href="#">{{$t('unblock')}}</a>
          </a-popconfirm>
        </div>
      </standard-table>
    </a-card>
    <payment-modal :visible="visible" :payment="payment"></payment-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import PaymentModal from './PaymentModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'PaymentConfiguration',
  i18n: require('./i18n'),
  components: {StandardTable, PaymentModal},
  data () {
    return {
      visible: false,
      payment: {},
      columns: columns,
      dataSource: dataSource,
    }
  },
  methods: {
    deleteRecord (key) {
      this.dataSource = this.dataSource.filter(item => item.key !== key)
      this.selectedRows = this.selectedRows.filter(item => item.key !== key)
    },
    showPaymentModal (data) {
      this.payment = data
      this.visible = !this.visible
    },
  }
}
</script>
