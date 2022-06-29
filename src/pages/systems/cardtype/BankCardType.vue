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
        <div slot="status" slot-scope="{text}">
          <a-tag :color="text === '启用' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a-popconfirm title="你确定要封禁吗?" cancelText="取 消" okText="确 定">
            <a v-if="record" href="#" style="margin-right: 8px">{{$t('ban')}}</a>
          </a-popconfirm>
        </div>
      </standard-table>
    </a-card>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import { columns, dataSource } from './data.js'

export default {
  name: 'BankCardType',
  i18n: require('./i18n'),
  components: {StandardTable},
  data () {
    return {
      columns: columns,
      dataSource: dataSource,
    }
  },
  methods: {
    reset () {
      this.form.resetFields()
    }
  }
}
</script>