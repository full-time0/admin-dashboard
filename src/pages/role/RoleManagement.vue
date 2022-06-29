<template>
  <div>
    <a-card>
      <a-space class="operator">
        <a-button @click="showRoleModal()" type="primary"><a-icon type="plus" /> {{$ta('new|role')}}</a-button>
      </a-space>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="permission" slot-scope="{text}">
          <a-tag color="green" v-for="value, index in text" :key="index">
            {{value}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showRoleModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>{{$t('edit')}}
          </a>
          <a-popconfirm title="你确定要删除吗?" cancelText="取 消" okText="确 定">
            <a href="#" style="margin-right: 8px"><a-icon type="delete"/>{{$t('delete')}}</a>
          </a-popconfirm>
        </div>
      </standard-table>
    </a-card>
    <role-modal :visible="visible" :role="role"></role-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import RoleModal from './RoleModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'RoleManagement',
  i18n: require('./i18n'),
  components: {StandardTable, RoleModal},
  data () {
    return {
      visible: false,
      role: {},
      columns: columns,
      dataSource: dataSource,
    }
  },
  methods: {
    deleteRole (key) {
      this.dataSource = this.dataSource.filter(item => item.key !== key)
      this.selectedRows = this.selectedRows.filter(item => item.key !== key)
    },
    showRoleModal (record) {
      this.role = record
      this.visible = !this.visible
    },
  }
}
</script>