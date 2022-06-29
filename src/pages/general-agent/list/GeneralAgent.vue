<template>
  <div>
    <a-card>
      <a-form :form="form" layout="horizontal">
        <a-row :gutter="24">
          <a-col :md="8" :sm="24">
            <a-form-item
              :label="$ta('template|name')"
              :labelCol="{span: 4}"
              :wrapperCol="{span: 18, offset: 1}"
            >
              <a-input 
                :placeholder="$ta('input|template|name')"
                v-decorator="['templateName', {rules: [{ required: false}]}]"
              />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item>
              <a-space size="large">
                <a-button @click="showAgentModal()" type="primary"><a-icon type="plus" />{{$t('new')}}</a-button>
                <a-button type="primary">查询</a-button>
                <a-button @click="reset">重置</a-button>
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
        <div slot="agentDetail" slot-scope="{text}">
          <a-tag v-for="value, index in text" :key="index">
            {{value}}
          </a-tag>
        </div>
        <div slot="status" slot-scope="{text}">
          <a-tag :color="text === '启用' ? 'green' : 'volcano'">
            {{text}}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{record}">
          <a @click="showAgentModal(record)" style="margin-right: 8px">
            <a-icon type="edit"/>{{$t('modify')}}
          </a>
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
  name: 'GeneralAgent',
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
    reset () {
      this.form.resetFields()
    }
  }
}
</script>