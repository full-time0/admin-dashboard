<template>
  <div>
    <a-card>
      <standard-table
        :scroll="{ x: true }"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <!-- <div slot="picture" slot-scope="{text}"> -->
        <div slot="picture">
          <a type="primary" @click="showImg(text)">
            <img src="@/storage/uploads/activity/activity-1.png" style="width: 200px">
          </a>
          
        </div>
        <div slot="gameStatus" slot-scope="{text}">
          <a-tag :color="text === '正常' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showEventModal(record)" style="margin-right: 8px">
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
    <event-modal :visible="visible" :event="event"></event-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import EventModal from './EventModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'EventList',
  i18n: require('./i18n'),
  components: {StandardTable, EventModal},
  data () {
    return {
      visible: false,
      show: false,
      event: {},
      columns: columns,
      dataSource: dataSource,
      img: '',
    }
  },
  methods: {
    showEventModal (data) {
      this.event = data
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