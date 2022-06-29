<template>
  <div>
    <a-card>
      <div>
        <a-space class="operator">
          <a-button @click="showVIPModal()" type="primary"><a-icon type="plus" />{{$ta('new')}}</a-button>
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
          <div slot="commissionType" slot-scope="{text}">
            <a-tag :color="text === '光荣榜' ? 'green' : 'blue'">
              {{text}}
            </a-tag>
          </div>
          <div slot="status" slot-scope="{text}">
            <a-tag :color="text === '启用' ? 'green' : 'volcano'">
              {{text}}
            </a-tag>
          </div>
          <div slot="action" slot-scope="{record}">
            <a @click="showVIPModal(record)" style="margin-right: 8px">
              <a-icon type="edit"/>{{$t('edit')}}
            </a>
            <a-popconfirm title="你确定要删除吗?" cancelText="取 消" okText="确 定">
              <a href="#">
                <a-icon type="delete"/>{{$t('delete')}}
              </a>
            </a-popconfirm>
          </div>
        </standard-table>
      </div>
    </a-card>
    <a-modal v-model="show" :footer="null" :centered="true" width="30%">
      <img src="@/storage/uploads/activity/activity-1.png" style="width: 100%">
    </a-modal>
    <vip-modal :visible="visible" :vip="vip"></vip-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import VipModal from './VipModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'VIPList',
  i18n: require('./i18n'),
  components: {StandardTable, VipModal},
  data () {
    return {
      visible: false,
      show: false,
      vip: {},
      advanced: false,
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
    showVIPModal (vip) {
      this.vip = vip
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
