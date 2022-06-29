<template>
  <div>
    <a-card>
      <div>
        <a-space class="operator">
          <a-button @click="showTypeModal()" type="primary"><a-icon type="plus" />{{$ta('new')}}</a-button>
        </a-space>
        <standard-table
          :scroll="{ x: true }"
          :bordered="true"
          :columns="columns"
          :dataSource="dataSource"
          :pagination="{showSizeChanger: true, pageSize: 10}"
        >
          <div slot="action" slot-scope="{record}">
            <a @click="showTypeModal(record)" style="margin-right: 8px">
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
    <type-modal :visible="visible" :article="article"></type-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import TypeModal from './TypeModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'ArticleType',
  i18n: require('./i18n'),
  components: {StandardTable, TypeModal},
  data () {
    return {
      visible: false,
      article: {},
      advanced: false,
      columns: columns,
      dataSource: dataSource,
    }
  },
  methods: {
    showTypeModal (article) {
      this.article = article
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
