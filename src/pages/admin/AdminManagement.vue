<template>
  <div>
    <a-card>
      <a-space class="operator">
        <a-button @click="showAdminModal()" type="primary"><a-icon type="plus" /> {{$t('new')}}</a-button>
      </a-space>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="state" slot-scope="{text}">
          <a-tag :color="text === '在线' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showAdminModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>{{$t('edit')}}
          </a>
          <a-popconfirm title="你确定要删除吗?" cancelText="取 消" okText="确 定">
            <a href="#" style="margin-right: 8px"><a-icon type="delete"/>{{$t('delete')}}</a>
          </a-popconfirm>
          <a-popconfirm title="你确定要封禁此用户?" cancelText="取 消" okText="确 定">
            <a href="#">{{$t('ban')}}</a>
          </a-popconfirm>
        </div>
      </standard-table>
    </a-card>
    <admin-modal :visible="visible" :admin="admin"></admin-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import AdminModal from './AdminModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'AdminManagement',
  i18n: require('./i18n'),
  components: {StandardTable, AdminModal},
  data () {
    return {
      visible: false,
      admin: {},
      columns: columns,
      dataSource: dataSource,
    }
  },
  methods: {
    deleteAdmin (key) {
      this.dataSource = this.dataSource.filter(item => item.key !== key)
      this.selectedRows = this.selectedRows.filter(item => item.key !== key)
    },
    banAdmin (key) {
      console.log(key)
    },
    showAdminModal (record) {
      this.admin = record
      this.visible = !this.visible
    },
  }
}
</script>