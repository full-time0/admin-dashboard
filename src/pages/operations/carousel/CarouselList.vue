<template>
  <div>
    <a-card>
      <div>
        <a-space class="operator">
          <a-button @click="showCarouselModal()" type="primary"><a-icon type="plus" />{{$ta('new')}}</a-button>
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
          <div slot="type" slot-scope="{text}">
            <a-tag :color="text === '光荣榜' ? '#87D068' : '#2DB7F5'">
              {{text}}banner图
            </a-tag>
          </div>
          <div slot="action" slot-scope="{record}">
            <a @click="showCarouselModal(record)" style="margin-right: 8px">
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
    <carousel-modal :visible="visible" :carousel="carousel"></carousel-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import CarouselModal from './CarouselModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'CarouselList',
  i18n: require('./i18n'),
  components: {StandardTable, CarouselModal},
  data () {
    return {
      visible: false,
      show: false,
      carousel: {},
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
    showCarouselModal (carousel) {
      this.carousel = carousel
      this.visible = !this.visible
    },
  }
}
</script>

<style lang="less" scoped>
  .operator{
    margin-bottom: 18px;
  }
</style>
