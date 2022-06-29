<template>
  <div>
    <a-card>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 10}"
      >
      </standard-table>
    </a-card>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import { columns, dataSource } from './data.js'

export default {
  name: 'AdminLogs',
  i18n: require('./i18n'),
  components: {StandardTable},
  data () {
    return {
      visible: false,
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