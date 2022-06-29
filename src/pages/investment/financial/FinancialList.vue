<template>
  <div>
    <a-card>
      <div>
        <a-space class="operator">
          <a-button @click="showFinancialModal()" type="primary"><a-icon type="plus" />{{$t('new')}}</a-button>
        </a-space>
        <standard-table
          :scroll="{ x: true }"
          :bordered="true"
          :columns="columns"
          :dataSource="dataSource"
          :pagination="{showSizeChanger: true, pageSize: 10}"
        >
          <!-- <div slot="picture" slot-scope="{text}"> -->
          <div slot="picture">
            <a type="primary" @click="showImg(text)">
              <img src="@/storage/uploads/activity/activity-1.png" style="width: 40px">
            </a>
          </div>
          <div slot="incomeMethod" slot-scope="{text}">
            <a-tag :color="text !== '每日结息到期还本' ? 'green' : 'pink'">
              {{text}}
            </a-tag>
          </div>
          <div slot="status" slot-scope="{text}">
            <a-tag :color="text === '启用' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="action" slot-scope="{record}">
            <a @click="showFinancialModal(record)">
              <a-icon type="edit"/>{{$t('edit')}}
            </a>
          </div>
        </standard-table>
      </div>
    </a-card>
    <a-modal v-model="show" :footer="null" :centered="true" width="30%">
      <img src="@/storage/uploads/activity/activity-1.png" style="width: 100%">
    </a-modal>
    <financial-modal :visible="visible" :financial="financial"></financial-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import FinancialModal from './FinancialModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'FinancialList',
  i18n: require('./i18n'),
  components: {StandardTable, FinancialModal},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      show: false,
      financial: {},
      columns: columns,
      dataSource: dataSource,
      img: '',
    }
  },
  methods: {
    showImg (img) {
      this.img = img
      this.show = !this.show;
    },
    showFinancialModal (financial) {
      this.financial = financial
      this.visible = !this.visible
    },
    reset () {
      this.form.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .operator{
    margin-bottom: 18px;
  }
</style>
