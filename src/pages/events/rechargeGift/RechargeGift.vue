<template>
  <div>
    <a-card>
      <a-space class="operator">
        <a-button @click="showGiftModal()" type="primary"><a-icon type="plus" />{{$t('new')}}</a-button>
      </a-space>
      <standard-table
        :scroll="{ x: true }"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="action" slot-scope="{record}">
          <a @click="showGiftModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>{{$t('edit')}}
          </a>
          <a-popconfirm title="你确定要下架此游戏吗?" cancelText="取消" okText="确定">
            <a v-if="record" href="#" style="margin-right: 8px">{{$t('remove')}}</a>
          </a-popconfirm>
        </div>
      </standard-table>
    </a-card>
    <a-modal v-model="show" :footer="null" :centered="true" width="30%">
      <img src="@/storage/uploads/activity/activity-1.png" style="width: 100%">
    </a-modal>
    <gift-modal :visible="visible" :gift="gift"></gift-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import GiftModal from './GiftModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'RechargeGift',
  i18n: require('./i18n'),
  components: {StandardTable, GiftModal},
  data () {
    return {
      visible: false,
      show: false,
      gift: {},
      columns: columns,
      dataSource: dataSource,
      img: '',
    }
  },
  methods: {
    showGiftModal (data) {
      this.gift = data
      this.visible = !this.visible
    },
    showImg (img) {
      this.img = img
      this.show = !this.show;
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