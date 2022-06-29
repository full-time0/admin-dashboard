<template>
  <div>
    <a-card>
      <a-form :form="form" layout="horizontal">
        <a-row :gutter="24">
          <a-col :md="8" :sm="24">
            <a-form-item
              :label="$ta('member|phone')"
              :labelCol="{span: 5}"
              :wrapperCol="{span: 15, offset: 1}"
            >
              <a-input 
                :placeholder="$ta('input|member|phone')"
                v-decorator="['memberPhone', {rules: [{ required: false}]}]"
              />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item
              :label="$ta('member|account')"
              :labelCol="{span: 5}"
              :wrapperCol="{span: 15, offset: 1}"
            >
              <a-input 
                :placeholder="$ta('input|member|account')"
                v-decorator="['account', {rules: [{ required: false}]}]"
              />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item :wrapperCol="{span: 10, offset: 1}">
              <a-space>
                <a-button type="primary">查 询</a-button>
                <a-button @click="reset">重 置</a-button>
                <a-button @click="showAgentModal()" type="primary"><a-icon type="plus" />{{$t('new')}}</a-button>
              </a-space>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <standard-table
        :scroll="{ x: true }"
        :bordered="true"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="{showSizeChanger: true, pageSize: 10}"
      >
        <div slot="type" slot-scope="{text}">
          <a-tag :color="text !== '全线' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="isGiveGift" slot-scope="{text}">
          <a-tag :color="text === '是' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="inviteLink" slot-scope="{text}">
          {{text}} <a-button type="primary" size="small" @click="copyLink(text)">{{$t('copy')}}</a-button>
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showAgentModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>{{$t('modify')}}
          </a>
          <a-popconfirm title="你确定要删除吗?" cancelText="取 消" okText="确 定">
            <a href="#" style="margin-right: 8px"><a-icon type="delete"/>{{$t('delete')}}</a>
          </a-popconfirm>
        </div>
      </standard-table>
    </a-card>
    <agent-modal :visible="visible" :agent="agent"></agent-modal>
  </div>
</template>

<script>
import StandardTable from '@/components/table/StandardTable'
import AgentModal from './AgentModal'
import { columns, dataSource } from './data.js'

export default {
  name: 'AgentManagement',
  i18n: require('./i18n'),
  components: {StandardTable, AgentModal},
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      agent: {},
      columns: columns,
      dataSource: dataSource,
    }
  },
  methods: {
    showAgentModal (data) {
      this.agent = data
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