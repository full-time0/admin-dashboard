<template>
  <div>
    <a-card>
      <a-space class="operator">
        <a-button @click="showGroupModal()" type="primary"><a-icon type="plus" /> {{$t('create')}}</a-button>
      </a-space>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :selectedRows.sync="selectedRows"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="weights" slot-scope="{text}">
          <span v-if="!isWeight">{{text}}</span>
            <a-input v-else
              style="width: 100%" 
              placeholder="请输入会员手机号"
              :defaultValue="text"
              v-model="weights"
            />
        </div>
        <div slot="modeType" slot-scope="{text}">
          <a-tag :color="text === '自选模式' ? 'rgb(132, 94, 194)' : 'rgb(0, 161, 157)'">
            {{text}}
          </a-tag>
        </div>
        <div slot="commissionType" slot-scope="{text}">
          <a-tag :color="text === '固定金额' ? 'rgb(135, 208, 104)' : 'rgb(45, 183, 245)'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showGroupModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>{{$t('edit')}}
          </a>
          <a v-if="!isWeight" @click="editWeights(record)" style="margin-right: 8px">{{$t('edit')}}</a>
          <a v-if="isWeight" @click="updateWeights(record.key)" style="margin-right: 8px">{{$t('confirm')}}</a>
          <a @click="cancelWeights()"></a>
          <a-popconfirm title="你确定要取消吗?" cancelText="取 消" okText="确 定">
            <a v-if="isWeight" href="#" style="margin-right: 8px">{{$t('cancel')}}</a>
          </a-popconfirm>
          <a-dropdown>
            <a-menu @click="handleMenuClick" slot="overlay">
              <a-menu-item key="assign">分配用户</a-menu-item>
              <a-menu-item key="delete">
                <a-popconfirm title="你确定要删除吗?" cancelText="取 消" okText="确 定">
                  <a-icon type="delete"/>{{$t('delete')}}
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
            <a>
              更多 <a-icon type="down" />
            </a>
          </a-dropdown>
          <!-- <router-link :to="`/list/query/detail/${record.key}`" >详情</router-link> -->
        </div>
      </standard-table>
    </a-card>
    <group-modal :visible="visible" :user="user" :fetch="fetch"></group-modal>
    <assign-modal :visible="show" :assign="assign"></assign-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import GroupModal from './GroupModal'
import AssignModal from './AssignModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'GroupMode',
  i18n: require('./i18n'),
  components: {StandardTable, GroupModal, AssignModal},
  data () {
    return {
      visible: false,
      isWeight: false,
      user: {},
      assign: {},
      show: false,
      columns: columns,
      dataSource: dataSource,
      selectedRows: [],
      fetch: false,
      weights: '',
    }
  },
  methods: {
    editWeights (record) {
      console.log(record)
      this.weights = record.weights
      this.isWeight = true
    },
    updateWeights (key) {
      console.log(key)
      console.log(this.weights)
      if (this.weights) {
        this.isWeight = false
      }
    },
    deleteRecord (key) {
      this.dataSource = this.dataSource.filter(item => item.key !== key)
      this.selectedRows = this.selectedRows.filter(item => item.key !== key)
    },
    showGroupModal (data) {
      this.user = data
      this.visible = !this.visible
    },
    handleMenuClick (e) {
      console.log(e.key)
      if (e.key === 'assign') {
        this.show = !this.show
      }
    },
  }
}
</script>

<style lang="less" scoped>
  .search{
    margin-bottom: 54px;
  }
  .fold{
    width: calc(100% - 216px);
    display: inline-block
  }
  .operator{
    margin-bottom: 18px;
  }
  @media screen and (max-width: 900px) {
    .fold {
      width: 100%;
    }
  }
</style>
