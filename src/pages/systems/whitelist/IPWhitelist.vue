<template>
  <div>
    <a-card>
      <a-space class="operator">
        <a-button @click="showWhitelistModal()" type="primary"><a-icon type="plus" /> {{$t('new')}}</a-button>
      </a-space>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="action" slot-scope="{record}">
          <a @click="showWhitelistModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>{{$t('modify')}}
          </a>
          <a-popconfirm title="你确定要删除吗?" cancelText="取 消" okText="确 定">
            <a href="#" style="margin-right: 8px"><a-icon type="delete"/>{{$t('delete')}}</a>
          </a-popconfirm>
        </div>
      </standard-table>
    </a-card>
    <whitelist-modal :visible="visible" :whitelist="whitelist"></whitelist-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import WhitelistModal from './WhitelistModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'IPWhitelist',
  i18n: require('./i18n'),
  components: {StandardTable, WhitelistModal},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      whitelist: {},
      columns: columns,
      dataSource: dataSource,
    }
  },
  methods: {
    showWhitelistModal (data) {
      this.whitelist = data
      this.visible = !this.visible
    },
    copyLink (link) {
      this.$message.success('复制成功 ' + link);
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